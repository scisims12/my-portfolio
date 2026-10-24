const viewport = document.querySelector('.gallery-viewport');
const track = document.querySelector('.gallery-track');
const toggle = document.querySelector('#gallery-toggle');
const dialog = document.querySelector('#screenshot-preview');
const preview = document.querySelector('#preview-image');
const title = document.querySelector('#preview-title');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches;
let hovered = false;
let focused = false;
let touching = false;
let resumeAfter = 0;
let lastTime = 0;
let frameId;
let opener;

// Repeat the strip once so the motion loops without reversing or jumping.
for (const shot of [...track.children]) {
  const clone = shot.cloneNode(true);
  clone.tabIndex = -1;
  clone.setAttribute('aria-hidden', 'true');
  track.append(clone);
}
function updateToggle() {
  toggle.textContent = paused ? 'Play' : 'Pause';
  toggle.setAttribute('aria-pressed', String(paused));
}
updateToggle();
function hold() { resumeAfter = performance.now() + 4500; }
function animate(now) {
  const elapsed = lastTime ? Math.min(now - lastTime, 60) : 0;
  lastTime = now;
  if (!paused && !hovered && !focused && !touching && !dialog.open && !document.hidden && now > resumeAfter) {
    viewport.scrollLeft += elapsed * 0.045;
  }
  frameId = requestAnimationFrame(animate);
}
// Keep a user-controlled position within the repeated strip.
viewport.addEventListener('scroll', () => {
  const first = track.children[0];
  const repeated = track.children[track.children.length / 2];
  const loopWidth = repeated.offsetLeft - first.offsetLeft;
  if (loopWidth > 0 && viewport.scrollLeft >= loopWidth) viewport.scrollLeft -= loopWidth;
}, { passive: true });
viewport.addEventListener('mouseenter', () => { hovered = true; });
viewport.addEventListener('mouseleave', () => { hovered = false; });
viewport.addEventListener('focusin', () => { focused = true; });
viewport.addEventListener('focusout', event => { focused = viewport.contains(event.relatedTarget); });
viewport.addEventListener('pointerdown', () => { touching = true; hold(); });
window.addEventListener('pointerup', () => { touching = false; hold(); });
window.addEventListener('pointercancel', () => { touching = false; hold(); });
viewport.addEventListener('wheel', hold, { passive: true });
viewport.addEventListener('keydown', event => {
  if (event.target !== viewport || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  move(event.key === 'ArrowRight' ? 1 : -1);
});
function move(direction) {
  hold();
  if (direction < 0 && viewport.scrollLeft < 1) {
    const first = track.children[0];
    const repeated = track.children[track.children.length / 2];
    viewport.scrollLeft = repeated.offsetLeft - first.offsetLeft;
  }
  viewport.scrollBy({ left: direction * (track.children[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap)), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
}
document.querySelector('#gallery-prev').addEventListener('click', () => move(-1));
document.querySelector('#gallery-next').addEventListener('click', () => move(1));
toggle.addEventListener('click', () => { paused = !paused; updateToggle(); });
reducedMotion.addEventListener('change', event => { paused = event.matches; updateToggle(); });
track.addEventListener('click', event => {
  const shot = event.target.closest('[data-preview]');
  if (!shot) return;
  opener = shot;
  preview.src = shot.dataset.preview;
  preview.alt = `${shot.dataset.title} — enlarged screenshot`;
  title.textContent = shot.dataset.title;
  dialog.showModal();
});
document.querySelector('#preview-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { hold(); opener?.focus({ preventScroll: true }); });
window.addEventListener('pagehide', () => cancelAnimationFrame(frameId));
window.addEventListener('pageshow', () => { cancelAnimationFrame(frameId); lastTime = 0; frameId = requestAnimationFrame(animate); });
frameId = requestAnimationFrame(animate);
