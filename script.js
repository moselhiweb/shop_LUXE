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

// ── NEW FEATURE STATE ──
let wishlist = [];
let compareList = [];
const coupons = { 'LUXE20': 20, 'SAVE10': 10, 'VIP30': 30, 'GOLD15': 15 };
let appliedDiscount = 0;

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

// ── FILTER STATE ──
let activeCat = 'الكل';
let searchQuery = '';
let sortOrder = 'default';

function buildCategoryFilters() {
  const cats = ['الكل', ...new Set(products.map(p => p.cat))];
  const container = document.getElementById('filterCats');
  container.innerHTML = '';
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-cat' + (cat === 'الكل' ? ' active' : '');
    btn.dataset.cat = cat;
    btn.textContent = cat;
    btn.onclick = () => filterBycat(btn);
    container.appendChild(btn);
  });
}

function filterBycat(btn) {
  activeCat = btn.dataset.cat;
  document.querySelectorAll('.filter-cat').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  searchQuery = '';
  document.getElementById('searchClear').classList.remove('visible');
  applyFilters();
}

function applyFilters() {
  searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
  sortOrder = document.getElementById('sortSelect').value;
  document.getElementById('searchClear').classList.toggle('visible', searchQuery.length > 0);

  let filtered = products.filter(p => {
    const matchCat = activeCat === 'الكل' || p.cat === activeCat;
    const matchSearch = p.name.toLowerCase().includes(searchQuery) || p.cat.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (sortOrder === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortOrder === 'price-desc') filtered.sort((a, b) => b.price - a.price);

  renderFilteredProducts(filtered);
}

// ── PRODUCTS RENDERING ──
function renderProducts() {
  buildCategoryFilters();
  applyFilters();
  const input = document.getElementById('searchInput');
  if (input && !input._hasListener) {
    input.addEventListener('input', applyFilters);
    input._hasListener = true;
  }
}

function renderFilteredProducts(filtered) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  const resultsEl = document.getElementById('filterResults');
  if (searchQuery || activeCat !== 'الكل') {
    resultsEl.innerHTML = 'تم العثور على <span>' + filtered.length + '</span> ' + (filtered.length === 1 ? 'منتج' : 'منتجات');
  } else {
    resultsEl.innerHTML = '';
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results"><div class="no-results-icon">🔍</div><div class="no-results-text">لا توجد نتائج</div><div class="no-results-sub">جرب كلمة بحث مختلفة أو اختر تصنيفاً آخر</div></div>';
    return;
  }

  filtered.forEach((product, i) => {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.onclick = () => viewProduct(product.id);
    card.innerHTML =
      '<img class="product-img" src="' + product.img + '" alt="' + product.name + '">' +
      (product.badge ? '<div class="product-badge">' + product.badge + '</div>' : '') +
      '<div class="product-info">' +
        '<div class="product-cat">' + product.cat + '</div>' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<div class="product-price-row">' +
          '<div class="product-price">$' + product.price + '</div>' +
          (product.oldPrice ? '<div class="product-old-price">$' + product.oldPrice + '</div>' : '') +
        '</div>' +
        '<button class="product-cta" onclick="event.stopPropagation(); addToCart(' + product.id + ')">أضف للسلة</button>' +
      '</div>';
    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), i * 60);
  });

  if (window.initReveal) initReveal();
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
  renderReviews(currentProduct.id);

  // update wishlist button state
  const btnWl = document.getElementById('btnWishlist');
  if (btnWl) {
    const inWl = wishlist.find(p => p.id === currentProduct.id);
    btnWl.textContent = inWl ? '♥' : '♡';
    btnWl.classList.toggle('active', !!inWl);
    btnWl.style.color = inWl ? '#e63946' : '';
    btnWl.style.borderColor = inWl ? '#e63946' : '';
  }
  // update compare button state
  const btnCmp = document.querySelector('.btn-compare');
  if (btnCmp) btnCmp.classList.toggle('active', !!compareList.find(p=>p.id===currentProduct.id));

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
  const discountAmt = Math.round(subtotal * (appliedDiscount||0) / 100);
  const afterDiscount = subtotal - discountAmt;
  const tax = Math.round(afterDiscount * 0.14);
  const total = afterDiscount + tax;

  // show/hide discount row
  const discRow = document.getElementById('sidebarDiscountRow');
  const discEl = document.getElementById('sidebarDiscount');
  if (discRow) { discRow.style.display = discountAmt > 0 ? 'flex' : 'none'; }
  if (discEl) discEl.textContent = '-$' + discountAmt;

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
  const countEl2 = document.getElementById('cartCount2');
  if (countEl) countEl.classList.add('bump');
  if (countEl2) countEl2.classList.add('bump');
  setTimeout(() => {
    if (countEl) countEl.classList.remove('bump');
    if (countEl2) countEl2.classList.remove('bump');
  }, 300);
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
  // Always add the selected quantity before checking out
  addToCartFromDetail();
  goToPage(3);
}

function continueToCheckout() {
  if (cart.length === 0) {
    alert('عذراً، السلة فارغة!');
    return;
  }
  
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
  const discountAmt = Math.round(subtotal * (appliedDiscount||0) / 100);
  const afterDiscount = subtotal - discountAmt;
  const tax = Math.round(afterDiscount * 0.14);
  const total = afterDiscount + tax;

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
  appliedDiscount = 0;
  orderNum = Math.floor(Math.random() * 90000) + 10000;
  
  // Reset coupon UI
  const couponInp = document.getElementById('couponInput');
  if (couponInp) couponInp.value = '';
  const msg = document.getElementById('couponMsg');
  if (msg) { msg.textContent = ''; msg.className = 'coupon-msg'; }
  
  updateCartCounts();
  goToPage(1);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartCounts();

  // Reveal animations — re-observe after any render
  window.initReveal = function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  };

  // Make filter-bar and section-header visible immediately (they are always in viewport)
  document.querySelectorAll('.filter-bar, .section-header').forEach(el => {
    el.classList.add('visible');
  });

  initReveal();
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
// ══════════════════════════════════════════
// ── REVIEWS ──
// ══════════════════════════════════════════
// reviews moved to top
const defaultReviews = {
  1: [{name:'أحمد محمد', stars:5, text:'ساعة رائعة جداً! الجودة ممتازة والتصميم فخم.', date:'15 مارس 2025'},
      {name:'سارة علي', stars:4, text:'منتج جيد جداً، الشحن كان سريع والتغليف أنيق.', date:'10 مارس 2025'}],
  2: [{name:'خالد عمر', stars:5, text:'حقيبة من الجلد الطبيعي بالفعل، جودة عالية جداً!', date:'20 مارس 2025'}],
  3: [{name:'منى حسن', stars:4, text:'العطر رائحته قوية وتدوم طويلاً، أنصح به.', date:'5 مارس 2025'}],
  4: [{name:'عمر طارق', stars:5, text:'نظارة خفيفة جداً ومريحة، الحماية ممتازة.', date:'12 مارس 2025'}],
  5: [{name:'نورا أحمد', stars:5, text:'حذاء أنيق جداً ومريح للاستخدام اليومي.', date:'8 مارس 2025'}],
  6: [{name:'يوسف كمال', stars:4, text:'الساعة الذكية تعمل بشكل مثالي، الشاشة واضحة جداً.', date:'18 مارس 2025'}]
};
let productReviews = JSON.parse(JSON.stringify(defaultReviews));
let selectedStars = 0;

function renderReviews(productId) {
  const reviews = productReviews[productId] || [];
  const list = document.getElementById('reviewsList');
  list.innerHTML = '';

  reviews.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.style.animationDelay = (i * 0.1) + 's';
    const starsHtml = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
    card.innerHTML = `
      <div class="review-top">
        <div><div class="review-name">${r.name}</div><div class="review-date">${r.date}</div></div>
        <div class="review-stars">${starsHtml}</div>
      </div>
      <div class="review-text">${r.text}</div>`;
    list.appendChild(card);
  });

  // avg
  const avg = reviews.length ? (reviews.reduce((s,r)=>s+r.stars,0)/reviews.length).toFixed(1) : '0';
  document.getElementById('avgRating').textContent = avg;
  document.getElementById('avgCount').textContent = reviews.length + ' تقييم';
  const fullStars = Math.floor(avg);
  const half = avg - fullStars >= 0.5;
  document.getElementById('avgStars').textContent = '★'.repeat(fullStars) + (half?'½':'') + '☆'.repeat(5-fullStars-(half?1:0));

  // reset form
  selectedStars = 0;
  document.querySelectorAll('.star-opt').forEach(s => { s.classList.remove('selected'); s.style.color=''; s.style.transform=''; });
  document.getElementById('reviewName').value = '';
  document.getElementById('reviewText').value = '';

  // star picker
  const picker = document.getElementById('starPicker');
  picker.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const s = document.createElement('span');
    s.className = 'star-opt';
    s.dataset.val = i;
    s.textContent = '★';
    s.onclick = () => selectStar(i);
    picker.appendChild(s);
  }
}

function selectStar(val) {
  selectedStars = val;
  document.querySelectorAll('.star-opt').forEach(s => {
    const v = parseInt(s.dataset.val);
    s.classList.toggle('selected', v <= val);
    s.style.color = v <= val ? 'var(--gold)' : '';
    s.style.transform = v <= val ? 'scale(1.15)' : '';
  });
}

function submitReview() {
  const name = document.getElementById('reviewName').value.trim();
  const text = document.getElementById('reviewText').value.trim();
  if (!name || !text || !selectedStars) {
    alert('يرجى ملء جميع الحقول واختيار عدد النجوم');
    return;
  }
  if (!productReviews[currentProduct.id]) productReviews[currentProduct.id] = [];
  productReviews[currentProduct.id].unshift({
    name, stars: selectedStars, text,
    date: new Date().toLocaleDateString('ar-EG')
  });
  renderReviews(currentProduct.id);

  // success flash
  const btn = document.querySelector('.btn-submit-review');
  const orig = btn.textContent;
  btn.textContent = '✓ تم إرسال تقييمك!';
  btn.style.background = 'var(--green)';
  btn.style.borderColor = 'var(--green)';
  btn.style.color = '#000';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 2500);
}

// ══════════════════════════════════════════
// ── WISHLIST ──
// ══════════════════════════════════════════

function toggleWishlist() {
  if (!currentProduct) return;
  const idx = wishlist.findIndex(p => p.id === currentProduct.id);
  const btn = document.getElementById('btnWishlist');
  if (idx === -1) {
    wishlist.push(currentProduct);
    btn.textContent = '♥';
    btn.classList.add('active');
    btn.style.color = '#e63946';
    btn.style.borderColor = '#e63946';
  } else {
    wishlist.splice(idx, 1);
    btn.textContent = '♡';
    btn.classList.remove('active');
    btn.style.color = '';
    btn.style.borderColor = '';
  }
  updateWishlistCount();
}

function updateWishlistCount() {
  document.getElementById('wishlistCount').textContent = wishlist.length;
}

function openWishlistPanel() {
  renderWishlistItems();
  document.getElementById('wishlistOverlay').classList.add('show');
}

function closeWishlistPanel() {
  document.getElementById('wishlistOverlay').classList.remove('show');
}

function closeWishlist(e) {
  if (e.target === document.getElementById('wishlistOverlay')) closeWishlistPanel();
}

function renderWishlistItems() {
  const container = document.getElementById('wishlistItems');
  const empty = document.getElementById('wishlistEmpty');
  container.innerHTML = '';

  if (wishlist.length === 0) {
    empty.classList.add('show');
    return;
  }
  empty.classList.remove('show');

  wishlist.forEach(p => {
    const el = document.createElement('div');
    el.className = 'wishlist-item';
    el.innerHTML = `
      <img class="wishlist-item-img" src="${p.img}" alt="${p.name}" onclick="closeWishlistPanel(); viewProduct(${p.id})">
      <div class="wishlist-item-info">
        <div class="wishlist-item-name">${p.name}</div>
        <div class="wishlist-item-price">$${p.price}</div>
      </div>
      <div class="wishlist-item-actions">
        <button class="btn-wl-cart" onclick="addToCart(${p.id}); showToast('أضيف للسلة!')">+ سلة</button>
        <button class="btn-wl-remove" onclick="removeFromWishlist(${p.id})">حذف</button>
      </div>`;
    container.appendChild(el);
  });
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(p => p.id !== id);
  updateWishlistCount();
  renderWishlistItems();
  if (currentProduct && currentProduct.id === id) {
    const btn = document.getElementById('btnWishlist');
    if (btn) { btn.textContent = '♡'; btn.classList.remove('active'); btn.style.color=''; btn.style.borderColor=''; }
  }
}

// ══════════════════════════════════════════
// ── COMPARE ──
// ══════════════════════════════════════════

function addToCompare() {
  if (!currentProduct) return;
  if (compareList.find(p => p.id === currentProduct.id)) {
    showToast('المنتج موجود بالفعل في المقارنة');
    return;
  }
  if (compareList.length >= 3) {
    showToast('يمكنك مقارنة 3 منتجات كحد أقصى');
    return;
  }
  compareList.push(currentProduct);
  document.querySelector('.btn-compare').classList.add('active');
  updateCompareBar();
}

function updateCompareBar() {
  const bar = document.getElementById('compareBar');
  const itemsEl = document.getElementById('compareItems');

  if (compareList.length === 0) { bar.classList.remove('show'); return; }
  bar.classList.add('show');

  itemsEl.innerHTML = '';
  compareList.forEach(p => {
    const el = document.createElement('div');
    el.className = 'compare-item';
    el.innerHTML = `<span class="compare-item-name">${p.name}</span><button class="compare-item-remove" onclick="removeFromCompare(${p.id})">✕</button>`;
    itemsEl.appendChild(el);
  });
}

function removeFromCompare(id) {
  compareList = compareList.filter(p => p.id !== id);
  updateCompareBar();
  if (currentProduct && currentProduct.id === id) {
    document.querySelector('.btn-compare').classList.remove('active');
  }
}

function clearCompare() {
  compareList = [];
  updateCompareBar();
  document.querySelectorAll('.btn-compare').forEach(b => b.classList.remove('active'));
}

function doCompare() {
  if (compareList.length < 2) { showToast('اختر منتجين على الأقل للمقارنة'); return; }
  renderCompareTable();
  document.getElementById('compareOverlay').classList.add('show');
}

function closeCompareModal(e) {
  if (!e || e.target === document.getElementById('compareOverlay')) {
    document.getElementById('compareOverlay').classList.remove('show');
  }
}

function renderCompareTable() {
  const wrap = document.getElementById('compareTableWrap');
  const ps = compareList;
  const minPrice = Math.min(...ps.map(p=>p.price));

  let html = '<table class="compare-table"><thead><tr><th class="compare-row-label"></th>';
  ps.forEach(p => { html += `<th>${p.name}</th>`; });
  html += '</tr></thead><tbody>';

  // images
  html += '<tr><td class="compare-row-label">المنتج</td>';
  ps.forEach(p => {
    html += `<td><img class="compare-prod-img" src="${p.img}" alt="${p.name}"><div class="compare-prod-name">${p.name}</div></td>`;
  });
  html += '</tr>';

  // category
  html += '<tr><td class="compare-row-label">الفئة</td>';
  ps.forEach(p => { html += `<td>${p.cat}</td>`; });
  html += '</tr>';

  // price
  html += '<tr><td class="compare-row-label">السعر</td>';
  ps.forEach(p => {
    const cls = p.price === minPrice ? 'compare-price-cell compare-better' : 'compare-price-cell compare-worse';
    html += `<td class="${cls}">$${p.price}</td>`;
  });
  html += '</tr>';

  // old price
  html += '<tr><td class="compare-row-label">قبل الخصم</td>';
  ps.forEach(p => { html += `<td style="color:var(--gray);text-decoration:line-through">$${p.oldPrice||'—'}</td>`; });
  html += '</tr>';

  // discount
  html += '<tr><td class="compare-row-label">الخصم</td>';
  ps.forEach(p => {
    const disc = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100)+'%' : '—';
    html += `<td style="color:var(--green);font-weight:700">${disc}</td>`;
  });
  html += '</tr>';

  // add to cart
  html += '<tr><td class="compare-row-label"></td>';
  ps.forEach(p => {
    html += `<td><button onclick="addToCart(${p.id}); showToast('أضيف للسلة!')" style="background:var(--gold);border:none;color:#000;padding:10px 20px;font-family:Cairo,sans-serif;font-weight:900;font-size:12px;cursor:pointer;letter-spacing:1px">أضف للسلة</button></td>`;
  });
  html += '</tr>';

  html += '</tbody></table>';
  wrap.innerHTML = html;
}

// ══════════════════════════════════════════
// ── COUPON ──
// ══════════════════════════════════════════

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const msg = document.getElementById('couponMsg');
  if (coupons[code]) {
    appliedDiscount = coupons[code];
    msg.textContent = '✓ تم تطبيق كود الخصم! خصم ' + appliedDiscount + '%';
    msg.className = 'coupon-msg success';
    renderCartSidebar();
  } else {
    appliedDiscount = 0;
    msg.textContent = '✗ كود الخصم غير صحيح';
    msg.className = 'coupon-msg error';
    renderCartSidebar();
  }
}

// ══════════════════════════════════════════
// ── TOAST NOTIFICATION ──
// ══════════════════════════════════════════
function showToast(msg) {
  let toast = document.getElementById('luxeToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'luxeToast';
    toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--gold);color:#000;padding:12px 28px;font-family:Cairo,sans-serif;font-weight:700;font-size:14px;letter-spacing:1px;z-index:99999;opacity:0;transition:all 0.3s ease;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2500);
}
