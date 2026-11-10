'use strict';
(() => {
  const cards = [...document.querySelectorAll('[data-project-video]')];
  if (!cards.length) return;
  const playerOrigin = 'https://www.tiktok.com';
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const autoButton = document.querySelector('.autoplay-toggle');
  const supportsObserver = 'IntersectionObserver' in window;
  let autoEnabled = supportsObserver && !motionPreference.matches && !navigator.connection?.saveData;
  const players = cards.map((card, index) => ({
    card, frame: card.querySelector('iframe'), button: card.querySelector('.project-play'),
    label: card.querySelector('.project-play span'), icon: card.querySelector('.project-play use'),
    status: card.querySelector('.project-video-state'), feedback: card.querySelector('.video-feedback'),
    number: index + 1, ready: false, visible: !supportsObserver, playing: false,
    target: null, manualPaused: false, manualPlay: false, blocked: false, failed: false
  }));
  function send(player, type) {
    player.frame.contentWindow?.postMessage({ type, value: undefined, 'x-tiktok-player': true }, playerOrigin);
  }
  function allowedToPlay(player) {
    return player.visible && !document.hidden && !document.body.classList.contains('modal-open') &&
      !player.failed && (player.manualPlay || (autoEnabled && !player.manualPaused && !player.blocked));
  }
  function updateButton(player) {
    const active = player.playing || player.target === 'play';
    player.label.textContent = active ? 'Jeda' : 'Main';
    player.button.setAttribute('aria-label', (active ? 'Jeda' : 'Main') + ' video projek ' + player.number);
    player.icon.setAttribute('href', active ? '#pause' : '#play');
    player.card.classList.toggle('is-playing', player.playing);
    player.status.textContent = player.playing ? 'Sedang dimainkan' : 'Tanpa bunyi';
  }
  function sync(player) {
    const target = allowedToPlay(player) ? 'play' : 'pause';
    if (player.ready && player.target !== target) {
      player.target = target;
      if (target === 'play') send(player, 'mute');
      send(player, target);
    }
    updateButton(player);
  }
  function syncAll() { players.forEach(sync); }
  function updateAutoButton() {
    autoButton.setAttribute('aria-pressed', String(autoEnabled));
    autoButton.querySelector('.autoplay-label').textContent = 'Main automatik: ' + (autoEnabled ? 'aktif' : 'tidak aktif');
  }
  updateAutoButton();
  if (!supportsObserver) autoButton.disabled = true;
  autoButton.addEventListener('click', () => {
    autoEnabled = !autoEnabled;
    players.forEach(player => { player.manualPlay = false; if (autoEnabled) player.manualPaused = false; });
    updateAutoButton(); syncAll();
  });
  players.forEach(player => {
    player.button.addEventListener('click', () => {
      if (player.failed) return;
      const pause = player.playing || player.target === 'play';
      player.manualPaused = pause;
      player.manualPlay = !pause;
      player.blocked = false;
      player.feedback.textContent = '';
      if (!player.ready && !pause) player.feedback.textContent = 'Menunggu pemain TikTok. Anda juga boleh buka video terus di TikTok.';
      sync(player);
    });
  });
  if (supportsObserver) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const player = players.find(item => item.frame === entry.target);
        if (!player) return;
        player.visible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        if (!player.visible) player.manualPlay = false;
        sync(player);
      });
    }, { threshold: [0, 0.45, 0.7, 1] });
    players.forEach(player => observer.observe(player.frame));
  }
  window.addEventListener('message', event => {
    if (event.origin !== playerOrigin) return;
    const player = players.find(item => item.frame.contentWindow === event.source);
    if (!player) return;
    let data = event.data;
    if (typeof data === 'string') { try { data = JSON.parse(data); } catch { return; } }
    if (!data || data['x-tiktok-player'] !== true) return;
    if (data.type === 'onPlayerReady') {
      player.ready = true; player.failed = false; player.target = null;
      player.button.disabled = false; player.feedback.textContent = '';
      send(player, 'mute'); sync(player);
    } else if (data.type === 'onStateChange') {
      const state = Number(data.value);
      const wasPlaying = player.playing;
      if (state === 1) {
        player.playing = true;
        // Native player controls remain available when automatic playback is off.
        if (player.target !== 'play' && player.visible && !document.hidden && !document.body.classList.contains('modal-open')) {
          player.manualPlay = true; player.manualPaused = false; player.blocked = false;
        }
        player.feedback.textContent = '';
        if (!allowedToPlay(player)) { player.target = 'pause'; send(player, 'pause'); }
      } else if (state === 2 || state === 0) {
        player.playing = false;
        // Respect a pause made using TikTok's native controls.
        if (state === 2 && player.target === 'play' && wasPlaying) {
          player.manualPaused = true; player.manualPlay = false; player.target = 'pause';
        }
      }
      updateButton(player);
    } else if (data.type === 'onPlayerError' || data.type === 'onError') {
      const code = Number(data.value?.errorCode ?? data.value);
      player.playing = false; player.target = 'pause'; player.manualPlay = false;
      if (code === 3002) {
        player.blocked = true;
        player.feedback.textContent = 'Pelayar menyekat main automatik. Tekan Main atau buka di TikTok.';
      } else {
        player.failed = true; player.button.disabled = true;
        player.feedback.textContent = 'Video tidak dapat dimuatkan di sini. Gunakan pautan Buka di TikTok.';
      }
      send(player, 'pause'); updateButton(player);
    }
  });
  document.addEventListener('visibilitychange', syncAll);
  // Pause background videos while a portfolio image is open.
  if ('MutationObserver' in window) new MutationObserver(syncAll).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  motionPreference.addEventListener?.('change', event => {
    if (event.matches) { autoEnabled = false; updateAutoButton(); syncAll(); }
  });
  window.addEventListener('pagehide', () => players.forEach(player => { if (player.ready) { player.target = 'pause'; send(player, 'pause'); } }));
  window.addEventListener('pageshow', syncAll);
})();
