// ── DATA ──
const products = [
  {
    id:1, name:"ساعة رويال كرونو", cat:"ساعات فاخرة",
    price:1299, oldPrice:1999,
    desc:"ساعة فاخرة بإطار من الفولاذ المقاوم للصدأ وزجاج سفاير. مقاومة للماء حتى 100 متر. حركة أوتوماتيكية سويسرية دقيقة.",
    badge:"مميز",
    color:"#1a1205",
    emoji:"⌚",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    imgs:[
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80"
    ]
  },
  {
    id:2, name:"حقيبة ليذر كلاسيك", cat:"حقائب جلدية",
    price:499, oldPrice:799,
    desc:"حقيبة يد مصنوعة من الجلد الطبيعي الإيطالي. مبطنة من الداخل بالجلد الناعم. تتسع لجهاز 15 بوصة.",
    badge:"جديد",
    color:"#1a0a05",
    emoji:"👜",
    img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    imgs:[
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
    ]
  },
  {
    id:3, name:"عطر أود رويال", cat:"عطور شرقية",
    price:299, oldPrice:450,
    desc:"عطر شرقي فاخر بمسحة من العود الأصيل والمسك الأبيض. يدوم لأكثر من 12 ساعة. حجم 100 مل.",
    badge:"-33%",
    color:"#0a0a1a",
    emoji:"🌸",
    img:"https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&q=80",
    imgs:[
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&q=80",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80"
    ]
  },
  {
    id:4, name:"نظارات شمسية فاخرة", cat:"إكسسوارات",
    price:199, oldPrice:299,
    desc:"نظارات شمسية بإطار من التيتانيوم المقاوم للصدأ. عدسات بولارويد تحمي من الأشعة فوق البنفسجية 100%.",
    badge:"جديد",
    color:"#0a1a0a",
    emoji:"🕶️",
    img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    imgs:[
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80"
    ]
  },
  {
    id:5, name:"حذاء جلدي كلاسيكي", cat:"أحذية",
    price:399, oldPrice:599,
    desc:"حذاء جلدي إيطالي بتصميم كلاسيكي. مريح للارتداء اليومي والمناسبات الرسمية. مقاسات متعددة متوفرة.",
    badge:"مميز",
    color:"#1a0a0a",
    emoji:"👞",
    img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    imgs:[
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80"
    ]
  },
  {
    id:6, name:"ساعة يد ذكية", cat:"ساعات ذكية",
    price:799, oldPrice:999,
    desc:"ساعة يد ذكية بتصميم أنيق. تتبع اللياقة البدنية، مراقبة النوم، وإشعارات الهاتف. شاشة AMOLED.",
    badge:"-20%",
    color:"#0a0a1a",
    emoji:"⌚",
    img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    imgs:[
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80"
    ]
  }
];

// ── STATE ──
let currentPage = 1;
let cart = [];
let currentProduct = null;
let orderNum = Math.floor(Math.random() * 90000) + 10000;

// ── CURSOR ──
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;
let followerX = mouseX;
let followerY = mouseY;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 1;
  cursorY += (mouseY - cursorY) * 1;
  
  followerX += (mouseX - followerX) * 0.15;
  followerY += (mouseY - followerY) * 0.15;
  
  if (cursor) {
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
  }
  if (cursorFollower) {
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
  }
  
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener('mousedown', () => {
  if (cursor) cursor.style.transform = 'scale(0.8)';
  if (cursorFollower) cursorFollower.style.transform = 'scale(0.5)';
});

document.addEventListener('mouseup', () => {
  if (cursor) cursor.style.transform = 'scale(1)';
  if (cursorFollower) cursorFollower.style.transform = 'scale(1)';
});

// ── PAGE TRANSITIONS ──
function goToPage(pageNum) {
  const current = document.getElementById('page' + currentPage);
  const next = document.getElementById('page' + pageNum);
  const transition = document.getElementById('pageTransition');

  current.classList.add('exit');
  transition.classList.add('enter');

  setTimeout(() => {
    current.classList.remove('active', 'exit');
    next.classList.add('active');
    transition.classList.remove('enter');
    transition.classList.add('leave');
    currentPage = pageNum;
    updateCartCounts();
  }, 300);

  setTimeout(() => {
    transition.classList.remove('leave');
  }, 600);
}

function navigateTo(pageNum) {
  goToPage(pageNum);
}

// ── PRODUCTS RENDERING ──
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => viewProduct(product.id);
    card.innerHTML = `
      <img class="product-img" src="${product.img}" alt="${product.name}">
      ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
      <div class="product-info">
        <div class="product-cat">${product.cat}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price-row">
          <div class="product-price">$${product.price}</div>
          ${product.oldPrice ? `<div class="product-old-price">$${product.oldPrice}</div>` : ''}
        </div>
        <button class="product-cta" onclick="event.stopPropagation(); addToCart(${product.id})">أضف للسلة</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── PRODUCT DETAIL ──
function viewProduct(id) {
  currentProduct = products.find(p => p.id === id);
  if (!currentProduct) return;

  document.getElementById('detailMainImg').src = currentProduct.img;
  document.getElementById('detailCat').textContent = currentProduct.cat;
  document.getElementById('detailCatLabel').textContent = currentProduct.cat;
  document.getElementById('detailBreadName').textContent = currentProduct.name;
  document.getElementById('detailName').textContent = currentProduct.name;
  document.getElementById('detailPrice').textContent = '$' + currentProduct.price;
  document.getElementById('detailOldPrice').textContent = currentProduct.oldPrice ? '$' + currentProduct.oldPrice : '';
  document.getElementById('detailDiscount').textContent = currentProduct.oldPrice ? '-' + Math.round((1 - currentProduct.price/currentProduct.oldPrice) * 100) + '%' : '';
  document.getElementById('detailDesc').textContent = currentProduct.desc;

  const thumbs = document.getElementById('detailThumbs');
  thumbs.innerHTML = '';
  currentProduct.imgs.forEach((img, i) => {
    const thumb = document.createElement('img');
    thumb.className = 'thumb' + (i === 0 ? ' active' : '');
    thumb.src = img;
    thumb.onclick = () => changeMainImg(img, thumb);
    thumbs.appendChild(thumb);
  });

  renderSuggestions();
  goToPage(2);
}

function changeMainImg(src, thumb) {
  document.getElementById('detailMainImg').src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// ── QUANTITY ──
function changeQty(delta) {
  const display = document.getElementById('qtyDisplay');
  let qty = parseInt(display.value) + delta;
  if (qty < 1) qty = 1;
  display.value = qty;
}

// ── CART ──
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartCounts();
  showCartBump();
}

function addToCartFromDetail() {
  const qty = parseInt(document.getElementById('qtyDisplay').value);
  const existing = cart.find(item => item.id === currentProduct.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...currentProduct, qty });
  }
  updateCartCounts();
  showCartBump();
}

function updateCartCounts() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartCount2').textContent = count;
  renderCartSidebar();
}

function renderCartSidebar() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = Math.round(subtotal * 0.14);
  const total = subtotal + tax;

  const sidebarItem = document.getElementById('sidebarOrderItem');
  if (sidebarItem) {
    sidebarItem.innerHTML = '';
    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'order-item';
      itemDiv.innerHTML = `
        <img class="order-item-img" src="${item.img}" alt="${item.name}">
        <div class="order-item-info">
          <div class="order-item-name">${item.name}</div>
          <div class="order-item-variant">الكمية: ${item.qty}</div>
          <div class="order-item-price">$${item.price * item.qty}</div>
        </div>
      `;
      sidebarItem.appendChild(itemDiv);
    });
  }

  const subtotalEl = document.getElementById('sidebarSubtotal');
  if (subtotalEl) subtotalEl.textContent = '$' + subtotal;
  
  const taxEl = document.getElementById('sidebarTax');
  if (taxEl) taxEl.textContent = '$' + tax;
  
  const totalEl = document.getElementById('sidebarTotal');
  if (totalEl) totalEl.textContent = '$' + total;
}

function showCartBump() {
  const countEl = document.getElementById('cartCount');
  countEl.classList.add('bump');
  setTimeout(() => countEl.classList.remove('bump'), 300);
}

// ── SUGGESTIONS ──
function renderSuggestions() {
  const grid = document.getElementById('suggestionsGrid');
  grid.innerHTML = '';

  const suggestions = products.filter(p => p.id !== currentProduct.id).slice(0, 4);
  suggestions.forEach(product => {
    const card = document.createElement('div');
    card.className = 'sug-card';
    card.onclick = () => viewProduct(product.id);
    card.innerHTML = `
      <img class="sug-img" src="${product.img}" alt="${product.name}">
      <div class="sug-info">
        <div class="sug-name">${product.name}</div>
        <div class="sug-price">$${product.price}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── CHECKOUT ──
function buyNow() {
  const existing = cart.find(item => item.id === currentProduct.id);
  if (!existing) {
    addToCartFromDetail();
  }
  goToPage(3);
}

function continueToCheckout() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const postal = document.getElementById('postal').value;
  const country = document.getElementById('country').value;

  if (!firstName || !lastName || !email || !phone || !address || !city || !postal) {
    alert('يرجى ملء جميع الحقول المطلوبة');
    return;
  }

  renderInvoice();
  goToPage(4);
}

function renderInvoice() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = Math.round(subtotal * 0.14);
  const total = subtotal + tax;

  document.getElementById('invNum').textContent = orderNum;
  document.getElementById('invDate').textContent = 'التاريخ: ' + new Date().toLocaleDateString('ar-EG');
  document.getElementById('invClientName').textContent = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
  document.getElementById('invClientDetails').innerHTML = 
    document.getElementById('address').value + ', ' + document.getElementById('city').value + ', ' + document.getElementById('country').value + '<br>' +
    document.getElementById('email').value + '<br>' +
    document.getElementById('phone').value;

  const tbody = document.getElementById('invTableBody');
  tbody.innerHTML = '';
  cart.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <div class="inv-product-cell">
          <img class="inv-img" src="${item.img}" alt="${item.name}">
          <div>
            <div class="inv-product-name">${item.name}</div>
            <div class="inv-product-sku">رمز المنتج: LX${item.id}</div>
          </div>
        </div>
      </td>
      <td>${item.qty}</td>
      <td>$${item.price}</td>
      <td>$${item.price * item.qty}</td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById('invSubtotal').textContent = '$' + subtotal;
  document.getElementById('invTax').textContent = '$' + tax;
  document.getElementById('invTotal').textContent = '$' + total;
}

// ── CONFIRM ORDER ──
function confirmOrder() {
  document.getElementById('orderNum').textContent = orderNum;
  document.getElementById('successOverlay').classList.add('show');

  // Create particles
  const particles = document.getElementById('successParticles');
  particles.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.setProperty('--tx', (Math.random() - 0.5) * 400 + 'px');
    particle.style.setProperty('--ty', (Math.random() - 0.5) * 400 + 'px');
    particle.style.setProperty('--dur', (Math.random() * 2 + 1) + 's');
    particle.style.setProperty('--delay', Math.random() * 0.5 + 's');
    particles.appendChild(particle);
  }
}

function backToHome() {
  document.getElementById('successOverlay').classList.remove('show');
  cart = [];
  updateCartCounts();
  goToPage(1);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartCounts();

  // Reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// ── DOWNLOAD PDF ──
function downloadInvoicePDF() {
  const invoiceElement = document.querySelector('.invoice-wrapper');
  const btnContainer = invoiceElement.querySelector('div[style*="display: flex"]');
  
  if (btnContainer) btnContainer.style.display = 'none';
  invoiceElement.classList.add('pdf-mode');
  
  const opt = {
    margin:       10,
    filename:     'invoice_LUXE_' + orderNum + '.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(invoiceElement).save().then(() => {
    invoiceElement.classList.remove('pdf-mode');
    if (btnContainer) btnContainer.style.display = 'flex';
  });
}