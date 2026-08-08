(() => {
  "use strict";

  const root = document.documentElement;
  const languageButtons = Array.from(document.querySelectorAll("[data-set-language]"));
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");

  const interfaceText = {
    en: {
      navLabel: "Primary navigation",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
      languageLabel: "Language selection",
      homeLabel: "Applied Market Research Portfolio — home",
      heroActions: "Portfolio entry points",
      portfolioSummary: "Portfolio summary",
      agroCoverage: "AgroMonetary Research coverage",
      goldCoverage: "Gold–DXY Research coverage"
    },
    es: {
      navLabel: "Navegación principal",
      menuOpen: "Abrir menú de navegación",
      menuClose: "Cerrar menú de navegación",
      languageLabel: "Selección de idioma",
      homeLabel: "Applied Market Research Portfolio — inicio",
      heroActions: "Puntos de entrada al portafolio",
      portfolioSummary: "Resumen del portafolio",
      agroCoverage: "Cobertura de AgroMonetary Research",
      goldCoverage: "Cobertura de Gold–DXY Research"
    }
  };

  const setLanguage = (language) => {
    const nextLanguage = language === "es" ? "es" : "en";
    const labels = interfaceText[nextLanguage];

    root.lang = nextLanguage;
    root.dataset.language = nextLanguage;

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLanguage === nextLanguage));
    });

    navigation.setAttribute("aria-label", labels.navLabel);
    document.querySelector(".language-control").setAttribute("aria-label", labels.languageLabel);
    document.querySelector(".brand").setAttribute("aria-label", labels.homeLabel);
    document.querySelector(".hero-actions").setAttribute("aria-label", labels.heroActions);
    document.querySelector(".hero-index").setAttribute("aria-label", labels.portfolioSummary);
    document.querySelector(".research-panel-agro .tag-list").setAttribute("aria-label", labels.agroCoverage);
    document.querySelector(".research-panel-gold .tag-list").setAttribute("aria-label", labels.goldCoverage);
    menuButton.setAttribute("aria-label", menuButton.getAttribute("aria-expanded") === "true" ? labels.menuClose : labels.menuOpen);
  };

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.dataset.open = "false";
    menuButton.setAttribute("aria-label", interfaceText[root.dataset.language].menuOpen);
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.setLanguage));
  });

  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    navigation.dataset.open = String(willOpen);
    menuButton.setAttribute("aria-label", interfaceText[root.dataset.language][willOpen ? "menuClose" : "menuOpen"]);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1120) closeMenu();
  });

  setLanguage("en");
})();
