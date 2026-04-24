(function () {
  const profile = window.MASTER_PROFILE;

  const getInitialLanguage = () => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    const savedLang = window.localStorage.getItem("landingLanguage");
    const supported = profile.supportedLanguages.map((language) => language.code);
    if (supported.includes(urlLang)) {
      return urlLang;
    }
    if (supported.includes(savedLang)) {
      return savedLang;
    }
    return profile.defaultLanguage || "en";
  };

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  };

  const setHref = (id, value) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    element.href = value;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
  };

  const setCurrentLanguage = (language) => {
    window.localStorage.setItem("landingLanguage", language);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
    window.location.reload();
  };

  const setupLanguageSwitcher = (currentLanguage) => {
    document.querySelectorAll("[data-language-switcher]").forEach((container) => {
      container.innerHTML = "";
      profile.supportedLanguages.forEach((language) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = language.label;
        button.className =
          language.code === currentLanguage ? "is-active" : "";
        button.addEventListener("click", () => setCurrentLanguage(language.code));
        container.appendChild(button);
      });
    });
  };

  const currentLanguage = getInitialLanguage();
  const copy = profile.i18n[currentLanguage] || profile.i18n.en;

  document.documentElement.lang = currentLanguage;
  setupLanguageSwitcher(currentLanguage);

  window.LandingI18n = {
    copy,
    currentLanguage,
    setText,
    setHref,
  };
})();
