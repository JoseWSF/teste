// menu.js — controla o menu hambúrguer no mobile (versão aprimorada e acessível)
document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (botao && nav) {
    // Atributos ARIA para acessibilidade
    botao.setAttribute("aria-expanded", "false");
    botao.setAttribute("aria-controls", "menu-principal");

    botao.addEventListener("click", () => {
      const aberto = nav.classList.toggle("ativo");
      botao.setAttribute("aria-expanded", aberto);
    });
  }
});

// Submenu Dropdown no mobile
document.addEventListener("DOMContentLoaded", () => {
  const submenuLinks = document.querySelectorAll(".has-submenu > a");

  submenuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // Somente ativa o clique em telas pequenas
      if (window.innerWidth <= 600) {
        e.preventDefault();
        const parent = link.parentElement;
        const isOpen = parent.classList.toggle("open");
        link.setAttribute("aria-expanded", isOpen);
      }
    });
  });
});
