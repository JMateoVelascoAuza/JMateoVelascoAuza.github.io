const cart = [];
let currentLang = 'en';

const i18n = {
  es: {
    brandStamp: 'ALMACÉN °02',
    skillName1: 'PHP (APIs REST)',
    skillName2: 'Autenticación & control de acceso',
    skillName3: 'Arquitectura & despliegue con Apache',
    skillName4: 'WhatsApp Cloud API',
    skillName5: 'Algoritmos & estructuras de datos',
    skillName6: 'Evaluación de modelos de IA',
    skillName7: 'Astro + Tailwind (frontend de apoyo)',
    chipSessionAuth: 'Auth por sesión',
    chipTokensQR: 'Tokens QR',
    chipAlgo: 'Algoritmos',
    chipDataStruct: 'Estructuras de datos',
    chipModelQA: 'QA de modelos',
    heroTitle: 'El backend es el recibo que nadie ve, pero todos necesitan que cuadre.',
    heroEyebrow: 'RECIBO N.º 002 — DESARROLLADOR BACKEND',
    heroSub: 'Desarrollador backend enfocado en APIs, autenticación y arquitecturas que sostienen negocio real. Con base en La Paz, Bolivia.',
    btnSeeProjects: 'Ver proyectos',
    btnSeeSkills: 'Ver habilidades',
    navBack: '← Catálogo',
    navProjects: 'Proyectos',
    navSkills: 'Habilidades',
    navProcess: 'Proceso',
    navContact: 'Contacto',
    cartTitle: 'TU CARRITO',
    cartEmptyMsg: 'Aún no añadiste nada. Explora los proyectos y habilidades.',
    cartCheckoutLink: 'Ir a checkout →',
    fichaEyebrow: 'FICHA DEL PRODUCTO',
    fichaBio: 'Construyo APIs en PHP que sostienen catálogos, accesos y automatizaciones para negocios reales: autenticación por sesión, tokens con revocación automática e integraciones externas como WhatsApp Cloud API. Me interesa tanto resolver el problema de negocio como el código que resiste producción — rutas, permisos y casos límite.',
    specLoc: 'Ubicación', specFocus: 'Enfoque', specFocusVal: 'APIs & arquitectura backend',
    specStack: 'Stack', specAlso: 'También', specAlsoVal: 'Diseño de problemas algorítmicos',
    specEdu: 'Formación', specEduVal: 'Ing. de Sistemas — Universidad Privada Boliviana (en curso)',
    skillsEyebrow: 'HABILIDADES',
    skillsHeadLevel: 'Nivel', skillsHeadItem: 'Artículo', skillsHeadNote: 'Nota',
    skillNote1: 'Catálogos, autenticación, integraciones',
    skillNote2: 'Sesiones, tokens por cliente, revocación automática',
    skillNote3: 'mod_rewrite, .htaccess, rutas bajo subcarpetas',
    skillNote4: 'Integraciones nativas, sin dependencias externas',
    skillNote5: 'Diseño de problemas para Codeforces',
    skillName8: 'Integraciones CRM & APIs', skillNote8: 'GoHighLevel, ViciDial, Zendesk, Kommo',
    skillName9: 'Java, Python, C#', skillNote9: 'Lógica de backend fuera del ecosistema PHP',
    skillNote6: 'Etiquetado de datos con Labelbox',
    skillNote7: 'Cuando el backend necesita una cara',
    skillsAddBtn: '+ Añadir habilidades al carrito',
    projectsEyebrow: 'PROYECTOS',
    projTag1: 'PROYECTO INSIGNIA',
    projTitle1: 'Backend & accesos para web products industrial',
    projDesc1: 'API en PHP para un fabricante boliviano de empaques industriales, integrada bajo el mismo dominio que el frontend para evitar CORS. Incluye autenticación por sesión, un sistema de acceso a catálogo por código QR con tokens independientes por cliente y revocación automática, panel admin para gestión de QRs, y chatbot nativo por WhatsApp Cloud API.',
    projTag2: 'DISEÑO ALGORÍTMICO',
    projDesc2: 'Problema original para Codeforces sobre coloreo de arreglos, combinando optimización greedy y estructuras de datos. Diseñar un problema exige pensar en cada caso límite antes de que el sistema lo haga por ti.',
    projTag3: 'EXPLORACIÓN',
    projTitle3: 'Evaluación de IA & etiquetado',
    projDesc3: 'Trabajo con plataformas de etiquetado de datos como Labelbox e interés activo en metodologías de testing y evaluación de modelos de IA — la misma disciplina que aplico para que un backend no falle en producción.',
    specFocusVal: 'APIs & backend architecture',
    projTitle2: 'Inventory API',
    projTag4: 'DATA PIPELINE',
    projTitle4: 'Data Import Service',
    projDesc4: 'Import pipeline for structured business data with validation, duplicate detection, transformation rules and clear failure reporting instead of silent partial imports.',
    addToCartBtn: 'Añadir al carrito',
    addedBtn: '✓ Añadido',
    stampText: 'AÑADIDO',
    processEyebrow: 'EXPERIENCIA',
    proc1Title: 'Desarrollo móvil & web', proc1Desc: 'Contribución backend/frontend en apps móviles y web, colaborando en performance y UX.',
    proc2Title: 'Apps & nuevas plataformas', proc2Desc: 'Soporte técnico y desarrollo adaptando rápidamente a nuevas plataformas y tecnologías.',
    proc3Title: 'Integraciones & CRM', proc3Desc: 'Desarrollo de integraciones en PHP y automatización de flujos sobre GoHighLevel y ViciDial.',
    proc4Title: 'Backend & sistemas', proc4Desc: 'APIs, QA y despliegue para un producto real; integración de sistemas ERP/CRM.',
    checkoutEyebrow: 'FINALIZAR PEDIDO',
    orderSummaryTitle: 'Resumen del carrito',
    orderEmptyMsg: 'Tu carrito está vacío — añade un proyecto o una habilidad arriba.',
    orderTotalLabel: 'Total de artículos',
    qrCaption: 'Escaneá para guardar mi LinkedIn — mismo mecanismo de acceso por QR que construí en un proyecto real.',
    formName: 'Nombre', formEmail: 'Email', formMessage: 'Mensaje', formSubmit: 'Enviar pedido',
    footerTag: '© 2026 Mateo Velasco — hecho a mano, sin plantillas.',
    mailSubject: 'Pedido de contacto',
    mailNoItems: 'sin artículos seleccionados',
  },
  en: {
    brandStamp: 'WAREHOUSE °02',
    skillName1: 'PHP (REST APIs)',
    skillName2: 'Authentication & access control',
    skillName3: 'Architecture & deployment with Apache',
    skillName4: 'WhatsApp Cloud API',
    skillName5: 'Algorithms & data structures',
    skillName6: 'AI model evaluation',
    skillName7: 'Astro + Tailwind (supporting frontend)',
    chipSessionAuth: 'Session auth',
    chipTokensQR: 'QR tokens',
    chipAlgo: 'Algorithms',
    chipDataStruct: 'Data structures',
    chipModelQA: 'Model QA',
    heroTitle: 'The backend is the receipt nobody sees, but everyone needs it to add up.',
    heroEyebrow: 'RECEIPT N.º 002 — BACKEND DEVELOPER',
    heroSub: 'Backend developer focused on APIs, authentication and architecture that hold up real business. Based in La Paz, Bolivia.',
    btnSeeProjects: 'See projects',
    btnSeeSkills: 'See skills',
    navBack: '← Catalog',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navProcess: 'Process',
    navContact: 'Contact',
    cartTitle: 'YOUR CART',
    cartEmptyMsg: "You haven't added anything yet. Explore the projects and skills.",
    cartCheckoutLink: 'Go to checkout →',
    fichaEyebrow: 'PRODUCT SHEET',
    fichaBio: 'I build PHP APIs that power catalogs, access control and automations for real businesses: session-based authentication, tokens with automatic revocation, and external integrations like the WhatsApp Cloud API. I care as much about solving the business problem as writing code that survives production — routes, permissions and edge cases.',
    specLoc: 'Location', specFocus: 'Focus', specFocusVal: 'APIs & backend architecture',
    specStack: 'Stack', specAlso: 'Also', specAlsoVal: 'Algorithmic problem design',
    specEdu: 'Education', specEduVal: 'Systems Engineering — Universidad Privada Boliviana (in progress)',
    skillsEyebrow: 'SKILLS',
    skillsHeadLevel: 'Level', skillsHeadItem: 'Item', skillsHeadNote: 'Note',
    skillNote1: 'Catalogs, authentication, integrations',
    skillNote2: 'Sessions, per-client tokens, automatic revocation',
    skillNote3: 'mod_rewrite, .htaccess, routes under subfolders',
    skillNote4: 'Native integrations, no external dependencies',
    skillNote5: 'Designing problems for Codeforces',
    skillName8: 'CRM & API integrations', skillNote8: 'GoHighLevel, ViciDial, Zendesk, Kommo',
    skillName9: 'Java, Python, C#', skillNote9: 'Backend logic outside the PHP ecosystem',
    skillNote6: 'Data labeling with Labelbox',
    skillNote7: 'When the backend needs a face',
    skillsAddBtn: '+ Add skills to cart',
    projectsEyebrow: 'PROJECTS',
    projTag1: 'FLAGSHIP PROJECT',
    projTitle1: 'Identity API',
    projDesc1: 'Independent authentication service concept with registration, login, refresh tokens, protected resources, role-based access control and audit-ready events. The goal is a backend that treats security and failure states as first-class concerns.',
    projTag2: 'DATA SERVICE',
    projDesc2: 'REST API for products, categories, stock movements and orders, designed with validation, pagination, filtering, relational data and consistent error responses.',
    projTag3: 'OBSERVABILITY',
    projTitle3: 'Audit Log API',
    projDesc3: 'Backend service that records security and business events with actor, action, timestamp and context. Includes filtering and a query-friendly structure for operational debugging.',
    addToCartBtn: 'Add to cart',
    addedBtn: '✓ Added',
    stampText: 'ADDED',
    processEyebrow: 'EXPERIENCE',
    proc1Title: 'Mobile & web development', proc1Desc: 'Backend/frontend contributions to mobile and web apps, collaborating on performance and UX.',
    proc2Title: 'Apps & new platforms', proc2Desc: 'Technical support and development, quickly adapting to new platforms and technologies.',
    proc3Title: 'Integrations & CRM', proc3Desc: 'Building PHP integrations and workflow automation on top of GoHighLevel and ViciDial.',
    proc4Title: 'Backend & systems', proc4Desc: 'APIs, QA and deployment for a real product; ERP/CRM systems integration.',
    checkoutEyebrow: 'CHECKOUT',
    orderSummaryTitle: 'Cart summary',
    orderEmptyMsg: 'Your cart is empty — add a project or a skill above.',
    orderTotalLabel: 'Total items',
    qrCaption: 'Scan to save my LinkedIn — the same QR access mechanism I built for a real project.',
    formName: 'Name', formEmail: 'Email', formMessage: 'Message', formSubmit: 'Send order',
    footerTag: '© 2026 Mateo Velasco — handcrafted, no templates.',
    mailSubject: 'Contact request',
    mailNoItems: 'no items selected',
  }
};

const typeTarget = document.getElementById('typeTarget');
let charIndex = 0;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeWriter(text){
  charIndex = 0;
  function step(){
    if(charIndex <= text.length){
      typeTarget.innerHTML = text.slice(0, charIndex) + '<span class="cursor">&nbsp;</span>';
      charIndex++;
      setTimeout(step, 28);
    } else {
      typeTarget.innerHTML = text + '<span class="cursor">&nbsp;</span>';
    }
  }
  step();
}

function setHeroTitle(lang, animate){
  const text = i18n[lang].heroTitle;
  if(reduceMotion || !animate){
    typeTarget.textContent = text;
  } else {
    typeWriter(text);
  }
}

const langToggle = document.getElementById('langToggle');

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll('.add-btn.added').forEach(btn => {
    btn.textContent = i18n[lang].addedBtn;
  });
  langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
  renderCart();
}

applyLang('en');

langToggle.addEventListener('click', () => {
  const next = currentLang === 'es' ? 'en' : 'es';
  applyLang(next);
});

setHeroTitle('en', true);

document.querySelectorAll('.skills-row[data-fill]').forEach(row => {
  const fill = Number(row.dataset.fill);
  const dots = row.querySelectorAll('.dots i');
  const active = Math.round((fill / 100) * dots.length);
  dots.forEach((dot, i) => { if(i < active) dot.classList.add('on'); });
});

const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartCount = document.getElementById('cartCount');
const cartList = document.getElementById('cartList');
const cartEmpty = document.getElementById('cartEmpty');
const orderList = document.getElementById('orderList');
const orderEmpty = document.getElementById('orderEmpty');
const orderTotal = document.getElementById('orderTotal');

function openCart(){
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
}
function closeCart(){
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
}
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function renderCart(){
  cartCount.textContent = cart.length;
  cartCount.classList.add('bump');
  setTimeout(() => cartCount.classList.remove('bump'), 200);

  cartList.innerHTML = '';
  orderList.innerHTML = '';

  if(cart.length === 0){
    cartEmpty.style.display = 'block';
    orderEmpty.style.display = 'block';
  } else {
    cartEmpty.style.display = 'none';
    orderEmpty.style.display = 'none';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${item}</span><span>01</span>`;
      cartList.appendChild(li);

      const oli = document.createElement('li');
      oli.innerHTML = `<span>${item}</span><span>x1</span>`;
      orderList.appendChild(oli);
    });
  }

  orderTotal.textContent = String(cart.length).padStart(2, '0');
}

function showStamp(anchorEl){
  const host = anchorEl.closest('.project-card, section') || anchorEl.parentElement;
  const stamp = document.createElement('span');
  stamp.className = 'stamp-mark';
  stamp.textContent = i18n[currentLang].stampText;
  host.appendChild(stamp);
  setTimeout(() => stamp.remove(), 1350);
}

document.querySelectorAll('[data-cart-item]').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.dataset.cartItem;
    if(!cart.includes(item)){
      cart.push(item);
      showStamp(btn);
      if(btn.classList.contains('add-btn')){
        btn.textContent = i18n[currentLang].addedBtn;
        btn.classList.add('added');
      }
      renderCart();
      openCart();
    }
  });
});

renderCart();

const revealTargets = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
revealTargets.forEach(el => observer.observe(el));

const checkoutForm = document.getElementById('checkoutForm');
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(checkoutForm);
  const nombre = data.get('nombre');
  const email = data.get('email');
  const mensaje = data.get('mensaje');
  const itemsLine = cart.length ? cart.join(', ') : i18n[currentLang].mailNoItems;
  const subject = encodeURIComponent(`${i18n[currentLang].mailSubject} — ${nombre}`);
  const body = encodeURIComponent(
    `${i18n[currentLang].formName}: ${nombre}\n${i18n[currentLang].formEmail}: ${email}\n\n${i18n[currentLang].formMessage}:\n${mensaje}\n\nCart: ${itemsLine}`
  );
  window.location.href = `mailto:mateovelascop19@gmail.com?subject=${subject}&body=${body}`;
});
