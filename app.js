/**
 * Global Base Layout Management Execution Environment
 */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    markActiveNav();
});

function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(themeToggleBtn, currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeToggleBtn, newTheme);
    });
}

function updateThemeIcon(btn, theme) {
    if(!btn) return;
    btn.textContent = theme === 'light' ? '🌙' : '☀️';
}

function initMobileNav() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navLinks');
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

function markActiveNav() {
    const path = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (path === href || (path === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Global Image Lazy Loading Abstraction
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                    imageObserver.unobserve(image);
                }
            });
        });
        lazyImages.forEach(image => imageObserver.observe(image));
    } else {
        lazyImages.forEach(img => img.src = img.dataset.src);
    }
}

// Global HTML Component Card Template Rendering Engine
function createProductCard(product) {
    // Generate a URL web key parsing the dynamic individual product structural routing lookup ID
    const productUrl = `product.html?id=${encodeURIComponent(product.productName)}`;
    return `
        <article class="product-card">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" data-src="${product.imageUrl}" alt="${product.productName}">
            <div class="product-card-content">
                <h3 class="product-card-title">${product.productName}</h3>
                <div class="product-card-price">${product.price}</div>
                <p class="product-card-desc">${product.description}</p>
                <div class="product-card-cta">
                    <a href="${productUrl}" class="btn" style="background-color: var(--text-secondary)">Details</a>
                    <a href="${product.affiliateLink}" target="_blank" rel="noopener noreferrer nofollow" class="btn">Buy Now</a>
                </div>
            </div>
        </article>
    `;
}

// Append directly to the bottom of js/app.js to activate automated runtime injection of layouts
(function automaticHeaderFooterInjectionEngine() {
    const headerNode = document.querySelector('[id$="header-marker"]');
    const footerNode = document.querySelector('[id$="footer-marker"]');

    const headerHTML = `
    <header>
        <div class="container nav-container">
            <a href="index.html" class="logo">AffiliateHub</a>
            <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation Menu">
                <span></span><span></span><span></span>
            </button>
            <ul class="nav-links" id="navLinks">
                <li><a href="index.html">Home</a></li>
                <li><a href="categories.html">Categories</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><button id="themeToggle" class="theme-toggle-btn" aria-label="Toggle Dark Mode">🌙</button></li>
            </ul>
        </div>
    </header>`;

    const footerHTML = `
    <footer>
        <div class="container footer-grid">
            <div>
                <h3 class="footer-heading">AffiliateHub</h3>
                <p style="color: var(--text-secondary); font-size:0.9rem;">Find premium reviewed products curation synchronized completely to online storefronts.</p>
            </div>
            <div>
                <h3 class="footer-heading">Explore</h3>
                <ul class="footer-links">
                    <li><a href="categories.html">Categories</a></li>
                    <li><a href="products.html">All Products</a></li>
                </ul>
            </div>
            <div>
                <h3 class="footer-heading">Legal Policy</h3>
                <ul class="footer-links">
                    <li><a href="privacy.html">Privacy Policy</a></li>
                    <li><a href="terms.html">Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 AffiliateHub. All Rights Reserved. Complete external pricing configurations are tied to network distributor structures.
        </div>
    </footer>`;

    if(headerNode) headerNode.outerHTML = headerHTML;
    if(footerNode) footerNode.outerHTML = footerHTML;
})();  


// Append directly to the bottom of js/app.js to activate automated runtime injection of layouts
(function automaticHeaderFooterInjectionEngine() {
    const headerNode = document.querySelector('[id$="header-marker"]');
    const footerNode = document.querySelector('[id$="footer-marker"]');

    const headerHTML = `
    <header>
        <div class="container nav-container">
            <a href="index.html" class="logo">AffiliateHub</a>
            <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation Menu">
                <span></span><span></span><span></span>
            </button>
            <ul class="nav-links" id="navLinks">
                <li><a href="index.html">Home</a></li>
                <li><a href="categories.html">Categories</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><button id="themeToggle" class="theme-toggle-btn" aria-label="Toggle Dark Mode">🌙</button></li>
            </ul>
        </div>
    </header>`;

    const footerHTML = `
    <footer>
        <div class="container footer-grid">
            <div>
                <h3 class="footer-heading">AffiliateHub</h3>
                <p style="color: var(--text-secondary); font-size:0.9rem;">Find premium reviewed products curation synchronized completely to online storefronts.</p>
            </div>
            <div>
                <h3 class="footer-heading">Explore</h3>
                <ul class="footer-links">
                    <li><a href="categories.html">Categories</a></li>
                    <li><a href="products.html">All Products</a></li>
                </ul>
            </div>
            <div>
                <h3 class="footer-heading">Legal Policy</h3>
                <ul class="footer-links">
                    <li><a href="privacy.html">Privacy Policy</a></li>
                    <li><a href="terms.html">Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 AffiliateHub. All Rights Reserved. Complete external pricing configurations are tied to network distributor structures.
        </div>
    </footer>`;

    if(headerNode) headerNode.outerHTML = headerHTML;
    if(footerNode) footerNode.outerHTML = footerHTML;
})();               																                                                                                                                                                                                                                                                                                                                                                             