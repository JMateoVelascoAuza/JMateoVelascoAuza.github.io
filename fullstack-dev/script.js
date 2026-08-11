const cart = [];
let currentLang = 'es';

const i18n = {
  es: {
    heroTitle: 'Cada producto que construyo tiene que funcionar en producción, no solo en la demo.',
    heroEyebrow: 'RECIBO N.º 001 — DESARROLLADOR FULL-STACK',
    heroSub: 'Desarrollador full-stack enfocado en productos reales: APIs, frontends y arquitecturas que se sostienen en producción. Con base en La Paz, Bolivia.',
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
    fichaBio: 'Diseño y construyo productos web completos: desde frontends en Astro y Tailwind hasta backends en PHP que sostienen catálogos, accesos y automatizaciones reales — con experiencia puntual en e-commerce y Shopify Liquid. Me obsesiona que cada clic tenga una razón de negocio detrás.',
    specLoc: 'Ubicación', specFocus: 'Enfoque', specFocusVal: 'Producto & arquitectura full-stack',
    specStack: 'Stack', specAlso: 'También', specAlsoVal: 'Diseño de problemas algorítmicos',
    skillsEyebrow: 'HABILIDADES',
    skillsHeadLevel: 'Nivel', skillsHeadItem: 'Artículo', skillsHeadNote: 'Nota',
    skillNote1: 'Frontends rápidos y mantenibles',
    skillNote2: 'Catálogos, autenticación, integraciones',
    skillNote3: 'De XAMPP local a hosting en producción',
    skillNote4: 'Chatbots nativos, sin dependencias externas',
    skillNote5: 'Plantillas a medida, cuando el proyecto lo pide',
    skillNote6: 'Diseño de problemas para Codeforces',
    skillNote7: 'Etiquetado de datos con Labelbox',
    skillsAddBtn: '+ Añadir habilidades al carrito',
    projectsEyebrow: 'PROYECTOS',
    projTag1: 'PROYECTO INSIGNIA',
    projDesc1: 'Sitio para un fabricante boliviano de sacos de polipropileno tejido y empaques industriales. Frontend en Astro + Tailwind, backend en PHP bajo un mismo dominio para evitar CORS, chatbot nativo por WhatsApp Cloud API y un sistema de acceso a catálogo por código QR con tokens y revocación automática.',
    projTag2: 'DISEÑO ALGORÍTMICO',
    projDesc2: 'Problema original para Codeforces sobre coloreo de arreglos, combinando optimización greedy y estructuras de datos. Diseñar un problema exige pensar en cada caso límite antes de que el sistema lo haga por ti.',
    projTag3: 'EXPLORACIÓN',
    projTitle3: 'Evaluación de IA & etiquetado',
    projDesc3: 'Trabajo con plataformas de etiquetado de datos como Labelbox e interés activo en metodologías de testing y evaluación de modelos de IA — la misma disciplina que aplico para que un producto no falle en producción.',
    addToCartBtn: 'Añadir al carrito',
    addedBtn: '✓ Añadido',
    stampText: 'AÑADIDO',
    processEyebrow: 'CÓMO SE ARMA EL PEDIDO',
    proc1Title: 'Diagnóstico', proc1Desc: 'Entender el negocio antes de tocar código.',
    proc2Title: 'Diseño', proc2Desc: 'Sistemas visuales claros, no solo decorativos.',
    proc3Title: 'Desarrollo', proc3Desc: 'Astro, PHP, APIs: código que se puede mantener.',
    proc4Title: 'Lanzamiento & soporte', proc4Desc: 'Despliegue, monitoreo y ajustes en producción.',
    checkoutEyebrow: 'FINALIZAR PEDIDO',
    orderSummaryTitle: 'Resumen del carrito',
    orderEmptyMsg: 'Tu carrito está vacío — añade un proyecto o una habilidad arriba.',
    orderTotalLabel: 'Total de artículos',
    qrCaption: 'Escaneá para guardar mi LinkedIn — mismo mecanismo de acceso por QR que construí para Inbolsa Neo.',
    formName: 'Nombre', formEmail: 'Email', formMessage: 'Mensaje', formSubmit: 'Enviar pedido',
    footerTag: '© 2026 Mateo Velasco — hecho a mano, sin plantillas.',
    mailSubject: 'Pedido de contacto',
    mailNoItems: 'sin artículos seleccionados',
  },
  en: {
    heroTitle: 'Every product I build has to work in production, not just in the demo.',
    heroEyebrow: 'RECEIPT N.º 001 — FULL-STACK DEVELOPER',
    heroSub: 'Full-stack developer focused on real products: APIs, frontends and architecture that hold up in production. Based in La Paz, Bolivia.',
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
    fichaBio: 'I design and build complete web products: frontends in Astro and Tailwind, backends in PHP that power catalogs, access control and real automations — with hands-on experience in e-commerce and Shopify Liquid. I care that every click has a business reason behind it.',
    specLoc: 'Location', specFocus: 'Focus', specFocusVal: 'Full-stack product & architecture',
    specStack: 'Stack', specAlso: 'Also', specAlsoVal: 'Algorithmic problem design',
    skillsEyebrow: 'SKILLS',
    skillsHeadLevel: 'Level', skillsHeadItem: 'Item', skillsHeadNote: 'Note',
    skillNote1: 'Fast, maintainable frontends',
    skillNote2: 'Catalogs, authentication, integrations',
    skillNote3: 'From local XAMPP to production hosting',
    skillNote4: 'Native chatbots, no external dependencies',
    skillNote5: 'Custom templates, when the project calls for it',
    skillNote6: 'Designing problems for Codeforces',
    skillNote7: 'Data labeling with Labelbox',
    skillsAddBtn: '+ Add skills to cart',
    projectsEyebrow: 'PROJECTS',
    projTag1: 'FLAGSHIP PROJECT',
    projDesc1: 'Site for a Bolivian manufacturer of woven polypropylene bags and industrial packaging. Astro + Tailwind frontend, PHP backend under the same domain to avoid CORS, a native WhatsApp Cloud API chatbot, and a QR-based catalog access system with tokens and automatic revocation.',
    projTag2: 'ALGORITHMIC DESIGN',
    projDesc2: 'Original Codeforces problem about array coloring, combining greedy optimization and data structures. Designing a problem means thinking through every edge case before the system does.',
    projTag3: 'EXPLORATION',
    projTitle3: 'AI evaluation & data labeling',
    projDesc3: "I work with data labeling platforms like Labelbox and have an active interest in AI testing and evaluation methods — the same discipline I apply so a product doesn't fail in production.",
    addToCartBtn: 'Add to cart',
    addedBtn: '✓ Added',
    stampText: 'ADDED',
    processEyebrow: 'HOW THE ORDER COMES TOGETHER',
    proc1Title: 'Diagnosis', proc1Desc: 'Understand the business before touching code.',
    proc2Title: 'Design', proc2Desc: 'Visual systems that are clear, not just decorative.',
    proc3Title: 'Development', proc3Desc: 'Astro, PHP, APIs: code that can be maintained.',
    proc4Title: 'Launch & support', proc4Desc: 'Deployment, monitoring and fixes in production.',
    checkoutEyebrow: 'CHECKOUT',
    orderSummaryTitle: 'Cart summary',
    orderEmptyMsg: 'Your cart is empty — add a project or a skill above.',
    orderTotalLabel: 'Total items',
    qrCaption: 'Scan to save my LinkedIn — the same QR access mechanism I built for Inbolsa Neo.',
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

langToggle.addEventListener('click', () => {
  const next = currentLang === 'es' ? 'en' : 'es';
  applyLang(next);
});

setHeroTitle('es', true);

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
