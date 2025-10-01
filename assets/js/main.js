document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const btn = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-links');
  btn?.addEventListener('click', () => list?.classList.toggle('open'));

  // Mark active link by path (works on GitHub Pages too)
  const here = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const path = a.getAttribute('href');
    if (!path) return;
    const normalized = path.replace(/index\.html$/, '');
    if (normalized === here) a.classList.add('active');
  });
});
