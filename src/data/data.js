import heroimg from "../assets/consolaps4.png";

import hightlightimg from "../assets/ps5joystick.png";
import sneakershoe from "../assets/xboxjoystick.png";

import clip from "../assets/video/clip.mp4";
import clip2 from "../assets/video/clip2.mp4";
import clip3 from "../assets/video/clip3.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/pubg.png";
import psale2 from "../assets/war2.png";
import psale3 from "../assets/ps3.png";

import product1 from "../assets/crisis3.png";
import product2 from "../assets/desktopgamergreen.png";
import product3 from "../assets/sillaredsquare.png";
import product4 from "../assets/dyinglight.png";
import product5 from "../assets/gamerdesktop.png";
import product6 from "../assets/heroes.png";
import product7 from "../assets/sillagamerroja.png";
import product8 from "../assets/pcgamer.png";
import product9 from "../assets/pcgamerwhite.png";
import product10 from "../assets/maincraft.png";
import product11 from "../assets/xbox360.png";
import product12 from "../assets/nintendoswich.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Bienvenido a tu tienda favorita",
  subtitle: "Lo mejor en Gaming lo tenes acá",
  img: heroimg,
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip2 },
    { imgsrc: vcover3, clip: clip3 },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Clasicos vendidos",
  items: [
    {
      id: "0p0x1",
      title: "Darksiders",
      text: "Acción y Aventura",
      rating: "3.9",
      btn: "Compra Ahora",
      img: psale2,
      price: "1500",
      color: "from-red-300 to-orange-600",
      shadow: "shadow-2xl shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "PACK el iniciado PlayerUnknown's Battlegrounds",
      text: "Disparos",
      rating: "4.5",
      btn: "Compra Ahora",
      img: psale1,
      price: "3000",
      color: "from-yellow-500 to-teal-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0p0x3",
      title: "PS3",
      text: "Consola",
      rating: "5+",
      btn: "Compra Ahora",
      img: psale3,
      price: "50000",
      color: "from-black to-gray-500",
      shadow: "shadow-lg shadow-white",
    },
  ],
};

const highlight = {
  heading: "Lo nuevo!!",
  title: "PS5",
  text: "El control inalámbrico DualSense para PS5 ofrece respuesta háptica inmersiva2, gatillos adaptativos dinámicos y un micrófono integrado, todo en un diseño icónico",
  btn: "Quieres saber más?",
  url: "https://www.playstation.com/es-ar/accessories/dualsense-wireless-controller/?emcid=pa-co-421907&gclid=CjwKCAiAy_CcBhBeEiwAcoMRHLEE2hbLW1gG5az4fVRIEYZXLbhelT3wkTuzgenHD8r9yC-e34X3yRoCm04QAvD_BwE&gclsrc=aw.ds",
  img: hightlightimg,
};

const sneaker = {
  heading: "Lo que sigue de moda",
  title: "Xbox Serie x",
  text: "Mantén el objetivo con el nuevo control de dirección híbrido, agarre texturizado en los gatillos, botones y funda trasera.",
  btn: "Quieres saber más?",
  url: "https://www.xbox.com/es-AR/accessories/controllers/xbox-wireless-controller",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Vendidos con mejor clasificación",
  items: [
    {
      id: "0M0x1",
      title: "Silla gamer Thunder3",
      text: "La mejor forma de prepararte para largas horas en la pc",
      rating: "5+",
      btn: "Compra Ahora",
      img: product7,
      price: "15000",
      color: "from-red-600 to-black/75",
      shadow: "shadow-lg shadow-red-600",
    },
    {
      id: "0M0x2",
      title: "Game Desk3000",
      text: "Mucho más que un hermoso escritorio, gamer, como vos!",
      rating: "5+",
      btn: "Compra Ahora",
      img: product2,
      price: "50000",
      color: "from-black to-emerald-600",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Silla Game RedSquare",
      text: "Ergonómica, Fachera, lo que necesitabas ya está aquí!",
      rating: "5+",
      btn: "Compra Ahora",
      img: product3,
      price: "35000",
      color: "from-red-400 to-red-600",
      shadow: "shadow-lg shadow-red-600",
    },
    {
      id: "0M0x4",
      title: "Dying Light",
      text: "Zombie, Acción, Terror",
      rating: "5+",
      btn: "Compra Ahora",
      img: product4,
      price: "1500",
      color: "from-yellow-400 to-orange-600",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x5",
      title: "Escritorio ProDragon",
      text: "El escritorio gamer que te faltaba para ser todo un profesional",
      rating: "5+",
      btn: "Compra Ahora",
      img: product5,
      price: "75000",
      color: "from-gray-800 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-600",
    },
    {
      id: "0M0x6",
      title: "For Honor",
      text: "Acción, Estrategía, Lucha",
      rating: "5+",
      btn: "Compra Ahora",
      img: product6,
      price: "4000",
      color: "from-stone-800 to-teal-600",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x7",
      title: "Crisis 3",
      text: "Acción, Disparos",
      rating: "5+",
      btn: "Compra Ahora",
      img: product1,
      price: "2500",
      color: "from-yellow-800 to-green-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x8",
      title: "PC gamer Ryzen7",
      text: "Ryzen 7, Ti3060...",
      rating: "5+",
      btn: "Compra Ahora",
      img: product9,
      price: "150000",
      color: "from-[#935550] to-withe-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Minecraft",
      text: "Construcción, Etrategía, Aventura",
      rating: "5+",
      btn: "Compra Ahora",
      img: product10,
      price: "1500",
      color: "from-lime-500 to-withe-700",
      shadow: "shadow-lg shadow-emerald-500",
    },
    {
      id: "0M0x10",
      title: "Nintendo Switch",
      text: "Consola",
      rating: "5+",
      btn: "Compra Ahora",
      img: product12,
      price: "200000",
      color: "from-green-600 to-teal-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x11",
      title: "Xbox 360",
      text: "Consola",
      rating: "5+",
      btn: "Compra Ahora",
      img: product11,
      price: "100000",
      color: "from-slate-600 to-black",
      shadow: "shadow-lg shadow-white",
    },
    {
      id: "0M0x12",
      title: "PC gamer Pro-T3000",
      text: "Intel I-11...",
      rating: "5+",
      btn: "Compra Ahora",
      img: product8,
      price: "250000",
      color: "from-sky-400 to-blue-700",
      shadow: "shadow-lg shadow-cyan-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Jayson Tatum Debuts",
      text: "Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Bro’s Nike Zoom Freak 4",
      text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Nike Air Max Plus",
      text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Air Jordan Retro High OG",
      text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
      img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
      time: "7 Months",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "Sneaker News",
      btn: "Read More"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Months",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Puma Announces Breanna",
      text: "For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      time: "25 Days",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Nike Air Force Orange Color",
      text: "From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few notches, opting for a simple colorway helmed primarily by black and Laser Orange.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Hello Kitty and Adidas",
      text: "The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perforated mesh construction of the tongue while Royal trim and forefoot Swooshes provide additional intrigue to the darkened palette.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "Tendencia?"},{title: "Necesitas Ayuda?"},{title: "Compañia"} ],
  links: [
    [
      {link: "Noticias"},
      {link: "Los mejores regalos"},
      {link: "Inversores"},
      {link: "Tendecias gaming"},
      {link: "Proximamente"},
    ],
    [
      {link: "Estados de comparas"},
      {link: "Envios"},
      {link: "Opcioines de pagos"},
      {link: "Tarjeta de REGALOS? "},
      {link: "Contactanos"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Quienes somos?"},
      {link: "Promociones"},
      {link: "Tiendas oficiales"},
      {link: "Registrate"},
      {link: "StoreNews"},
      {link: "Que opinas de nosotros?"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };