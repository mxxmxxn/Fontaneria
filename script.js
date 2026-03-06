/* ============================================================================
   SISTEMA DE TRADUCCIÓN (i18n) - COMPLETO
   ========================================================================== */

let currentLang = 'es';

const translations = {
  es: {
    // Navigation
    'nav-inicio': 'Inicio',
    'nav-about': 'Sobre mí',
    'nav-services': 'Servicios',
    'nav-portfolio': 'Trabajos',
    'nav-testimonials': 'Opiniones',
    'nav-contact': 'Contacto',
    'cta-button': 'Llamar ahora',
    
    // Hero Section
    'servicio-24h': 'Servicio 24 horas · Respuesta inmediata',
    'hero-title': 'Soluciones de fontanería rápidas y<br>eficientes',
    'hero-title-highlight': 'rápidas y<br>eficientes',
    'hero-subtitle': 'Soy Carlos García, fontanero profesional con más de 15 años de experiencia. Reparaciones, instalaciones y urgencias en tu zona.',
    'btn-whatsapp': 'Contactar por WhatsApp',
    'btn-contactar': 'Contactar',
    
    // About Section
    'about-label': 'Sobre mí',
    'about-title': 'Fontanero de confianza en tu zona',
    'about-text-1': 'Con más de 15 años de experiencia en el sector de la fontanería, he tenido el privilegio de trabajar con miles de clientes satisfechos en Madrid y alrededores. Mi compromiso es siempre entender tus necesidades y ofrecer soluciones personalizadas que se adapten a tu presupuesto y urgencia.',
    'about-text-2': 'Mantengo los más altos estándares de profesionalismo, puntualidad y transparencia en cada trabajo. Creo que la confianza se gana con hechos: presupuestos honestos, trabajos bien hechos y garantía en mis reparaciones. Esa es mi promesa.',
    'stat-1-value': '15+',
    'stat-1-label': 'Años experiencia',
    'stat-2-value': '2.000+',
    'stat-2-label': 'Trabajos realizados',
    'stat-3-value': '2 años',
    'stat-3-label': 'Garantía en trabajos',
    'stat-4-value': '✓',
    'stat-4-label': 'Certificación oficial',
    
    // Services Section
    'services-label': 'Servicios',
    'services-title': '¿Qué puedo hacer por ti?',
    'services-subtitle': 'Estos son los precios orientativos, consulta si tienes dudas sobre algún servicio',
    'service-1-title': 'Reparación de baño',
    'service-1-desc': 'Instalación, reparación y reforma completa de baños',
    'service-1-price': 'Desde 90€/h',
    'service-2-title': 'Servicio electricista',
    'service-2-desc': 'Instalaciones eléctricas y reparaciones seguras',
    'service-2-price': 'Desde 90€/h',
    'service-3-title': 'Cursos y formación',
    'service-3-desc': 'Formación profesional en reparaciones del hogar',
    'service-3-price': 'Desde 90€/h',
    'service-4-title': 'Instalación de puertas',
    'service-4-desc': 'Instalación de puertas y sistemas de cierre',
    'service-4-price': 'Desde 90€/h',
    'service-5-title': 'Mantenimiento calefacción',
    'service-5-desc': 'Mantenimiento y reparación de sistemas de calefacción',
    'service-5-price': 'Desde 70€',
    'service-6-title': 'Urgencias 24h',
    'service-6-desc': 'Servicio de emergencia disponible las 24 horas',
    'service-6-price': 'Desde 90€',
    'service-7-title': 'Reformas baño/cocina',
    'service-7-desc': 'Reformas integrales de baños y cocinas',
    'service-7-price': 'Consultar',
    'service-8-title': 'Desplazamiento',
    'service-8-desc': 'Coste de desplazamiento según distancia',
    'service-8-price': '40€',
    
    // Portfolio Section
    'portfolio-label': 'Portafolio',
    'portfolio-title': 'Nuestros trabajos recientes',
    'portfolio-cat-1': 'Reforma',
    'portfolio-title-1': 'Reforma baño',
    'portfolio-cat-2': 'Instalación',
    'portfolio-title-2': 'Instalación cocina',
    'portfolio-cat-3': 'Calefacción',
    'portfolio-title-3': 'Sistema de calefacción',
    'portfolio-cat-4': 'Reparación',
    'portfolio-title-4': 'Reparación doméstica',
    
    // Testimonials Section
    'testimonials-label': 'Opiniones',
    'testimonials-title': 'Lo que dicen nuestros clientes',
    'testimonial-1': '"Carlos llegó rápidamente a arreglar una fuga en mi baño. Trabajo muy profesional y limpio, además sus precios son justos."',
    'testimonial-1-author': 'María González',
    'testimonial-2': '"Hizo la reforma del baño de mi casa. Excelente resultado, muy puntual y se nota que tiene experiencia. Lo recomiendo sin dudarlo."',
    'testimonial-2-author': 'Juan Rodríguez',
    'testimonial-3': '"Llamé a Carlos a las 11 de la noche por una fuga urgente. Vino en una hora y solucionó todo. Increíble profesionalidad."',
    'testimonial-3-author': 'Carlos López',
    'testimonial-4': '"Presupuesto en presencia sin sorpresas. Todo fue rápido y la instalación de los nuevos grifos quedó perfecta. Top."',
    'testimonial-4-author': 'Ana Martínez',
    
    // Contact Section
    'contact-title': '¿Necesitas un fontanero?',
    'contact-subtitle': 'No dudes en contactarme, te responderé rápidamente',
    'contact-phone-label': 'Teléfono',
    'contact-phone-value': '600 000 000',
    'contact-whatsapp-label': 'WhatsApp',
    'contact-email-label': 'Email',
    'contact-email-value': 'carlos@aquafix.es',
    'contact-location-label': 'Zona de trabajo',
    'contact-location-value': 'Madrid y alrededores',
    'contact-hours-label': 'Horario',
    'contact-hours-value': 'L-V 8:00-20:00 · Urgencias 24h',
    'contact-whatsapp-btn': 'Contactar por WhatsApp',
    'contact-call-btn': 'Llamar ahora',
    
    // Footer
    'footer-brand': 'AquaFix',
    'footer-subtitle': 'Carlos García · Fontanero Profesional',
    'footer-privacy': 'Política de privacidad',
    'footer-cookies': 'Cookies',
    'footer-copyright': 'AquaFix. Todos los derechos reservados.'
  },
  en: {
    // Navigation
    'nav-inicio': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-portfolio': 'Work',
    'nav-testimonials': 'Reviews',
    'nav-contact': 'Contact',
    'cta-button': 'Call Now',
    
    // Hero Section
    'servicio-24h': '24-hour Service · Immediate Response',
    'hero-title': 'Fast and Efficient<br>Plumbing Solutions',
    'hero-title-highlight': 'Fast and Efficient<br>Plumbing Solutions',
    'hero-subtitle': 'I\'m Carlos García, a professional plumber with over 15 years of experience. Repairs, installations and emergencies in your area.',
    'btn-whatsapp': 'Contact via WhatsApp',
    'btn-contactar': 'Contact',
    
    // About Section
    'about-label': 'About Me',
    'about-title': 'Trusted Plumber in Your Area',
    'about-text-1': 'With over 15 years of experience in the plumbing sector, I have had the privilege of working with thousands of satisfied customers in Madrid and surrounding areas. My commitment is always to understand your needs and offer personalized solutions that fit your budget and urgency.',
    'about-text-2': 'I maintain the highest standards of professionalism, punctuality and transparency in every job. I believe that trust is earned through facts: honest quotes, well-done work and guarantee in my repairs. That is my promise.',
    'stat-1-value': '15+',
    'stat-1-label': 'Years experience',
    'stat-2-value': '2.000+',
    'stat-2-label': 'Jobs completed',
    'stat-3-value': '2 years',
    'stat-3-label': 'Work warranty',
    'stat-4-value': '✓',
    'stat-4-label': 'Official certification',
    
    // Services Section
    'services-label': 'Services',
    'services-title': 'What can I do for you?',
    'services-subtitle': 'These are indicative prices, consult if you have questions about any service',
    'service-1-title': 'Bathroom repair',
    'service-1-desc': 'Installation, repair and complete bathroom renovation',
    'service-1-price': 'From 90€/h',
    'service-2-title': 'Electrician service',
    'service-2-desc': 'Electrical installations and safe repairs',
    'service-2-price': 'From 90€/h',
    'service-3-title': 'Courses and training',
    'service-3-desc': 'Professional training in home repairs',
    'service-3-price': 'From 90€/h',
    'service-4-title': 'Door installation',
    'service-4-desc': 'Installation of doors and closing systems',
    'service-4-price': 'From 90€/h',
    'service-5-title': 'Heating maintenance',
    'service-5-desc': 'Maintenance and repair of heating systems',
    'service-5-price': 'From 70€',
    'service-6-title': '24h Emergencies',
    'service-6-desc': 'Emergency service available 24 hours',
    'service-6-price': 'From 90€',
    'service-7-title': 'Bathroom/Kitchen renovations',
    'service-7-desc': 'Complete bathroom and kitchen renovations',
    'service-7-price': 'Consult',
    'service-8-title': 'Displacement',
    'service-8-desc': 'Displacement cost according to distance',
    'service-8-price': '40€',
    
    // Portfolio Section
    'portfolio-label': 'Portfolio',
    'portfolio-title': 'Our recent work',
    'portfolio-cat-1': 'Renovation',
    'portfolio-title-1': 'Bathroom renovation',
    'portfolio-cat-2': 'Installation',
    'portfolio-title-2': 'Kitchen installation',
    'portfolio-cat-3': 'Heating',
    'portfolio-title-3': 'Heating system',
    'portfolio-cat-4': 'Repair',
    'portfolio-title-4': 'Home repair',
    
    // Testimonials Section
    'testimonials-label': 'Reviews',
    'testimonials-title': 'What our customers say',
    'testimonial-1': '"Carlos quickly repaired a leak in my bathroom. Very professional and clean work, plus his prices are fair."',
    'testimonial-1-author': 'María González',
    'testimonial-2': '"He did the renovation of my bathroom. Excellent result, very punctual and you can see he has experience. I highly recommend him."',
    'testimonial-2-author': 'Juan Rodríguez',
    'testimonial-3': '"I called Carlos at 11 at night for an urgent leak. He came in an hour and solved everything. Incredible professionalism."',
    'testimonial-3-author': 'Carlos López',
    'testimonial-4': '"Quote on site with no surprises. Everything was quick and the installation of the new faucets was perfect. Top."',
    'testimonial-4-author': 'Ana Martínez',
    
    // Contact Section
    'contact-title': 'Do you need a plumber?',
    'contact-subtitle': 'Don\'t hesitate to contact me, I will respond quickly',
    'contact-phone-label': 'Phone',
    'contact-phone-value': '600 000 000',
    'contact-whatsapp-label': 'WhatsApp',
    'contact-email-label': 'Email',
    'contact-email-value': 'carlos@aquafix.es',
    'contact-location-label': 'Work area',
    'contact-location-value': 'Madrid and surrounding areas',
    'contact-hours-label': 'Hours',
    'contact-hours-value': 'M-F 8:00-20:00 · 24h Emergencies',
    'contact-whatsapp-btn': 'Contact via WhatsApp',
    'contact-call-btn': 'Call Now',
    
    // Footer
    'footer-brand': 'AquaFix',
    'footer-subtitle': 'Carlos García · Professional Plumber',
    'footer-privacy': 'Privacy Policy',
    'footer-cookies': 'Cookies',
    'footer-copyright': 'AquaFix. All rights reserved.'
  },
  fr: {
    // Navigation
    'nav-inicio': 'Accueil',
    'nav-about': 'À propos',
    'nav-services': 'Services',
    'nav-portfolio': 'Travaux',
    'nav-testimonials': 'Avis',
    'nav-contact': 'Contact',
    'cta-button': 'Appelez maintenant',
    
    // Hero Section
    'servicio-24h': 'Service 24 heures · Réponse immédiate',
    'hero-title': 'Solutions de Plomberie Rapides et<br>Efficaces',
    'hero-title-highlight': 'Rapides et<br>Efficaces',
    'hero-subtitle': 'Je suis Carlos García, plombier professionnel avec plus de 15 ans d\'expérience. Réparations, installations et urgences dans votre région.',
    'btn-whatsapp': 'Contacter par WhatsApp',
    'btn-contactar': 'Contacter',
    
    // About Section
    'about-label': 'À propos de moi',
    'about-title': 'Plombier de confiance dans votre région',
    'about-text-1': 'Avec plus de 15 ans d\'expérience dans le secteur de la plomberie, j\'ai eu le privilège de travailler avec des milliers de clients satisfaits à Madrid et dans les environs. Mon engagement est toujours de comprendre vos besoins et de proposer des solutions personnalisées adaptées à votre budget et à votre urgence.',
    'about-text-2': 'Je maintiens les plus hauts standards de professionnalisme, de ponctualité et de transparence dans chaque travail. Je crois que la confiance se gagne par les faits : des devis honnêtes, un travail bien fait et une garantie sur mes réparations. C\'est ma promesse.',
    'stat-1-value': '15+',
    'stat-1-label': 'Années d\'expérience',
    'stat-2-value': '2.000+',
    'stat-2-label': 'Travaux réalisés',
    'stat-3-value': '2 ans',
    'stat-3-label': 'Garantie sur les travaux',
    'stat-4-value': '✓',
    'stat-4-label': 'Certification officielle',
    
    // Services Section
    'services-label': 'Services',
    'services-title': 'Que puis-je faire pour vous?',
    'services-subtitle': 'Ce sont les prix indicatifs, consultez si vous avez des questions sur un service',
    'service-1-title': 'Réparation de salle de bain',
    'service-1-desc': 'Installation, réparation et rénovation complète de salles de bain',
    'service-1-price': 'À partir de 90€/h',
    'service-2-title': 'Service électricien',
    'service-2-desc': 'Installations électriques et réparations sécurisées',
    'service-2-price': 'À partir de 90€/h',
    'service-3-title': 'Cours et formation',
    'service-3-desc': 'Formation professionnelle en réparations domiciliaires',
    'service-3-price': 'À partir de 90€/h',
    'service-4-title': 'Installation de portes',
    'service-4-desc': 'Installation de portes et systèmes de fermeture',
    'service-4-price': 'À partir de 90€/h',
    'service-5-title': 'Maintenance chauffage',
    'service-5-desc': 'Maintenance et réparation des systèmes de chauffage',
    'service-5-price': 'À partir de 70€',
    'service-6-title': 'Urgences 24h',
    'service-6-desc': 'Service d\'urgence disponible 24 heures',
    'service-6-price': 'À partir de 90€',
    'service-7-title': 'Rénovations salle de bain/cuisine',
    'service-7-desc': 'Rénovations complètes de salles de bain et cuisines',
    'service-7-price': 'Consulter',
    'service-8-title': 'Déplacement',
    'service-8-desc': 'Coût de déplacement selon la distance',
    'service-8-price': '40€',
    
    // Portfolio Section
    'portfolio-label': 'Portfolio',
    'portfolio-title': 'Nos travaux récents',
    'portfolio-cat-1': 'Rénovation',
    'portfolio-title-1': 'Rénovation salle de bain',
    'portfolio-cat-2': 'Installation',
    'portfolio-title-2': 'Installation cuisine',
    'portfolio-cat-3': 'Chauffage',
    'portfolio-title-3': 'Système de chauffage',
    'portfolio-cat-4': 'Réparation',
    'portfolio-title-4': 'Réparation domicile',
    
    // Testimonials Section
    'testimonials-label': 'Avis',
    'testimonials-title': 'Ce que disent nos clients',
    'testimonial-1': '"Carlos est venu rapidement réparer une fuite dans ma salle de bain. Travail très professionnel et propre, de plus ses prix sont justes."',
    'testimonial-1-author': 'María González',
    'testimonial-2': '"Il a fait la rénovation de ma salle de bain. Résultat excellent, très ponctuel et on voit qu\'il a de l\'expérience. Je le recommande sans hésiter."',
    'testimonial-2-author': 'Juan Rodríguez',
    'testimonial-3': '"J\'ai appelé Carlos à 23h pour une fuite urgente. Il est venu en une heure et a tout résolu. Professionnalité incroyable."',
    'testimonial-3-author': 'Carlos López',
    'testimonial-4': '"Devis sur place sans surprise. Tout a été rapide et l\'installation des nouveaux robinets était parfaite. Top."',
    'testimonial-4-author': 'Ana Martínez',
    
    // Contact Section
    'contact-title': 'Avez-vous besoin d\'un plombier?',
    'contact-subtitle': 'N\'hésitez pas à me contacter, je vous répondrai rapidement',
    'contact-phone-label': 'Téléphone',
    'contact-phone-value': '600 000 000',
    'contact-whatsapp-label': 'WhatsApp',
    'contact-email-label': 'Email',
    'contact-email-value': 'carlos@aquafix.es',
    'contact-location-label': 'Zone de travail',
    'contact-location-value': 'Madrid et environs',
    'contact-hours-label': 'Horaires',
    'contact-hours-value': 'L-V 8:00-20:00 · Urgences 24h',
    'contact-whatsapp-btn': 'Contacter par WhatsApp',
    'contact-call-btn': 'Appelez maintenant',
    
    // Footer
    'footer-brand': 'AquaFix',
    'footer-subtitle': 'Carlos García · Plombier Professionnel',
    'footer-privacy': 'Politique de confidentialité',
    'footer-cookies': 'Cookies',
    'footer-copyright': 'AquaFix. Tous les droits réservés.'
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
  // Traducir todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[currentLang][key];
      } else {
        element.innerHTML = translations[currentLang][key];
      }
    }
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
