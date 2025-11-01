document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const applyTheme = (t) => {
    document.documentElement.classList.remove('light', 'dark-mode', 'high-contrast');
    if (t === 'dark') document.documentElement.classList.add('dark-mode');
    if (t === 'high-contrast') document.documentElement.classList.add('high-contrast');
    localStorage.setItem('theme', t);
    toggle.setAttribute('aria-pressed', t !== 'light');
  };

  const stored = localStorage.getItem('theme') || 'light';
  applyTheme(stored);

  toggle.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || 'light';
    const next = current === 'light' ? 'dark' : current === 'dark' ? 'high-contrast' : 'light';
    applyTheme(next);
  });
});
