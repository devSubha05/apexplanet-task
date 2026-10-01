(function () {
  var root = document.documentElement;

  // Theme toggle (remembers the choice)
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  document.getElementById('theme').addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    var isDark = current === 'dark' ||
      (!current && matchMedia('(prefers-color-scheme: dark)').matches);
    var next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile menu
  var menu = document.getElementById('menu');
  var nav = document.getElementById('nav');
  menu.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }
  });

  // Footer year
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Typing effect for the hero query
  var q = document.getElementById('q');
  var out = document.getElementById('out');
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var text = q.textContent;
    var i = 0;
    q.textContent = '';
    out.hidden = true;
    (function type() {
      q.textContent = text.slice(0, ++i);
      if (i < text.length) {
        setTimeout(type, 35);
      } else {
        setTimeout(function () { out.hidden = false; }, 250);
      }
    })();
  }
})();