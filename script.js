// Gestionnaire d'événement pour le formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission par défaut

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert(result); // Afficher le message de succès ou erreur
        this.reset(); // Réinitialiser le formulaire
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'envoi du message');
    });
});

// Translations
const translations = {
    fr: {
        title: "Agence Immobilière Douala",
        "nav-accueil": "Accueil",
        "nav-services": "Services",
        "nav-estimation": "Estimation",
        "nav-biens": "Propriétés",
        "nav-apropos": "À Propos",
        "nav-faq": "FAQ",
        "nav-temoignages": "Témoignages",
        "nav-contact": "Contact",
        "welcome-title": "Bienvenue chez nous",
        "welcome-text": "Nous offrons des prestations immobilières de qualité à Douala pour vous accompagner dans vos projets.",
        "services-title": "Nos Services",
        "service-vente-title": "Vente",
        "service-vente-text": "Accompagnement personnalisé pour la vente de votre bien.",
        "service-achat-title": "Achat",
        "service-achat-text": "Trouvez le bien de vos rêves avec notre expertise.",
        "service-location-title": "Location",
        "service-location-text": "Gestion locative et recherche de locataires.",
        "estimation-title": "Estimez la Valeur de Votre Propriété",
        "estimation-text": "Entrez les détails de votre propriété pour obtenir une estimation approximative basée sur le marché de Douala.",
        "surface-label": "Surface (m²)",
        "surface-placeholder": "Ex: 100",
        "pieces-label": "Nombre de pièces",
        "pieces-placeholder": "Ex: 3",
        "quartier-label": "Quartier",
        "quartier-bonapriso": "Bonapriso",
        "quartier-akwa": "Akwa",
        "quartier-bonanjo": "Bonanjo",
        "quartier-bonaberi": "Bonabéri",
        "quartier-autre": "Autre",
        "etat-label": "État de la propriété",
        "etat-neuf": "Neuf",
        "etat-bon": "Bon",
        "etat-moyen": "Moyen",
        "etat-renover": "À rénover",
        "estimate-button": "Estimer",
        "result-title": "Estimation",
        "biens-title": "Biens Disponibles",
        "search-placeholder": "Rechercher par nom...",
        "all-types": "Tous types",
        sale: "Vente",
        rent: "Location",
        "all-prices": "Tous prix",
        "under-50m": "Moins de 50M XAF",
        "50-100m": "50M - 100M XAF",
        "over-100m": "Plus de 100M XAF",
        "view-details": "Voir détails",
        "about-title": "À Propos de Nous",
        "about-text": "Notre agence immobilière à Douala est spécialisée dans la vente, l'achat et la location de biens immobiliers. Avec plus de 10 ans d'expérience, nous accompagnons nos clients dans toutes leurs démarches.",
        "team-title": "Notre Équipe",
        "role-director": "Directeur",
        "role-agent": "Agent Commercial",
        "role-advisor": "Conseiller Immobilier",
        "testimonials-title": "Témoignages",
        "faq-title": "Foire aux Questions",
        "faq-q1": "Comment obtenir un prêt immobilier à Douala ?",
        "faq-a1": "Les prêts immobiliers sont disponibles via les banques locales comme Afriland First Bank ou BICEC. Apportez vos documents d'identité, justificatifs de revenus et l'acte de propriété.",
        "faq-q2": "Quels sont les quartiers les plus prisés à Douala ?",
        "faq-a2": "Bonapriso, Akwa, et Bonanjo sont populaires pour leur accessibilité et commodités. Bonabéri offre des options plus abordables.",
        "faq-q3": "Comment estimer la valeur d'une propriété ?",
        "faq-a3": "Utilisez notre outil d'estimation ou contactez-nous pour une évaluation gratuite basée sur la localisation, l'état et le marché actuel.",
        "faq-q4": "Quels documents sont nécessaires pour une vente ?",
        "faq-a4": "Titre foncier, certificat d'urbanisme, quitus fiscaux, et acte de notaire. Nous vous accompagnons dans toutes les démarches.",
        "contact-title": "Contactez-nous",
        "contact-text": "Envoyez-nous un message et nous vous répondrons rapidement.",
        "name-label": "👤 Nom complet",
        "name-placeholder": "Votre nom",
        "email-label": "📧 Adresse email",
        "email-placeholder": "votre.email@example.com",
        "message-label": "💬 Message",
        "message-placeholder": "Écrivez votre message ici...",
        "send-message": "📤 Envoyer le message",
        "newsletter-title": "Inscrivez-vous à notre newsletter",
        "email-placeholder-newsletter": "Votre email",
        subscribe: "S'inscrire"
    },
    en: {
        title: "Douala Real Estate Agency",
        "nav-accueil": "Home",
        "nav-services": "Services",
        "nav-estimation": "Estimation",
        "nav-biens": "Properties",
        "nav-apropos": "About",
        "nav-faq": "FAQ",
        "nav-temoignages": "Testimonials",
        "nav-contact": "Contact",
        "welcome-title": "Welcome to Our Agency",
        "welcome-text": "We offer quality real estate services in Douala to support you in your projects.",
        "services-title": "Our Services",
        "service-vente-title": "Sale",
        "service-vente-text": "Personalized support for selling your property.",
        "service-achat-title": "Purchase",
        "service-achat-text": "Find your dream property with our expertise.",
        "service-location-title": "Rental",
        "service-location-text": "Rental management and tenant search.",
        "estimation-title": "Estimate Your Property Value",
        "estimation-text": "Enter your property details to get an approximate estimate based on the Douala market.",
        "surface-label": "Area (m²)",
        "surface-placeholder": "Ex: 100",
        "pieces-label": "Number of rooms",
        "pieces-placeholder": "Ex: 3",
        "quartier-label": "Neighborhood",
        "quartier-bonapriso": "Bonapriso",
        "quartier-akwa": "Akwa",
        "quartier-bonanjo": "Bonanjo",
        "quartier-bonaberi": "Bonabéri",
        "quartier-autre": "Other",
        "etat-label": "Property condition",
        "etat-neuf": "New",
        "etat-bon": "Good",
        "etat-moyen": "Average",
        "etat-renover": "Needs renovation",
        "estimate-button": "Estimate",
        "result-title": "Estimation",
        "biens-title": "Available Properties",
        "search-placeholder": "Search by name...",
        "all-types": "All types",
        sale: "Sale",
        rent: "Rental",
        "all-prices": "All prices",
        "under-50m": "Under 50M XAF",
        "50-100m": "50M - 100M XAF",
        "over-100m": "Over 100M XAF",
        "view-details": "View details",
        "about-title": "About Us",
        "about-text": "Our real estate agency in Douala specializes in the sale, purchase, and rental of properties. With over 10 years of experience, we support our clients in all their endeavors.",
        "team-title": "Our Team",
        "role-director": "Director",
        "role-agent": "Commercial Agent",
        "role-advisor": "Real Estate Advisor",
        "testimonials-title": "Testimonials",
        "faq-title": "Frequently Asked Questions",
        "faq-q1": "How to get a mortgage in Douala?",
        "faq-a1": "Mortgages are available through local banks like Afriland First Bank or BICEC. Bring your ID, income proofs, and property deed.",
        "faq-q2": "What are the most popular neighborhoods in Douala?",
        "faq-a2": "Bonapriso, Akwa, and Bonanjo are popular for accessibility and amenities. Bonabéri offers more affordable options.",
        "faq-q3": "How to estimate property value?",
        "faq-a3": "Use our estimation tool or contact us for a free evaluation based on location, condition, and current market.",
        "faq-q4": "What documents are needed for a sale?",
        "faq-a4": "Land title, urban planning certificate, tax clearances, and notary deed. We guide you through all steps.",
        "contact-title": "Contact Us",
        "contact-text": "Send us a message and we will respond quickly.",
        "name-label": "👤 Full name",
        "name-placeholder": "Your name",
        "email-label": "📧 Email address",
        "email-placeholder": "your.email@example.com",
        "message-label": "💬 Message",
        "message-placeholder": "Write your message here...",
        "send-message": "📤 Send message",
        "newsletter-title": "Subscribe to our newsletter",
        "email-placeholder-newsletter": "Your email",
        subscribe: "Subscribe"
    }
};

let currentLang = 'fr';

function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    document.getElementById('langSwitch').textContent = lang === 'fr' ? 'EN' : 'FR';
}

document.getElementById('langSwitch').addEventListener('click', () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    switchLanguage(newLang);
});

// FAQ toggle
document.querySelectorAll('.faq-item h3').forEach(h3 => {
    h3.addEventListener('click', () => {
        h3.parentElement.classList.toggle('active');
    });
});

// Testimonials slider
let currentSlide = 0;
const slides = document.querySelectorAll('.temoignage');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

showSlide(currentSlide);

// Theme toggle
const themeSwitch = document.getElementById('themeSwitch');
let isDark = true;

themeSwitch.addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('light', !isDark);
    themeSwitch.textContent = isDark ? '🌙' : '☀️';
});

// Filtrage des propriétés
const searchInput = document.getElementById('search');
const typeSelect = document.getElementById('type');
const prixSelect = document.getElementById('prix');
const biens = document.querySelectorAll('.bien');

function filterBiens() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedType = typeSelect.value;
    const selectedPrix = prixSelect.value;

    biens.forEach(bien => {
        const title = bien.querySelector('h3').textContent.toLowerCase();
        const desc = bien.querySelector('p').textContent;
        const isVente = desc.includes('XAF') && !desc.includes('Loyer');
        const isLocation = desc.includes('Loyer');
        const prixText = desc.match(/(\d+(?:\s\d+)*)/)?.[0]?.replace(/\s/g, '') || 0;
        const prix = parseInt(prixText);

        let show = true;

        if (searchTerm && !title.includes(searchTerm)) show = false;
        if (selectedType === 'vente' && !isVente) show = false;
        if (selectedType === 'location' && !isLocation) show = false;
        if (selectedPrix) {
            if (selectedPrix === '0-50000000' && prix >= 50000000) show = false;
            if (selectedPrix === '50000000-100000000' && (prix < 50000000 || prix > 100000000)) show = false;
            if (selectedPrix === '100000000+' && prix <= 100000000) show = false;
        }

        bien.style.display = show ? 'block' : 'none';
    });
}

searchInput.addEventListener('input', filterBiens);
typeSelect.addEventListener('change', filterBiens);
prixSelect.addEventListener('change', filterBiens);

// Gestionnaire pour la newsletter
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input').value;
    fetch('/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    })
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => alert('Erreur lors de l\'inscription'));
});

// Gestionnaire pour l'estimation
document.getElementById('estimationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const surface = parseFloat(document.getElementById('surface').value);
    const pieces = parseInt(document.getElementById('pieces').value);
    const quartier = document.getElementById('quartier').value;
    const etat = document.getElementById('etat').value;

    // Base price per m² in Douala: 600,000 XAF
    let basePrice = 600000;

    // Adjust by quartier
    const quartierMultipliers = {
        bonapriso: 1.2,
        akwa: 1.3,
        bonanjo: 1.1,
        bonaberi: 0.8,
        autre: 1.0
    };
    basePrice *= quartierMultipliers[quartier];

    // Adjust by etat
    const etatMultipliers = {
        neuf: 1.2,
        bon: 1.0,
        moyen: 0.8,
        renover: 0.6
    };
    basePrice *= etatMultipliers[etat];

    // Adjust by pieces (more rooms = higher)
    basePrice *= (1 + (pieces - 1) * 0.1);

    const total = Math.round(basePrice * surface);
    const resultText = `Estimation approximative : ${total.toLocaleString()} XAF. Contactez-nous pour une évaluation précise.`;
    document.getElementById('resultText').textContent = resultText;
    document.getElementById('estimationResult').style.display = 'block';
});

// Animation au scroll pour les sections (Intersection Observer)
const observerOptions = {
    threshold: 0.1 // Déclencher quand 10% de la section est visible
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Appliquer l'animation d'apparition
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Appliquer l'observateur à toutes les sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0'; // Masquer initialement
    section.style.transform = 'translateY(20px)'; // Position initiale
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; // Transition douce
    observer.observe(section);
});

// Navigation smooth scroll (bien que déjà en CSS, au cas où)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        const target = document.querySelector(this.getAttribute('href')); // Trouver la section cible
        target.scrollIntoView({
            behavior: 'smooth' // Défilement fluide
        });
    });
});