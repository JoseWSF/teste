document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu-principal');
  const submenuTriggers = menu.querySelectorAll('.has-submenu > a');

  // Abre/fecha menu principal (hambúrguer)
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('ativo');
  });

  // Permite fechar o menu com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.remove('ativo');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

  // Controle do submenu via teclado
  submenuTriggers.forEach(trigger => {
    trigger.addEventListener('keydown', (e) => {
      const submenu = trigger.nextElementSibling;
      if (!submenu) return;

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', !expanded);
        submenu.classList.toggle('aberto');
      }

      // Fecha submenu com ESC
      if (e.key === 'Escape') {
        submenu.classList.remove('aberto');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });
  });
});
