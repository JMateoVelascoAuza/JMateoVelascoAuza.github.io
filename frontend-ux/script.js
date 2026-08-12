const cart = [];
let currentLang = 'en';

const i18n = {
  es: {
    brandStamp: 'VITRINA °03',
    skillName1: 'Astro + Tailwind CSS',
    skillName2: 'Microinteracciones & animación',
    skillName3: 'Jerarquía visual & tipografía',
    skillName4: 'UI a medida, sin librerías genéricas',
    skillName5: 'Responsive & accesibilidad básica',
    skillName6: 'Arquitectura & despliegue',
    skillName7: 'Algoritmos & estructuras de datos',
    chipAnimations: 'Animaciones',
    chipCustomUI: 'UI a medida',
    chipAnimation: 'Animación',
    chipDesignSystem: 'Sistema de diseño',
    chipAlgo: 'Algoritmos',
    chipDataStruct: 'Estructuras de datos',
    heroTitle: 'El diseño es el empaque: si no convence en 3 segundos, no importa qué hay adentro.',
    heroEyebrow: 'RECIBO N.º 003 — UX/UI & FRONTEND',
    heroSub: 'Diseño y construyo interfaces con foco en interacción: microinteracciones con propósito, jerarquía visual clara y sistemas de diseño consistentes. Con base en La Paz, Bolivia.',
    btnSeeProjects: 'Ver proyectos',
    btnSeeSkills: 'Ver habilidades',
    navBack: '← Catálogo',
    navProjects: 'Proyectos',
    navSkills: 'Habilidades',
    navDesigns: 'Diseños',
    navProcess: 'Proceso',
    navContact: 'Contacto',
    cartTitle: 'TU CARRITO',
    cartEmptyMsg: 'Aún no añadiste nada. Explora los proyectos y habilidades.',
    cartCheckoutLink: 'Ir a checkout →',
    fichaEyebrow: 'FICHA DEL PRODUCTO',
    fichaBio: 'Trabajo la interfaz como parte del producto, no como una capa decorativa encima del backend: sistemas de diseño con Tailwind, microinteracciones que confirman cada acción, y jerarquía visual que guía sin necesitar instrucciones. Este mismo portafolio — con su carrito, sus sellos animados y su catálogo — es parte de ese trabajo de frontend.',
    specLoc: 'Ubicación', specFocus: 'Enfoque', specFocusVal: 'UX/UI & interacción',
    specStack: 'Stack', specAlso: 'También', specAlsoVal: 'Diseño de problemas algorítmicos',
    specEdu: 'Formación', specEduVal: 'Ing. de Sistemas — Universidad Privada Boliviana (en curso)',
    skillsEyebrow: 'HABILIDADES',
    skillsHeadLevel: 'Nivel', skillsHeadItem: 'Artículo', skillsHeadNote: 'Nota',
    skillNote1: 'Sistemas de diseño consistentes y mantenibles',
    skillNote2: 'Feedback visual en cada acción del usuario',
    skillNote3: 'Información que se entiende sin leer todo',
    skillName8: 'React', skillNote8: 'Interfaces basadas en componentes y estado',
    skillName9: 'Angular & TypeScript', skillNote9: 'Tipado estático en proyectos más grandes',
    skillNote4: 'Componentes construidos desde cero en CSS/SVG',
    skillNote5: 'Layouts que funcionan en cualquier pantalla',
    skillNote6: 'De XAMPP local a hosting en producción',
    skillNote7: 'Diseño de problemas para Codeforces',
    skillsAddBtn: '+ Añadir habilidades al carrito',
    conceptsEyebrow: 'DISEÑOS CONCEPTUALES',
    conceptsIntro: 'Tres direcciones visuales distintas para el mismo tipo de problema: una landing. Sin cliente real detrás — son ejercicios de estética y sistema, construidos en HTML/CSS puro.',
    concept1Title: 'SaaS minimalista',
    concept1Desc: ' — tipografía grande, mucho blanco, un solo acento de color.',
    concept2Title: 'Web products vibrante',
    concept2Desc: ' — color saturado, grilla de producto, botones grandes y directos.',
    concept3Title: 'Portfolio oscuro',
    concept3Desc: ' — dark mode, monoespaciada, acento único tipo terminal.',
    projectsEyebrow: 'PROYECTOS',
    projTag1: 'PROYECTO INSIGNIA',
    projTitle1: 'Frontend & UI para web products industrial',
    projDesc1: 'Rediseño integral de interfaz para un fabricante boliviano de empaques industriales: animaciones dinámicas, efectos hover, elementos interactivos y una experiencia de acceso a catálogo propia, construida en Astro + Tailwind sobre un backend real.',
    projTag2: 'SISTEMA DE INTERACCIÓN',
    projTitle2: 'Este mismo portafolio',
    projDesc2: 'El catálogo y los portafolios que estás viendo ahora son en sí mismos una pieza de UX: un carrito funcional que conecta habilidades y proyectos con el contacto final, sellos animados y un sistema visual construido desde cero, sin librerías de UI.',
    projTag3: 'DISEÑO ALGORÍTMICO',
    projDesc3: 'Problema original para Codeforces sobre coloreo de arreglos, combinando optimización greedy y estructuras de datos. Diseñar un problema exige pensar en cada caso límite antes de que el sistema lo haga por ti.',
    specFocusVal: 'UX/UI & interaction',
    projTitle3: 'Booking Experience',
    projTag4: 'DESIGN SYSTEM',
    projTitle4: 'MV Interface System',
    projDesc4: 'Reusable visual system covering typography, spacing, buttons, forms, tables, alerts, cards and responsive states. Built to keep interfaces consistent without flattening their personality.',
    addToCartBtn: 'Añadir al carrito',
    addedBtn: '✓ Añadido',
    stampText: 'AÑADIDO',
    processEyebrow: 'EXPERIENCIA',
    proc1Title: 'Desarrollo móvil & web', proc1Desc: 'Frontend en apps móviles y web, colaborando en UX y performance con equipos multidisciplinarios.',
    proc2Title: 'Apps & nuevas plataformas', proc2Desc: 'Interfaces para apps móviles y web, adaptando rápido a nuevas plataformas y tecnologías.',
    proc3Title: 'Integraciones & UI', proc3Desc: 'Interfaces para herramientas de integración y automatización de flujos.',
    proc4Title: 'Frontend & sistemas', proc4Desc: 'Diseño UX/UI y desarrollo frontend desde cero para un producto real en producción.',
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
    brandStamp: 'SHOWCASE °03',
    skillName1: 'Astro + Tailwind CSS',
    skillName2: 'Microinteractions & animation',
    skillName3: 'Visual hierarchy & typography',
    skillName4: 'Custom UI, no generic libraries',
    skillName5: 'Responsive & basic accessibility',
    skillName6: 'Architecture & deployment',
    skillName7: 'Algorithms & data structures',
    chipAnimations: 'Animations',
    chipCustomUI: 'Custom UI',
    chipAnimation: 'Animation',
    chipDesignSystem: 'Design system',
    chipAlgo: 'Algorithms',
    chipDataStruct: 'Data structures',
    heroTitle: "Design is the packaging: if it doesn't sell in 3 seconds, it doesn't matter what's inside.",
    heroEyebrow: 'RECEIPT N.º 003 — UX/UI & FRONTEND',
    heroSub: 'I design and build interfaces focused on interaction: purposeful microinteractions, clear visual hierarchy and consistent design systems. Based in La Paz, Bolivia.',
    btnSeeProjects: 'See projects',
    btnSeeSkills: 'See skills',
    navBack: '← Catalog',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navDesigns: 'Designs',
    navProcess: 'Process',
    navContact: 'Contact',
    cartTitle: 'YOUR CART',
    cartEmptyMsg: "You haven't added anything yet. Explore the projects and skills.",
    cartCheckoutLink: 'Go to checkout →',
    fichaEyebrow: 'PRODUCT SHEET',
    fichaBio: "I treat the interface as part of the product, not a decorative layer on top of the backend: design systems with Tailwind, microinteractions that confirm every action, and visual hierarchy that guides without needing instructions. This very portfolio — with its cart, its animated stamps and its catalog — is part of that frontend work.",
    specLoc: 'Location', specFocus: 'Focus', specFocusVal: 'UX/UI & interaction',
    specStack: 'Stack', specAlso: 'Also', specAlsoVal: 'Algorithmic problem design',
    specEdu: 'Education', specEduVal: 'Systems Engineering — Universidad Privada Boliviana (in progress)',
    skillsEyebrow: 'SKILLS',
    skillsHeadLevel: 'Level', skillsHeadItem: 'Item', skillsHeadNote: 'Note',
    skillNote1: 'Consistent, maintainable design systems',
    skillNote2: 'Visual feedback on every user action',
    skillNote3: 'Information that reads without reading everything',
    skillName8: 'React', skillNote8: 'Component and state-based interfaces',
    skillName9: 'Angular & TypeScript', skillNote9: 'Static typing on larger projects',
    skillNote4: 'Components built from scratch in CSS/SVG',
    skillNote5: 'Layouts that work on any screen',
    skillNote6: 'From local XAMPP to production hosting',
    skillNote7: 'Designing problems for Codeforces',
    skillsAddBtn: '+ Add skills to cart',
    conceptsEyebrow: 'CONCEPT DESIGNS',
    conceptsIntro: "Three different visual directions for the same kind of problem: a landing page. No real client behind them — these are exercises in aesthetics and systems, built in plain HTML/CSS.",
    concept1Title: 'Minimal SaaS',
    concept1Desc: ' — large type, lots of white space, a single color accent.',
    concept2Title: 'Vibrant web products',
    concept2Desc: ' — saturated color, product grid, big direct buttons.',
    concept3Title: 'Dark portfolio',
    concept3Desc: ' — dark mode, monospaced, a single terminal-style accent.',
    projectsEyebrow: 'PROJECTS',
    projTag1: 'FLAGSHIP PROJECT',
    projTitle1: 'Analytics Dashboard',
    projDesc1: 'SaaS dashboard concept focused on information hierarchy: overview, analytics, customers, reports and settings. Includes loading, empty, error and success states rather than only the ideal path.',
    projTag2: 'DEVELOPER EXPERIENCE',
    projTitle2: 'Developer Platform',
    projDesc2: 'Interface for managing API projects, keys, endpoints, usage and request logs. The design treats technical information as a product experience instead of a wall of documentation.',
    projTag3: 'UX FLOW',
    projDesc3: 'Responsive booking flow from service selection to confirmation, designed around progressive disclosure, clear availability states and mobile-first interaction.',
    addToCartBtn: 'Add to cart',
    addedBtn: '✓ Added',
    stampText: 'ADDED',
    processEyebrow: 'EXPERIENCE',
    proc1Title: 'Mobile & web development', proc1Desc: 'Frontend work on mobile and web apps, collaborating on UX and performance with cross-functional teams.',
    proc2Title: 'Apps & new platforms', proc2Desc: 'Interfaces for mobile and web apps, quickly adapting to new platforms and technologies.',
    proc3Title: 'Integrations & UI', proc3Desc: 'Interfaces for integration tools and workflow automation.',
    proc4Title: 'Frontend & systems', proc4Desc: 'UX/UI design and frontend development from scratch for a real product in production.',
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
