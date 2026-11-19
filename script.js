const menuButton = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuButton.addEventListener('click', () => { const open = mobileNav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.textContent = open ? '✕' : '☰'; });
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileNav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰'; }));
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold: 0.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('contactForm').addEventListener('submit', e => { e.preventDefault(); const data = new FormData(e.currentTarget); const subject = `[Portfolio] ${data.get('subject')}`; const message = `Hello Abhishikth,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`; window.location.href = `mailto:abhishikth.ayyagari@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`; });
