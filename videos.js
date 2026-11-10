'use strict';
(() => {
  const tr = (key, values) => window.SiteI18n.t(key, values);
  const cards = [...document.querySelectorAll('[data-project-video]')];
  if (!cards.length) return;
  const origin = 'https://www.tiktok.com';
  const trustedOrigins = new Set([origin, 'https://tiktok.com']);
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const autoButton = document.querySelector('.autoplay-toggle');
  const hasObserver = 'IntersectionObserver' in window;
  let autoEnabled = hasObserver && !preference.matches && !navigator.connection?.saveData;
  const players = cards.map((card, index) => ({
    card, frame: card.querySelector('iframe'), button: card.querySelector('.project-play'),
    label: card.querySelector('.project-play span'), icon: card.querySelector('.project-play use'),
    status: card.querySelector('.project-video-state'), feedback: card.querySelector('.video-feedback'),
    baseURL: card.querySelector('iframe').dataset.playerSrc,
    origin, number: index + 1, ready: false, loaded: false, mounted: false,
    visible: !hasObserver, playing: false, target: 'pause', mountAutoplay: false,
    manualPaused: false, manualPlay: false, blocked: false, failed: false,
    feedbackKey: null, retries: [], stopTimer: null
  }));
  function feedback(player, key) {
    player.feedbackKey = key;
    player.feedback.textContent = key ? tr(key) : '';
  }
  function clearRetries(player) { player.retries.forEach(clearTimeout); player.retries = []; }
  function send(player, type) {
    if (player.mounted) player.frame.contentWindow?.postMessage({ type, value: undefined, 'x-tiktok-player': true }, player.origin);
  }
  function shouldPlay(player) {
    return player.visible && !document.hidden && !document.body.classList.contains('modal-open') &&
      !player.failed && (player.manualPlay || (autoEnabled && !player.manualPaused && !player.blocked));
  }
  function paint(player) {
    const active = player.target === 'play';
    player.label.textContent = tr(active ? 'video.pause' : 'video.play');
    player.button.setAttribute('aria-label', tr(active ? 'video.pauseLabel' : 'video.playLabel', { number: player.number }));
    player.icon.setAttribute('href', active ? '#pause' : '#play');
    player.card.classList.toggle('is-playing', player.playing);
    player.status.textContent = tr(player.playing ? 'video.playing' : 'video.muted');
    if (player.feedbackKey) player.feedback.textContent = tr(player.feedbackKey);
  }
  function unmount(player) {
    if (player.mounted) send(player, 'pause');
    clearRetries(player); clearTimeout(player.stopTimer); player.stopTimer = null;
    player.mounted = false; player.loaded = false; player.ready = false; player.playing = false;
    player.frame.removeAttribute('src');
    player.card.classList.remove('is-loaded');
    paint(player);
  }
  function mount(player, autoplay) {
    clearRetries(player); clearTimeout(player.stopTimer); player.stopTimer = null;
    const url = new URL(player.baseURL);
    if (url.origin !== origin || !/^\/player\/v1\/\d+$/.test(url.pathname)) return;
    url.searchParams.set('autoplay', autoplay ? '1' : '0');
    url.searchParams.set('force_muted', '1');
    url.searchParams.set('muted', '1');
    url.searchParams.set('playsinline', '1');
    player.ready = false; player.loaded = false; player.playing = false; player.mounted = true;
    player.mountAutoplay = autoplay; player.origin = origin;
    player.card.classList.remove('is-loaded');
    player.frame.setAttribute('src', url.href);
  }
  function command(player) {
    if (player.target === 'play') send(player, 'mute');
    send(player, player.target);
  }
  function sync(player, force = false) {
    const target = shouldPlay(player) ? 'play' : 'pause';
    const changed = player.target !== target;
    player.target = target;
    if (!player.visible || document.hidden || document.body.classList.contains('modal-open')) {
      // Unloading is a reliable stop even when the embedded player never acknowledges messages.
      if (player.mounted) unmount(player);
      paint(player); return;
    }
    if (!player.mounted) mount(player, target === 'play');
    else if (!player.ready && player.mountAutoplay !== (target === 'play')) mount(player, target === 'play');
    if (player.loaded && (changed || force)) {
      command(player);
      if (target === 'pause' && player.ready && player.playing) {
        clearTimeout(player.stopTimer);
        player.stopTimer = setTimeout(() => {
          if (player.target === 'pause' && player.playing) { mount(player, false); paint(player); }
        }, 600);
      }
    }
    paint(player);
  }
  function syncAll() { players.forEach(player => sync(player)); }
  function paintAutoplay() {
    autoButton.setAttribute('aria-pressed', String(autoEnabled));
    autoButton.querySelector('.autoplay-label').textContent = tr(autoEnabled ? 'video.autoOn' : 'video.autoOff');
  }
  // Install event listeners before assigning any TikTok URL. A cached iframe can otherwise
  // emit its one-shot ready message before this deferred script starts running.
  window.addEventListener('message', event => {
    if (!trustedOrigins.has(event.origin)) return;
    const player = players.find(item => item.mounted && item.frame.contentWindow === event.source);
    if (!player) return;
    let data = event.data;
    if (typeof data === 'string') { try { data = JSON.parse(data); } catch { return; } }
    if (!data || data['x-tiktok-player'] !== true) return;
    player.origin = event.origin;
    if (data.type === 'onPlayerReady') {
      player.ready = true; player.loaded = true; player.failed = false;
      feedback(player, null); sync(player, true);
    } else if (data.type === 'onStateChange') {
      player.ready = true; player.loaded = true;
      const state = Number(data.value), wasPlaying = player.playing;
      if (state === 1) {
        player.playing = true; player.blocked = false; clearRetries(player);
        if (player.target !== 'play' && (!player.manualPaused || document.activeElement === player.frame) && player.visible && !document.hidden && !document.body.classList.contains('modal-open')) { player.manualPlay = true; player.manualPaused = false; }
        feedback(player, null);
        if (!shouldPlay(player)) { player.target = 'pause'; send(player, 'pause'); }
        else player.target = 'play';
      } else if (state === 2 || state === 0) {
        player.playing = false; clearTimeout(player.stopTimer); player.stopTimer = null;
        if (state === 2 && player.target === 'play' && wasPlaying) {
          player.manualPaused = true; player.manualPlay = false; player.target = 'pause'; clearRetries(player);
        }
      }
      paint(player);
    } else if (data.type === 'onPlayerError' || data.type === 'onError') {
      clearRetries(player);
      const code = Number(data.value?.errorCode ?? data.value);
      player.playing = false; player.target = 'pause'; player.manualPlay = false;
      if (code === 3002) { player.blocked = true; feedback(player, 'video.blocked'); }
      else { player.failed = true; feedback(player, 'video.failed'); }
      send(player, 'pause'); paint(player);
    }
  });
  players.forEach(player => {
    player.frame.addEventListener('load', () => {
      if (!player.mounted) return;
      player.loaded = true; player.card.classList.add('is-loaded');
      // Autoplay comes from the URL, so playback is no longer gated on a ready message.
      sync(player, true); clearRetries(player);
      if (player.target === 'play') {
        [400, 1200, 2600].forEach(delay => player.retries.push(setTimeout(() => {
          if (shouldPlay(player) && !player.playing) command(player);
        }, delay)));
        player.retries.push(setTimeout(() => {
          if (shouldPlay(player) && !player.playing && !player.ready) feedback(player, 'video.unconfirmed');
        }, 6000));
      }
    });
    player.button.addEventListener('click', () => {
      const pause = player.target === 'play';
      player.manualPaused = pause; player.manualPlay = !pause;
      const retry = player.failed || player.blocked;
      player.failed = false; player.blocked = false; feedback(player, null);
      if (retry && !pause && player.mounted) unmount(player);
      sync(player, true);
    });
  });
  paintAutoplay();
  if (!hasObserver) autoButton.disabled = true;
  autoButton.addEventListener('click', () => {
    autoEnabled = !autoEnabled;
    players.forEach(player => { player.manualPlay = false; if (autoEnabled) { player.manualPaused = false; player.blocked = false; } });
    paintAutoplay(); syncAll();
  });
  if (hasObserver) {
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
  } else syncAll();
  document.addEventListener('visibilitychange', syncAll);
  if ('MutationObserver' in window) new MutationObserver(syncAll).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  preference.addEventListener?.('change', event => {
    if (event.matches) { autoEnabled = false; paintAutoplay(); syncAll(); }
  });
  window.addEventListener('pagehide', () => players.forEach(player => { player.manualPlay = false; player.target = 'pause'; unmount(player); }));
  window.addEventListener('pageshow', syncAll);
  document.addEventListener('site:languagechange', () => { paintAutoplay(); players.forEach(paint); });
})();
