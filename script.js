const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

const roles = ['Web developer', 'Front-end builder', 'PHP + MySQL developer'];
const roleEl = document.getElementById('role');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let r = 0, c = 0, deleting = false;
function type() {
  const word = roles[r];
  roleEl.textContent = word.slice(0, c);
  if (!deleting && c < word.length) c++;
  else if (!deleting) { deleting = true; return setTimeout(type, 1400); }
  else if (c > 0) c--;
  else { deleting = false; r = (r + 1) % roles.length; }
  setTimeout(type, deleting ? 40 : 85);
}
reduce ? (roleEl.textContent = roles[0]) : type();

const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: 0.25 });
document.querySelectorAll('.skill, .reveal').forEach(el => io.observe(el));

const form = document.getElementById('form');
const note = document.getElementById('note');
form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const name = d.get('name').trim(), email = d.get('email').trim(), msg = d.get('message').trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) {
    note.textContent = 'Please fill in your name, a valid email and a message.';
    return;
  }
  const subject = encodeURIComponent('Portfolio message from ' + name);
  const body = encodeURIComponent(msg + '\n\n' + name + ' (' + email + ')');
  location.href = 'mailto:you@example.com?subject=' + subject + '&body=' + body;
  note.textContent = 'Opening your email app…';
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
