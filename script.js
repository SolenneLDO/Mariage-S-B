/* ------------------------------------------------------------
   À MODIFIER : vos informations
   ------------------------------------------------------------ */
const CONFIG = {
  // Lien vers votre formulaire de réponse (Google Forms, Tally, Typeform...).
  // Laissez vide pour que le bouton ouvre simplement un e-mail.
  rsvpUrl: "",

  // Adresse e-mail affichée dans la FAQ et utilisée par le bouton si rsvpUrl est vide.
  contactEmail: "votre-email@exemple.com",

  // Date et heure du mariage (heure de Paris, UTC+2 en juillet), pour le compte à rebours.
  weddingDate: "2027-07-03T00:00:00+02:00",
};

/* ------------------------------------------------------------
   Langue : FR / EN
   Priorité : ?lang=en dans l'adresse > dernier choix > langue du navigateur
   ------------------------------------------------------------ */
(function () {
  const root = document.documentElement;
  const titles = {
    fr: "Solenne & Bradford, 3 juillet 2027, Le Pradet",
    en: "Solenne & Bradford, July 3, 2027, Le Pradet, France",
  };

  function setLang(lang) {
    if (lang !== "fr" && lang !== "en") lang = "fr";
    root.lang = lang;
    root.dataset.lang = lang;
    document.title = titles[lang];
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.setLang === lang));
    });
    try { localStorage.setItem("lang", lang); } catch (e) { /* stockage indisponible */ }
  }

  function initialLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "fr" || fromUrl === "en") return fromUrl;
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fr" || saved === "en") return saved;
    } catch (e) { /* ignore */ }
    return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.dataset.setLang); });
  });
  setLang(initialLang());
})();

/* ------------------------------------------------------------
   Menu mobile
   ------------------------------------------------------------ */
(function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");
  if (!toggle || !menu) return;

  function close() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", function () {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
})();

/* ------------------------------------------------------------
   Compte à rebours
   ------------------------------------------------------------ */
(function () {
  const target = new Date(CONFIG.weddingDate).getTime();
  const box = document.getElementById("countdown");
  const d = document.getElementById("cd-days");
  const h = document.getElementById("cd-hours");
  const m = document.getElementById("cd-minutes");
  if (!box || !d || !h || !m || isNaN(target)) return;

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) { box.hidden = true; return; }
    d.textContent = Math.floor(diff / 86400000);
    h.textContent = String(Math.floor(diff / 3600000) % 24).padStart(2, "0");
    m.textContent = String(Math.floor(diff / 60000) % 60).padStart(2, "0");
  }
  tick();
  setInterval(tick, 30000);
})();

/* ------------------------------------------------------------
   Contact et RSVP
   ------------------------------------------------------------ */
(function () {
  const email = CONFIG.contactEmail;
  document.querySelectorAll("[data-mail]").forEach(function (a) {
    a.href = "mailto:" + email;
    a.textContent = email;
  });

  const rsvp = document.getElementById("rsvp-link");
  if (rsvp) {
    if (CONFIG.rsvpUrl) {
      rsvp.href = CONFIG.rsvpUrl;
      rsvp.target = "_blank";
      rsvp.rel = "noopener";
    } else {
      rsvp.href = "mailto:" + email + "?subject=" + encodeURIComponent("RSVP, mariage Solenne & Bradford");
    }
  }
})();
