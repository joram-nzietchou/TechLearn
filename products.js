/* products.js
   Gestion complète des produits et du panier
*/

// Constante pour la clé du panier
const CART_KEY = 'techlearn-cart';

// Base de données des livres
const products = [
  /* --- DATA SCIENCE (5) --- */
  {
    id: 'ds-01',
    category: 'data_science',
    name: 'Data Science',
    image: 'data1.jpg',
    short: 'fondamentaux et étude de cas',
    desc: 'Un ouvrage idéal pour débuter en data science : manipulation des données, modélisation et introduction aux algorithmes.',
    price: 29.99,
    specs: {
      pages: 420,
      niveau: 'Débutant – Intermédiaire',
      isbn: '978-2340052011',
      author: 'ERIC BIERNAT'
    }
  },
  {
    id: 'ds-02',
    category: 'data_science',
    name: 'data scientist et langage R',
    image: 'data2.jpeg',
    short: 'IA,Machine Learning et statistiques',
    desc: 'Un guide complet des techniques avancées de Machine Learning, incluant SVM, boosting, clustering et optimisation moderne.',
    price: 45.50,
    specs: {
      pages: 610,
      niveau: 'Avancé',
      isbn: '978-2510098234',
      author: 'ERA LAUDE & HENRI LAUDE'
    }
  },
  {
    id: 'ds-03',
    category: 'data_science',
    name: 'BIG DATA & MACHINE LEARNING',
    image: 'data3.jpg',
    short: 'les concepts et les ouitls de la data science',
    desc: 'Approche pratique pour construire des modèles de deep learning avec TensorFlow, Keras et des projets réels.',
    price: 39.99,
    specs: {
      pages: 520,
      niveau: 'Intermédiaire – Avancé',
      isbn: '978-2895107221',
      author: 'Mathias Gauthier'
    }
  },
  {
    id: 'ds-04',
    category: 'data_science',
    name: 'Data Science avec python',
    image: 'data4.jpeg',
    short: 'data science avec python pour les nuls',
    desc: 'Ce livre explore les meilleures pratiques et techniques modernes pour créer des visualisations percutantes.',
    price: 34.99,
    specs: {
      pages: 340,
      niveau: 'Tous niveaux',
      isbn: '978-2100125567',
      author: 'lucas Massarem'
    }
  },
  {
    id: 'ds-05',
    category: 'data_science',
    name: 'DATA SCIENCE PAR LA PRATIQUE',
    image: 'data5.jpg',
    short: 'fondamentaux avec python',
    desc: 'Un ouvrage clair et complet pour maîtriser les statistiques indispensables à la data science.',
    price: 27.99,
    specs: {
      pages: 470,
      niveau: 'Intermédiaire',
      isbn: '978-1990104512',
      author: 'joel grus'
    }
  },

  /* --- CYBER SÉCURITÉ (5) --- */
  {
    id: 'cy-01',
    category: 'cyber',
    name: 'Investigation numerique',
    image: 'cin1.jpeg',
    short: 'Guide complet pour analyse et investigation numerique ',
    desc: 'Introduction complète à l\'éthique hacker et aux techniques de pentesting.',
    price: 42.99,
    specs: { pages: 380, niveau: 'Débutant', isbn: '978-2200108121', author: 'Alain Menelet' }
  },
  {
    id: 'cy-02',
    category: 'cyber',
    name: 'DIGITAL FORENSICS & CYBR INVESTIGATION',
    image: 'cin3.jpg',
    short: 'Forensics, récupération, analyse de preuves',
    desc: 'Méthodes modernes d\'investigation numérique : analyse disque, mémoire, logs et techniques de laboratoire.',
    price: 44.50,
    specs: { pages: 560, niveau: 'Intermédiaire', isbn: '978-2700210044', author: 'kyung-shick choi' }
  },
  {
    id: 'cy-04',
    category: 'cyber',
    name: 'LA CYBER SECURITE POUR LES NULS',
    image: 'cin4.jpg',
    short: 'LA CYBER SECURITE POUR LES NULS',
    desc: 'Comprendre et sécuriser les réseaux modernes : outils, normes, bonnes pratiques.',
    price: 38.99,
    specs: { pages: 440, niveau: 'Intermédiaire', isbn: '978-2100301124', author: 'JOSEPH STEINBERG' }
  },
  {
    id: 'cy-05',
    category: 'cyber',
    name: 'LE GUIDE 2022-2023',
    image: 'cin5.jpeg',
    short: 'CYBERSECURITE LES SOLUTIONS / LES SERVICES',
    desc: 'Techniques d\'analyse de malwares utilisées dans les SOC et CERT modernes.',
    price: 47.99,
    specs: { pages: 495, niveau: 'Avancé', isbn: '978-2700225561', author: 'Helen Kim' }
  },

  /* --- MANAGEMENT DES SI (5) --- */
  {
    id: 'msi-02',
    category: 'msi',
    name: 'MANAGEMENT DES SI',
    image: 'msi2.jpeg',
    short: 'COBIT, ISO 27001, gestion du risque',
    desc: 'Un manuel complet pour comprendre la gouvernance IT et la maîtrise du risque.',
    price: 41.99,
    specs: { pages: 410, niveau: 'Intermédiaire', isbn: '978-2100145587', author: 'kenneth laudon & jane laudon' }
  },
  {
    id: 'msi-03',
    category: 'msi',
    name: 'MANAGEMENT DES SI',
    image: 'msi3.jpeg',
    short: 'MANAGEMENT DES SI 11ieme édition',
    desc: 'Introduction aux systèmes décisionnels, architectures, entrepôts et reporting.',
    price: 35.99,
    specs: { pages: 350, niveau: 'Débutant – Intermédiaire', isbn: '978-2300124499', author: 'kenneth laudon & jane laudon' }
  },
  {
    id: 'msi-04',
    category: 'msi',
    name: 'MANAGEMENT DES SI',
    image: 'msi4.jpeg',
    short: 'manager l\'entreprise digitale',
    desc: 'Piloter une architecture SI évolutive et scalable dans un contexte d\'entreprise.',
    price: 47.99,
    specs: { pages: 480, niveau: 'Avancé', isbn: '978-2450109867', author: 'kenneth laudon & jane laudon' }
  },
  {
    id: 'msi-05',
    category: 'msi',
    name: 'Conduite du Changement Digital',
    image: 'msi5.jpeg',
    short: 'Transformation numérique, adoption, culture digitale',
    desc: 'Ce livre couvre les méthodes pour piloter une transformation digitale efficace.',
    price: 33.99,
    specs: { pages: 300, niveau: 'Tous niveaux', isbn: '978-2100118994', author: 'kenneth laudon & jane laudon' }
  },

  /* --- COMMUNICATION DIGITALE (5) --- */
  {
    id: 'cd-01',
    category: 'communication',
    name: 'Stratégie de Communication Digitale',
    image: 'icd1.png',
    short: 'Branding, réseaux sociaux, KPI',
    desc: 'Construire une stratégie digitale cohérente et orientée performance.',
    price: 37.99,
    specs: { pages: 280, niveau: 'Débutant', isbn: '978-2000114522', author: 'DUNOD' }
  },
  {
    id: 'cd-02',
    category: 'communication',
    name: 'les outils de la communication digitale',
    image: 'ICD2.jpeg',
    short: '10 clés pour maitriser le web marketing',
    desc: 'Techniques modernes de création de contenu optimisé et engageant.',
    price: 33.50,
    specs: { pages: 320, niveau: 'Tous niveaux', isbn: '978-2100315546', author: 'habib oualidi' }
  },
  {
    id: 'cd-03',
    category: 'communication',
    name: 'LE PLAN MARKETING - COMMUNICATION DIGITAL',
    image: 'ICD3.jpeg',
    short: 'preparer, deployer et piloter son plan web marketing',
    desc: 'Apprendre à gérer et développer efficacement des comptes professionnels.',
    price: 39.99,
    specs: { pages: 350, niveau: 'Intermédiaire', isbn: '978-2600102214', author: 'Denis Pommepay' }
  },
  {
    id: 'cd-04',
    category: 'communication',
    name: 'LA COMMUNICATION DIGITALE EXPLIQUÉE A MON BOSS',
    image: 'ICD4.jpeg',
    short: 'guide moderne pour écrire pour les interfaces numériques',
    desc: 'Un guide moderne pour écrire pour les interfaces numériques.',
    price: 31.99,
    specs: { pages: 270, niveau: 'Débutant – Intermédiaire', isbn: '978-2100119921', author: 'Hervé Kabla' }
  },
  {
    id: 'cd-05',
    category: 'communication',
    name: 'web marketing et communication digitale',
    image: 'ICD5.png',
    short: '70 outils pour communiquer éfficacement aupres de ces cibles',
    desc: 'Les techniques modernes pour accélérer la croissance d\'un produit digital.',
    price: 41.50,
    specs: { pages: 390, niveau: 'Intermédiaire', isbn: '978-2700124479', author: 'claire' }
  }
];

/* ------------------------------------------------------------------
   FONCTIONS DU PANIER
------------------------------------------------------------------ */

// Récupérer le panier depuis localStorage
function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

// Sauvegarder le panier dans localStorage
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    // Déclencher un événement pour mettre à jour les autres pages
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    // Mettre à jour le compteur
    updateCartCount();
}

// Ajouter un produit au panier
function addToCart(product) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            author: product.specs?.author || 'Auteur inconnu',
            price: product.price || 0,
            image: product.image,
            category: product.category,
            quantity: 1,
            short: product.short
        });
    }
    
    saveCart(cart);
    showNotification(`"${product.name}" a été ajouté au panier !`);
}

// Mettre à jour la quantité d'un produit
function updateCartItem(id, quantity) {
    if (quantity < 1) return removeFromCart(id);
    
    const cart = getCart();
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = quantity;
        saveCart(cart);
    }
}

// Supprimer un produit du panier
function removeFromCart(id) {
    const cart = getCart();
    const newCart = cart.filter(item => item.id !== id);
    saveCart(newCart);
    showNotification('Produit retiré du panier');
}

// Vider le panier
function clearCart() {
    if (confirm('Êtes-vous sûr de vouloir vider votre panier ?')) {
        localStorage.removeItem(CART_KEY);
        window.dispatchEvent(new CustomEvent('cartUpdated'));
        updateCartCount();
        showNotification('Panier vidé');
        return true;
    }
    return false;
}

// Calculer le total du panier
function calculateCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Calculer le nombre total d'articles
function calculateTotalItems() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const totalItems = calculateTotalItems();
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
        if (totalItems > 0) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    });
}

/* ------------------------------------------------------------------
   FONCTIONS D'AFFICHAGE
------------------------------------------------------------------ */

// Afficher une notification
function showNotification(message) {
    // Supprimer les anciennes notifications
    const oldNotifications = document.querySelectorAll('.notification');
    oldNotifications.forEach(notification => {
        notification.remove();
    });
    
    // Créer la nouvelle notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    
    document.body.appendChild(notification);
    
    // Supprimer la notification après 3 secondes
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Échapper le HTML pour la sécurité
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Obtenir le libellé d'une catégorie
function getCategoryLabel(category) {
    const labels = {
        'data_science': 'Data Science',
        'cyber': 'Cyber Sécurité',
        'msi': 'Management SI',
        'communication': 'Communication'
    };
    return labels[category] || category;
}

// Afficher la grille des produits
function renderProductsGrid(list, container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!list || list.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <p class="muted" style="font-size: 1.1rem;">Aucun livre trouvé.</p>
                <p class="muted">Essayez avec d'autres termes de recherche.</p>
            </div>
        `;
        return;
    }
    
    list.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = `
            <div class="product-badge">${getCategoryLabel(product.category)}</div>
            <div class="product-media">
                <img src="${product.image || 'images/placeholder.png'}" 
                     alt="${escapeHtml(product.name)}" 
                     loading="lazy">
            </div>
            <div class="product-body">
                <h3 class="product-title">${escapeHtml(product.name)}</h3>
                <p class="product-short">${escapeHtml(product.short)}</p>
                <div class="product-meta">
                    <small title="${escapeHtml(product.specs.author || '')}">
                        ${escapeHtml(product.specs.author || '')}
                    </small>
                    <span class="product-price">${(product.price || 0).toFixed(2)} €</span>
                </div>
                <div class="product-actions">
                    <button class="btn-buy add-to-cart-btn" data-product-id="${product.id}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                        Ajouter au panier
                    </button>
                    <button class="btn-details view-details-btn" data-product-id="${product.id}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Détails
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(productCard);
    });
    
    // Ajouter les événements aux boutons
    attachProductEvents();
}

// Afficher le panier
function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    const cartCountElement = document.getElementById('cartCount');
    const cartQtyTotalElement = document.getElementById('cartQtyTotal');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (!cartContainer) return;
    
    const cart = getCart();
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <h3>Votre panier est vide</h3>
                <p>Explorez notre bibliothèque pour trouver des livres intéressants !</p>
                <a href="produits.html" class="btn-continue">Découvrir les livres</a>
            </div>
        `;
        
        if (cartCountElement) cartCountElement.textContent = '0';
        if (cartQtyTotalElement) cartQtyTotalElement.textContent = '0';
        if (cartTotalElement) cartTotalElement.textContent = '0,00 €';
        
        return;
    }
    
    let totalQuantity = 0;
    let totalPrice = 0;
    let cartItemsHTML = '';
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalQuantity += item.quantity;
        totalPrice += itemTotal;
        
        cartItemsHTML += `
            <div class="cart-item" data-item-id="${item.id}">
                <img src="${item.image}" alt="${escapeHtml(item.name)}">
                <div class="info">
                    <h4>${escapeHtml(item.name)}</h4>
                    <div class="meta">${escapeHtml(item.author)}</div>
                    <div class="controls">
                        <div class="qty-controls">
                            <button class="qty-btn decrease-btn" data-index="${index}">−</button>
                            <span class="qty-display">${item.quantity}</span>
                            <button class="qty-btn increase-btn" data-index="${index}">+</button>
                        </div>
                        <div class="item-price">${(item.price * item.quantity).toFixed(2)} €</div>
                    </div>
                </div>
                <div class="cart-actions">
                    <button class="btn-remove remove-btn" data-index="${index}">Supprimer</button>
                </div>
            </div>
        `;
    });
    
    cartContainer.innerHTML = cartItemsHTML;
    
    // Mettre à jour les totaux
    if (cartCountElement) cartCountElement.textContent = cart.length;
    if (cartQtyTotalElement) cartQtyTotalElement.textContent = totalQuantity;
    if (cartTotalElement) cartTotalElement.textContent = `${totalPrice.toFixed(2)} €`;
    
    // Ajouter les événements aux boutons du panier
    attachCartEvents();
}

/* ------------------------------------------------------------------
   GESTION DES ÉVÉNEMENTS
------------------------------------------------------------------ */

// Attacher les événements aux produits
function attachProductEvents() {
    // Boutons "Ajouter au panier"
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product-id');
            const product = products.find(p => p.id === productId);
            if (product) {
                addToCart(product);
            }
        });
    });
    
    // Boutons "Détails"
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product-id');
            const product = products.find(p => p.id === productId);
            if (product) {
                const details = `
                    <strong>${escapeHtml(product.name)}</strong><br>
                    ${escapeHtml(product.desc)}<br><br>
                    <strong>Auteur:</strong> ${escapeHtml(product.specs.author)}<br>
                    <strong>Pages:</strong> ${product.specs.pages}<br>
                    <strong>Niveau:</strong> ${product.specs.niveau}<br>
                    <strong>ISBN:</strong> ${product.specs.isbn}<br>
                    <strong>Prix:</strong> ${product.price.toFixed(2)} €
                `;
                alert(details);
            }
        });
    });
}

// Attacher les événements au panier
function attachCartEvents() {
    // Boutons d'augmentation de quantité
    document.querySelectorAll('.increase-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const cart = getCart();
            if (cart[index]) {
                cart[index].quantity += 1;
                saveCart(cart);
                renderCart();
            }
        });
    });
    
    // Boutons de diminution de quantité
    document.querySelectorAll('.decrease-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const cart = getCart();
            if (cart[index]) {
                cart[index].quantity -= 1;
                if (cart[index].quantity < 1) {
                    cart.splice(index, 1);
                }
                saveCart(cart);
                renderCart();
            }
        });
    });
    
    // Boutons de suppression
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const cart = getCart();
            if (cart[index]) {
                cart.splice(index, 1);
                saveCart(cart);
                renderCart();
            }
        });
    });
    
    // Bouton vider le panier
    const clearCartBtn = document.getElementById('clearCart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (clearCart()) {
                renderCart();
            }
        });
    }
}

/* ------------------------------------------------------------------
   INITIALISATION
------------------------------------------------------------------ */

// Initialiser l'application
function initApp() {
    // Mettre à jour le compteur du panier
    updateCartCount();
    
    // Ajouter l'icône panier dans la navigation
    addCartIconToNav();
    
    // Si on est sur la page produits
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        // Afficher tous les produits
        renderProductsGrid(products, productsGrid);
        
        // Gérer la recherche
        const searchInput = document.getElementById('globalSearch');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const query = this.value.trim().toLowerCase();
                const filtered = products.filter(product => 
                    product.name.toLowerCase().includes(query) ||
                    product.specs.author.toLowerCase().includes(query) ||
                    product.short.toLowerCase().includes(query) ||
                    product.desc.toLowerCase().includes(query)
                );
                renderProductsGrid(filtered, productsGrid);
            });
        }
    }
    
    // Si on est sur la page panier
    if (document.getElementById('cartItems')) {
        renderCart();
    }
    
    // Filtrer par catégorie
    window.filterCategory = function(category) {
        const gridContainer = document.getElementById('productsGrid');
        if (!gridContainer) return;
        
        let filteredProducts;
        if (category === 'all') {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(p => p.category === category);
        }
        
        renderProductsGrid(filteredProducts, gridContainer);
        
        // Mettre à jour le titre
        const categoryLabels = {
            'data_science': 'Data Science',
            'cyber': 'Cyber Sécurité',
            'msi': 'Management SI',
            'communication': 'Communication Digitale',
            'all': 'Tous les livres'
        };
        
        const titleElement = document.querySelector('.section-title');
        if (titleElement) {
            titleElement.textContent = categoryLabels[category] || 'Livres';
        }
        
        // Scroll vers les produits
        gridContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
}

// Ajouter l'icône panier à la navigation
function addCartIconToNav() {
    const navList = document.querySelector('.nav-list');
    if (!navList) return;
    
    // Vérifier si l'icône panier existe déjà
    if (!document.querySelector('.cart-icon')) {
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-icon';
        cartItem.innerHTML = `
            <a href="panier.html">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                <span class="cart-count" style="display: none;">0</span>
            </a>
        `;
        navList.appendChild(cartItem);
    }
}

// Écouter les mises à jour du panier
window.addEventListener('cartUpdated', function() {
    updateCartCount();
    if (document.getElementById('cartItems')) {
        renderCart();
    }
});

// Initialiser quand le DOM est chargé

document.addEventListener('DOMContentLoaded', initApp);
