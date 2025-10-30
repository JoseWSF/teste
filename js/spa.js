// spa.js — sistema simples de navegação SPA (Single Page Application)

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  async function carregarPagina(url) {
    try {
      const resposta = await fetch(url);
      const html = await resposta.text();
      const conteudo = new DOMParser().parseFromString(html, "text/html").querySelector("main");
      main.innerHTML = conteudo ? conteudo.innerHTML : "<p>Erro ao carregar conteúdo.</p>";
    } catch (erro) {
      main.innerHTML = "<p>Erro ao carregar conteúdo.</p>";
    }
  }

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const destino = link.getAttribute("href");
      if (destino.endsWith(".html")) {
        e.preventDefault();
        carregarPagina(destino);
        window.history.pushState(null, "", destino);
      }
    });
  });
});
