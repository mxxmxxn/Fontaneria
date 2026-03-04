/* ============================================================================
   SISTEMA DE TRADUCCIÓN (i18n)
   ========================================================================== */

let currentLang = 'es';

const translations = {
  es: {
    'servicio-24h': 'Servicio 24 horas · Respuesta inmediata',
    'hero-title': 'Soluciones de fontanería rápidas y eficientes',
    'hero-title-highlight': 'Soluciones de fontanería rápidas',
    'hero-subtitle': 'Soy nombre fontanero, fontanero profesional con +15 años de experiencia. Desde reparaciones urgentes hasta reformas completas, ofrezco soluciones confiables y rápidas para tu hogar o negocio.',
    'sobre-mi': 'Sobre mí',
    'fontanero-confianza': 'Fontanero de confianza en tu zona',
    'cta-button': 'Llamar ahora',
    'nav-inicio': 'Inicio',
    'nav-about': 'Sobre mí',
    'nav-services': 'Servicios',
    'nav-portfolio': 'Trabajos',
    'nav-testimonials': 'Opiniones',
    'nav-contact': 'Contacto'
  },
  en: {
    'servicio-24h': '24-hour Service · Immediate Response',
    'hero-title': 'Fast and Efficient Plumbing Solutions',
    'hero-title-highlight': 'Fast and Efficient Plumbing Solutions',
    'hero-subtitle': "I'm nombre fontanero, a professional plumber with +15 years of experience. From emergency repairs to complete renovations, I offer reliable and quick solutions for your home or business.",
    'sobre-mi': 'About Me',
    'fontanero-confianza': 'Trusted Plumber in Your Area',
    'cta-button': 'Call Now',
    'nav-inicio': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-portfolio': 'Work',
    'nav-testimonials': 'Reviews',
    'nav-contact': 'Contact'
  },
  fr: {
    'servicio-24h': 'Service 24 heures · Réponse immédiate',
    'hero-title': 'Solutions de Plomberie Rapides et Efficaces',
    'hero-title-highlight': 'Solutions de Plomberie Rapides et Efficaces',
    'hero-subtitle': "Je suis nombre fontanero, plombier professionnel avec +15 ans d'expérience. Des réparations d'urgence aux rénovations complètes, j'offre des solutions fiables et rapides pour votre maison ou votre entreprise.",
    'sobre-mi': 'À propos de moi',
    'fontanero-confianza': 'Plombier de confiance dans votre région',
    'cta-button': 'Appeler maintenant',
    'nav-inicio': 'Accueil',
    'nav-about': 'À propos',
    'nav-services': 'Services',
    'nav-portfolio': 'Travaux',
    'nav-testimonials': 'Avis',
    'nav-contact': 'Contact'
  }
};

function changeLang(lang) {
  currentLang = lang;
  localStorage.setItem('selectedLang', lang);
  
  // Actualizar botones activos
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[onclick="changeLang('${lang}')"]`).classList.add('active');
  
  // Traducir elementos
  updateTranslations();
}

function updateTranslations() {
  // Hero
  const badgeText = document.querySelector('.badge-text');
  if (badgeText) badgeText.textContent = translations[currentLang]['servicio-24h'];
  
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = `<span class="highlight-text">${translations[currentLang]['hero-title-highlight']}</span>`;
  }
  
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    heroSubtitle.innerHTML = `<span class="subtitle-intro">${translations[currentLang]['hero-subtitle'].split(',')[0]},</span> ${translations[currentLang]['hero-subtitle'].split(',').slice(1).join(',')}`;
  }
  
  // CTA Button
  const ctaButton = document.querySelector('.cta-text');
  if (ctaButton) ctaButton.textContent = translations[currentLang]['cta-button'];
  
  // Nav links
  const navLinks = document.querySelectorAll('.nav-link');
  const navNames = ['nav-inicio', 'nav-about', 'nav-services', 'nav-portfolio', 'nav-testimonials', 'nav-contact'];
  navLinks.forEach((link, index) => {
    if (navNames[index]) link.textContent = translations[currentLang][navNames[index]];
  });
  
  // Mobile nav
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach((link, index) => {
    if (navNames[index]) link.textContent = translations[currentLang][navNames[index]];
  });
}

// Inicializar idioma guardado
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLang') || 'es';
  currentLang = savedLang;
  
  // Marcar botón activo
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[onclick="changeLang('${savedLang}')"]`)?.classList.add('active');
  
  updateTranslations();
});

/* ============================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
const closeIcon = mobileMenuToggle.querySelector('.close-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Close menu when a link is clicked
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

/* ============================================================================
   INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
   ========================================================================== */

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Apply animation
      entry.target.style.opacity = '1';
      entry.target.style.animation = `slideUp 0.6s ease-out forwards`;
      
      // Get the animation delay from the inline style if present
      const delay = entry.target.style.animationDelay || '0s';
      entry.target.style.animationDelay = delay;
      
      // Stop observing once visible
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  observer.observe(card);
});

// Observe all portfolio cards
const portfolioCards = document.querySelectorAll('.portfolio-card');
portfolioCards.forEach(card => {
  observer.observe(card);
});

// Observe all testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
  observer.observe(card);
});

/* ============================================================================
   LIGHTBOX FUNCTIONALITY
   ========================================================================== */

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');

function openLightbox(imageSrc, imageTitle) {
  lightboxImage.src = imageSrc;
  lightboxCaption.textContent = imageTitle;
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Close lightbox when clicking on the overlay
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
    closeLightbox();
  }
});

/* ============================================================================
   CONTACT FUNCTIONS
   ========================================================================== */

const PHONE_NUMBER = '600000000'; // WhatsApp/Call number
const EMAIL = 'carlos@aquafix.es';

function openWhatsApp() {
  const message = encodeURIComponent(
    '¡Hola Carlos! Me gustaría obtener más información sobre tus servicios de fontanería.'
  );
  const whatsappUrl = `https://wa.me/34${PHONE_NUMBER}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

function callPhone() {
  window.location.href = `tel:+34${PHONE_NUMBER}`;
}

/* ============================================================================
   NAVBAR BACKGROUND ON SCROLL
   ========================================================================== */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.borderBottomColor = 'hsl(var(--border))';
  } else {
    navbar.style.borderBottomColor = 'hsl(var(--border))';
  }
});

/* ============================================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ========================================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const navHeight = navbar.offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* ============================================================================
   FOOTER YEAR
   ========================================================================== */

document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================================================
   ABOUT SECTION SCROLL ANIMATION
   ========================================================================== */

const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate image
        const image = entry.target.querySelector('.about-image-wrapper');
        if (image) {
          image.style.animation = 'slideUp 0.6s ease-out forwards';
        }
        
        // Animate content
        const content = entry.target.querySelector('.about-content');
        if (content) {
          const label = content.querySelector('.section-label');
          const title = content.querySelector('.section-title');
          const texts = content.querySelectorAll('.about-text');
          const stats = content.querySelector('.about-stats');
          
          if (label) label.style.animation = 'slideUp 0.6s ease-out forwards';
          if (title) {
            title.style.animation = 'slideUp 0.6s ease-out 0.1s forwards';
            title.style.opacity = '0';
          }
          texts.forEach((text, i) => {
            text.style.animation = `slideUp 0.6s ease-out ${0.2 + i * 0.1}s forwards`;
            text.style.opacity = '0';
          });
          if (stats) {
            stats.style.animation = 'slideUp 0.6s ease-out 0.4s forwards';
            stats.style.opacity = '0';
          }
        }
        
        aboutObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  aboutObserver.observe(aboutSection);
}

/* ============================================================================
   SERVICES SECTION SCROLL ANIMATION
   ========================================================================== */

const servicesSection = document.querySelector('.services-section');
if (servicesSection) {
  const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate header
        const header = entry.target.querySelector('.section-header');
        if (header) {
          header.style.animation = 'slideUp 0.6s ease-out forwards';
        }
        
        servicesObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  servicesObserver.observe(servicesSection);
}

/* ============================================================================
   PORTFOLIO SECTION SCROLL ANIMATION
   ========================================================================== */

const portfolioSection = document.querySelector('.portfolio-section');
if (portfolioSection) {
  const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate header
        const header = entry.target.querySelector('.section-header');
        if (header) {
          header.style.animation = 'slideUp 0.6s ease-out forwards';
        }
        
        portfolioObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  portfolioObserver.observe(portfolioSection);
}

/* ============================================================================
   TESTIMONIALS SECTION SCROLL ANIMATION
   ========================================================================== */

const testimonialsSection = document.querySelector('.testimonials-section');
if (testimonialsSection) {
  const testimonialsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate header
        const header = entry.target.querySelector('.section-header');
        if (header) {
          header.style.animation = 'slideUp 0.6s ease-out forwards';
        }
        
        testimonialsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  testimonialsObserver.observe(testimonialsSection);
}

/* ============================================================================
   CONTACT SECTION SCROLL ANIMATION
   ========================================================================== */

const contactSection = document.querySelector('.contact-section');
if (contactSection) {
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate header
        const header = entry.target.querySelector('.contact-header');
        if (header) {
          header.style.animation = 'slideUp 0.6s ease-out forwards';
        }
        
        contactObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  contactObserver.observe(contactSection);
}

/* ============================================================================
   IMAGE LOADING FALLBACK
   ========================================================================== */

// Add error handling for images
const images = document.querySelectorAll('img[src^="assets/"]');
images.forEach(img => {
  img.addEventListener('error', function() {
    // Create a placeholder with gradient
    this.style.backgroundColor = 'hsl(var(--secondary))';
    this.style.display = 'none';
    
    // Create a fallback text
    const container = this.parentElement;
    if (!container.querySelector('.image-placeholder')) {
      const placeholder = document.createElement('div');
      placeholder.className = 'image-placeholder';
      placeholder.style.cssText = `
        width: 100%;
        height: 100%;
        background: var(--hero-gradient);
        display: flex;
        align-items: center;
        justify-content: center;
        color: hsl(var(--primary-foreground));
        font-weight: 600;
        text-align: center;
        padding: 2rem;
        border-radius: 0.75rem;
      `;
      placeholder.textContent = this.alt || 'Imagen no disponible';
      container.appendChild(placeholder);
    }
  });
});

/* ============================================================================
   PERFORMANCE: THROTTLED SCROLL HANDLER
   ========================================================================== */

let scrollTimeout;
window.addEventListener('scroll', () => {
  if (!scrollTimeout) {
    scrollTimeout = setTimeout(() => {
      // Scroll performance checks can go here
      scrollTimeout = null;
    }, 100);
  }
});

/* ============================================================================
   ACCESSIBILITY: KEYBOARD NAVIGATION
   ========================================================================== */

// Ensure all interactive elements are properly focusable
const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
interactiveElements.forEach(el => {
  if (!el.hasAttribute('tabindex')) {
    // Elements already have natural focusability
  }
});

/* ============================================================================
   PRELOAD CRITICAL IMAGES
   ========================================================================== */

// Preload hero and portrait images for better performance
const preloadImages = [
  'assets/hero-plumbing.jpg',
  'assets/plumber-portrait.jpg'
];

preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

console.log('AquaFix website loaded successfully!');
