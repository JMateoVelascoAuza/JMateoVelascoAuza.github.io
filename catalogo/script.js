let currentLang = 'en';

const i18n = {
  es: {
    brandStamp: 'CATÁLOGO',
    eyebrow: 'ÍNDICE DE PRODUCTOS',
    title: 'Un portafolio distinto para cada tipo de rol.',
    subtitle: 'Mateo Velasco — desarrollador full-stack. Un catálogo de productos pensado para mostrar cómo diseño, construyo y envío software.',
    stockCount: '4 PRODUCTOS EN CATÁLOGO · TODOS DISPONIBLES',
    available: 'DISPONIBLE',
    viewPortfolio: 'Ver portafolio →',
    card1Title: 'Full-Stack',
    card1Desc: 'Productos web completos que combinan interfaces, APIs, bases de datos, autenticación y arquitectura orientada a producción.',
    card2Title: 'Backend & APIs',
    card2Desc: 'APIs, autenticación, modelado de datos, integraciones y servicios diseñados alrededor de límites claros y manejo de errores.',
    card3Title: 'Frontend / UX',
    card3Desc: 'Interfaces responsivas, sistemas de diseño, dashboards y patrones de interacción construidos para claridad, velocidad y accesibilidad.',
    card4Title: 'Systems Lab',
    card4Desc: 'Experimentos de arquitectura: gateways, colas, webhooks, workers, flujos en tiempo real y productos con IA.',
    footerTag: '© 2026 Mateo Velasco — hecho a mano, sin plantillas.',
  },
  en: {
    brandStamp: 'CATALOG',
    eyebrow: 'PRODUCT INDEX',
    title: 'A different portfolio for every kind of role.',
    subtitle: 'Mateo Velasco — full-stack developer. A product catalog built to show how I design, build and ship software.',
    stockCount: '4 PRODUCTS IN CATALOG · ALL AVAILABLE',
    available: 'AVAILABLE',
    viewPortfolio: 'View portfolio →',
    card1Title: 'Full-Stack',
    card1Desc: 'End-to-end web products combining interfaces, APIs, databases, authentication and production-minded architecture.',
    card2Title: 'Backend & APIs',
    card2Desc: 'Reliable APIs, authentication, data modeling, integrations and services built around failure handling and clear boundaries.',
    card3Title: 'Frontend / UX',
    card3Desc: 'Responsive interfaces, design systems, dashboards and interaction patterns built for clarity, speed and accessibility.',
    card4Title: 'Systems Lab',
    card4Desc: 'Architecture experiments: gateways, queues, webhooks, background workers, realtime flows and AI-enabled products.',
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

applyLang('en');

langToggle.addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});
