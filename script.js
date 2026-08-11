let currentLang = 'es';

const i18n = {
  es: {
    brandStamp: 'CATÁLOGO',
    eyebrow: 'ÍNDICE DE PRODUCTOS',
    title: 'Un portafolio distinto para cada pedido.',
    subtitle: 'Mateo Velasco — desarrollador full-stack. Cada versión de este catálogo está afinada para un tipo de rol distinto.',
    stockCount: '3 PRODUCTOS EN CATÁLOGO · TODOS DISPONIBLES',
    available: 'DISPONIBLE',
    viewPortfolio: 'Ver portafolio →',
    card1Title: 'Full-Stack Developer',
    card1Desc: 'Productos web completos: Astro, PHP, APIs y arquitectura, con experiencia puntual en e-commerce y Shopify. Proyecto insignia: Inbolsa Neo.',
    card2Title: 'Backend Developer',
    card2Desc: 'APIs en PHP, autenticación por sesión, control de acceso con tokens y arquitectura de despliegue. Proyecto insignia: Inbolsa Neo (backend).',
    card3Title: 'UX/UI & Frontend',
    card3Desc: 'Sistemas de diseño con Astro y Tailwind, microinteracciones y jerarquía visual. Este mismo catálogo es parte del portafolio.',
    footerTag: '© 2026 Mateo Velasco — hecho a mano, sin plantillas.',
  },
  en: {
    brandStamp: 'CATALOG',
    eyebrow: 'PRODUCT INDEX',
    title: 'A different portfolio for every request.',
    subtitle: 'Mateo Velasco — full-stack developer. Each version of this catalog is tuned for a different kind of role.',
    stockCount: '3 PRODUCTS IN CATALOG · ALL AVAILABLE',
    available: 'AVAILABLE',
    viewPortfolio: 'View portfolio →',
    card1Title: 'Full-Stack Developer',
    card1Desc: 'Complete web products: Astro, PHP, APIs and architecture, with hands-on experience in e-commerce and Shopify. Flagship project: Inbolsa Neo.',
    card2Title: 'Backend Developer',
    card2Desc: 'PHP APIs, session-based authentication, token-based access control and deployment architecture. Flagship project: Inbolsa Neo (backend).',
    card3Title: 'UX/UI & Frontend',
    card3Desc: 'Design systems with Astro and Tailwind, microinteractions and visual hierarchy. This very catalog is part of the portfolio.',
    footerTag: '© 2026 Mateo Velasco — handcrafted, no templates.',
  }
};

const langToggle = document.getElementById('langToggle');

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });
  langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
}

langToggle.addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});
