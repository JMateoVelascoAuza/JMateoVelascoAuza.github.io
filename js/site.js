/* Mateo Velasco — interacciones y animaciones */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const body = document.body;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  /* ── Íconos de marcas ─────────────────────────────────── */
  const icono = (n) => {
    const i = window.ICONOS && window.ICONOS[n];
    return i ? `<svg viewBox="0 0 24 24" role="img" aria-label="${i.t}"><title>${i.t}</title><path d="${i.d}"/></svg>` : "";
  };
  $$("[data-icon]").forEach((a) => { a.innerHTML = icono(a.dataset.icon); });
  $$("[data-icons]").forEach((g) => { g.innerHTML = g.dataset.icons.split(" ").map((n) => `<span>${icono(n)}</span>`).join(""); });

  /* ── Idiomas ──────────────────────────────────────────── */
  const ES = {
    "nav.home": "Inicio", "nav.projects": "Proyectos", "nav.about": "Sobre mí",
    "work.1": "Trabajemos", "work.2": "juntos",
    "hero.1": "¡Hola, soy <em>Mateo</em>!",
    "hero.2": "<em>Diseño</em><svg class=\"mini\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M20 3 9 14l-2 5 5-2L23 6z\"/></svg> y <em>desarrollo</em><svg class=\"mini\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 5h16v10H4zM2 17h20v2H2z\"/></svg>",
    "hero.3": "apps y sitios web.",
    "hero.sub": "También construyo el backend, las integraciones y los CRM…",
    "hero.more": "Ver más",
    "chat.1": "<p>Necesito un <em>sitio web</em> para mi <em>startup</em>, rápido.</p><p>Conectamos obras con ferreterías en Cochabamba.</p>",
    "chat.2": "<p>¡Perfecto!</p><p>Me encargo de todo: primero el <em>diseño</em>, que te muestro. Cuando lo apruebes,</p><p><em>desarrollo</em> tu <em>sitio</em> y lo pongo en línea.</p>",
    "chat.3": "<p>Genial, ¿cuándo empezamos :)?</p>",
    "chat.now": "¡Ahora!",
    "an.1t": "Análisis del mercado",
    "an.1": "<p>Los constructores comparan precios</p><p>llamando a una ferretería tras otra.</p><p>La mayoría de los sitios del rubro son</p><p>catálogos genéricos que nunca muestran</p><p>stock ni precio de un vistazo.</p>",
    "an.2t": "Problema",
    "an.2": "<p>El público es amplio: residentes,</p><p>ingenieros y particulares. La página</p><p>tiene que ser clara para todos, en el</p><p>celular y con datos móviles inestables.</p>",
    "de.1t": "Comparar de un vistazo", "de.1": "Precio y stock lado a lado, para decidir en segundos.",
    "de.2t": "Cálido y sólido", "de.2": "Colores tierra y tipografía limpia que se sienten de obra, no de banco.",
    "de.3t": "Bilingüe y accesible", "de.3": "Español e inglés, usable con teclado y con contraste AA.",
    "code.live": "En vivo en entreobra.com",
    "pr.t": "Mis mejores proyectos",
    "pr.1": "Landing + PWA instalable para un marketplace de materiales de construcción en Cochabamba. Next.js, GSAP, ES / EN.",
    "pr.2": "Un portafolio con forma de catálogo de productos: una versión por rol, cada una con su carrito.",
    "pr.3t": ".Tu proyecto", "pr.3": "El próximo puede ser el tuyo.",
    "faq.t1": "Seguro te preguntas",
    "faq.1t": "¿Cuánto cuesta?",
    "faq.1": "<p>Depende del alcance y del tiempo que tome. Cuéntame tu proyecto y te envío una cotización clara, sin sorpresas.</p>",
    "faq.2t": "¿Y después?",
    "faq.2": "<p>Recibes un código limpio y te enseño a actualizar tu contenido. Las funciones nuevas pueden llegar en fases siguientes.</p>",
    "faq.3t": "Duerme tranquilo",
    "faq.3": "<p>¿Necesitas a alguien que lo mantenga? El hosting, las actualizaciones y los arreglos pueden ir en un plan mensual.</p>",
    "ab.place": "La Paz (Bolivia)",
    "ab.h1": "Diseño y desarrollo apps y sitios web rápidos, claros y con vida.",
    "ab.p1": "Diez años en tecnología, desde el hardware y el soporte hasta productos full-stack. Hoy construyo apps móviles con React Native y Expo, la web con Next.js y Astro, y backends con Supabase y PHP.",
    "ab.h2": "También conecto los sistemas que un negocio ya usa.",
    "ab.p2": "Integraciones de CRM y ERP, automatizaciones y flujos de WhatsApp: GoHighLevel, ViciDial, Zendesk y Kommo. Ingeniería de Sistemas en la Universidad Privada Boliviana y Tech Lead Team en Google Developer Student Clubs.",
    "ab.link": "Conoce mi recorrido (LinkedIn)",
    "j.1": "Desarrollador full-stack freelance", "j.2": "Full-stack y sistemas · Inbolsa", "j.3": "Integraciones y CRM · The Call Center Doctors",
    "j.4": "Desarrollador de software · Geolabs.cloud / Aerovista", "j.5": "Desarrollador móvil y web · ETV Consulting", "j.6": "Técnico de hardware y atención al cliente",
    "sk.1": ".Diseño y front-end", "sk.2": ".Móvil y back-end",
    "foot.cat": "Catálogo de portafolios",
    "ct.t": "Trabajemos juntos", "ct.sub": "Cuéntame tu proyecto. Suelo responder en menos de un día.",
    "ct.name": "Nombre", "ct.email": "Correo", "ct.msg": "Tu proyecto", "ct.send": "Enviar",
  };
  const TITULOS = {
    en: [["First, we need an", "<em>idea…</em>"], ["Then an analysis and a", "<em>direction…</em>"], ["Creativity takes place", "for the <em>design</em>."], ["Finally, I <em>code</em> and", "I <em>publish</em> your <em>website</em>!"]],
    es: [["Primero, necesitamos una", "<em>idea…</em>"], ["Luego, un análisis y una", "<em>dirección…</em>"], ["La creatividad aparece", "en el <em>diseño</em>."], ["Por último, <em>programo</em> y", "¡<em>publico</em> tu <em>sitio</em>!"]],
  };
  const MSG = {
    en: { fill: "Please fill in every field.", mail: "Please enter a valid email.", ok: "Your email app should open with the message ready. Thanks!" },
    es: { fill: "Completa todos los campos.", mail: "Escribe un correo válido.", ok: "Se abrirá tu app de correo con el mensaje listo. ¡Gracias!" },
  };
  const EN = {};
  $$("[data-i18n]").forEach((el) => { EN[el.dataset.i18n] = el.innerHTML; });
  let guardado = null;
  try { guardado = localStorage.getItem("lang"); } catch (e) { /* sin almacenamiento */ }
  let lang = guardado || ((navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en");

  function setLang(l, guardar = false) {
    lang = l === "es" ? "es" : "en";
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => {
      const k = el.dataset.i18n;
      const v = lang === "es" ? ES[k] : EN[k];
      if (v !== undefined) el.innerHTML = v;
    });
    $$(".menu__lang button").forEach((b) => b.classList.toggle("is-on", b.dataset.lang === lang));
    pintarTitulo(paso, false);
    if (guardar) { try { localStorage.setItem("lang", lang); } catch (e) { /* sin almacenamiento */ } }
    if (hasGsap) window.ScrollTrigger.refresh();
  }
  $$(".menu__lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang, true)));

  /* ── Título fijo que cambia por sección ───────────────── */
  const stitle = $(".story .stitle");
  let paso = 1;
  function pintarTitulo(n, animar = true) {
    paso = n;
    const [a, b] = TITULOS[lang][n - 1];
    $('[data-st="a"]', stitle).innerHTML = a;
    $('[data-st="b"]', stitle).innerHTML = b;
    $('[data-n="a"]', stitle).textContent = String(n * 2 - 1).padStart(2, "0");
    $('[data-n="b"]', stitle).textContent = String(n * 2).padStart(2, "0");
    if (!animar || reduce) return;
    stitle.classList.remove("is-typing");
    void stitle.offsetWidth; // reinicia la animación
    $$(".cover", stitle).forEach((c, i) => { c.style.setProperty("--d", ".45s"); c.style.setProperty("--delay", `${i * 0.3}s`); });
    stitle.classList.add("is-typing");
  }

  /* ── Carga ────────────────────────────────────────────── */
  body.classList.add("is-loading");
  let listo = false;
  function arrancar() {
    if (listo) return;
    listo = true;
    window.scrollTo(0, 0);
    body.classList.remove("is-loading");
    body.classList.add("is-ready");
    $(".hero__text").classList.add("is-typing");
    if (hasGsap) window.ScrollTrigger.refresh();
  }
  window.addEventListener("load", () => setTimeout(arrancar, 700));
  setTimeout(arrancar, 3500);
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  setLang(lang);

  /* ── Barra de progreso ────────────────────────────────── */
  const barra = $(".progress__bar");
  const movil = () => window.innerWidth <= 1024;
  function progreso() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? (window.scrollY / h) * 100 : 0;
    if (movil()) { barra.style.width = p + "%"; barra.style.height = "100%"; }
    else { barra.style.height = p + "%"; barra.style.width = "100%"; }
  }
  window.addEventListener("scroll", progreso, { passive: true });
  window.addEventListener("resize", progreso);
  progreso();

  /* ── Menú activo ──────────────────────────────────────── */
  const items = $$(".menu__item");
  const activar = (sec) => items.forEach((a) => a.classList.toggle("is-active", a.dataset.sec === sec));

  /* ── Parallax del hero con el mouse ───────────────────── */
  const hero = $(".hero");
  const fact = [-1.1, 1.0, 0.9, -1.2, -0.8, 1.2, -1.0, 0.8];
  const its = $$(".it");
  if (!reduce) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / 26, y = (e.clientY - r.top - r.height / 2) / 26;
      its.forEach((el, i) => {
        const f = fact[i % fact.length];
        if (hasGsap) window.gsap.to(el, { x: x * f, y: y * f * 0.7, duration: 0.8, ease: "power3.out" });
        else el.style.transform = `translate(${x * f}px, ${y * f * 0.7}px)`;
      });
    });
  }

  /* ── Carrusel de proyectos (hover en los bordes + cursor) ─ */
  const cards = $("#cards"), cursor = $("#cursor");
  let dir = 0, raf = 0;
  const paso2 = () => { if (dir) { cards.scrollLeft += dir * 7; raf = requestAnimationFrame(paso2); } };
  [["#next", 1], ["#prev", -1]].forEach(([sel, d]) => {
    const z = $(sel);
    z.addEventListener("mouseenter", () => { dir = d; cursor.classList.add("is-on"); cursor.classList.toggle("is-prev", d < 0); cancelAnimationFrame(raf); raf = requestAnimationFrame(paso2); });
    z.addEventListener("mouseleave", () => { dir = 0; cursor.classList.remove("is-on"); });
    z.addEventListener("mousemove", (e) => { cursor.style.left = e.clientX + "px"; cursor.style.top = e.clientY + "px"; });
    z.addEventListener("click", () => cards.scrollBy({ left: d * 420, behavior: "smooth" }));
  });

  /* ── Panel de contacto ────────────────────────────────── */
  const panel = $("#contact");
  const abrir = () => { body.classList.add("is-contact"); panel.setAttribute("aria-hidden", "false"); setTimeout(() => $("input", panel).focus(), 450); };
  const cerrar = () => { body.classList.remove("is-contact"); panel.setAttribute("aria-hidden", "true"); };
  $("#work").addEventListener("click", abrir);
  $$(".js-contact").forEach((b) => b.addEventListener("click", abrir));
  $("#contactClose").addEventListener("click", cerrar);
  $("#contactBack").addEventListener("click", cerrar);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrar(); });

  $("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.currentTarget, out = $("#formMsg");
    const nombre = f.name.value.trim(), correo = f.email.value.trim(), msg = f.message.value.trim();
    out.className = "form__msg";
    if (!nombre || !correo || !msg) { out.textContent = MSG[lang].fill; out.classList.add("is-err"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) { out.textContent = MSG[lang].mail; out.classList.add("is-err"); return; }
    const asunto = encodeURIComponent(`${lang === "es" ? "Proyecto de" : "Project from"} ${nombre}`);
    const cuerpo = encodeURIComponent(`${msg}\n\n— ${nombre} (${correo})`);
    window.location.href = `mailto:mateovelascop19@gmail.com?subject=${asunto}&body=${cuerpo}`;
    out.textContent = MSG[lang].ok; out.classList.add("is-ok");
  });

  /* ── Animaciones con scroll (GSAP) ────────────────────── */
  if (!hasGsap) return;
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  if (window.ScrollToPlugin) gsap.registerPlugin(window.ScrollToPlugin);

  // Navegación suave con GSAP (como la referencia)
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length < 2 || !$(id)) return;
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: { y: id, offsetY: 0 }, ease: "power2.inOut" });
  }));

  // Menú activo por sección
  [["#home", "home"], ["#projects", "projects"], ["#about", "about"]].forEach(([sel, sec], i, arr) => {
    ScrollTrigger.create({
      trigger: sel, start: "top 40%",
      endTrigger: arr[i + 1] ? arr[i + 1][0] : "body", end: arr[i + 1] ? "top 40%" : "bottom bottom",
      onToggle: (s) => { if (s.isActive) activar(sec); },
    });
  });
  ScrollTrigger.create({ trigger: "#faq", start: "top 40%", end: "bottom 40%", onToggle: (s) => { if (s.isActive) activar("projects"); } });

  // Título fijo: cambia en cada paso de la historia
  $$(".story [data-step]").forEach((sec) => {
    const n = Number(sec.dataset.step);
    ScrollTrigger.create({
      trigger: sec, start: "top 55%", end: "bottom 55%",
      onEnter: () => pintarTitulo(n), onEnterBack: () => pintarTitulo(n),
    });
  });

  if (reduce) return;

  // Chat: los mensajes entran desde los lados, uno tras otro
  [[".m1", -100, "top 75%"], [".m2", 100, "top 60%"], [".m3", -100, "top 45%"]].forEach(([sel, x, start]) => {
    gsap.from(sel, { x, opacity: 0, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ".sec-chat", start, toggleActions: "play none none reverse" } });
  });
  gsap.from(".now", { y: 40, opacity: 0, duration: 0.6, scrollTrigger: { trigger: ".now", start: "top 90%", toggleActions: "play none none reverse" } });

  // Párrafos con efecto de inclinación
  $$(".reveal").forEach((r) => {
    gsap.from($$("p", r), {
      y: 100, skewY: 7, opacity: 0, duration: 0.8, ease: "power4.out", stagger: { amount: 0.3 },
      scrollTrigger: { trigger: r, start: "top 85%", toggleActions: "play none none reverse" },
    });
  });
  gsap.from(".col__t", { y: 30, opacity: 0, stagger: 0.15, duration: 0.6, scrollTrigger: { trigger: ".cols", start: "top 85%", toggleActions: "play none none reverse" } });

  // Diseño: la tablet crece, las tarjetas caen y la página se desplaza dentro
  gsap.from(".tablet", { scale: 0.75, y: 100, opacity: 0.3, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".sec-design", start: "top 75%", toggleActions: "play none none reverse" } });
  gsap.from(".feat", { y: -100, opacity: 0, duration: 0.6, stagger: 0.18, ease: "back.out(1.6)", scrollTrigger: { trigger: ".feats", start: "top 75%", toggleActions: "play none none reverse" } });
  const img = $(".tablet__screen img");
  gsap.to(img, {
    y: () => -(img.offsetHeight - img.parentElement.offsetHeight), ease: "none",
    scrollTrigger: { trigger: ".sec-design", start: "top 30%", end: "bottom 30%", scrub: 1, invalidateOnRefresh: true },
  });

  // Código: laptop y celular suben
  gsap.from(".mac", { y: 120, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".devices", start: "top 80%", toggleActions: "play none none reverse" } });
  gsap.from(".phone", { y: 160, opacity: 0, duration: 0.9, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".devices", start: "top 80%", toggleActions: "play none none reverse" } });
  gsap.from(".live", { opacity: 0, y: 20, scrollTrigger: { trigger: ".live", start: "top 95%", toggleActions: "play none none reverse" } });

  // Proyectos
  gsap.from(".ptitle", { y: 60, opacity: 0, duration: 0.7, scrollTrigger: { trigger: ".sec-projects", start: "top 75%", toggleActions: "play none none reverse" } });
  gsap.from(".card", { x: 160, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".cards", start: "top 80%", toggleActions: "play none none reverse" } });

  // Preguntas
  gsap.from(".sec-faq .stitle", { y: 40, opacity: 0, duration: 0.6, scrollTrigger: { trigger: ".sec-faq", start: "top 75%", toggleActions: "play none none reverse" } });
  gsap.from(".q__h", { x: -40, opacity: 0, stagger: 0.2, duration: 0.6, scrollTrigger: { trigger: ".faq", start: "top 80%", toggleActions: "play none none reverse" } });
  gsap.from(".q__line", { scaleX: 0, stagger: 0.2, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: ".faq", start: "top 80%", toggleActions: "play none none reverse" } });

  // Sobre mí
  gsap.from([".about__name", ".about__place"], { y: 60, opacity: 0, stagger: 0.12, duration: 0.7, scrollTrigger: { trigger: ".sec-about", start: "top 75%", toggleActions: "play none none reverse" } });
  $$(".reveal-up").forEach((el) => gsap.from(el, { y: 50, opacity: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" } }));
  gsap.from(".journey li", { y: 24, opacity: 0, stagger: 0.07, duration: 0.5, scrollTrigger: { trigger: ".journey", start: "top 88%", toggleActions: "play none none reverse" } });
  gsap.from(".skills__i span", { scale: 0.3, opacity: 0, stagger: 0.04, duration: 0.45, ease: "back.out(2)", scrollTrigger: { trigger: ".skills", start: "top 90%", toggleActions: "play none none reverse" } });

  // El botón "Work with me" se acerca al contenido en "Sobre mí"
  ScrollTrigger.create({ trigger: "#about", start: "top 30%", onEnter: () => $("#work").classList.add("is-big"), onLeaveBack: () => $("#work").classList.remove("is-big") });
})();
