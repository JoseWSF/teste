#  MÃOS DO AMANHÃ  
**Transformando vidas com tecnologia e solidariedade**

---

##  Sobre o Projeto

**Mãos do Amanhã** é uma plataforma fictícia criada como parte do projeto acadêmico da disciplina de *Desenvolvimento Web*.  
O objetivo é demonstrar a aplicação de HTML5, CSS3 e JavaScript moderno em um site institucional acessível e responsivo, com foco em **projetos sociais, voluntariado e doações**.

O site foi planejado para simular uma ONG real, com áreas de transparência, projetos e cadastro de voluntários.




Mãos-do-amanhã/

│

├── assets/

│ ├── css/

│ │ ├── style.css
│ │ ├── layout.css
│ │ ├── variables.css
│ │ └── components.css
│ ├── img/
│ │ ├── logo-ong.webp
│ │ └── projeto-alfabetiza.webp
│
├── js/
│ ├── menu.js
│ ├── spa.js
│ ├── form-validation.js
│ ├── masks.js
│ └── theme-toggle.js
│
├── index.html
├── projetos.html
├── cadastro.html
├── README.md
└── .github/workflows/deploy.yml


---

##  Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|-------------|
| Estrutura | **HTML5 Semântico** |
| Estilização | **CSS3 (Grid, Flexbox, Variáveis, Responsividade)** |
| Interatividade | **JavaScript (DOM, Eventos, LocalStorage, SPA)** |
| Acessibilidade | **WCAG 2.1 AA**, **aria-labels**, **foco visível**, **modo escuro**, **modo alto contraste** |
| Versionamento | **Git / GitHub com GitFlow** |
| Deploy | **GitHub Pages + GitHub Actions (CI/CD)** |

---

##  Funcionalidades Implementadas

###  Estrutura Institucional
- Página inicial com missão, visão e valores  
- Histórico e conquistas  
- Equipe e relatórios de transparência  

###  Navegação e Responsividade
- Menu principal com submenu dropdown  
- Menu hambúrguer em telas menores  
- Navegação por teclado e foco acessível  

###  Interatividade
- SPA básico com `spa.js`  
- Validação de formulários e feedback visual  
- Modo escuro e alto contraste com `theme-toggle.js`  

###  Recursos Técnicos
- Uso de **variáveis CSS** (Design System)  
- Sistema de espaçamento modular (8–64px)  
- Paleta de cores com contraste 4.5:1  
- Componentes com sombra e borda suave  

---

##  Acessibilidade (WCAG 2.1 AA)

O site foi projetado com foco total em inclusão digital, seguindo recomendações da WCAG:

✅ Estrutura semântica completa (`header`, `main`, `nav`, `footer`)  
✅ Navegação por teclado (`tab`, `enter`, `esc`)  
✅ Foco visível e contraste suficiente  
✅ `aria-label`, `aria-pressed` e `role` aplicados  
✅ Modo escuro e alto contraste para baixa visão  

---

##  GitFlow e Versionamento

Fluxo de branches utilizado:

```bash
main        # Versão estável e publicada
develop     # Versão de desenvolvimento
feature/*   # Novas funcionalidades
release/*   # Versões para revisão
hotfix/*    # Correções rápidas


## Versionamento semântico:

v1.0.0  - Estrutura HTML e CSS
v1.1.0  - Interatividade (Entrega III)
v1.2.0  - Acessibilidade e Deploy (Entrega IV)

- Deploy Automatizado

O deploy é realizado via GitHub Actions com a Action:
peaceiris/actions-gh-pages@v3

Cada commit na branch main dispara o workflow .github/workflows/deploy.yml;

O projeto é minificado e enviado automaticamente para a branch gh-pages;

O site é publicado em:

- https://josewsf.github.io/Maos-do-amanha/

## Otimização

CSS, JS e HTML minificados para reduzir tamanho final;

Imagens otimizadas (.webp);

Lazy loading e cache configurados;

Estrutura modular (import de CSS dividido).

## Licença

Este projeto é de uso acadêmico e não possui fins comerciais.
Desenvolvido por José Werberson da Silva Ferreira — 2025.

## Créditos e Agradecimentos

Projeto desenvolvido sob orientação da disciplina de Desenvolvimento Web,
agradecendo à equipe docente pelo suporte e às ferramentas de código aberto utilizadas.


---





