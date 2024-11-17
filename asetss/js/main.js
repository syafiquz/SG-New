$(document).ready(function () {
    $("#autoWidth").lightSlider({
      adaptiveHeight: true,
      auto: true,
      item: 1,
      slideMargin: 0,
      loop: true,
    });
  });
  
  /**
  * Animation on scroll
  */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
  
  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });
  
  
  const navbarHome = document.querySelector(".navbarHome");
  
  window.addEventListener("scroll", () => {
    const post = window.scrollY > 100;
  
    navbarHome.classList.toggle("scroll", post);
  });
  
  function changeLanguage(lang) {
    const translations = {
        en: {
            home: 'Home',
            gallery: 'Gallery',
            news: 'Projects',
            structure: 'Structure',
            contact: 'Contact',
            welcome: 'Welcome to SG Construction',
            aboutUs: 'About Us',
            aboutText: 'SG Construction is a leading construction company specializing in building luxurious villas. With years of experience and a team of skilled professionals, we ensure the highest quality and customer satisfaction.',
            luxuriousVillas: 'Luxurious Villas',
            luxuriousVillasText: 'We design and build luxurious villas that combine modern architecture with comfort and elegance.',
            professionalTeam: 'Professional Team',
            professionalTeamText: 'Our team of professionals is dedicated to delivering the best construction services with attention to detail and quality.',
            customerSatisfaction: 'Customer Satisfaction',
            customerSatisfactionText: 'We prioritize customer satisfaction by ensuring timely delivery and exceptional service throughout the construction process.',
            ourProjects: 'Our Projects',
            villaProject1: 'Villa Project 1',
            villaProject1Text: 'A stunning villa with a modern design and a beautiful swimming pool.',
            villaProject2: 'Villa Project 2',
            villaProject2Text: 'A luxurious villa featuring a spacious garden and elegant interiors.',
            villaProject3: 'Villa Project 3',
            villaProject3Text: 'A modern villa with a rooftop terrace offering stunning views.',
            followUs: 'Follow Us'
        },
        id: {
            home: 'Beranda',
            gallery: 'Galeri',
            news: 'Proyek',
            structure: 'Struktur',
            contact: 'Kontak',
            welcome: 'Selamat Datang di SG Construction',
            aboutUs: 'Tentang Kami',
            aboutText: 'SG Construction adalah perusahaan konstruksi terkemuka yang mengkhususkan diri dalam membangun vila mewah. Dengan pengalaman bertahun-tahun dan tim profesional yang terampil, kami memastikan kualitas tertinggi dan kepuasan pelanggan.',
            luxuriousVillas: 'Vila Mewah',
            luxuriousVillasText: 'Kami merancang dan membangun vila mewah yang menggabungkan arsitektur modern dengan kenyamanan dan keanggunan.',
            professionalTeam: 'Tim Profesional',
            professionalTeamText: 'Tim profesional kami berdedikasi untuk memberikan layanan konstruksi terbaik dengan perhatian terhadap detail dan kualitas.',
            customerSatisfaction: 'Kepuasan Pelanggan',
            customerSatisfactionText: 'Kami mengutamakan kepuasan pelanggan dengan memastikan pengiriman tepat waktu dan layanan yang luar biasa selama proses konstruksi.',
            ourProjects: 'Proyek Kami',
            villaProject1: 'Proyek Vila 1',
            villaProject1Text: 'Vila menakjubkan dengan desain modern dan kolam renang yang indah.',
            villaProject2: 'Proyek Vila 2',
            villaProject2Text: 'Vila mewah dengan taman yang luas dan interior yang elegan.',
            villaProject3: 'Proyek Vila 3',
            villaProject3Text: 'Vila modern dengan teras atap yang menawarkan pemandangan menakjubkan.',
            followUs: 'Ikuti Kami'
        },
        es: {
            home: 'Inicio',
            gallery: 'Galería',
            news: 'Proyectos',
            structure: 'Estructura',
            contact: 'Contacto',
            welcome: 'Bienvenido a SG Construction',
            aboutUs: 'Sobre Nosotros',
            aboutText: 'SG Construction es una empresa de construcción líder especializada en la construcción de villas de lujo. Con años de experiencia y un equipo de profesionales capacitados, garantizamos la más alta calidad y satisfacción del cliente.',
            luxuriousVillas: 'Villas de Lujo',
            luxuriousVillasText: 'Diseñamos y construimos villas de lujo que combinan arquitectura moderna con comodidad y elegancia.',
            professionalTeam: 'Equipo Profesional',
            professionalTeamText: 'Nuestro equipo de profesionales se dedica a brindar los mejores servicios de construcción con atención al detalle y calidad.',
            customerSatisfaction: 'Satisfacción del Cliente',
            customerSatisfactionText: 'Priorizamos la satisfacción del cliente asegurando la entrega oportuna y un servicio excepcional durante todo el proceso de construcción.',
            ourProjects: 'Nuestros Proyectos',
            villaProject1: 'Proyecto de Villa 1',
            villaProject1Text: 'Una villa impresionante con un diseño moderno y una hermosa piscina.',
            villaProject2: 'Proyecto de Villa 2',
            villaProject2Text: 'Una villa de lujo con un jardín espacioso y interiores elegantes.',
            villaProject3: 'Proyecto de Villa 3',
            villaProject3Text: 'Una villa moderna con una terraza en la azotea que ofrece vistas impresionantes.',
            followUs: 'Síguenos'
        },
        fr: {
            home: 'Accueil',
            gallery: 'Galerie',
            news: 'Projets',
            structure: 'Structure',
            contact: 'Contact',
            welcome: 'Bienvenue chez SG Construction',
            aboutUs: 'À Propos',
            aboutText: 'SG Construction est une entreprise de construction leader spécialisée dans la construction de villas de luxe. Avec des années d\'expérience et une équipe de professionnels qualifiés, nous garantissons la plus haute qualité et la satisfaction du client.',
            luxuriousVillas: 'Villas de Luxe',
            luxuriousVillasText: 'Nous concevons et construisons des villas de luxe qui allient architecture moderne, confort et élégance.',
            professionalTeam: 'Équipe Professionnelle',
            professionalTeamText: 'Notre équipe de professionnels est dédiée à fournir les meilleurs services de construction avec une attention aux détails et à la qualité.',
            customerSatisfaction: 'Satisfaction du Client',
            customerSatisfactionText: 'Nous priorisons la satisfaction du client en assurant une livraison en temps voulu et un service exceptionnel tout au long du processus de construction.',
            ourProjects: 'Nos Projets',
            villaProject1: 'Projet de Villa 1',
            villaProject1Text: 'Une villa impressionnante avec un design moderne et une belle piscine.',
            villaProject2: 'Projet de Villa 2',
            villaProject2Text: 'Une villa de luxe avec un jardin spacieux et des intérieurs élégants.',
            villaProject3: 'Projet de Villa 3',
            villaProject3Text: 'Une villa moderne avec une terrasse sur le toit offrant des vues imprenables.',
            followUs: 'Suivez-nous'
        }
    };
  
    // Update the text on the page based on the selected language
    document.querySelectorAll('nav a').forEach(function(element) {
        const key = element.textContent.trim().toLowerCase().replace(' ', '');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
  
    document.getElementById('languageDropdown').innerHTML = `<div class="language-dropdown">"></i> ${translations[lang].language}`;
    document.querySelector('header h1').textContent = translations[lang].welcome;
    document.querySelector('slideshow h3').textContent = translations[lang].slideshow;
    document.querySelector('section:nth-of-type(1) p').textContent = translations[lang].aboutText;
    document.querySelectorAll('section:nth-of-type(1) h3')[0].textContent = translations[lang].luxuriousVillas;
    document.querySelectorAll('section:nth-of-type(1) p')[1].textContent = translations[lang].luxuriousVillasText;
    document.querySelectorAll('section:nth-of-type(1) h3')[1].textContent = translations[lang].professionalTeam;
    document.querySelectorAll('section:nth-of-type(1) p')[2].textContent = translations[lang].professionalTeamText;
    document.querySelectorAll('section:nth-of-type(1) h3')[2].textContent = translations[lang].customerSatisfaction;
    document.querySelectorAll('section:nth-of-type(1) p')[3].textContent = translations[lang].customerSatisfactionText;
    document.querySelector('section:nth-of-type(2) h2').textContent = translations[lang].ourProjects;
    document.querySelectorAll('section:nth-of-type(2) h3')[0].textContent = translations[lang].villaProject1;
    document.querySelectorAll('section:nth-of-type(2) p')[0].textContent = translations[lang].villaProject1Text;
    document.querySelectorAll('section:nth-of-type(2) h3')[1].textContent = translations[lang].villaProject2;
    document.querySelectorAll('section:nth-of-type(2) p')[1].textContent = translations[lang].villaProject2Text;
    document.querySelectorAll('section:nth-of-type(2) h3')[2].textContent = translations[lang].villaProject3;
    document.querySelectorAll('section:nth-of-type(2) p')[2].textContent = translations[lang].villaProject3Text;
    document.querySelector('footer h3').textContent = translations[lang].followUs;
  }