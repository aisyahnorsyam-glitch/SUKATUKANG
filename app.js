'use strict';
const tr = (key, values) => window.SiteI18n.t(key, values);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.documentElement.classList.add('js-motion');
}
reducedMotion.addEventListener?.('change', event => { if(event.matches) document.documentElement.classList.remove('js-motion'); });
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigasi');
function updateMenuLabel() { menuButton.setAttribute('aria-label', tr(menuButton.getAttribute('aria-expanded') === 'true' ? 'menu.close' : 'menu.open')); }
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); updateMenuLabel(); }
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open)); updateMenuLabel(); navigation.classList.toggle('open',open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('click',event => { if(!event.target.closest('.header')) closeMenu(); });
document.addEventListener('keydown',event => { if(event.key==='Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 1001px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
const figures = [...document.querySelectorAll('.gallery-grid figure')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
filterButtons.forEach(button => button.addEventListener('click',()=>{
  filterButtons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  figures.forEach(figure=>{figure.hidden=button.dataset.filter!=='semua' && figure.dataset.category!==button.dataset.filter;});
  updateGalleryCount();
}));
function updateGalleryCount() { const count = figures.filter(figure => !figure.hidden).length; document.querySelector('#gallery-count').textContent = tr(count === 1 ? 'gallery.count.one' : 'gallery.count.many', { count }); }
const lightbox = document.querySelector('#lightbox');
let activeImage = 0;
let lastTrigger = null;
function visibleButtons() {return figures.filter(figure=>!figure.hidden).map(figure=>figure.querySelector('button'));}
function renderImage() {
  const buttons=visibleButtons(); const button=buttons[activeImage]; const image=button.querySelector('img');
  document.querySelector('#lightbox-image').src=image.src;
  document.querySelector('#lightbox-image').alt=image.alt;
  document.querySelector('#lightbox-title').textContent=button.dataset.title;
  document.querySelector('#lightbox-caption').textContent=button.dataset.caption;
  document.querySelector('#lightbox-count').textContent=(activeImage+1)+' / '+buttons.length;
  document.querySelector('#lightbox-enquiry').setAttribute('href', 'https://wa.me/60125420514?text='+encodeURIComponent(tr('whatsapp.project', { project: button.dataset.title })));
}
document.querySelectorAll('.gallery-open').forEach(button=>button.addEventListener('click',()=>{
  lastTrigger=button; activeImage=visibleButtons().indexOf(button); renderImage();lightbox.showModal();document.body.classList.add('modal-open');
}));
function changeImage(direction) {activeImage=(activeImage+direction+visibleButtons().length)%visibleButtons().length;renderImage();}
document.querySelector('#previous-image').addEventListener('click',()=>changeImage(-1));
document.querySelector('#next-image').addEventListener('click',()=>changeImage(1));
document.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',event=>{if(event.target===lightbox){const rect=lightbox.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)lightbox.close();}});
lightbox.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();changeImage(-1);}if(event.key==='ArrowRight'){event.preventDefault();changeImage(1);}});
lightbox.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastTrigger?.focus();});
document.querySelector('#year').textContent=new Date().getFullYear();

document.addEventListener('site:languagechange', () => {
  updateMenuLabel();
  updateGalleryCount();
  if (lightbox.open) renderImage();
});
updateMenuLabel();
updateGalleryCount();
