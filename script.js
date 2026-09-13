/* ==========================================================================
   GATTI CHUTNEY – KHARADI
   Vanilla JavaScript Application (Frontend-Only)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------------------
     DATA STORES
     --------------------------------------------------------------------- */

  // 1. MENU DISHES DATASET
  const MENU_ITEMS = [
    {
      id: "dish-1",
      name: "Ghee Podi Masala Dosa",
      category: "dosa",
      price: 160,
      description: "Crispy golden dosa roasted in pure ghee, layered with signature spicy podi and stuffed with spiced potato mash.",
      image: "assets/ghee podi masala dosa.jpg",
      veg: true,
      popular: true
    },
    {
      id: "dish-2",
      name: "Ghee Pudi Tatte Idli",
      category: "idli",
      price: 110,
      description: "Soft, pillowy Karnataka-style plate idli drizzled generously with warm pure ghee and sprinkled with authentic podi.",
      image: "assets/Ghee pudi tatte idli.jpg",
      veg: true,
      popular: true
    },
    {
      id: "dish-3",
      name: "Ghee Masala Dosa",
      category: "dosa",
      price: 145,
      description: "Traditional crispy South Indian dosa roasted in fragrant ghee and filled with classic spiced potato masala.",
      image: "assets/Ghee masala dosa.jpg",
      veg: true,
      popular: true
    },
    {
      id: "dish-4",
      name: "Garlic Ghee Roast Dosa",
      category: "dosa",
      price: 155,
      description: "A thin, crispy roast dosa spread with garlic chutney and roasted with pure ghee for a rich punchy flavor.",
      image: "assets/Ghee cut dosa.jpg",
      veg: true,
      popular: true
    },
    {
      id: "dish-5",
      name: "Millet Dosa",
      category: "dosa",
      price: 150,
      description: "Healthy and crisp specialty dosa made from a nutritious fermented blend of foxtail millet and ragi.",
      image: "assets/Millet dosa.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-6",
      name: "Plain Roast Dosa",
      category: "dosa",
      price: 110,
      description: "Classic light and golden crisp crepe served with piping hot lentil sambar and fresh coconut chutneys.",
      image: "assets/Ghee cut dosa.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-7",
      name: "Classic Thatte Idli",
      category: "idli",
      price: 85,
      description: "Traditional large round fluffy idli steamed fresh to order, served with thick gatti coconut chutney and sambar.",
      image: "assets/Ghee pudi tatte idli.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-8",
      name: "Rasam Idli",
      category: "idli",
      price: 95,
      description: "Soft steamed idlis submerged in piping hot, spicy and tangy pepper-tamarind rasam garnished with cilantro.",
      image: "assets/Rasam Idly.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-9",
      name: "Medu Vada (2 Pcs)",
      category: "vada",
      price: 90,
      description: "Golden crisp savory lentil donuts with a fluffy interior, served with coconut chutney and hot sambar.",
      image: "assets/Idli wada.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-10",
      name: "Sambar Vada",
      category: "vada",
      price: 100,
      description: "Crisp Medu Vadas fully soaked in warm, rich aromatic South Indian lentil sambar topped with a touch of ghee.",
      image: "assets/Idli wada.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-11",
      name: "Idli Vada Combo",
      category: "idli",
      price: 120,
      description: "The classic duo: 1 soft Thatte Idli paired with 1 crispy Medu Vada and trio of fresh chutneys.",
      image: "assets/Idli wada.jpg",
      veg: true,
      popular: true
    },
    {
      id: "dish-12",
      name: "Curd Rice",
      category: "rice",
      price: 125,
      description: "Cooling creamy curd rice tempered with mustard seeds, curry leaves, ginger, green chillies, and fresh pomegranate.",
      image: "assets/Menu 1.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-13",
      name: "Lemon Rice",
      category: "rice",
      price: 115,
      description: "Tangy basmati rice tempered with fresh lemon juice, roasted peanuts, chana dal, mustard, and curry leaves.",
      image: "assets/menu 2.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-14",
      name: "Bisi Bele Bath",
      category: "rice",
      price: 140,
      description: "Traditional Karnataka spiced rice and lentil mash cooked with vegetables and ghee, served with crunchy boondi.",
      image: "assets/Menu 1.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-15",
      name: "Onion Uttapam",
      category: "uttapam",
      price: 135,
      description: "Thick, soft griddled pancake topped generously with finely chopped onions, green chillies, and fresh coriander.",
      image: "assets/menu 2.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-16",
      name: "Tomato Chilli Uttapam",
      category: "uttapam",
      price: 140,
      description: "Savoury rice pancake embedded with juicy diced tomatoes, spicy green chillies, and aromatic herbs.",
      image: "assets/Menu 1.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-17",
      name: "Akki Roti (2 Pcs)",
      category: "uttapam",
      price: 130,
      description: "Traditional rice flour flatbread griddled with chopped onions, dill leaves, cumin seeds, and fresh ginger.",
      image: "assets/menu 2.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-18",
      name: "Filter Coffee",
      category: "beverages",
      price: 45,
      description: "Authentic South Indian decoction coffee frothed with hot milk in traditional brass davara tumbler.",
      image: "assets/Menu 1.jpg",
      veg: true,
      popular: true
    },
    {
      id: "dish-19",
      name: "Masala Chaas",
      category: "beverages",
      price: 40,
      description: "Chilled refreshing buttermilk infused with roasted cumin, fresh mint, coriander, and rock salt.",
      image: "assets/menu 2.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-20",
      name: "Badam Milk",
      category: "beverages",
      price: 65,
      description: "Rich warm milk infused with ground almonds, saffron strands, and fragrant cardamom.",
      image: "assets/Menu 1.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-21",
      name: "Elaneer Payasam",
      category: "desserts",
      price: 110,
      description: "Refreshing cold South Indian dessert made with tender coconut pulp, coconut milk, and subtle cardamom.",
      image: "assets/menu 2.jpg",
      veg: true,
      popular: false
    },
    {
      id: "dish-22",
      name: "Rava Kesari",
      category: "desserts",
      price: 85,
      description: "Warm semolina sweet pudding cooked in pure ghee, flavored with saffron, roasted cashews, and raisins.",
      image: "assets/Menu 1.jpg",
      veg: true,
      popular: false
    }
  ];

  // 2. SERVICES & FACILITIES CATEGORIES (Section 6 & 7)
  const SERVICES_DATA = [
    {
      category: "Accessibility",
      icon: "♿",
      features: [
        "Wheelchair-accessible entrance",
        "Wheelchair-accessible seating",
        "Wheelchair-accessible toilet"
      ]
    },
    {
      category: "Service Options",
      icon: "🛵",
      features: [
        "Outdoor seating",
        "Delivery",
        "On-site services",
        "Takeaway",
        "Dine-in"
      ]
    },
    {
      category: "Highlights",
      icon: "☕",
      features: [
        "Great coffee",
        "Great tea selection"
      ]
    },
    {
      category: "Popular For",
      icon: "☀️",
      features: [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Solo dining"
      ]
    },
    {
      category: "Offerings",
      icon: "🍲",
      features: [
        "Coffee",
        "Healthy options",
        "Quick bite",
        "Small plates",
        "Vegan options",
        "Vegetarian options",
        "Vegetarian options only",
        "South Indian cuisine"
      ]
    },
    {
      category: "Dining Options",
      icon: "🍽️",
      features: [
        "Breakfast",
        "Brunch",
        "Lunch",
        "Dinner",
        "Counter service",
        "Dessert",
        "Seating",
        "Table service"
      ]
    },
    {
      category: "Amenities",
      icon: "🚻",
      features: [
        "Restroom"
      ]
    },
    {
      category: "Atmosphere",
      icon: "✨",
      features: [
        "Casual",
        "Quiet",
        "Trendy"
      ]
    },
    {
      category: "Crowd",
      icon: "👥",
      features: [
        "Groups"
      ]
    },
    {
      category: "Planning",
      icon: "📅",
      features: [
        "Accepts reservations"
      ]
    },
    {
      category: "Payments",
      icon: "💳",
      features: [
        "Credit cards",
        "Debit cards",
        "Google Pay",
        "NFC mobile payments"
      ]
    },
    {
      category: "Children",
      icon: "👶",
      features: [
        "Good for kids"
      ]
    },
    {
      category: "Parking",
      icon: "🚗",
      features: [
        "Free parking lot",
        "Free street parking",
        "Paid street parking",
        "Plenty of parking"
      ]
    },
    {
      category: "Pets",
      icon: "🐾",
      features: [
        "Dogs allowed outside"
      ]
    }
  ];

  // 3. GALLERY DATASET (Assets reuse)
  const GALLERY_ITEMS = [
    {
      id: "gal-1",
      src: "assets/ghee podi masala dosa.jpg",
      category: "food",
      title: "Ghee Podi Masala Dosa",
      caption: "Crispy dosa generously dusted with spicy aromatic podi.",
      spanClass: "item-wide"
    },
    {
      id: "gal-2",
      src: "assets/seating snap 1.png",
      category: "interior",
      title: "Main Dining Hall",
      caption: "Spacious and modern South Indian interior at Soho Panchshil Kharadi.",
      spanClass: ""
    },
    {
      id: "gal-3",
      src: "assets/Ghee pudi tatte idli.jpg",
      category: "food",
      title: "Ghee Pudi Tatte Idli",
      caption: "Steamed fluffy plate idli topped with pure ghee.",
      spanClass: ""
    },
    {
      id: "gal-4",
      src: "assets/seating snap 2.png",
      category: "ambience",
      title: "Warm Ambience",
      caption: "Cosy seating designed for families, solo diners, and groups.",
      spanClass: "item-tall"
    },
    {
      id: "gal-5",
      src: "assets/Idli wada.jpg",
      category: "food",
      title: "Medu Vada & Idli Combo",
      caption: "Golden crisp lentil vada with fresh coconut gatti chutney.",
      spanClass: ""
    },
    {
      id: "gal-6",
      src: "assets/Ghee masala dosa.jpg",
      category: "food",
      title: "Ghee Masala Dosa",
      caption: "Perfectly golden dosa filled with spiced potato potato mash.",
      spanClass: "item-col2"
    },
    {
      id: "gal-7",
      src: "assets/Rasam Idly.jpg",
      category: "food",
      title: "Rasam Idli Bowl",
      caption: "Idlis soaked in piping hot pepper rasam.",
      spanClass: ""
    },
    {
      id: "gal-8",
      src: "assets/Millet dosa.jpg",
      category: "food",
      title: "Healthy Millet Dosa",
      caption: "Nutritious foxtail and ragi millet dosa.",
      spanClass: ""
    },
    {
      id: "gal-9",
      src: "assets/Menu 1.jpg",
      category: "drinks",
      title: "Authentic Filter Coffee",
      caption: "Brewed fresh with hot frothed milk.",
      spanClass: ""
    },
    {
      id: "gal-10",
      src: "assets/menu 2.jpg",
      category: "drinks",
      title: "Beverages & Desserts",
      caption: "Refreshing spiced buttermilk and traditional sweets.",
      spanClass: ""
    }
  ];

  // 4. INITIAL REVIEWS DATASET
  const INITIAL_REVIEWS = [
    {
      id: "rev-1",
      name: "The Hungry Verdict",
      meta: "Local Guide · 48 reviews",
      stars: 5,
      clamped: "Had a wonderful experience at Gatti Chutney, Pune! The food was fresh, flavourful and true to South Indian roots.",
      full: "The full experience felt considered from start to finish — the dosas arrived hot, the podi was generous, and the filter coffee finished the meal exactly right. A place worth returning to.",
      date: "2026-08-15"
    },
    {
      id: "rev-2",
      name: "AZ Wandering",
      meta: "Local Guide · 112 reviews",
      stars: 5,
      clamped: "Dropped by Gatti Chutney and had a really good experience. The highlight of the meal was definitely the Ghee Masala Dosa.",
      full: "Crisp on the outside, generously portioned, and packed with flavour. Staff were attentive and the space was clean and comfortable throughout our visit.",
      date: "2026-08-20"
    },
    {
      id: "rev-3",
      name: "Hatim Decor",
      meta: "Local Guide · 25 reviews",
      stars: 5,
      clamped: "Such a great place to have South Indian food. The food is great and don't have to be stuck in long queues.",
      full: "Service was quick on our visit and the team was polite throughout. A reliable spot for an authentic South Indian meal in Kharadi.",
      date: "2026-09-01"
    },
    {
      id: "rev-4",
      name: "Priya Sharma",
      meta: "Diner",
      stars: 5,
      clamped: "The Thatte Idli dipped in spicy rasam is out of this world! Coffee was brewed to perfection.",
      full: "I visit Gatti Chutney almost every weekend for breakfast. The podi quality and ghee aroma are unmatched anywhere else in Kharadi.",
      date: "2026-09-05"
    },
    {
      id: "rev-5",
      name: "Rohan Kulkarni",
      meta: "Local Guide · 64 reviews",
      stars: 4,
      clamped: "Very crisp dosas and quick takeaway service. Loved the coconut gatti chutney!",
      full: "Seating can get full during peak Sunday morning hours, but the turnaround time is fast and the staff handles the crowd warmly.",
      date: "2026-09-10"
    }
  ];

  /* ---------------------------------------------------------------------
     LOCAL STORAGE HELPERS
     --------------------------------------------------------------------- */
  const Storage = {
    get(key, fallback = []) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
      } catch (e) {
        console.warn(`LocalStorage read error for ${key}:`, e);
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.warn(`LocalStorage write error for ${key}:`, e);
      }
    }
  };

  /* ---------------------------------------------------------------------
     TOAST NOTIFICATION SYSTEM
     --------------------------------------------------------------------- */
  const toastContainer = document.getElementById("toastContainer");

  function showToast(message, icon = "ℹ️") {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    // Trigger reflow for animation
    setTimeout(() => toast.classList.add("show"), 10);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  /* ---------------------------------------------------------------------
     1 & 13. STICKY NAVBAR & OPENING STATUS
     --------------------------------------------------------------------- */
  const header = document.getElementById("siteHeader");
  function updateHeaderState() {
    if (window.scrollY > 24) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  // Real-time Opening Status Check (Hours: 7:00 AM to 11:00 PM)
  function checkOpeningStatus() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const isOpen = hours >= 7 && hours < 23;
    const heroPill = document.getElementById("heroStatusPill");
    const statusText = document.getElementById("statusText");
    const locationHoursStatus = document.getElementById("locationHoursStatus");

    if (heroPill && statusText) {
      if (isOpen) {
        heroPill.className = "hero-status-pill open";
        statusText.textContent = "OPEN NOW · Closes at 11:00 PM";
      } else {
        heroPill.className = "hero-status-pill closed";
        statusText.textContent = "CLOSED NOW · Opens at 7:00 AM";
      }
    }

    if (locationHoursStatus) {
      locationHoursStatus.textContent = isOpen 
        ? "Open Now · Closes at 11:00 PM" 
        : "Closed Now · Opens tomorrow at 7:00 AM";
    }
  }
  checkOpeningStatus();
  setInterval(checkOpeningStatus, 60000); // Re-check every minute

  /* ---------------------------------------------------------------------
     MOBILE HAMBURGER & BOTTOM BAR
     --------------------------------------------------------------------- */
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  function closeMobileNav() {
    if (mobileNav) mobileNav.classList.remove("open");
    if (hamburger) {
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Open menu");
    }
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
      hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
  }

  /* ---------------------------------------------------------------------
     SMOOTH SCROLLING & ACTIVE SECTION HIGHLIGHT
     --------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          closeMobileNav();
        }
      }
    });
  });

  const sections = ["home", "menu", "about", "services", "gallery", "reviews", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = document.querySelectorAll("[data-nav]");

  function updateActiveNav() {
    let currentId = sections[0] ? sections[0].id : null;
    const scrollPos = window.scrollY + window.innerHeight * 0.35;

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("active-link", isActive);
    });
  }
  updateActiveNav();
  window.addEventListener("scroll", updateActiveNav, { passive: true });

  /* ---------------------------------------------------------------------
     11. FAVORITES MANAGER
     --------------------------------------------------------------------- */
  let favourites = Storage.get("gatti_favourites", ["dish-1", "dish-2", "dish-18"]);

  function isFav(dishId) {
    return favourites.includes(dishId);
  }

  function toggleFav(dishId) {
    if (isFav(dishId)) {
      favourites = favourites.filter((id) => id !== dishId);
      showToast("Removed from favourites", "🤍");
    } else {
      favourites.push(dishId);
      showToast("Added to your favourites!", "❤️");
    }
    Storage.set("gatti_favourites", favourites);
    updateFavUI();
  }

  function updateFavUI() {
    const count = favourites.length;
    const headerFavCount = document.getElementById("headerFavCount");
    const favTabCount = document.getElementById("favTabCount");

    if (headerFavCount) {
      headerFavCount.textContent = count;
      headerFavCount.classList.add("pulse");
      setTimeout(() => headerFavCount.classList.remove("pulse"), 250);
    }
    if (favTabCount) favTabCount.textContent = count;

    // Update all favorite button states in DOM
    document.querySelectorAll(".fav-toggle-btn, #qvFavBtn").forEach((btn) => {
      const dishId = btn.dataset.dishid;
      if (dishId) {
        const active = isFav(dishId);
        btn.classList.toggle("is-fav", active);
        btn.setAttribute("aria-label", active ? "Remove from favourites" : "Add to favourites");
      }
    });

    // If "favourites" category tab is active, re-filter menu
    const activeTab = document.querySelector(".menu-filters .filter-btn.active");
    if (activeTab && activeTab.dataset.filter === "favourites") {
      renderMenuGrid("favourites");
    }
  }

  /* ---------------------------------------------------------------------
     2 & 17. ORDER CART MANAGER
     --------------------------------------------------------------------- */
  let cart = Storage.get("gatti_cart", [
    { id: "dish-1", qty: 1 },
    { id: "dish-18", qty: 2 }
  ]);
  let orderType = "delivery"; // 'delivery' or 'takeaway'

  function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function getCartItemQty(dishId) {
    const item = cart.find((i) => i.id === dishId);
    return item ? item.qty : 0;
  }

  function addToCart(dishId, qtyToAdd = 1) {
    const existing = cart.find((i) => i.id === dishId);
    if (existing) {
      existing.qty += qtyToAdd;
    } else {
      cart.push({ id: dishId, qty: qtyToAdd });
    }
    const dish = MENU_ITEMS.find((d) => d.id === dishId);
    showToast(`Added ${dish ? dish.name : "item"} to order`, "🛒");
    saveCart();
  }

  function updateCartQty(dishId, newQty) {
    if (newQty <= 0) {
      cart = cart.filter((i) => i.id !== dishId);
    } else {
      const existing = cart.find((i) => i.id === dishId);
      if (existing) existing.qty = newQty;
    }
    saveCart();
  }

  function saveCart() {
    Storage.set("gatti_cart", cart);
    updateCartUI();
  }

  function updateCartUI() {
    const count = getCartCount();
    const headerCartCount = document.getElementById("headerCartCount");
    const mobileBarCartCount = document.getElementById("mobileBarCartCount");

    if (headerCartCount) {
      headerCartCount.textContent = count;
      headerCartCount.classList.add("pulse");
      setTimeout(() => headerCartCount.classList.remove("pulse"), 250);
    }
    if (mobileBarCartCount) mobileBarCartCount.textContent = count;

    renderCartItems();
    renderMenuGrid(currentMenuFilter, currentMenuQuery);
  }

  function renderCartItems() {
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const cartSubtotalEl = document.getElementById("cartSubtotal");
    const cartDeliveryFeeEl = document.getElementById("cartDeliveryFee");
    const cartServiceFeeEl = document.getElementById("cartServiceFee");
    const cartTotalEl = document.getElementById("cartTotal");

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart-view">
          <div class="icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Explore our menu and add your favourite South Indian dishes to get started.</p>
        </div>
      `;
      if (cartSubtotalEl) cartSubtotalEl.textContent = "₹0";
      if (cartTotalEl) cartTotalEl.textContent = "₹0";
      return;
    }

    let subtotal = 0;
    let html = "";

    cart.forEach((cartItem) => {
      const dish = MENU_ITEMS.find((d) => d.id === cartItem.id);
      if (!dish) return;
      const itemTotal = dish.price * cartItem.qty;
      subtotal += itemTotal;

      html += `
        <div class="cart-item">
          <img src="${dish.image}" alt="${dish.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4>${dish.name}</h4>
            <span class="cart-item-price">₹${dish.price} × ${cartItem.qty} = ₹${itemTotal}</span>
          </div>
          <div class="cart-item-controls">
            <button class="cart-qty-btn btn-minus" data-id="${dish.id}">-</button>
            <span class="cart-qty-val">${cartItem.qty}</span>
            <button class="cart-qty-btn btn-plus" data-id="${dish.id}">+</button>
          </div>
        </div>
      `;
    });

    cartItemsContainer.innerHTML = html;

    // Attach quantity event listeners inside cart drawer
    cartItemsContainer.querySelectorAll(".btn-minus").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        updateCartQty(id, getCartItemQty(id) - 1);
      });
    });

    cartItemsContainer.querySelectorAll(".btn-plus").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        updateCartQty(id, getCartItemQty(id) + 1);
      });
    });

    const deliveryFee = orderType === "delivery" ? 30 : 0;
    const serviceFee = 15;
    const total = subtotal + deliveryFee + serviceFee;

    if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal}`;
    if (cartDeliveryFeeEl) cartDeliveryFeeEl.textContent = `₹${deliveryFee}`;
    if (cartServiceFeeEl) cartServiceFeeEl.textContent = `₹${serviceFee}`;
    if (cartTotalEl) cartTotalEl.textContent = `₹${total}`;
  }

  // Order Drawer Toggle & Controls
  const orderDrawerOverlay = document.getElementById("orderDrawerOverlay");
  const closeOrderDrawerBtn = document.getElementById("closeOrderDrawerBtn");

  function openOrderDrawer() {
    if (orderDrawerOverlay) {
      orderDrawerOverlay.classList.add("open");
      orderDrawerOverlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    }
  }

  function closeOrderDrawer() {
    if (orderDrawerOverlay) {
      orderDrawerOverlay.classList.remove("open");
      orderDrawerOverlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  }

  document.querySelectorAll("#cartDrawerBtn, #headerOrderBtn, #mobileOrderBtn, #mobileBarOrderBtn, #locationOrderBtn").forEach((btn) => {
    btn.addEventListener("click", openOrderDrawer);
  });

  if (closeOrderDrawerBtn) closeOrderDrawerBtn.addEventListener("click", closeOrderDrawer);

  if (orderDrawerOverlay) {
    orderDrawerOverlay.addEventListener("click", (e) => {
      if (e.target === orderDrawerOverlay) closeOrderDrawer();
    });
  }

  // Order Type Toggle (Delivery vs Takeaway)
  const orderTypeBtns = document.querySelectorAll(".order-type-btn");
  const deliveryAddressField = document.getElementById("deliveryAddressField");
  const takeawayTimeField = document.getElementById("takeawayTimeField");
  const deliveryFeeLabel = document.getElementById("deliveryFeeLabel");

  orderTypeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      orderTypeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      orderType = btn.dataset.ordertype;

      if (orderType === "delivery") {
        if (deliveryAddressField) deliveryAddressField.hidden = false;
        if (takeawayTimeField) takeawayTimeField.hidden = true;
        if (deliveryFeeLabel) deliveryFeeLabel.textContent = "Delivery Charge";
      } else {
        if (deliveryAddressField) deliveryAddressField.hidden = true;
        if (takeawayTimeField) takeawayTimeField.hidden = false;
        if (deliveryFeeLabel) deliveryFeeLabel.textContent = "Takeaway Fee";
      }
      renderCartItems();
    });
  });

  // Checkout Action (Realism Rule)
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showToast("Your cart is empty! Add dishes to proceed.", "⚠️");
        return;
      }

      showToast("Order request prepared successfully!", "✅");
      cart = [];
      saveCart();
      closeOrderDrawer();
    });
  }

  /* ---------------------------------------------------------------------
     3. MENU FUNCTIONALITY & SEARCH
     --------------------------------------------------------------------- */
  let currentMenuFilter = "popular";
  let currentMenuQuery = "";

  const menuGrid = document.getElementById("menuGrid");
  const menuSearchInput = document.getElementById("menuSearchInput");
  const menuSearchClear = document.getElementById("menuSearchClear");
  const menuEmptyState = document.getElementById("menuEmptyState");
  const resetSearchBtn = document.getElementById("resetSearchBtn");
  const filterBtns = document.querySelectorAll(".menu-filters .filter-btn");

  function renderMenuGrid(category = "popular", query = "") {
    if (!menuGrid) return;

    let filtered = MENU_ITEMS;

    if (category === "favourites") {
      filtered = filtered.filter((dish) => isFav(dish.id));
    } else if (category !== "popular") {
      filtered = filtered.filter((dish) => dish.category === category);
    } else {
      filtered = filtered.filter((dish) => dish.popular);
    }

    if (query.trim() !== "") {
      const q = query.toLowerCase().trim();
      filtered = filtered.filter(
        (dish) =>
          dish.name.toLowerCase().includes(q) ||
          dish.description.toLowerCase().includes(q) ||
          dish.category.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      menuGrid.innerHTML = "";
      if (menuEmptyState) menuEmptyState.hidden = false;
      return;
    }

    if (menuEmptyState) menuEmptyState.hidden = true;

    let html = "";
    filtered.forEach((dish) => {
      const qty = getCartItemQty(dish.id);
      const fav = isFav(dish.id);

      html += `
        <article class="menu-card" data-id="${dish.id}">
          <div class="menu-card-img" data-quickview="${dish.id}">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy">
            <button class="fav-toggle-btn ${fav ? "is-fav" : ""}" data-dishid="${dish.id}" aria-label="Toggle favourite">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>

          <div class="menu-card-content">
            <div class="menu-card-top">
              <span class="menu-card-title">
                <span class="diet-dot" title="Vegetarian"></span>
                ${dish.name}
              </span>
              <span class="menu-card-price">₹${dish.price}</span>
            </div>
            <p class="menu-card-desc">${dish.description}</p>

            <div class="menu-card-actions">
              <button class="btn btn-ghost btn-sm" data-quickview="${dish.id}">Quick View</button>
              ${
                qty > 0
                  ? `
                  <div class="card-qty-control">
                    <button class="card-qty-btn menu-qty-minus" data-id="${dish.id}">-</button>
                    <span class="card-qty-val">${qty}</span>
                    <button class="card-qty-btn menu-qty-plus" data-id="${dish.id}">+</button>
                  </div>
                `
                  : `
                  <button class="btn-add-cart btn-add-dish" data-id="${dish.id}">Add to Order</button>
                `
              }
            </div>
          </div>
        </article>
      `;
    });

    menuGrid.innerHTML = html;

    // Attach event listeners to card elements
    menuGrid.querySelectorAll("[data-quickview]").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target.closest(".fav-toggle-btn")) return;
        const dishId = el.dataset.quickview;
        openQuickView(dishId);
      });
    });

    menuGrid.querySelectorAll(".fav-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const dishId = btn.dataset.dishid;
        toggleFav(dishId);
      });
    });

    menuGrid.querySelectorAll(".btn-add-dish").forEach((btn) => {
      btn.addEventListener("click", () => {
        addToCart(btn.dataset.id, 1);
      });
    });

    menuGrid.querySelectorAll(".menu-qty-minus").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        updateCartQty(id, getCartItemQty(id) - 1);
      });
    });

    menuGrid.querySelectorAll(".menu-qty-plus").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        updateCartQty(id, getCartItemQty(id) + 1);
      });
    });
  }

  // Filter Buttons Event
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      currentMenuFilter = btn.dataset.filter;
      renderMenuGrid(currentMenuFilter, currentMenuQuery);
    });
  });

  // Search Input Event
  if (menuSearchInput) {
    menuSearchInput.addEventListener("input", (e) => {
      currentMenuQuery = e.target.value;
      if (menuSearchClear) menuSearchClear.hidden = currentMenuQuery === "";
      renderMenuGrid(currentMenuFilter, currentMenuQuery);
    });
  }

  if (menuSearchClear) {
    menuSearchClear.addEventListener("click", () => {
      menuSearchInput.value = "";
      currentMenuQuery = "";
      menuSearchClear.hidden = true;
      renderMenuGrid(currentMenuFilter, currentMenuQuery);
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener("click", () => {
      if (menuSearchInput) menuSearchInput.value = "";
      currentMenuQuery = "";
      if (menuSearchClear) menuSearchClear.hidden = true;
      renderMenuGrid(currentMenuFilter, "");
    });
  }

  // Render Signature / Featured Dishes strip
  function renderFeaturedDishes() {
    const featuredDishGrid = document.getElementById("featuredDishGrid");
    if (!featuredDishGrid) return;

    const featuredIds = ["dish-1", "dish-2", "dish-4", "dish-5", "dish-18"];
    const featuredDishes = MENU_ITEMS.filter((d) => featuredIds.includes(d.id));

    let html = "";
    featuredDishes.forEach((dish, idx) => {
      const isWide = idx === 0;
      const fav = isFav(dish.id);
      html += `
        <article class="dish-card ${isWide ? "dish-card--wide" : ""}">
          <div class="dish-image">
            <img src="${dish.image}" alt="${dish.name}">
            ${isWide ? `<span class="badge">🔥 Signature</span>` : ""}
            <button class="fav-toggle-btn ${fav ? "is-fav" : ""}" data-dishid="${dish.id}" aria-label="Toggle favourite">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>
          <div class="dish-info">
            <div class="dish-header">
              <h3>${dish.name}</h3>
              <span class="dish-price">₹${dish.price}</span>
            </div>
            <p>${dish.description}</p>
            <div class="dish-footer">
              <button class="btn btn-primary btn-sm btn-add-dish" data-id="${dish.id}">+ Add to Order</button>
              <button class="btn btn-ghost btn-sm" data-quickview="${dish.id}">Quick View</button>
            </div>
          </div>
        </article>
      `;
    });

    featuredDishGrid.innerHTML = html;

    featuredDishGrid.querySelectorAll(".fav-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFav(btn.dataset.dishid);
      });
    });

    featuredDishGrid.querySelectorAll(".btn-add-dish").forEach((btn) => {
      btn.addEventListener("click", () => addToCart(btn.dataset.id, 1));
    });

    featuredDishGrid.querySelectorAll("[data-quickview]").forEach((btn) => {
      btn.addEventListener("click", () => openQuickView(btn.dataset.quickview));
    });
  }

  /* ---------------------------------------------------------------------
     4. MENU ITEM QUICK VIEW MODAL
     --------------------------------------------------------------------- */
  const quickViewOverlay = document.getElementById("quickViewOverlay");
  const closeQuickViewBtn = document.getElementById("closeQuickViewBtn");
  let qvCurrentDishId = null;
  let qvSelectedQty = 1;

  function openQuickView(dishId) {
    const dish = MENU_ITEMS.find((d) => d.id === dishId);
    if (!dish || !quickViewOverlay) return;

    qvCurrentDishId = dishId;
    qvSelectedQty = 1;

    document.getElementById("qvImg").src = dish.image;
    document.getElementById("qvImg").alt = dish.name;
    document.getElementById("qvCategoryBadge").textContent = dish.category.toUpperCase();
    document.getElementById("qvDietTag").textContent = dish.veg ? "🟢 Pure Vegetarian" : "🔴 Non-Veg";
    document.getElementById("qvTitle").textContent = dish.name;
    document.getElementById("qvPrice").textContent = `₹${dish.price}`;
    document.getElementById("qvDesc").textContent = dish.description;
    document.getElementById("qvQtyVal").textContent = qvSelectedQty;

    const qvFavBtn = document.getElementById("qvFavBtn");
    if (qvFavBtn) {
      qvFavBtn.dataset.dishid = dishId;
      qvFavBtn.classList.toggle("is-fav", isFav(dishId));
    }

    quickViewOverlay.classList.add("open");
    quickViewOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeQuickView() {
    if (quickViewOverlay) {
      quickViewOverlay.classList.remove("open");
      quickViewOverlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  }

  if (closeQuickViewBtn) closeQuickViewBtn.addEventListener("click", closeQuickView);

  if (quickViewOverlay) {
    quickViewOverlay.addEventListener("click", (e) => {
      if (e.target === quickViewOverlay) closeQuickView();
    });
  }

  const qvQtyMinus = document.getElementById("qvQtyMinus");
  const qvQtyPlus = document.getElementById("qvQtyPlus");
  const qvAddToCartBtn = document.getElementById("qvAddToCartBtn");
  const qvFavBtn = document.getElementById("qvFavBtn");

  if (qvQtyMinus) {
    qvQtyMinus.addEventListener("click", () => {
      if (qvSelectedQty > 1) {
        qvSelectedQty--;
        document.getElementById("qvQtyVal").textContent = qvSelectedQty;
      }
    });
  }

  if (qvQtyPlus) {
    qvQtyPlus.addEventListener("click", () => {
      qvSelectedQty++;
      document.getElementById("qvQtyVal").textContent = qvSelectedQty;
    });
  }

  if (qvAddToCartBtn) {
    qvAddToCartBtn.addEventListener("click", () => {
      if (qvCurrentDishId) {
        addToCart(qvCurrentDishId, qvSelectedQty);
        closeQuickView();
      }
    });
  }

  if (qvFavBtn) {
    qvFavBtn.addEventListener("click", () => {
      if (qvCurrentDishId) toggleFav(qvCurrentDishId);
    });
  }

  /* ---------------------------------------------------------------------
     5. RESERVATION FUNCTIONALITY
     --------------------------------------------------------------------- */
  const reservationOverlay = document.getElementById("reservationOverlay");
  const closeReservationBtn = document.getElementById("closeReservationBtn");
  const reservationForm = document.getElementById("reservationForm");
  const reservationFormView = document.getElementById("reservationFormView");
  const reservationSuccessView = document.getElementById("reservationSuccessView");
  const cancelReservationBtn = document.getElementById("cancelReservationBtn");
  const closeSuccessResBtn = document.getElementById("closeSuccessResBtn");

  let reservations = Storage.get("gatti_reservations", []);

  function openReservationModal() {
    if (!reservationOverlay) return;

    // Set minimum date to today
    const dateInput = document.getElementById("resDate");
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.min = today;
    }

    reservationFormView.hidden = false;
    reservationSuccessView.hidden = true;
    reservationOverlay.classList.add("open");
    reservationOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeReservationModal() {
    if (reservationOverlay) {
      reservationOverlay.classList.remove("open");
      reservationOverlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  }

  document.querySelectorAll("#heroReserveBtn, #mobileReserveBtn, #mobileBarReserveBtn, #locationReserveBtn, #ctaReserveBtn").forEach((btn) => {
    btn.addEventListener("click", openReservationModal);
  });

  if (closeReservationBtn) closeReservationBtn.addEventListener("click", closeReservationModal);

  if (reservationOverlay) {
    reservationOverlay.addEventListener("click", (e) => {
      if (e.target === reservationOverlay) closeReservationModal();
    });
  }

  if (reservationForm) {
    reservationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Reset errors
      document.querySelectorAll(".form-error").forEach((el) => (el.textContent = ""));

      const name = document.getElementById("resName").value.trim();
      const phone = document.getElementById("resPhone").value.trim();
      const date = document.getElementById("resDate").value;
      const time = document.getElementById("resTime").value;
      const guests = parseInt(document.getElementById("resGuests").value, 10);
      const seating = document.querySelector('input[name="resSeating"]:checked').value;

      let isValid = true;

      if (!name) {
        document.getElementById("resNameError").textContent = "Please enter your name.";
        isValid = false;
      }

      if (!phone || !/^\d{10}$/.test(phone.replace(/[\s-]/g, ""))) {
        document.getElementById("resPhoneError").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
      }

      if (!date) {
        document.getElementById("resDateError").textContent = "Please select a date.";
        isValid = false;
      } else {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          document.getElementById("resDateError").textContent = "Date cannot be in the past.";
          isValid = false;
        }
      }

      if (!time) {
        document.getElementById("resTimeError").textContent = "Please select a preferred time.";
        isValid = false;
      }

      if (!guests || guests < 1) {
        document.getElementById("resGuestsError").textContent = "Guests must be at least 1.";
        isValid = false;
      }

      if (!isValid) return;

      const resObj = {
        id: "res-" + Date.now(),
        name,
        phone,
        date,
        time,
        guests,
        seating,
        createdAt: new Date().toISOString()
      };

      reservations.push(resObj);
      Storage.set("gatti_reservations", reservations);

      // Render summary screen
      document.getElementById("summaryName").textContent = name;
      document.getElementById("summaryDateTime").textContent = `${date} at ${time}`;
      document.getElementById("summaryGuests").textContent = `${guests} Person(s)`;
      document.getElementById("summarySeating").textContent = seating;

      reservationFormView.hidden = true;
      reservationSuccessView.hidden = false;

      showToast("Reservation request saved locally!", "📅");
    });
  }

  if (cancelReservationBtn) {
    cancelReservationBtn.addEventListener("click", () => {
      if (reservations.length > 0) {
        reservations.pop(); // Remove last created
        Storage.set("gatti_reservations", reservations);
      }
      showToast("Reservation request cancelled", "ℹ️");
      closeReservationModal();
    });
  }

  if (closeSuccessResBtn) closeSuccessResBtn.addEventListener("click", closeReservationModal);

  /* ---------------------------------------------------------------------
     6 & 7. SERVICES & FACILITIES ACCORDION RENDER
     --------------------------------------------------------------------- */
  function renderServicesAccordion() {
    const servicesGrid = document.getElementById("servicesGrid");
    if (!servicesGrid) return;

    let html = "";
    SERVICES_DATA.forEach((serv) => {
      html += `
        <details class="service-card">
          <summary class="service-card-header">
            <h3>
              <span class="service-icon">${serv.icon}</span>
              ${serv.category}
            </h3>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="service-count-badge">${serv.features.length} features</span>
              <span class="service-chevron">▼</span>
            </div>
          </summary>
          <div class="service-card-body">
            ${serv.features.map((feat) => `<span class="feature-tag">${feat}</span>`).join("")}
          </div>
        </details>
      `;
    });

    servicesGrid.innerHTML = html;
  }

  /* ---------------------------------------------------------------------
     8. GALLERY LIGHTBOX & CATEGORY FILTERING
     --------------------------------------------------------------------- */
  let currentGalleryFilter = "all";
  let currentLightboxIdx = 0;
  let activeGalleryItems = [];

  const galleryGrid = document.getElementById("galleryGrid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxCounter = document.getElementById("lightboxCounter");

  function renderGalleryGrid(category = "all") {
    if (!galleryGrid) return;

    currentGalleryFilter = category;
    activeGalleryItems = category === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === category);

    let html = "";
    activeGalleryItems.forEach((item, idx) => {
      html += `
        <button class="gallery-item is-shown ${item.spanClass}" data-idx="${idx}">
          <img src="${item.src}" alt="${item.title}" loading="lazy">
          <div class="gallery-overlay-icon">🔍</div>
        </button>
      `;
    });

    galleryGrid.innerHTML = html;

    galleryGrid.querySelectorAll(".gallery-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.idx, 10);
        openLightbox(idx);
      });
    });
  }

  const galleryBtns = document.querySelectorAll(".gallery-filters .filter-btn");
  galleryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      galleryBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderGalleryGrid(btn.dataset.gfilter);
    });
  });

  function openLightbox(idx) {
    if (!activeGalleryItems[idx] || !lightbox) return;
    currentLightboxIdx = idx;
    updateLightboxContent();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function updateLightboxContent() {
    const item = activeGalleryItems[currentLightboxIdx];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    if (lightboxCaption) lightboxCaption.textContent = `${item.title} — ${item.caption}`;
    if (lightboxCounter) lightboxCounter.textContent = `${currentLightboxIdx + 1} / ${activeGalleryItems.length}`;
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", () => {
      currentLightboxIdx = (currentLightboxIdx - 1 + activeGalleryItems.length) % activeGalleryItems.length;
      updateLightboxContent();
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener("click", () => {
      currentLightboxIdx = (currentLightboxIdx + 1) % activeGalleryItems.length;
      updateLightboxContent();
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* ---------------------------------------------------------------------
     9 & 10. REVIEWS & WRITE A REVIEW MODAL
     --------------------------------------------------------------------- */
  let userReviews = Storage.get("gatti_reviews", []);
  let currentSort = "recommended";
  let reviewsLimit = 3;

  const reviewGrid = document.getElementById("reviewGrid");
  const reviewSortSelect = document.getElementById("reviewSortSelect");
  const loadMoreReviewsBtn = document.getElementById("loadMoreReviewsBtn");

  function getCombinedReviews() {
    return [...userReviews, ...INITIAL_REVIEWS];
  }

  function renderReviewsGrid() {
    if (!reviewGrid) return;

    let reviews = getCombinedReviews();

    if (currentSort === "highest") {
      reviews.sort((a, b) => b.stars - a.stars);
    } else if (currentSort === "lowest") {
      reviews.sort((a, b) => a.stars - b.stars);
    } else if (currentSort === "newest") {
      reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    const visibleReviews = reviews.slice(0, reviewsLimit);

    let html = "";
    visibleReviews.forEach((rev) => {
      const starsStr = "★".repeat(rev.stars) + "☆".repeat(5 - rev.stars);
      const initials = rev.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

      html += `
        <article class="review-card">
          <div>
            <div class="review-head">
              <div class="reviewer-avatar" aria-hidden="true">${initials}</div>
              <div>
                <h3>${rev.name}</h3>
                <span class="reviewer-meta">${rev.meta || "Verified Diner"}</span>
              </div>
            </div>
            <span class="review-stars" aria-hidden="true">${starsStr}</span>
            <p class="review-text">
              <span class="review-clamped">${rev.clamped}</span>
              ${rev.full ? `<span class="review-full" hidden> ${rev.full}</span>` : ""}
            </p>
          </div>
          ${
            rev.full
              ? `<button class="read-more-btn" data-review-toggle>Read More</button>`
              : ""
          }
        </article>
      `;
    });

    reviewGrid.innerHTML = html;

    // Attach Read More toggle
    reviewGrid.querySelectorAll("[data-review-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".review-card");
        const fullText = card.querySelector(".review-full");
        const isHidden = fullText.hasAttribute("hidden");

        if (isHidden) {
          fullText.removeAttribute("hidden");
          btn.textContent = "Read Less";
        } else {
          fullText.setAttribute("hidden", "");
          btn.textContent = "Read More";
        }
      });
    });

    if (loadMoreReviewsBtn) {
      if (reviewsLimit >= reviews.length) {
        loadMoreReviewsBtn.style.display = "none";
      } else {
        loadMoreReviewsBtn.style.display = "inline-flex";
      }
    }
  }

  if (reviewSortSelect) {
    reviewSortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderReviewsGrid();
    });
  }

  if (loadMoreReviewsBtn) {
    loadMoreReviewsBtn.addEventListener("click", () => {
      reviewsLimit += 3;
      renderReviewsGrid();
    });
  }

  // Write a Review Modal
  const writeReviewOverlay = document.getElementById("writeReviewOverlay");
  const openWriteReviewBtn = document.getElementById("openWriteReviewBtn");
  const closeReviewModalBtn = document.getElementById("closeReviewModalBtn");
  const writeReviewForm = document.getElementById("writeReviewForm");
  const starItems = document.querySelectorAll(".star-rating-input .star-item");
  const reviewRatingVal = document.getElementById("reviewRatingVal");

  function openWriteReviewModal() {
    if (writeReviewOverlay) {
      writeReviewOverlay.classList.add("open");
      writeReviewOverlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    }
  }

  function closeWriteReviewModal() {
    if (writeReviewOverlay) {
      writeReviewOverlay.classList.remove("open");
      writeReviewOverlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  }

  if (openWriteReviewBtn) openWriteReviewBtn.addEventListener("click", openWriteReviewModal);
  if (closeReviewModalBtn) closeReviewModalBtn.addEventListener("click", closeWriteReviewModal);

  if (writeReviewOverlay) {
    writeReviewOverlay.addEventListener("click", (e) => {
      if (e.target === writeReviewOverlay) closeWriteReviewModal();
    });
  }

  // Interactive Star Rating Selection
  starItems.forEach((star) => {
    const val = parseInt(star.dataset.value, 10);

    star.addEventListener("mouseover", () => {
      starItems.forEach((s) => {
        s.classList.toggle("hovered", parseInt(s.dataset.value, 10) <= val);
      });
    });

    star.addEventListener("mouseout", () => {
      starItems.forEach((s) => s.classList.remove("hovered"));
    });

    star.addEventListener("click", () => {
      reviewRatingVal.value = val;
      starItems.forEach((s) => {
        s.classList.toggle("active", parseInt(s.dataset.value, 10) <= val);
      });
    });
  });
  // Set default 5 stars active
  starItems.forEach((s) => s.classList.add("active"));

  if (writeReviewForm) {
    writeReviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelectorAll(".modal-review .form-error").forEach((el) => (el.textContent = ""));

      const authorName = document.getElementById("reviewAuthorName").value.trim();
      const rating = parseInt(reviewRatingVal.value, 10);
      const text = document.getElementById("reviewText").value.trim();

      let isValid = true;
      if (!authorName) {
        document.getElementById("reviewAuthorError").textContent = "Please enter your name.";
        isValid = false;
      }
      if (!text) {
        document.getElementById("reviewTextError").textContent = "Please share your experience.";
        isValid = false;
      }

      if (!isValid) return;

      const newReview = {
        id: "rev-user-" + Date.now(),
        name: authorName,
        meta: "Verified Guest",
        stars: rating,
        clamped: text.length > 100 ? text.slice(0, 100) + "..." : text,
        full: text.length > 100 ? text : null,
        date: new Date().toISOString().split("T")[0]
      };

      userReviews.unshift(newReview);
      Storage.set("gatti_reviews", userReviews);

      showToast("Thank you for sharing your experience! Saved locally.", "⭐");
      writeReviewForm.reset();
      closeWriteReviewModal();
      renderReviewsGrid();
    });
  }

  /* ---------------------------------------------------------------------
     14. GLOBAL SEARCH OVERLAY
     --------------------------------------------------------------------- */
  const searchOverlay = document.getElementById("searchOverlay");
  const searchTriggerBtn = document.getElementById("searchTriggerBtn");
  const closeSearchOverlayBtn = document.getElementById("closeSearchOverlayBtn");
  const globalSearchInput = document.getElementById("globalSearchInput");
  const searchResultsContainer = document.getElementById("searchResultsContainer");

  function openSearchOverlay() {
    if (!searchOverlay) return;
    searchOverlay.classList.add("open");
    searchOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (globalSearchInput) setTimeout(() => globalSearchInput.focus(), 100);
  }

  function closeSearchOverlay() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove("open");
    searchOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (globalSearchInput) globalSearchInput.value = "";
    if (searchResultsContainer) {
      searchResultsContainer.innerHTML = `
        <div class="search-placeholder">
          <p>Type to search across dishes (e.g. <em>Masala Dosa, Thatte Idli, Filter Coffee</em>), services, and diner reviews.</p>
        </div>
      `;
    }
  }

  if (searchTriggerBtn) searchTriggerBtn.addEventListener("click", openSearchOverlay);
  if (closeSearchOverlayBtn) closeSearchOverlayBtn.addEventListener("click", closeSearchOverlay);

  if (searchOverlay) {
    searchOverlay.addEventListener("click", (e) => {
      if (e.target === searchOverlay) closeSearchOverlay();
    });
  }

  if (globalSearchInput) {
    globalSearchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (q === "") {
        searchResultsContainer.innerHTML = `
          <div class="search-placeholder">
            <p>Type to search across dishes (e.g. <em>Masala Dosa, Thatte Idli, Filter Coffee</em>), services, and diner reviews.</p>
          </div>
        `;
        return;
      }

      // Search menu dishes
      const matchedDishes = MENU_ITEMS.filter(
        (d) => d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q) || d.category.toLowerCase().includes(q)
      );

      // Search services
      const matchedServices = [];
      SERVICES_DATA.forEach((s) => {
        const matches = s.features.filter((f) => f.toLowerCase().includes(q));
        if (matches.length > 0) {
          matchedServices.push({ category: s.category, matches });
        }
      });

      // Search reviews
      const matchedReviews = getCombinedReviews().filter(
        (r) => r.clamped.toLowerCase().includes(q) || (r.full && r.full.toLowerCase().includes(q))
      );

      if (matchedDishes.length === 0 && matchedServices.length === 0 && matchedReviews.length === 0) {
        searchResultsContainer.innerHTML = `
          <div class="search-placeholder">
            <p>No results found for "<strong>${q}</strong>". Try searching for <em>dosa, coffee, parking, wifi, or idli</em>.</p>
          </div>
        `;
        return;
      }

      let html = "";

      if (matchedDishes.length > 0) {
        html += `<h4 class="search-group-title">Menu Dishes (${matchedDishes.length})</h4>`;
        matchedDishes.forEach((d) => {
          html += `
            <div class="search-result-item" data-searchtype="dish" data-id="${d.id}">
              <div>
                <h4>${d.name}</h4>
                <p>${d.description}</p>
              </div>
              <span style="font-family:var(--font-display); font-weight:600; color:var(--terracotta-deep);">₹${d.price}</span>
            </div>
          `;
        });
      }

      if (matchedServices.length > 0) {
        html += `<h4 class="search-group-title">Services & Facilities (${matchedServices.length})</h4>`;
        matchedServices.forEach((s) => {
          html += `
            <div class="search-result-item" data-searchtype="service">
              <div>
                <h4>${s.category}</h4>
                <p>${s.matches.join(" · ")}</p>
              </div>
            </div>
          `;
        });
      }

      if (matchedReviews.length > 0) {
        html += `<h4 class="search-group-title">Diner Reviews (${matchedReviews.length})</h4>`;
        matchedReviews.forEach((r) => {
          html += `
            <div class="search-result-item" data-searchtype="review">
              <div>
                <h4>${r.name} (${"★".repeat(r.stars)})</h4>
                <p>${r.clamped}</p>
              </div>
            </div>
          `;
        });
      }

      searchResultsContainer.innerHTML = html;

      // Handle item clicks inside search overlay
      searchResultsContainer.querySelectorAll('.search-result-item[data-searchtype="dish"]').forEach((el) => {
        el.addEventListener("click", () => {
          const id = el.dataset.id;
          closeSearchOverlay();
          openQuickView(id);
        });
      });

      searchResultsContainer.querySelectorAll('.search-result-item[data-searchtype="service"]').forEach((el) => {
        el.addEventListener("click", () => {
          closeSearchOverlay();
          const target = document.getElementById("services");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        });
      });

      searchResultsContainer.querySelectorAll('.search-result-item[data-searchtype="review"]').forEach((el) => {
        el.addEventListener("click", () => {
          closeSearchOverlay();
          const target = document.getElementById("reviews");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        });
      });
    });
  }

  // Global Keydown Events (Escape key closes modals)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (lightbox && lightbox.classList.contains("open")) closeLightbox();
      if (orderDrawerOverlay && orderDrawerOverlay.classList.contains("open")) closeOrderDrawer();
      if (quickViewOverlay && quickViewOverlay.classList.contains("open")) closeQuickView();
      if (reservationOverlay && reservationOverlay.classList.contains("open")) closeReservationModal();
      if (writeReviewOverlay && writeReviewOverlay.classList.contains("open")) closeWriteReviewModal();
      if (searchOverlay && searchOverlay.classList.contains("open")) closeSearchOverlay();
    }

    // Lightbox Arrow Keys
    if (lightbox && lightbox.classList.contains("open")) {
      if (e.key === "ArrowLeft" && lightboxPrev) lightboxPrev.click();
      if (e.key === "ArrowRight" && lightboxNext) lightboxNext.click();
    }
  });

  /* ---------------------------------------------------------------------
     FAVOURITES DRAWER BUTTON & INITIAL RENDER
     --------------------------------------------------------------------- */
  const favDrawerBtn = document.getElementById("favDrawerBtn");
  if (favDrawerBtn) {
    favDrawerBtn.addEventListener("click", () => {
      const menuSection = document.getElementById("menu");
      if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });

      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });

      const favTab = document.querySelector('.filter-btn[data-filter="favourites"]');
      if (favTab) {
        favTab.classList.add("active");
        favTab.setAttribute("aria-selected", "true");
      }

      currentMenuFilter = "favourites";
      renderMenuGrid("favourites");
    });
  }

  // Back to Top Button
  const backToTop = document.getElementById("backToTop");
  function updateBackToTop() {
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 480);
  }
  updateBackToTop();
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // INITIAL RENDERS
  renderFeaturedDishes();
  renderMenuGrid("popular");
  renderServicesAccordion();
  renderGalleryGrid("all");
  renderReviewsGrid();
  updateFavUI();
  updateCartUI();

});