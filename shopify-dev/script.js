const cart = [];

const typeTarget = document.getElementById('typeTarget');
const fullText = 'Cada tienda que construyo es un checkout menos abandonado.';
let charIndex = 0;

function typeWriter(){
  if(charIndex <= fullText.length){
    typeTarget.innerHTML = fullText.slice(0, charIndex) + '<span class="cursor">&nbsp;</span>';
    charIndex++;
    setTimeout(typeWriter, 28);
  } else {
    typeTarget.innerHTML = fullText + '<span class="cursor">&nbsp;</span>';
  }
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduceMotion){
  typeTarget.textContent = fullText;
} else {
  typeWriter();
}

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

document.querySelectorAll('[data-cart-item]').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.dataset.cartItem;
    if(!cart.includes(item)){
      cart.push(item);
      if(btn.classList.contains('add-btn')){
        btn.textContent = '✓ Añadido';
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
  const itemsLine = cart.length ? cart.join(', ') : 'sin artículos seleccionados';
  const subject = encodeURIComponent(`Pedido de contacto — ${nombre}`);
  const body = encodeURIComponent(
    `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}\n\nCarrito: ${itemsLine}`
  );
  window.location.href = `mailto:mateovelascop19@gmail.com?subject=${subject}&body=${body}`;
});
