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
    'hero-title': 'Reparaciones generales <br>rapidas y confiables',
    'hero-title-highlight': 'rapidas y<br>confiables',
    'hero-subtitle': 'Equipo profesional de reparaciones generales con más de 15 años de experiencia. Electricidad, fontanería, instalaciones y mantenimiento en Alicante, España.',
    'btn-whatsapp': 'Contactar por WhatsApp',
    'btn-contactar': 'Contactar',
    
    // About Section
    'about-label': 'Sobre mí',
    'about-title': 'Equipo de reparaciones de confianza en Alicante',
    'about-text-1': 'Con más de 15 años de experiencia en reparaciones generales, ayudamos cada semana a familias y negocios de Alicante con soluciones rapidas, claras y eficaces. Nos adaptamos a tu urgencia, a tu presupuesto y al tipo de trabajo que necesitas.',
    'about-text-2': 'Trabajamos con profesionalidad, puntualidad y atencion al detalle en electricidad, fontaneria, instalaciones y mantenimiento. La confianza se gana con hechos: diagnostico honesto, presupuesto sin sorpresas y reparaciones bien hechas desde la primera visita.',
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
    'service-1-title': 'Instalaciones y reparaciones eléctricas',
    'service-1-desc': 'Instalación de sistemas eléctricos seguros y reparaciones profesionales',
    'service-1-price': 'Desde 90€/h',
    'service-2-title': 'Cambio de enchufes, interruptores y luminarias',
    'service-2-desc': 'Reemplazo de enchufes, interruptores y sistemas de iluminación modernos',
    'service-2-price': 'Desde 90€/h',
    'service-3-title': 'Averías eléctricas urgentes',
    'service-3-desc': 'Servicio de emergencia para problemas eléctricos graves las 24 horas',
    'service-3-price': 'Desde 90€/h',
    'service-4-title': 'Reparación de fugas de agua y grifos',
    'service-4-desc': 'Detección y reparación de fugas en sistemas hidráulicos',
    'service-4-price': 'Desde 90€/h',
    'service-5-title': 'Instalación de sanitarios y electrodomésticos',
    'service-5-desc': 'Instalación segura de sanitarios y electrodomésticos conectados',
    'service-5-price': 'Desde 90€/h',
    'service-6-title': 'Mantenimiento general',
    'service-6-desc': 'Revisión periódica y mantenimiento preventivo de instalaciones eléctricas',
    'service-6-price': 'Desde 90€/h',
    'service-7-title': 'Instalación de puertas',
    'service-7-desc': 'Montaje y ajuste de puertas interiores y blindadas',
    'service-7-price': 'Desde 90€/h',
    'service-8-title': 'Desplazamiento',
    'service-8-desc': 'Coste de desplazamiento según distancia',
    'service-8-price': '40€',
    
    // Portfolio Section
    'portfolio-label': 'Portafolio',
    'portfolio-title': 'Nuestros trabajos recientes',
    'portfolio-cat-1': 'Trabajos',
    'portfolio-title-1': 'Reparación baño',
    'portfolio-cat-2': 'Trabajos',
    'portfolio-title-2': 'Instalaciones electricas',
    'portfolio-cat-3': 'Trabajos',
    'portfolio-title-3': 'Averia electrica urgente',
    'portfolio-cat-4': 'Trabajos',
    'portfolio-title-4': 'Mantenimiento y reparaciones',

    // FAQ Section
    'faq-label': 'FAQ',
    'faq-title': 'Preguntas frecuentes sobre reparaciones en Alicante',
    'faq-q1': 'Que tipo de reparaciones realizais en Alicante?',
    'faq-a1': 'Realizamos instalaciones y reparaciones electricas, cambio de enchufes e interruptores, averias urgentes, reparacion de fugas y mantenimiento general.',
    'faq-q2': 'Atendeis urgencias en Alicante?',
    'faq-a2': 'Si, atendemos urgencias con respuesta rapida para averias electricas y reparaciones prioritarias.',
    'faq-q3': 'Instalais sanitarios y electrodomesticos?',
    'faq-a3': 'Si, realizamos instalacion segura de sanitarios y electrodomesticos conectados.',
    'faq-q4': 'Como solicito presupuesto en Alicante?',
    'faq-a4': 'Puedes contactar por WhatsApp o llamada al 689 200 982 y te responderemos rapidamente.',
    
    // Testimonials Section
    'testimonials-label': 'Opiniones',
    'testimonials-title': 'Lo que dicen nuestros clientes',
    'testimonial-1': '"Llegaron rápidamente para reparar una avería en casa. Trabajo profesional y precios justos."',
    'testimonial-1-author': 'Cliente verificado',
    'testimonial-2': '"Realizaron una instalación completa en mi vivienda. Resultado excelente y muy puntuales."',
    'testimonial-2-author': 'Cliente verificado',
    'testimonial-3': '"Llamé por una urgencia nocturna y llegaron en una hora. Resolución rápida y trato excelente."',
    'testimonial-3-author': 'Cliente verificado',
    'testimonial-4': '"Presupuesto claro y sin sorpresas. Todo fue rápido y quedó perfecto."',
    'testimonial-4-author': 'Cliente verificado',
    
    // Contact Section
    'contact-title': '¿Necesitas electricista profesional?',
    'contact-subtitle': 'No dudes en contactarme, te responderé rápidamente',
    'contact-phone-label': 'Teléfono',
    'contact-phone-value': '689 200 982',
    'contact-whatsapp-label': 'WhatsApp',
    'contact-email-label': 'Email',
    'contact-email-value': 'contacto@reparacion-alicante.com',
    'contact-location-label': 'Zona de trabajo',
    'contact-location-value': 'Alicante, España',
    'contact-hours-label': 'Horario',
    'contact-hours-value': 'L-V 8:00-20:00 · Urgencias 24h',
    'contact-whatsapp-btn': 'Contactar por WhatsApp',
    'contact-call-btn': 'Llamar ahora',
    
    // Footer
    'footer-brand': 'Reparaciones Alicante',
    'footer-subtitle': 'Servicio profesional de reparaciones generales',
    'footer-privacy': 'Política de privacidad',
    'footer-cookies': 'Cookies',
    'footer-copyright': 'Reparaciones Alicante. Todos los derechos reservados.'
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
    'hero-title': 'General home repairs<br>you can trust',
    'hero-title-highlight': 'you can<br>trust',
    'hero-subtitle': 'Professional general repairs team with more than 15 years of experience. Electrical work, plumbing, installations and maintenance in Alicante, Spain.',
    'btn-whatsapp': 'Contact via WhatsApp',
    'btn-contactar': 'Contact',
    
    // About Section
    'about-label': 'About Me',
    'about-title': 'Trusted General Repairs Team in Alicante',
    'about-text-1': 'With more than 15 years of experience in general repairs, we help families and businesses across Alicante with fast, clear and effective solutions. We adapt to your urgency, your budget and the type of service you need.',
    'about-text-2': 'We work with professionalism, punctuality and attention to detail in electrical work, plumbing, installations and maintenance. Trust is earned through facts: honest diagnosis, clear quotes and repairs done right from the first visit.',
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
    'service-1-title': 'Electrical installations and repairs',
    'service-1-desc': 'Safe electrical installations and professional repairs',
    'service-1-price': 'From 90€/h',
    'service-2-title': 'Replacement of sockets, switches and lights',
    'service-2-desc': 'Upgrade sockets, switches and luminaires safely',
    'service-2-price': 'From 90€/h',
    'service-3-title': 'Urgent electrical breakdowns',
    'service-3-desc': 'Emergency service for serious electrical faults 24/7',
    'service-3-price': 'From 90€/h',
    'service-4-title': 'Water leak and tap repairs',
    'service-4-desc': 'Detection and repair of leaks in plumbing systems',
    'service-4-price': 'From 90€/h',
    'service-5-title': 'Sanitary and appliance installation',
    'service-5-desc': 'Safe installation of sanitary fixtures and appliances',
    'service-5-price': 'From 90€/h',
    'service-6-title': 'General maintenance',
    'service-6-desc': 'Periodic checks and preventive maintenance',
    'service-6-price': 'From 90€/h',
    'service-7-title': 'Door installation',
    'service-7-desc': 'Assembly and adjustment of interior and security doors',
    'service-7-price': 'From 90€/h',
    'service-8-title': 'Displacement',
    'service-8-desc': 'Displacement cost according to distance',
    'service-8-price': '40€',
    
    // Portfolio Section
    'portfolio-label': 'Portfolio',
    'portfolio-title': 'Our recent work',
    'portfolio-cat-1': 'Works',
    'portfolio-title-1': 'Bathroom repair',
    'portfolio-cat-2': 'Works',
    'portfolio-title-2': 'Electrical installations',
    'portfolio-cat-3': 'Works',
    'portfolio-title-3': 'Urgent electrical fault',
    'portfolio-cat-4': 'Works',
    'portfolio-title-4': 'Maintenance and repairs',

    // FAQ Section
    'faq-label': 'FAQ',
    'faq-title': 'Frequently asked questions about repairs in Alicante',
    'faq-q1': 'What type of repairs do you provide in Alicante?',
    'faq-a1': 'We provide electrical installations and repairs, socket and switch replacement, urgent fault repair, leak repair and general maintenance.',
    'faq-q2': 'Do you handle urgent repairs in Alicante?',
    'faq-a2': 'Yes, we provide urgent response for electrical faults and priority repairs.',
    'faq-q3': 'Do you install sanitary fixtures and appliances?',
    'faq-a3': 'Yes, we safely install sanitary fixtures and connected appliances.',
    'faq-q4': 'How can I request a quote in Alicante?',
    'faq-a4': 'You can contact us by WhatsApp or phone at 689 200 982 and we will reply quickly.',
    
    // Testimonials Section
    'testimonials-label': 'Reviews',
    'testimonials-title': 'What our customers say',
    'testimonial-1': '"They quickly repaired an issue at home. Very professional work and fair prices."',
    'testimonial-1-author': 'Verified client',
    'testimonial-2': '"They completed a full installation in my home. Excellent result and very punctual."',
    'testimonial-2-author': 'Verified client',
    'testimonial-3': '"I called for a night emergency and they arrived within an hour. Fast solution and excellent service."',
    'testimonial-3-author': 'Verified client',
    'testimonial-4': '"Clear quote with no surprises. Everything was fast and perfectly done."',
    'testimonial-4-author': 'Verified client',
    
    // Contact Section
    'contact-title': 'Do you need a plumber?',
    'contact-subtitle': 'Don\'t hesitate to contact me, I will respond quickly',
    'contact-phone-label': 'Phone',
    'contact-phone-value': '689 200 982',
    'contact-whatsapp-label': 'WhatsApp',
    'contact-email-label': 'Email',
    'contact-email-value': 'contact@reparacion-alicante.com',
    'contact-location-label': 'Work area',
    'contact-location-value': 'Alicante, Spain',
    'contact-hours-label': 'Hours',
    'contact-hours-value': 'M-F 8:00-20:00 · 24h Emergencies',
    'contact-whatsapp-btn': 'Contact via WhatsApp',
    'contact-call-btn': 'Call Now',
    
    // Footer
    'footer-brand': 'Repairs Alicante',
    'footer-subtitle': 'Professional general repairs service',
    'footer-privacy': 'Privacy Policy',
    'footer-cookies': 'Cookies',
    'footer-copyright': 'Repairs Alicante. All rights reserved.'
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
    'hero-title': 'Reparations generales<br>rapides et fiables',
    'hero-title-highlight': 'rapides et<br>fiables',
    'hero-subtitle': 'Equipe professionnelle de reparations generales avec plus de 15 ans d\'experience. Electricite, plomberie, installations et maintenance a Alicante, Espagne.',
    'btn-whatsapp': 'Contacter par WhatsApp',
    'btn-contactar': 'Contacter',
    
    // About Section
    'about-label': 'À propos de moi',
    'about-title': 'Equipe de reparations de confiance a Alicante',
    'about-text-1': 'Avec plus de 15 ans d\'experience en reparations generales, nous aidons chaque semaine des familles et des entreprises d\'Alicante avec des solutions rapides, claires et efficaces. Nous nous adaptons a votre urgence, votre budget et votre besoin.',
    'about-text-2': 'Nous travaillons avec professionnalisme, ponctualite et souci du detail en electricite, plomberie, installations et maintenance. La confiance se gagne par les faits : diagnostic honnete, devis clair et reparations bien faites des la premiere visite.',
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
    'service-1-title': 'Installations et reparations electriques',
    'service-1-desc': 'Installations electriques sures et reparations professionnelles',
    'service-1-price': 'À partir de 90€/h',
    'service-2-title': 'Remplacement de prises, interrupteurs et luminaires',
    'service-2-desc': 'Mise a niveau de prises, interrupteurs et eclairage',
    'service-2-price': 'À partir de 90€/h',
    'service-3-title': 'Pannes electriques urgentes',
    'service-3-desc': 'Service d\'urgence 24h pour pannes electriques graves',
    'service-3-price': 'À partir de 90€/h',
    'service-4-title': 'Reparation de fuites d\'eau et robinets',
    'service-4-desc': 'Detection et reparation de fuites en plomberie',
    'service-4-price': 'À partir de 90€/h',
    'service-5-title': 'Installation de sanitaires et electromenagers',
    'service-5-desc': 'Installation sure de sanitaires et electromenagers',
    'service-5-price': 'À partir de 90€/h',
    'service-6-title': 'Maintenance generale',
    'service-6-desc': 'Controle periodique et maintenance preventive',
    'service-6-price': 'À partir de 90€/h',
    'service-7-title': 'Installation de portes',
    'service-7-desc': 'Montage et reglage de portes interieures et blindees',
    'service-7-price': 'À partir de 90€/h',
    'service-8-title': 'Déplacement',
    'service-8-desc': 'Coût de déplacement selon la distance',
    'service-8-price': '40€',
    
    // Portfolio Section
    'portfolio-label': 'Portfolio',
    'portfolio-title': 'Nos travaux récents',
    'portfolio-cat-1': 'Travaux',
    'portfolio-title-1': 'Reparation salle de bain',
    'portfolio-cat-2': 'Travaux',
    'portfolio-title-2': 'Installations electriques',
    'portfolio-cat-3': 'Travaux',
    'portfolio-title-3': 'Panne electrique urgente',
    'portfolio-cat-4': 'Travaux',
    'portfolio-title-4': 'Maintenance et reparations',

    // FAQ Section
    'faq-label': 'FAQ',
    'faq-title': 'Questions frequentes sur les reparations a Alicante',
    'faq-q1': 'Quels types de reparations faites-vous a Alicante?',
    'faq-a1': 'Nous realisons installations et reparations electriques, remplacement de prises et interrupteurs, urgences, fuites et maintenance generale.',
    'faq-q2': 'Intervenez-vous en urgence a Alicante?',
    'faq-a2': 'Oui, nous proposons une intervention rapide pour pannes electriques et reparations prioritaires.',
    'faq-q3': 'Installez-vous des sanitaires et electromenagers?',
    'faq-a3': 'Oui, nous effectuons une installation sure de sanitaires et electromenagers connectes.',
    'faq-q4': 'Comment demander un devis a Alicante?',
    'faq-a4': 'Vous pouvez nous contacter par WhatsApp ou telephone au 689 200 982 et nous repondrons rapidement.',
    
    // Testimonials Section
    'testimonials-label': 'Avis',
    'testimonials-title': 'Ce que disent nos clients',
    'testimonial-1': '"Ils sont intervenus rapidement pour une panne a la maison. Travail professionnel et prix justes."',
    'testimonial-1-author': 'Client verifie',
    'testimonial-2': '"Ils ont realise une installation complete chez moi. Excellent resultat et grande ponctualite."',
    'testimonial-2-author': 'Client verifie',
    'testimonial-3': '"J\'ai appele pour une urgence de nuit et ils sont arrives en une heure. Solution rapide et excellent service."',
    'testimonial-3-author': 'Client verifie',
    'testimonial-4': '"Devis clair et sans surprises. Tout a ete rapide et parfaitement realise."',
    'testimonial-4-author': 'Client verifie',
    
    // Contact Section
    'contact-title': 'Avez-vous besoin d\'un plombier?',
    'contact-subtitle': 'N\'hésitez pas à me contacter, je vous répondrai rapidement',
    'contact-phone-label': 'Téléphone',
    'contact-phone-value': '689 200 982',
    'contact-whatsapp-label': 'WhatsApp',
    'contact-email-label': 'Email',
    'contact-email-value': 'contact@reparacion-alicante.com',
    'contact-location-label': 'Zone de travail',
    'contact-location-value': 'Alicante, Espagne',
    'contact-hours-label': 'Horaires',
    'contact-hours-value': 'L-V 8:00-20:00 · Urgences 24h',
    'contact-whatsapp-btn': 'Contacter par WhatsApp',
    'contact-call-btn': 'Appelez maintenant',
    
    // Footer
    'footer-brand': 'Reparations Alicante',
    'footer-subtitle': 'Service professionnel de reparations generales',
    'footer-privacy': 'Politique de confidentialité',
    'footer-cookies': 'Cookies',
    'footer-copyright': 'Reparations Alicante. Tous les droits reserves.'
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

const PHONE_NUMBER = '689200982'; // WhatsApp/Call number

function openWhatsApp() {
  const message = encodeURIComponent(
    'Hola. Me gustaria obtener mas informacion sobre los servicios de reparaciones generales.'
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

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

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
