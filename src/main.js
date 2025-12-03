import './style.css'

// Translations
const translations = {
  es: {
    nav_home: "Inicio",
    nav_hotel: "El Hotel",
    nav_albergue: "Albergue",
    nav_services: "Servicios",
    nav_restaurant: "Restaurante",
    nav_contact: "Contacto",
    btn_book: "Reservar",
    hero_title: "Bienvenido a Hotel Albergue Jakue",
    hero_subtitle: "Tu descanso en el Camino de Santiago. Naturaleza, confort y gastronomía.",
    btn_explore: "Explorar Hotel",
    btn_albergue: "Ver Albergue",
    about_subtitle: "Nuestra Historia",
    about_title: "Más que un alojamiento",
    about_desc: "Situado en Puente la Reina, cruce de caminos, el Hotel Albergue Jakue es el lugar perfecto para peregrinos y turistas. Ofrecemos un ambiente familiar rodeado de naturaleza.",
    feat_garden: "Amplios Jardines",
    feat_parking: "Parking Privado",
    feat_wifi: "WiFi Gratuito",
    services_title: "Nuestros Servicios",
    services_desc: "Todo lo que necesitas para una estancia inolvidable.",
    serv_rooms: "Habitaciones Confortables",
    serv_rooms_desc: "Descansa en nuestras habitaciones totalmente equipadas.",
    serv_restaurant: "Restaurante",
    serv_restaurant_desc: "Disfruta de la mejor gastronomía local y menús del peregrino.",
    serv_garden: "Jardines y Terraza",
    serv_garden_desc: "Relájate en nuestras zonas verdes después de una larga etapa.",
    serv_bike: "Bike Friendly",
    serv_bike_desc: "Espacio seguro para guardar y reparar tu bicicleta.",
    rest_subtitle: "Gastronomía",
    rest_title: "Sabores de la Tierra",
    rest_desc: "Nuestro restaurante ofrece una selección de platos tradicionales con un toque moderno, utilizando productos locales de temporada.",
    btn_menu: "Ver Menú",
    footer_desc: "Tu hogar en el Camino de Santiago.",
    footer_links: "Enlaces",
    footer_contact: "Contacto",
    footer_social: "Síguenos"
  },
  en: {
    nav_home: "Home",
    nav_hotel: "The Hotel",
    nav_albergue: "Hostel",
    nav_services: "Services",
    nav_restaurant: "Restaurant",
    nav_contact: "Contact",
    btn_book: "Book Now",
    hero_title: "Welcome to Hotel Albergue Jakue",
    hero_subtitle: "Your rest on the Camino de Santiago. Nature, comfort, and gastronomy.",
    btn_explore: "Explore Hotel",
    btn_albergue: "View Hostel",
    about_subtitle: "Our History",
    about_title: "More than just accommodation",
    about_desc: "Located in Puente la Reina, a crossroads, Hotel Albergue Jakue is the perfect place for pilgrims and tourists. We offer a family atmosphere surrounded by nature.",
    feat_garden: "Spacious Gardens",
    feat_parking: "Private Parking",
    feat_wifi: "Free WiFi",
    services_title: "Our Services",
    services_desc: "Everything you need for an unforgettable stay.",
    serv_rooms: "Comfortable Rooms",
    serv_rooms_desc: "Rest in our fully equipped rooms.",
    serv_restaurant: "Restaurant",
    serv_restaurant_desc: "Enjoy the best local gastronomy and pilgrim menus.",
    serv_garden: "Gardens & Terrace",
    serv_garden_desc: "Relax in our green areas after a long stage.",
    serv_bike: "Bike Friendly",
    serv_bike_desc: "Safe space to store and repair your bicycle.",
    rest_subtitle: "Gastronomy",
    rest_title: "Flavors of the Land",
    rest_desc: "Our restaurant offers a selection of traditional dishes with a modern twist, using local seasonal products.",
    btn_menu: "View Menu",
    footer_desc: "Your home on the Camino de Santiago.",
    footer_links: "Links",
    footer_contact: "Contact",
    footer_social: "Follow Us"
  },
  fr: {
    nav_home: "Accueil",
    nav_hotel: "L'Hôtel",
    nav_albergue: "Auberge",
    nav_services: "Services",
    nav_restaurant: "Restaurant",
    nav_contact: "Contact",
    btn_book: "Réserver",
    hero_title: "Bienvenue à l'Hôtel Albergue Jakue",
    hero_subtitle: "Votre repos sur le Chemin de Saint-Jacques. Nature, confort et gastronomie.",
    btn_explore: "Explorer l'Hôtel",
    btn_albergue: "Voir l'Auberge",
    about_subtitle: "Notre Histoire",
    about_title: "Plus qu'un simple hébergement",
    about_desc: "Situé à Puente la Reina, carrefour des chemins, l'Hôtel Albergue Jakue est l'endroit idéal pour les pèlerins et les touristes. Nous offrons une ambiance familiale entourée de nature.",
    feat_garden: "Grands Jardins",
    feat_parking: "Parking Privé",
    feat_wifi: "WiFi Gratuit",
    services_title: "Nos Services",
    services_desc: "Tout ce dont vous avez besoin pour un séjour inoubliable.",
    serv_rooms: "Chambres Confortables",
    serv_rooms_desc: "Reposez-vous dans nos chambres entièrement équipées.",
    serv_restaurant: "Restaurant",
    serv_restaurant_desc: "Profitez de la meilleure gastronomie locale et des menus pèlerins.",
    serv_garden: "Jardins et Terrasse",
    serv_garden_desc: "Détendez-vous dans nos espaces verts après une longue étape.",
    serv_bike: "Accueil Vélo",
    serv_bike_desc: "Espace sécurisé pour ranger et réparer votre vélo.",
    rest_subtitle: "Gastronomie",
    rest_title: "Saveurs du Terroir",
    rest_desc: "Notre restaurant propose une sélection de plats traditionnels avec une touche moderne, utilisant des produits locaux de saison.",
    btn_menu: "Voir le Menu",
    footer_desc: "Votre maison sur le Chemin de Saint-Jacques.",
    footer_links: "Liens",
    footer_contact: "Contact",
    footer_social: "Suivez-nous"
  },
  pt: {
    nav_home: "Início",
    nav_hotel: "O Hotel",
    nav_albergue: "Albergue",
    nav_services: "Serviços",
    nav_restaurant: "Restaurante",
    nav_contact: "Contato",
    btn_book: "Reservar",
    hero_title: "Bem-vindo ao Hotel Albergue Jakue",
    hero_subtitle: "O seu descanso no Caminho de Santiago. Natureza, conforto e gastronomia.",
    btn_explore: "Explorar Hotel",
    btn_albergue: "Ver Albergue",
    about_subtitle: "Nossa História",
    about_title: "Mais do que um alojamento",
    about_desc: "Localizado em Puente la Reina, cruzamento de caminhos, o Hotel Albergue Jakue é o lugar perfeito para peregrinos e turistas. Oferecemos um ambiente familiar rodeado de natureza.",
    feat_garden: "Amplos Jardins",
    feat_parking: "Estacionamento Privado",
    feat_wifi: "WiFi Gratuito",
    services_title: "Nossos Serviços",
    services_desc: "Tudo o que você precisa para uma estadia inesquecível.",
    serv_rooms: "Quartos Confortáveis",
    serv_rooms_desc: "Descanse em nossos quartos totalmente equipados.",
    serv_restaurant: "Restaurante",
    serv_restaurant_desc: "Desfrute da melhor gastronomia local e menus de peregrino.",
    serv_garden: "Jardins e Terraço",
    serv_garden_desc: "Relaxe em nossas áreas verdes após uma longa etapa.",
    serv_bike: "Amigo da Bicicleta",
    serv_bike_desc: "Espaço seguro para guardar e reparar sua bicicleta.",
    rest_subtitle: "Gastronomia",
    rest_title: "Sabores da Terra",
    rest_desc: "Nosso restaurante oferece uma seleção de pratos tradicionais com um toque moderno, utilizando produtos locais sazonais.",
    btn_menu: "Ver Menu",
    footer_desc: "Sua casa no Caminho de Santiago.",
    footer_links: "Links",
    footer_contact: "Contato",
    footer_social: "Siga-nos"
  },
  eu: {
    nav_home: "Hasiera",
    nav_hotel: "Hotela",
    nav_albergue: "Aterpetxea",
    nav_services: "Zerbitzuak",
    nav_restaurant: "Jatetxea",
    nav_contact: "Harremana",
    btn_book: "Erreserbatu",
    hero_title: "Ongi etorri Hotel Albergue Jakue-ra",
    hero_subtitle: "Zure atsedenlekua Donejakue Bidean. Natura, erosotasuna eta gastronomia.",
    btn_explore: "Hotela Ikusi",
    btn_albergue: "Aterpetxea Ikusi",
    about_subtitle: "Gure Historia",
    about_title: "Ostatu bat baino gehiago",
    about_desc: "Garesen kokatua, bidegurutzean, Hotel Albergue Jakue leku ezin hobea da erromes eta turistentzat. Natura inguratutako giro familiarra eskaintzen dugu.",
    feat_garden: "Lorategi Zabalak",
    feat_parking: "Aparkaleku Pribatua",
    feat_wifi: "Doako WiFi",
    services_title: "Gure Zerbitzuak",
    services_desc: "Egonaldi ahaztezin baterako behar duzun guztia.",
    serv_rooms: "Gela Erosoak",
    serv_rooms_desc: "Atseden hartu gure gela guztiz hornituetan.",
    serv_restaurant: "Jatetxea",
    serv_restaurant_desc: "Gozatu bertako gastronomia onenaz eta erromes menuaz.",
    serv_garden: "Lorategiak eta Terraza",
    serv_garden_desc: "Erlaxatu gure berdeguneetan etapa luze baten ondoren.",
    serv_bike: "Bizikleta Lagunak",
    serv_bike_desc: "Zure bizikleta gordetzeko eta konpontzeko leku segurua.",
    rest_subtitle: "Gastronomia",
    rest_title: "Lurreko Zaporeak",
    rest_desc: "Gure jatetxeak plater tradizionalen aukeraketa bat eskaintzen du ukitu moderno batekin, sasoiko bertako produktuak erabiliz.",
    btn_menu: "Menua Ikusi",
    footer_desc: "Zure etxea Donejakue Bidean.",
    footer_links: "Estekak",
    footer_contact: "Harremana",
    footer_social: "Jarrai gaitzazu"
  },
  ca: {
    nav_home: "Inici",
    nav_hotel: "L'Hotel",
    nav_albergue: "Alberg",
    nav_services: "Serveis",
    nav_restaurant: "Restaurant",
    nav_contact: "Contacte",
    btn_book: "Reservar",
    hero_title: "Benvingut a Hotel Albergue Jakue",
    hero_subtitle: "El teu descans al Camí de Sant Jaume. Natura, confort i gastronomia.",
    btn_explore: "Explorar Hotel",
    btn_albergue: "Veure Alberg",
    about_subtitle: "La Nostra Història",
    about_title: "Més que un allotjament",
    about_desc: "Situat a Puente la Reina, encreuament de camins, l'Hotel Albergue Jakue és el lloc perfecte per a pelegrins i turistes. Oferim un ambient familiar envoltat de natura.",
    feat_garden: "Amplis Jardins",
    feat_parking: "Pàrquing Privat",
    feat_wifi: "WiFi Gratuït",
    services_title: "Els Nostres Serveis",
    services_desc: "Tot el que necessites per a una estada inoblidable.",
    serv_rooms: "Habitacions Confortables",
    serv_rooms_desc: "Descansa a les nostres habitacions totalment equipades.",
    serv_restaurant: "Restaurant",
    serv_restaurant_desc: "Gaudeix de la millor gastronomia local i menús del pelegrí.",
    serv_garden: "Jardins i Terrassa",
    serv_garden_desc: "Relaxa't a les nostres zones verdes després d'una llarga etapa.",
    serv_bike: "Amic de la Bicicleta",
    serv_bike_desc: "Espai segur per guardar i reparar la teva bicicleta.",
    rest_subtitle: "Gastronomia",
    rest_title: "Sabors de la Terra",
    rest_desc: "El nostre restaurant ofereix una selecció de plats tradicionals amb un toc modern, utilitzant productes locals de temporada.",
    btn_menu: "Veure Menú",
    footer_desc: "La teva llar al Camí de Sant Jaume.",
    footer_links: "Enllaços",
    footer_contact: "Contacte",
    footer_social: "Segueix-nos"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_hotel: "الفندق",
    nav_albergue: "نزل",
    nav_services: "خدمات",
    nav_restaurant: "مطعم",
    nav_contact: "اتصل",
    btn_book: "احجز الآن",
    hero_title: "مرحبًا بكم في فندق نزل جاكوي",
    hero_subtitle: "راحتك في طريق سانت جيمس. الطبيعة والراحة وفن الطهي.",
    btn_explore: "استكشف الفندق",
    btn_albergue: "عرض النزل",
    about_subtitle: "تاريخنا",
    about_title: "أكثر من مجرد إقامة",
    about_desc: "يقع فندق نزل جاكوي في بوينتي لا رينا، وهو مفترق طرق، وهو المكان المثالي للحجاج والسياح. نحن نقدم جوًا عائليًا محاطًا بالطبيعة.",
    feat_garden: "حدائق واسعة",
    feat_parking: "موقف سيارات خاص",
    feat_wifi: "واي فاي مجاني",
    services_title: "خدماتنا",
    services_desc: "كل ما تحتاجه لإقامة لا تُنسى.",
    serv_rooms: "غرف مريحة",
    serv_rooms_desc: "استرح في غرفنا المجهزة بالكامل.",
    serv_restaurant: "مطعم",
    serv_restaurant_desc: "استمتع بأفضل المأكولات المحلية وقوائم الحجاج.",
    serv_garden: "حدائق وتراس",
    serv_garden_desc: "استرخ في مناطقنا الخضراء بعد مرحلة طويلة.",
    serv_bike: "صديق للدراجات",
    serv_bike_desc: "مساحة آمنة لتخزين وإصلاح دراجتك.",
    rest_subtitle: "فن الطهي",
    rest_title: "نكهات الأرض",
    rest_desc: "يقدم مطعمنا مجموعة مختارة من الأطباق التقليدية بلمسة عصرية، باستخدام المنتجات المحلية الموسمية.",
    btn_menu: "عرض القائمة",
    footer_desc: "منزلك في طريق سانت جيمس.",
    footer_links: "روابط",
    footer_contact: "اتصل",
    footer_social: "تابعنا"
  }
};

// State
let currentLang = 'es';

// DOM Elements
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.querySelector('.nav-menu');

// Functions
function setLanguage(lang) {
  currentLang = lang;
  currentLangSpan.textContent = lang.toUpperCase();

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Handle RTL for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }

  // Close dropdown
  langDropdown.classList.remove('active');
}

// Event Listeners
langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
    langDropdown.classList.remove('active');
  }
});

langDropdown.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    const lang = li.getAttribute('data-lang');
    setLanguage(lang);
  });
});

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Initialize
setLanguage('es');
