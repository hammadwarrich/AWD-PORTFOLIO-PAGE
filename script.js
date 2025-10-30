// Theme toggle
(function(){
  const btn = document.getElementById('themeToggle');
  const root = document.body;
  const saved = localStorage.getItem('site-theme') || 'light';
  root.classList.add(saved);
  btn.textContent = saved === 'light' ? 'Dark' : 'Light';

  btn.addEventListener('click', () => {
    const next = root.classList.contains('light') ? 'dark' : 'light';
    root.classList.remove('light', 'dark');
    root.classList.add(next);
    btn.textContent = next === 'light' ? 'Dark' : 'Light';
    localStorage.setItem('site-theme', next);
  });
})();

// Simple form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been (pretend) sent.');
});
