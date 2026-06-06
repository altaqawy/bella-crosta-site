const restaurant = {
  name: "Bella Crosta",
  tagline: "French Passion. Egyptian Heart. Italian Crust.",
  phoneDisplay: "+20 10 3125 2519",
  phone: "+201031252519",
  whatsapp: "201031252519",
  instagram: "https://www.instagram.com/bella.crosta.pizza?igsh=OWRkMWJnajdlaGZ2",
  tiktok: "https://www.tiktok.com/@themigofit?_r=1&_t=ZS-96xIFbsLuYK",
  address: "18 Doctor Anwar Al Mofty Street, Obour, Qalyubia, Egypt",
  maps: "https://www.google.com/maps/search/?api=1&query=18%20Doctor%20Anwar%20Al%20Mofty%20Street%20Obour%20Qalyubia%20Egypt",
  hours: [
    { day: "Monday", open: null, close: null },
    { day: "Tuesday", open: null, close: null },
    { day: "Wednesday", open: null, close: null },
    { day: "Thursday", open: "16:00", close: "23:00" },
    { day: "Friday", open: "16:00", close: "23:00" },
    { day: "Saturday", open: "16:00", close: "23:00" },
    { day: "Sunday", open: "16:00", close: "23:00" },
  ],
};

const assets = "./assets/bella-crosta/";

const menuItems = [
  {
    id: "marinara",
    name: "Marinara",
    category: "Classics",
    description: "Tomato sauce with olive oil, basil, and roasted garlic.",
    ingredients: ["Tomato sauce", "Olive oil", "Basil", "Roasted garlic"],
    price: 260,
    image: `${assets}pizza_marinara_garlic_transparent.png`,
    tags: ["Vegetarian", "Popular"],
    prepMinutes: 18,
    available: true,
  },
  {
    id: "beef-bacon",
    name: "Beef Bacon",
    category: "Signature Pizzas",
    description: "Tomato sauce, fresh basil, melted cheese, and beef bacon.",
    ingredients: ["Tomato sauce", "Mozzarella", "Basil", "Beef bacon"],
    price: 390,
    image: `${assets}pizza_meat_mozzarella_transparent.png`,
    tags: ["Best Seller"],
    prepMinutes: 22,
    available: true,
  },
  {
    id: "pastrami",
    name: "Pastrami",
    category: "Specials",
    description: "Tomato sauce, cheese, pastrami, shallots, and fresh rocket.",
    ingredients: ["Tomato sauce", "Mozzarella", "Pastrami", "Shallots", "Rocket"],
    price: 450,
    image: `${assets}pizza_bresaola_arugula_transparent.png`,
    tags: ["New", "Best Seller"],
    prepMinutes: 24,
    available: true,
  },
  {
    id: "margherita",
    name: "Margherita",
    category: "Classics",
    description: "Fiordilatte mozzarella, tomato sauce, basil, and olive oil.",
    ingredients: ["Tomato sauce", "Mozzarella", "Basil", "Olive oil"],
    price: 290,
    image: `${assets}pizza_margherita_transparent.png`,
    tags: ["Vegetarian", "Popular"],
    prepMinutes: 18,
    available: true,
  },
  {
    id: "smoked-turkey",
    name: "Smoked Turkey with Creamy Sauce",
    category: "Specials",
    description: "Creamy Neapolitan sauce, mozzarella, basil, and smoked turkey.",
    ingredients: ["Cream sauce", "Mozzarella", "Basil", "Smoked turkey"],
    price: 330,
    image: `${assets}pizza_ham_white_transparent.png`,
    tags: ["New"],
    prepMinutes: 22,
    available: true,
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    category: "Classics",
    description: "Tomato sauce, mozzarella, basil, and crisp pepperoni.",
    ingredients: ["Tomato sauce", "Mozzarella", "Basil", "Pepperoni"],
    price: 330,
    image: `${assets}pizza_pepperoni_transparent.png`,
    tags: ["Best Seller", "Spicy"],
    prepMinutes: 20,
    available: true,
  },
];

const offers = [
  {
    id: "family-crust",
    title: "Family Crust Deal",
    description: "Any 2 classic pizzas with a shared pickup slot.",
    price: 590,
    condition: "Available Thursday to Sunday while stock lasts.",
  },
  {
    id: "signature-night",
    title: "Signature Night",
    description: "Pastrami or Beef Bacon with a free extra cheese topping.",
    price: 450,
    condition: "One free topping per pizza.",
  },
];

const categories = ["All", "Signature Pizzas", "Classics", "Specials", "Offers", "Drinks", "Desserts"];
const sizeOptions = [
  { id: "small", name: "Small", delta: -60 },
  { id: "medium", name: "Medium", delta: 0 },
  { id: "large", name: "Large", delta: 80 },
];
const crustOptions = ["Classic", "Neapolitan", "Thin & Crispy"];
const toppingOptions = [
  { id: "extra-cheese", name: "Extra Cheese", price: 45 },
  { id: "mushrooms", name: "Mushrooms", price: 35 },
  { id: "olives", name: "Olives", price: 25 },
  { id: "beef-bacon", name: "Beef Bacon", price: 60 },
  { id: "burrata", name: "Burrata", price: 90 },
];

const galleryItems = [
  { src: `${assets}pizza_pepperoni_transparent.png`, label: "Food", title: "Pepperoni crust" },
  { src: `${assets}pizza_bresaola_arugula_transparent.png`, label: "Food", title: "Pastrami and rocket" },
  { src: `${assets}pizza_marinara_garlic_transparent.png`, label: "Oven", title: "Roasted garlic marinara" },
  { src: `${assets}pizza_ham_white_transparent.png`, label: "Behind the scenes", title: "Creamy smoked turkey" },
];

const adminOrders = [
  { id: "BC-1042", customer: "Ahmed", phone: "+201011100000", total: 780, status: "Preparing", channel: "WhatsApp" },
  { id: "BC-1043", customer: "Mona", phone: "+201022200000", total: 330, status: "New", channel: "Website" },
  { id: "BC-1044", customer: "Omar", phone: "+201033300000", total: 450, status: "In the oven", channel: "WhatsApp" },
];

const app = document.querySelector("#app");
const cartDrawer = document.querySelector("#cartDrawer");
const cartContent = document.querySelector("#cartContent");
const modalLayer = document.querySelector("#modalLayer");
const toastRegion = document.querySelector("#toastRegion");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const state = {
  cart: JSON.parse(localStorage.getItem("bellaCart") || "[]"),
  filters: { category: "All", query: "", tags: new Set(), maxPrice: 500 },
};

function money(amount) {
  return `EGP ${amount}`;
}

function saveCart() {
  localStorage.setItem("bellaCart", JSON.stringify(state.cart));
  updateCartCount();
}

function updateCartCount() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = count;
  });
}

function getOpenStatus(date = new Date()) {
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const today = restaurant.hours.find((item) => item.day === day);
  if (today?.open) {
    const [oh, om] = today.open.split(":").map(Number);
    const [ch, cm] = today.close.split(":").map(Number);
    const open = new Date(date);
    open.setHours(oh, om, 0, 0);
    const close = new Date(date);
    close.setHours(ch, cm, 0, 0);
    if (date >= open && date <= close) {
      const minutes = Math.round((close - date) / 60000);
      return { open: true, label: minutes <= 45 ? "Closing soon" : "Open now", next: `Closes at ${formatTime(today.close)}` };
    }
  }

  for (let offset = 0; offset < 7; offset += 1) {
    const next = new Date(date);
    next.setDate(date.getDate() + offset);
    const nextDay = next.toLocaleDateString("en-US", { weekday: "long" });
    const hours = restaurant.hours.find((item) => item.day === nextDay);
    if (!hours?.open) continue;
    const [oh, om] = hours.open.split(":").map(Number);
    next.setHours(oh, om, 0, 0);
    if (next > date) {
      return { open: false, label: "Closed now", next: `Opens ${offset === 0 ? "today" : nextDay} at ${formatTime(hours.open)}` };
    }
  }

  return { open: false, label: "Closed now", next: "Opening time unavailable" };
}

function formatTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  const suffix = hour >= 12 ? "PM" : "AM";
  const normalized = hour % 12 || 12;
  return `${normalized}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function pageFromHash() {
  const [page = "home", param = ""] = window.location.hash.replace("#", "").split("/");
  return { page: page || "home", param };
}

function setActiveNav(page) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.nav === page);
  });
}

function render() {
  const { page, param } = pageFromHash();
  setActiveNav(page);
  const routes = {
    home: renderHome,
    menu: renderMenu,
    product: () => renderProductPage(param),
    cart: renderCartPage,
    checkout: renderCheckout,
    track: renderTrack,
    reserve: renderReserve,
    offers: renderOffers,
    gallery: renderGallery,
    about: renderAbout,
    contact: renderContact,
    admin: renderAdmin,
  };
  const renderer = routes[page] || renderHome;
  app.innerHTML = renderer();
  app.focus({ preventScroll: true });
  bindPageEvents(page);
  requestParallax();
}

function statusBlock() {
  const status = getOpenStatus();
  return `
    <div class="status-card ${status.open ? "is-open" : "is-closed"}">
      <span>${status.label}</span>
      <strong>${status.next}</strong>
    </div>
  `;
}

function heroMarkup() {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">${restaurant.tagline}</p>
        <h1 id="hero-title">Bella Crosta</h1>
        <p class="hero-text">Browse, customize, reserve pickup, and send a clean WhatsApp order in one smooth flow.</p>
        <div class="hero-actions">
          <a class="primary-link" href="#menu">View Menu</a>
          <a class="secondary-link" href="https://wa.me/${restaurant.whatsapp}" target="_blank" rel="noreferrer">Order on WhatsApp</a>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <img class="hero-pizza hero-pizza-main" src="${assets}pizza_pepperoni_transparent.png" alt="" />
        <img class="hero-pizza hero-pizza-side" src="${assets}pizza_marinara_garlic_transparent.png" alt="" />
      </div>
    </section>
  `;
}

function renderHome() {
  const featured = menuItems.filter((item) => item.tags.includes("Best Seller") || item.tags.includes("Popular")).slice(0, 4);
  return `
    ${heroMarkup()}
    <section class="intro-band">
      ${statusBlock()}
      <p><strong>Pickup address</strong><span>${restaurant.address}</span></p>
      <p><strong>WhatsApp only</strong><span>${restaurant.phoneDisplay}</span></p>
    </section>
    <section class="page-section">
      <div class="section-heading">
        <p class="eyebrow">Featured</p>
        <h2>Best sellers first</h2>
      </div>
      <div class="product-grid">${featured.map(productCard).join("")}</div>
    </section>
    <section class="split-section">
      <div>
        <p class="eyebrow">Offers</p>
        <h2>Current deals</h2>
        <p class="muted">Quick combos and limited-time offers can be added to cart or sent by WhatsApp.</p>
      </div>
      <div class="stack">${offers.map(offerCard).join("")}</div>
    </section>
    <section class="split-section">
      <div>
        <p class="eyebrow">Story</p>
        <h2>French passion. Egyptian heart. Italian crust.</h2>
      </div>
      <div class="review-list">
        <p class="muted">Soft inside, charred outside, and shaped for a compact menu that is easy to order.</p>
        <div class="review-card">"The crust is the reason to come back."</div>
        <div class="review-card">"Fast WhatsApp ordering and hot pickup."</div>
      </div>
    </section>
    ${contactStrip()}
  `;
}

function productCard(item) {
  return `
    <article class="product-card ${item.available ? "" : "is-unavailable"}">
      <a href="#product/${item.id}" class="product-image" aria-label="Open ${item.name} details">
        <img src="${item.image}" alt="${item.name} pizza" />
      </a>
      <div class="product-copy">
        <div>
          <p class="tagline">${item.category}</p>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
        <div class="tag-row">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="item-footer">
          <strong>${money(item.price)}</strong>
          <div class="card-actions">
            <button type="button" data-quick-view="${item.id}">Quick view</button>
            <button type="button" data-add-basic="${item.id}">Add</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function offerCard(offer) {
  return `
    <article class="offer-card">
      <p class="tagline">Limited offer</p>
      <h3>${offer.title}</h3>
      <p>${offer.description}</p>
      <small>${offer.condition}</small>
      <div class="item-footer">
        <strong>${money(offer.price)}</strong>
        <button type="button" data-add-offer="${offer.id}">Add offer</button>
      </div>
    </article>
  `;
}

function renderMenu() {
  const max = Number(state.filters.maxPrice);
  const filtered = menuItems.filter((item) => {
    const matchesCategory = state.filters.category === "All" || item.category === state.filters.category;
    const matchesQuery = `${item.name} ${item.description}`.toLowerCase().includes(state.filters.query.toLowerCase());
    const tags = Array.from(state.filters.tags);
    const matchesTags = !tags.length || tags.every((tag) => item.tags.includes(tag));
    return matchesCategory && matchesQuery && matchesTags && item.price <= max;
  });

  return `
    <section class="page-hero compact">
      <div>
        <p class="eyebrow">Menu</p>
        <h1>Build your order</h1>
        <p class="hero-text">Search, filter, customize, add to cart, then send the final order through WhatsApp.</p>
      </div>
      ${statusBlock()}
    </section>
    <section class="menu-layout">
      <div class="menu-workspace">
        <form class="filters-bar" id="menuFilters">
          <label>
            Search
            <input type="search" name="query" value="${state.filters.query}" placeholder="Search pizza or ingredient" />
          </label>
          <label>
            Category
            <select name="category">${categories.map((cat) => `<option ${cat === state.filters.category ? "selected" : ""}>${cat}</option>`).join("")}</select>
          </label>
          <label>
            Max price <span>${money(max)}</span>
            <input type="range" name="maxPrice" min="260" max="500" value="${max}" />
          </label>
          <div class="chip-group" role="group" aria-label="Menu filters">
            ${["Popular", "Best Seller", "New", "Vegetarian", "Spicy"].map((tag) => `
              <label class="filter-chip">
                <input type="checkbox" name="tag" value="${tag}" ${state.filters.tags.has(tag) ? "checked" : ""} />
                <span>${tag}</span>
              </label>
            `).join("")}
          </div>
        </form>
        <div class="state-row">${filtered.length ? `${filtered.length} items found` : "No matching items. Try clearing filters."}</div>
        <div class="product-grid">${filtered.map(productCard).join("")}</div>
        ${!filtered.length ? `<div class="empty-state"><h2>No results</h2><p>Adjust search, category, tags, or price range.</p></div>` : ""}
      </div>
      <aside class="sticky-summary">${cartSummaryMarkup()}</aside>
    </section>
  `;
}

function renderProductPage(id) {
  const item = menuItems.find((product) => product.id === id) || menuItems[0];
  return `
    <section class="product-detail">
      <div class="detail-image"><img src="${item.image}" alt="${item.name} pizza" /></div>
      <form class="detail-panel" data-product-form="${item.id}">
        <p class="eyebrow">${item.category}</p>
        <h1>${item.name}</h1>
        <p class="muted">${item.description}</p>
        <p><strong>${money(item.price)}</strong> · ${item.prepMinutes} min prep</p>
        <div class="ingredient-list">${item.ingredients.map((ingredient) => `<span>${ingredient}</span>`).join("")}</div>
        ${productOptionsMarkup(item)}
        <div class="form-actions">
          <button class="primary-link" type="submit">Add to cart</button>
          <button class="secondary-link" type="button" data-direct-whatsapp="${item.id}">Order directly on WhatsApp</button>
        </div>
        <p class="validation-message" data-validation></p>
      </form>
    </section>
  `;
}

function productOptionsMarkup(item) {
  return `
    <fieldset>
      <legend>Size</legend>
      <div class="segmented">${sizeOptions.map((size) => `
        <label><input type="radio" name="size" value="${size.id}" ${size.id === "medium" ? "checked" : ""} /> <span>${size.name}${size.delta ? ` (${size.delta > 0 ? "+" : ""}${money(size.delta)})` : ""}</span></label>
      `).join("")}</div>
    </fieldset>
    <fieldset>
      <legend>Crust</legend>
      <div class="segmented">${crustOptions.map((crust, index) => `
        <label><input type="radio" name="crust" value="${crust}" ${index === 1 ? "checked" : ""} /> <span>${crust}</span></label>
      `).join("")}</div>
    </fieldset>
    <fieldset>
      <legend>Extra toppings</legend>
      <div class="check-grid">${toppingOptions.map((top) => `
        <label><input type="checkbox" name="extra" value="${top.id}" /> <span>${top.name} +${money(top.price)}</span></label>
      `).join("")}</div>
    </fieldset>
    <div class="form-grid two">
      <label>Quantity <input name="quantity" type="number" min="1" max="12" value="1" /></label>
      <label>Special notes <input name="notes" placeholder="No onions, extra crispy..." /></label>
    </div>
    <p class="hint">Ingredients/allergens note: please mention any allergies in the notes before confirming.</p>
  `;
}

function renderCartPage() {
  return `
    <section class="page-hero compact">
      <div>
        <p class="eyebrow">Cart</p>
        <h1>Review your order</h1>
      </div>
    </section>
    <section class="page-section narrow">${cartMarkup({ checkout: true })}</section>
  `;
}

function renderCheckout() {
  return `
    <section class="page-hero compact">
      <div>
        <p class="eyebrow">Checkout</p>
        <h1>Confirm by WhatsApp</h1>
        <p class="hero-text">Fill customer and fulfillment details. We will generate a clean WhatsApp message.</p>
      </div>
    </section>
    <section class="checkout-layout">
      <form class="checkout-form" id="checkoutForm">
        <div class="form-grid two">
          <label>Name <input name="name" required placeholder="Customer name" /></label>
          <label>Phone <input name="phone" required inputmode="tel" placeholder="+20..." /></label>
        </div>
        <fieldset>
          <legend>Fulfillment</legend>
          <div class="segmented">
            <label><input type="radio" name="fulfillment" value="pickup" checked /> <span>Pickup</span></label>
            <label><input type="radio" name="fulfillment" value="delivery" /> <span>Delivery</span></label>
          </div>
        </fieldset>
        <div class="form-grid two">
          <label>Pickup time <input name="pickupTime" type="time" min="16:00" max="23:00" value="18:00" /></label>
          <label>Address <input name="address" placeholder="Required for delivery" /></label>
        </div>
        <label>Order notes <textarea name="notes" rows="4" placeholder="Any general order notes"></textarea></label>
        <label>Payment method
          <select name="payment">
            <option>Pay at pickup</option>
            <option>Cash on delivery</option>
          </select>
        </label>
        <button class="primary-link" type="submit">Generate WhatsApp order</button>
        <p class="validation-message" data-validation></p>
      </form>
      <aside class="sticky-summary">
        <h2>Order summary</h2>
        ${cartSummaryMarkup()}
        <div class="message-preview" id="messagePreview">WhatsApp message preview will appear after confirmation.</div>
      </aside>
    </section>
  `;
}

function renderTrack() {
  return `
    <section class="page-hero compact">
      <div>
        <p class="eyebrow">Tracking</p>
        <h1>Track order status</h1>
        <p class="hero-text">Use an order number such as BC-1042 to preview the status timeline.</p>
      </div>
    </section>
    <section class="page-section narrow">
      <form class="lookup-form" id="trackForm">
        <label>Order number <input name="orderNumber" placeholder="BC-1042" /></label>
        <button class="primary-link" type="submit">Track order</button>
      </form>
      <div id="trackingResult">${trackingMarkup(adminOrders[0])}</div>
    </section>
  `;
}

function trackingMarkup(order) {
  const steps = ["Order received", "Accepted", "Preparing", "In the oven", "Ready / Out for delivery", "Delivered / Picked up"];
  const statusMap = { New: 0, Accepted: 1, Preparing: 2, "In the oven": 3, Ready: 4, Completed: 5 };
  const active = statusMap[order?.status] ?? 0;
  return `
    <div class="tracking-card">
      <div class="item-footer"><h2>${order?.id || "Tracking unavailable"}</h2><a class="secondary-link" href="https://wa.me/${restaurant.whatsapp}" target="_blank" rel="noreferrer">Contact restaurant</a></div>
      <p class="muted">${order ? `Estimated time: ${active >= 4 ? "Ready soon" : "20-35 minutes"}` : "We could not find this order. Contact us on WhatsApp."}</p>
      <ol class="timeline">${steps.map((step, index) => `<li class="${index <= active ? "is-done" : ""}">${step}</li>`).join("")}</ol>
      <div class="map-placeholder">Delivery map/location placeholder</div>
    </div>
  `;
}

function renderReserve() {
  return `
    <section class="page-hero compact">
      <div>
        <p class="eyebrow">Pickup reservation</p>
        <h1>Reserve a pickup slot</h1>
        <p class="hero-text">Closed days are blocked automatically. Confirmation goes through WhatsApp.</p>
      </div>
      ${statusBlock()}
    </section>
    <section class="page-section narrow">
      <form class="checkout-form" id="reserveForm">
        <div class="form-grid two">
          <label>Date <input name="date" type="date" required /></label>
          <label>Time slot
            <select name="time">${["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map((time) => `<option>${time}</option>`).join("")}</select>
          </label>
        </div>
        <div class="form-grid two">
          <label>Name <input name="name" required /></label>
          <label>Phone <input name="phone" required inputmode="tel" /></label>
        </div>
        <label>Notes <textarea name="notes" rows="4"></textarea></label>
        <button class="primary-link" type="submit">Confirm via WhatsApp</button>
        <p class="validation-message" data-validation></p>
      </form>
    </section>
  `;
}

function renderOffers() {
  return `
    <section class="page-hero compact">
      <div>
        <p class="eyebrow">Offers</p>
        <h1>Deals and combos</h1>
      </div>
    </section>
    <section class="page-section"><div class="offer-grid">${offers.map(offerCard).join("")}</div></section>
  `;
}

function renderGallery() {
  return `
    <section class="page-hero compact">
      <div>
        <p class="eyebrow">Gallery</p>
        <h1>Food, oven, and behind the scenes</h1>
      </div>
    </section>
    <section class="page-section">
      <div class="gallery-grid">${galleryItems.map((item) => `
        <button class="gallery-tile" type="button" data-preview="${item.src}" data-title="${item.title}">
          <img src="${item.src}" alt="${item.title}" />
          <span>${item.label}</span>
        </button>
      `).join("")}</div>
      <div class="center-actions"><a class="secondary-link" href="${restaurant.instagram}" target="_blank" rel="noreferrer">Follow on Instagram</a></div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="split-section first-section">
      <div>
        <p class="eyebrow">Our story</p>
        <h1>Bella Crosta</h1>
      </div>
      <div>
        <p class="lead">${restaurant.tagline}</p>
        <p class="muted">A compact artisan pizza experience in Obour, designed around a focused menu, easy pickup, and fast WhatsApp communication.</p>
        <div class="hero-actions"><a class="primary-link" href="#menu">View Menu</a><a class="secondary-link" href="#contact">Contact</a></div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    ${contactStrip()}
    <section class="page-section">
      <div class="contact-grid">
        <div class="hours-panel">
          <p class="eyebrow">Opening hours</p>
          <h2>Thursday to Sunday</h2>
          <dl class="hours-list">${restaurant.hours.map((item) => `<div class="${item.open ? "" : "closed"}"><dt>${item.day}</dt><dd>${item.open ? `${formatTime(item.open)} - ${formatTime(item.close)}` : "Closed"}</dd></div>`).join("")}</dl>
        </div>
        <form class="checkout-form" id="inquiryForm">
          <p class="eyebrow">Inquiry</p>
          <h2>Send a question</h2>
          <label>Name <input name="name" required /></label>
          <label>Phone <input name="phone" required /></label>
          <label>Message <textarea name="message" rows="4" required></textarea></label>
          <button class="primary-link" type="submit">Send by WhatsApp</button>
        </form>
      </div>
    </section>
  `;
}

function contactStrip() {
  return `
    <section class="contact-strip" id="visit">
      <img src="${assets}bella_crosta_logo_transparent.png" alt="Bella Crosta logo" />
      <div>
        <p class="eyebrow">Visit</p>
        <h2>Obour, Egypt</h2>
        <p>${restaurant.address}</p>
        <div class="visit-icon-actions" aria-label="Visit actions">
          <a href="https://wa.me/${restaurant.whatsapp}" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.8 9.8 0 0 0-8.5 14.8L2 22l5.4-1.4A9.9 9.9 0 1 0 12 2m0 2a7.9 7.9 0 0 1 0 15.8 8 8 0 0 1-4-1.1l-.4-.2-2.7.7.7-2.6-.3-.4A7.8 7.8 0 0 1 12 4m-3.1 4.2c-.2 0-.5.1-.7.4s-.9.9-.9 2.2 1 2.6 1.1 2.8c.2.2 1.9 3 4.7 4 .7.2 1.2.4 1.6.4.7.1 1.3.1 1.8-.1.6-.2 1.7-.8 1.9-1.5.2-.7.2-1.3.1-1.5s-.2-.2-.5-.4l-1.8-.9c-.3-.1-.4-.2-.6.2l-.8 1c-.1.2-.3.2-.6.1a6.4 6.4 0 0 1-3.1-2.7c-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.4-.4-.4-.6-.4z" /></svg>
          </a>
          <a href="tel:${restaurant.phone}" aria-label="Call">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.8 6c.7.7.8 1.8.2 2.6l-1 1.5a13.4 13.4 0 0 0 5 5l1.5-1c.8-.5 1.9-.4 2.6.2l3.2 3.2c.7.7.8 1.9.1 2.7-1 1.2-2.4 1.8-4 1.7C9.1 21.4 2.6 14.9 2.1 6.6 2 5 2.6 3.6 3.8 2.6c.8-.7 2-.6 2.8.2z" /></svg>
          </a>
          <a href="${restaurant.maps}" target="_blank" rel="noreferrer" aria-label="Get directions">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" /></svg>
          </a>
          <a href="${restaurant.instagram}" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.8A4.2 4.2 0 1 1 12 16.2 4.2 4.2 0 0 1 12 7.8m0 2A2.2 2.2 0 1 0 12 14.2 2.2 2.2 0 0 0 12 9.8M17.7 6.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" /></svg>
          </a>
          <a href="${restaurant.tiktok}" target="_blank" rel="noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2h3a5.6 5.6 0 0 0 4 4.2V9a8.3 8.3 0 0 1-4-1.1v7.2A6 6 0 1 1 11 9.2V12a3.2 3.2 0 1 0 3 3.2z" /></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderAdmin() {
  const totalSales = adminOrders.reduce((sum, order) => sum + order.total, 0);
  return `
    <section class="admin-shell first-section">
      <aside class="admin-nav">
        <h2>Admin</h2>
        ${["Dashboard", "Orders", "Menu", "Offers", "Reservations", "Inventory", "Customers", "Reviews", "Reports", "Hours", "Delivery Zones", "WhatsApp"].map((item) => `<a href="#admin">${item}</a>`).join("")}
      </aside>
      <div class="admin-main">
        <div class="section-heading">
          <p class="eyebrow">Operations</p>
          <h1>Admin dashboard</h1>
        </div>
        <div class="kpi-grid">
          <div class="kpi-card"><span>Today's sales</span><strong>${money(totalSales)}</strong></div>
          <div class="kpi-card"><span>Total orders</span><strong>${adminOrders.length}</strong></div>
          <div class="kpi-card"><span>Pending orders</span><strong>${adminOrders.filter((o) => o.status === "New").length}</strong></div>
          <div class="kpi-card"><span>Average order</span><strong>${money(Math.round(totalSales / adminOrders.length))}</strong></div>
        </div>
        <div class="admin-grid">
          <section class="admin-panel">
            <div class="item-footer"><h2>Live orders queue</h2><button type="button" data-admin-toast="Order added">Add order</button></div>
            <div class="order-table">${adminOrders.map(adminOrderRow).join("")}</div>
          </section>
          <section class="admin-panel">
            <h2>Kitchen status</h2>
            <div class="timeline compact">${["New", "Accepted", "Preparing", "In the oven", "Ready", "Completed"].map((step) => `<li>${step}</li>`).join("")}</div>
          </section>
          <section class="admin-panel">
            <h2>Low inventory alerts</h2>
            ${["Dough", "Mozzarella", "Pepperoni"].map((item) => `<div class="inventory-row"><span>${item}</span><button type="button" data-admin-toast="${item} restocked">Restock</button></div>`).join("")}
          </section>
          <section class="admin-panel">
            <h2>Reports and analytics</h2>
            <div class="chart-bars">${[72, 46, 88, 55, 93, 64].map((height) => `<span style="height:${height}%"></span>`).join("")}</div>
            <p class="muted">Track sales by day, best sellers, peak hours, WhatsApp conversion, and offer performance.</p>
          </section>
          <section class="admin-panel wide">
            <h2>Menu management preview</h2>
            <div class="management-grid">${menuItems.map((item) => `
              <div class="management-row"><span>${item.name}</span><strong>${money(item.price)}</strong><button type="button" data-admin-toast="${item.name} availability updated">${item.available ? "Available" : "Unavailable"}</button></div>
            `).join("")}</div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function adminOrderRow(order) {
  return `
    <div class="order-row">
      <span>${order.id}</span>
      <span>${order.customer}</span>
      <strong>${order.status}</strong>
      <button type="button" data-admin-toast="${order.id} moved to next status">Update</button>
      <a href="https://wa.me/${order.phone.replace("+", "")}" target="_blank" rel="noreferrer">WhatsApp</a>
    </div>
  `;
}

function cartSummaryMarkup() {
  if (!state.cart.length) {
    return `<div class="empty-state compact"><h3>Your cart is empty</h3><p>Add a pizza to continue.</p><a class="secondary-link" href="#menu">Back to Menu</a></div>`;
  }
  return `
    <div class="summary-list">
      ${state.cart.map((item, index) => cartLineMarkup(item, index, true)).join("")}
    </div>
    <div class="total-line"><span>Subtotal</span><strong>${money(cartTotal())}</strong></div>
    <div class="total-line"><span>Estimated prep</span><strong>${estimatedPrep()} min</strong></div>
    <a class="primary-link full" href="#checkout">Continue to Checkout</a>
  `;
}

function cartMarkup({ checkout = false } = {}) {
  if (!state.cart.length) {
    return `<div class="empty-state"><h2>Your cart is empty</h2><p>Add pizzas, offers, or extras from the menu.</p><a class="primary-link" href="#menu">Back to Menu</a></div>`;
  }
  return `
    <div class="cart-list">${state.cart.map((item, index) => cartLineMarkup(item, index)).join("")}</div>
    <label>General order note <textarea id="cartNote" rows="3" placeholder="Add a note for the whole order"></textarea></label>
    <label>Coupon <input id="couponField" placeholder="Enter coupon code" /></label>
    <div class="total-line"><span>Subtotal</span><strong>${money(cartTotal())}</strong></div>
    <div class="total-line"><span>Total</span><strong>${money(cartTotal())}</strong></div>
    ${checkout ? `<a class="primary-link full" href="#checkout">Continue to Checkout</a>` : `<div class="drawer-actions"><a class="primary-link" href="#checkout">Checkout</a><a class="secondary-link" href="#menu">Add more</a></div>`}
  `;
}

function cartLineMarkup(cartItem, index, compact = false) {
  const item = menuItems.find((product) => product.id === cartItem.itemId);
  if (!item) {
    return "";
  }
  const extras = cartItem.extras.map((id) => toppingOptions.find((top) => top.id === id)?.name).filter(Boolean).join(", ");
  return `
    <div class="cart-line">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <strong>${item.name}</strong>
        <p>${cartItem.size} · ${cartItem.crust}${extras ? ` · ${extras}` : ""}</p>
        ${compact ? "" : `<input data-item-note="${index}" value="${cartItem.notes || ""}" placeholder="Item note" />`}
      </div>
      <div class="qty-controls">
        <button type="button" data-dec="${index}">-</button>
        <span>${cartItem.quantity}</span>
        <button type="button" data-inc="${index}">+</button>
      </div>
      <strong>${money(lineTotal(cartItem))}</strong>
      ${compact ? "" : `<button class="icon-button" type="button" data-remove="${index}">x</button>`}
    </div>
  `;
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + lineTotal(item), 0);
}

function lineTotal(cartItem) {
  if (cartItem.price) {
    return cartItem.price * cartItem.quantity;
  }
  const item = menuItems.find((product) => product.id === cartItem.itemId);
  if (!item) return cartItem.price || 0;
  const size = sizeOptions.find((option) => option.id === cartItem.size);
  const extras = cartItem.extras.reduce((sum, id) => sum + (toppingOptions.find((top) => top.id === id)?.price || 0), 0);
  return (item.price + (size?.delta || 0) + extras) * cartItem.quantity;
}

function estimatedPrep() {
  if (!state.cart.length) return 0;
  return Math.max(...state.cart.map((cartItem) => menuItems.find((item) => item.id === cartItem.itemId)?.prepMinutes || 20)) + Math.max(0, state.cart.length - 1) * 4;
}

function buildCartItem(itemId, formData = null) {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    itemId,
    size: formData?.get("size") || "medium",
    crust: formData?.get("crust") || "Neapolitan",
    extras: formData?.getAll("extra") || [],
    quantity: Number(formData?.get("quantity") || 1),
    notes: formData?.get("notes") || "",
  };
}

function addToCart(itemId, formData = null) {
  state.cart.push(buildCartItem(itemId, formData));
  saveCart();
  renderCartDrawer();
  toast("Added to cart");
}

function addOffer(offerId) {
  const offer = offers.find((item) => item.id === offerId);
  if (!offer) return;
  state.cart.push({ id: `offer-${Date.now()}`, itemId: "margherita", size: "medium", crust: "Classic", extras: [], quantity: 1, notes: offer.title, price: offer.price });
  saveCart();
  renderCartDrawer();
  toast("Offer added to cart");
}

function bindPageEvents(page) {
  bindSharedEvents();
  if (page === "menu") bindMenuEvents();
  if (page === "product") bindProductEvents();
  if (page === "cart") bindCartEvents();
  if (page === "checkout") bindCheckoutEvents();
  if (page === "track") bindTrackEvents();
  if (page === "reserve") bindReserveEvents();
  if (page === "gallery") bindGalleryEvents();
  if (page === "contact") bindContactEvents();
  if (page === "admin") bindAdminEvents();
  bindParallaxTargets();
}

function bindSharedEvents() {
  document.querySelectorAll("[data-add-basic]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.addBasic));
  });
  document.querySelectorAll("[data-quick-view]").forEach((button) => {
    button.addEventListener("click", () => openProductModal(button.dataset.quickView));
  });
  document.querySelectorAll("[data-add-offer]").forEach((button) => {
    button.addEventListener("click", () => addOffer(button.dataset.addOffer));
  });
}

function bindMenuEvents() {
  document.querySelector("#menuFilters")?.addEventListener("input", (event) => {
    const form = event.currentTarget;
    const data = new FormData(form);
    state.filters.query = data.get("query") || "";
    state.filters.category = data.get("category") || "All";
    state.filters.maxPrice = data.get("maxPrice") || 500;
    state.filters.tags = new Set(data.getAll("tag"));
    render();
  });
}

function bindProductEvents() {
  const form = document.querySelector("[data-product-form]");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    addToCart(form.dataset.productForm, new FormData(form));
  });
  document.querySelector("[data-direct-whatsapp]")?.addEventListener("click", (event) => {
    const data = new FormData(form);
    const item = buildCartItem(event.currentTarget.dataset.directWhatsapp, data);
    openWhatsApp(buildOrderMessage({ items: [item], direct: true }));
  });
}

function bindCartEvents() {
  document.querySelectorAll("[data-item-note]").forEach((input) => {
    input.addEventListener("change", () => {
      state.cart[Number(input.dataset.itemNote)].notes = input.value;
      saveCart();
    });
  });
}

function bindCheckoutEvents() {
  document.querySelector("#checkoutForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!state.cart.length) {
      showValidation(event.currentTarget, "Add at least one item before checkout.");
      return;
    }
    const data = new FormData(event.currentTarget);
    if (data.get("fulfillment") === "delivery" && !data.get("address")) {
      showValidation(event.currentTarget, "Delivery address is required.");
      return;
    }
    const message = buildOrderMessage({ customer: Object.fromEntries(data.entries()), items: state.cart });
    document.querySelector("#messagePreview").textContent = message;
    openWhatsApp(message);
    toast("WhatsApp order generated");
  });
}

function bindTrackEvents() {
  document.querySelector("#trackForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = new FormData(event.currentTarget).get("orderNumber")?.trim().toUpperCase();
    const order = adminOrders.find((item) => item.id === id);
    document.querySelector("#trackingResult").innerHTML = trackingMarkup(order);
  });
}

function bindReserveEvents() {
  const dateInput = document.querySelector("[name='date']");
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
  document.querySelector("#reserveForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const day = new Date(`${data.date}T12:00:00`).toLocaleDateString("en-US", { weekday: "long" });
    const hours = restaurant.hours.find((item) => item.day === day);
    if (!hours?.open) {
      showValidation(event.currentTarget, `${day} is closed. Please select Thursday to Sunday.`);
      return;
    }
    openWhatsApp(`Hi Bella Crosta,\nI would like to reserve pickup.\nName: ${data.name}\nPhone: ${data.phone}\nDate: ${data.date}\nTime: ${data.time}\nNotes: ${data.notes || "None"}`);
  });
}

function bindGalleryEvents() {
  document.querySelectorAll("[data-preview]").forEach((button) => {
    button.addEventListener("click", () => openMediaModal(button.dataset.preview, button.dataset.title));
  });
}

function bindContactEvents() {
  document.querySelector("#inquiryForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    openWhatsApp(`Hi Bella Crosta,\nName: ${data.name}\nPhone: ${data.phone}\nInquiry: ${data.message}`);
  });
}

function bindAdminEvents() {
  document.querySelectorAll("[data-admin-toast]").forEach((button) => {
    button.addEventListener("click", () => toast(button.dataset.adminToast));
  });
}

function renderCartDrawer() {
  cartContent.innerHTML = cartMarkup();
  bindCartControls();
}

function bindCartControls() {
  document.querySelectorAll("[data-inc]").forEach((button) => {
    button.addEventListener("click", () => {
      state.cart[Number(button.dataset.inc)].quantity += 1;
      saveCart();
      renderCartDrawer();
      if (pageFromHash().page === "cart" || pageFromHash().page === "checkout") render();
    });
  });
  document.querySelectorAll("[data-dec]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.cart[Number(button.dataset.dec)];
      item.quantity = Math.max(1, item.quantity - 1);
      saveCart();
      renderCartDrawer();
      if (pageFromHash().page === "cart" || pageFromHash().page === "checkout") render();
    });
  });
  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      state.cart.splice(Number(button.dataset.remove), 1);
      saveCart();
      renderCartDrawer();
      if (pageFromHash().page === "cart" || pageFromHash().page === "checkout") render();
      toast("Removed from cart");
    });
  });
}

function openCart() {
  renderCartDrawer();
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function openProductModal(itemId) {
  const item = menuItems.find((product) => product.id === itemId);
  if (!item) return;
  modalLayer.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="quickTitle">
      <button class="icon-button modal-close" type="button" data-close-modal aria-label="Close">x</button>
      <img src="${item.image}" alt="${item.name}" />
      <form data-product-form="${item.id}">
        <p class="eyebrow">Quick view</p>
        <h2 id="quickTitle">${item.name}</h2>
        <p class="muted">${item.description}</p>
        ${productOptionsMarkup(item)}
        <button class="primary-link full" type="submit">Add to cart</button>
      </form>
    </div>
  `;
  modalLayer.classList.add("is-open");
  modalLayer.setAttribute("aria-hidden", "false");
  modalLayer.querySelector("[data-close-modal]").addEventListener("click", closeModal);
  modalLayer.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    addToCart(item.id, new FormData(event.currentTarget));
    closeModal();
  });
}

function openMediaModal(src, title) {
  modalLayer.innerHTML = `
    <div class="modal-card media" role="dialog" aria-modal="true" aria-label="${title}">
      <button class="icon-button modal-close" type="button" data-close-modal aria-label="Close">x</button>
      <img src="${src}" alt="${title}" />
      <h2>${title}</h2>
    </div>
  `;
  modalLayer.classList.add("is-open");
  modalLayer.setAttribute("aria-hidden", "false");
  modalLayer.querySelector("[data-close-modal]").addEventListener("click", closeModal);
}

function closeModal() {
  modalLayer.classList.remove("is-open");
  modalLayer.setAttribute("aria-hidden", "true");
  modalLayer.innerHTML = "";
}

function showValidation(form, message) {
  const node = form.querySelector("[data-validation]");
  if (node) node.textContent = message;
}

function buildOrderMessage({ customer = {}, items, direct = false }) {
  const lines = [
    "Hi Bella Crosta,",
    direct ? "I would like to order this item:" : "I would like to confirm this order:",
    "",
  ];
  if (customer.name) lines.push(`Customer: ${customer.name}`);
  if (customer.phone) lines.push(`Phone: ${customer.phone}`);
  lines.push("");
  items.forEach((cartItem, index) => {
    const item = menuItems.find((product) => product.id === cartItem.itemId);
    const extras = cartItem.extras.map((id) => toppingOptions.find((top) => top.id === id)?.name).filter(Boolean).join(", ") || "None";
    lines.push(`${index + 1}. ${item?.name || cartItem.notes}`);
    lines.push(`   Size: ${cartItem.size}`);
    lines.push(`   Crust: ${cartItem.crust}`);
    lines.push(`   Extras: ${extras}`);
    lines.push(`   Quantity: ${cartItem.quantity}`);
    lines.push(`   Notes: ${cartItem.notes || "None"}`);
    lines.push(`   Line total: ${money(lineTotal(cartItem))}`);
  });
  lines.push("");
  if (customer.fulfillment) lines.push(`Fulfillment: ${customer.fulfillment}`);
  if (customer.address) lines.push(`Address: ${customer.address}`);
  if (customer.pickupTime) lines.push(`Pickup time: ${customer.pickupTime}`);
  if (customer.payment) lines.push(`Payment: ${customer.payment}`);
  if (customer.notes) lines.push(`Order notes: ${customer.notes}`);
  lines.push(`Total: ${money(items.reduce((sum, item) => sum + lineTotal(item), 0))}`);
  return lines.join("\n");
}

function openWhatsApp(message) {
  window.open(`https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  toastRegion.appendChild(node);
  setTimeout(() => node.remove(), 3000);
}

let parallaxTargets = [];
let pointerX = 0;
let pointerY = 0;
let ticking = false;

function bindParallaxTargets() {
  parallaxTargets = Array.from(document.querySelectorAll(".product-card img, .gallery-tile img"));
}

function setParallax() {
  if (reduceMotion) return;
  const root = document.documentElement;
  const scroll = Math.min(window.scrollY, 760);
  root.style.setProperty("--hero-scroll", `${scroll * -0.08}px`);
  root.style.setProperty("--hero-side-scroll", `${scroll * 0.045}px`);
  root.style.setProperty("--hero-main-x", `${pointerX * 18}px`);
  root.style.setProperty("--hero-main-y", `${pointerY * 14}px`);
  root.style.setProperty("--hero-side-x", `${pointerX * -22}px`);
  root.style.setProperty("--hero-side-y", `${pointerY * -16}px`);
  root.style.setProperty("--hero-rotate", `${pointerX * 3.5}deg`);

  const viewportCenter = window.innerHeight / 2;
  parallaxTargets.forEach((image, index) => {
    const rect = image.getBoundingClientRect();
    const distance = (rect.top + rect.height / 2 - viewportCenter) / viewportCenter;
    const depth = index % 2 === 0 ? -10 : 10;
    image.style.setProperty("--item-shift", `${Math.max(-16, Math.min(16, distance * depth))}px`);
  });
  ticking = false;
}

function requestParallax() {
  if (!ticking && !reduceMotion) {
    window.requestAnimationFrame(setParallax);
    ticking = true;
  }
}

document.addEventListener("click", (event) => {
  if (event.target.matches("[data-open-cart]") || event.target.closest("[data-open-cart]")) openCart();
  if (event.target.matches("[data-close-cart]")) closeCart();
  if (event.target === cartDrawer) closeCart();
  if (event.target === modalLayer) closeModal();
});

document.addEventListener("pointermove", (event) => {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  if (event.clientY < rect.top || event.clientY > rect.bottom) return;
  pointerX = (event.clientX - rect.left) / rect.width - 0.5;
  pointerY = (event.clientY - rect.top) / rect.height - 0.5;
  requestParallax();
});

window.addEventListener("hashchange", render);
window.addEventListener("scroll", requestParallax, { passive: true });
window.addEventListener("resize", requestParallax);

updateCartCount();
renderCartDrawer();
if (!window.location.hash) window.location.hash = "#home";
render();
