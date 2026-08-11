const cart = [];
let currentLang = 'es';

const i18n = {
  es: {
    heroTitle: 'El diseño es el empaque: si no convence en 3 segundos, no importa qué hay adentro.',
    heroEyebrow: 'RECIBO N.º 003 — UX/UI & FRONTEND',
    heroSub: 'Diseño y construyo interfaces con foco en interacción: microinteracciones con propósito, jerarquía visual clara y sistemas de diseño consistentes. Con base en La Paz, Bolivia.',
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
    fichaBio: 'Trabajo la interfaz como parte del producto, no como una capa decorativa encima del backend: sistemas de diseño con Tailwind, microinteracciones que confirman cada acción, y jerarquía visual que guía sin necesitar instrucciones. Este mismo portafolio — con su carrito, sus sellos animados y su catálogo — es parte de ese trabajo de frontend.',
    specLoc: 'Ubicación', specFocus: 'Enfoque', specFocusVal: 'UX/UI & interacción',
    specStack: 'Stack', specAlso: 'También', specAlsoVal: 'Diseño de problemas algorítmicos',
    skillsEyebrow: 'HABILIDADES',
    skillsHeadLevel: 'Nivel', skillsHeadItem: 'Artículo', skillsHeadNote: 'Nota',
    skillNote1: 'Sistemas de diseño consistentes y mantenibles',
    skillNote2: 'Feedback visual en cada acción del usuario',
    skillNote3: 'Información que se entiende sin leer todo',
    skillNote4: 'Componentes construidos desde cero en CSS/SVG',
    skillNote5: 'Layouts que funcionan en cualquier pantalla',
    skillNote6: 'De XAMPP local a hosting en producción',
    skillNote7: 'Diseño de problemas para Codeforces',
    skillsAddBtn: '+ Añadir habilidades al carrito',
    projectsEyebrow: 'PROYECTOS',
    projTag1: 'PROYECTO INSIGNIA',
    projTitle1: 'Inbolsa Neo — Frontend & UI',
    projDesc1: 'Rediseño integral de interfaz para un fabricante boliviano de empaques industriales: animaciones dinámicas, efectos hover, elementos interactivos y una experiencia de acceso a catálogo propia, construida en Astro + Tailwind sobre un backend real.',
    projTag2: 'SISTEMA DE INTERACCIÓN',
    projTitle2: 'Este mismo portafolio',
    projDesc2: 'El catálogo y los portafolios que estás viendo ahora son en sí mismos una pieza de UX: un carrito funcional que conecta habilidades y proyectos con el contacto final, sellos animados y un sistema visual construido desde cero, sin librerías de UI.',
    projTag3: 'DISEÑO ALGORÍTMICO',
    projDesc3: 'Problema original para Codeforces sobre coloreo de arreglos, combinando optimización greedy y estructuras de datos. Diseñar un problema exige pensar en cada caso límite antes de que el sistema lo haga por ti.',
    addToCartBtn: 'Añadir al carrito',
    addedBtn: '✓ Añadido',
    stampText: 'AÑADIDO',
    processEyebrow: 'CÓMO SE ARMA EL PEDIDO',
    proc1Title: 'Diagnóstico', proc1Desc: 'Entender el negocio antes de tocar código.',
    proc2Title: 'Diseño', proc2Desc: 'Sistemas visuales claros, no solo decorativos.',
    proc3Title: 'Desarrollo', proc3Desc: 'Componentes, animación y estados: interfaz que se sostiene sola.',
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
    heroTitle: "Design is the packaging: if it doesn't sell in 3 seconds, it doesn't matter what's inside.",
    heroEyebrow: 'RECEIPT N.º 003 — UX/UI & FRONTEND',
    heroSub: 'I design and build interfaces focused on interaction: purposeful microinteractions, clear visual hierarchy and consistent design systems. Based in La Paz, Bolivia.',
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
    fichaBio: "I treat the interface as part of the product, not a decorative layer on top of the backend: design systems with Tailwind, microinteractions that confirm every action, and visual hierarchy that guides without needing instructions. This very portfolio — with its cart, its animated stamps and its catalog — is part of that frontend work.",
    specLoc: 'Location', specFocus: 'Focus', specFocusVal: 'UX/UI & interaction',
    specStack: 'Stack', specAlso: 'Also', specAlsoVal: 'Algorithmic problem design',
    skillsEyebrow: 'SKILLS',
    skillsHeadLevel: 'Level', skillsHeadItem: 'Item', skillsHeadNote: 'Note',
    skillNote1: 'Consistent, maintainable design systems',
    skillNote2: 'Visual feedback on every user action',
    skillNote3: 'Information that reads without reading everything',
    skillNote4: 'Components built from scratch in CSS/SVG',
    skillNote5: 'Layouts that work on any screen',
    skillNote6: 'From local XAMPP to production hosting',
    skillNote7: 'Designing problems for Codeforces',
    skillsAddBtn: '+ Add skills to cart',
    projectsEyebrow: 'PROJECTS',
    projTag1: 'FLAGSHIP PROJECT',
    projTitle1: 'Inbolsa Neo — Frontend & UI',
    projDesc1: 'Full interface redesign for a Bolivian industrial packaging manufacturer: dynamic animations, hover effects, interactive elements and a custom catalog access experience, built in Astro + Tailwind on top of a real backend.',
    projTag2: 'INTERACTION SYSTEM',
    projTitle2: 'This very portfolio',
    projDesc2: "The catalog and the portfolios you're looking at right now are a piece of UX in themselves: a working cart that connects skills and projects to the final contact step, animated stamps, and a visual system built from scratch, with no UI libraries.",
    projTag3: 'ALGORITHMIC DESIGN',
    projDesc3: 'Original Codeforces problem about array coloring, combining greedy optimization and data structures. Designing a problem means thinking through every edge case before the system does.',
    addToCartBtn: 'Add to cart',
    addedBtn: '✓ Added',
    stampText: 'ADDED',
    processEyebrow: 'HOW THE ORDER COMES TOGETHER',
    proc1Title: 'Diagnosis', proc1Desc: 'Understand the business before touching code.',
    proc2Title: 'Design', proc2Desc: 'Visual systems that are clear, not just decorative.',
    proc3Title: 'Development', proc3Desc: 'Components, animation and states: an interface that holds up on its own.',
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
