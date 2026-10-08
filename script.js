/* ==========================================================
   CONFIG — edit only this block
   ========================================================== */

// YouTube video IDs (the part after "watch?v=" in the link).
// Leave "" to show only the photo.
const VIDEOS = {
  cristian: "8MnCliPXBrk",
  camelia: "8MnCliPXBrk",
  claudiu: "8MnCliPXBrk"
};

// Contact details. Leave "" to hide that item.
const CONTACT = {
  whatsapp: "",   // e.g. "+34 600 000 000"
  email: "",      // e.g. "hola@ejemplo.com"
  instagram: "",  // e.g. "cocktailexperience" or full link
  website: ""     // e.g. "www.ejemplo.com"
};

/* ==========================================================
   TRANSLATIONS
   ========================================================== */

const I18N = {
  es: {
    "meta.description": "Cocktail Experience: un equipo que conecta a los turistas con bares y restaurantes especiales del sur de Tenerife, con ofertas de cócteles y contenido de foto y vídeo.",
    "hero.title": "Experiencias auténticas en el sur de Tenerife",
    "hero.subtitle": "Colaboración · Calidad · Compromiso",
    "hero.button": "Conócenos ↓",
    "about.title": "Sobre nosotros",
    "about.p1": "Además de más de 20 años de experiencia en ventas y en el trato directo con las personas, compartimos el aprecio por Tenerife y el deseo de contribuir al desarrollo del turismo y a mejorar las experiencias que se ofrecen a quienes la visitan.",
    "about.p2": "Nos unimos en torno a una idea sencilla: hay muchos lugares bonitos, personas apasionadas y experiencias que merecen ser descubiertas por más turistas. Queremos contribuir a darlos a conocer y crear un vínculo más estrecho entre los visitantes y los locales que consideramos verdaderamente especiales.",
    "about.p3": "Creemos que el turismo de calidad se construye con buenas experiencias, un buen servicio y personas que ponen pasión en lo que hacen.",
    "team.title": "El equipo",
    "team.cristian.role": "Relación con los turistas",
    "team.cristian.desc": "Más de 9 años como gerente en una empresa de cosmética premium, con una sólida experiencia en venta directa, cara a cara. Crea conexión rápidamente, entiende lo que busca su interlocutor y convierte una simple conversación en una relación de confianza. Se encarga de la relación con los turistas y de la forma en que descubren las experiencias que promocionamos.",
    "team.camelia.role": "Relación con los locales",
    "team.camelia.desc": "Más de 20 años en hostelería internacional y venta directa, en España, Austria y otros países. Su experiencia en hostelería y en la coordinación de eventos le permite entender desde dentro los retos de un local y construir relaciones basadas en la confianza. Se encarga de la relación con los locales colaboradores y del desarrollo de las colaboraciones.",
    "team.claudiu.role": "Marketing y vídeo",
    "team.claudiu.desc": "Especialista en vídeo marketing y marketing digital, activo desde 2007 y especializado en vídeo desde 2018. Licenciado en Marketing y Gestión, con formación en cine y producción audiovisual. Cofundador de Facetiplace y Skool Romania, donde imparte 13 cursos de vídeo marketing a una comunidad de más de 33.000 seguidores. Coordina el marketing online y crea el contenido de foto y vídeo de los locales colaboradores.",
    "offer.title": "Qué ofrecemos",
    "offer.p1": "Unimos nuestra experiencia en el trato con las personas, las ventas, la hostelería y el marketing para acercar a los turistas a los locales que merecen ser descubiertos.",
    "offer.p2": "Nos ocupamos de todo el proceso: seleccionamos los locales con los que colaboramos, construimos la relación con ellos, creamos para los turistas paquetes promocionales de cócteles y ofertas atractivas, y promocionamos las experiencias con contenido de foto y vídeo grabado en el propio local.",
    "offer.tourists.title": "Para los turistas",
    "offer.tourists.text": "Nuevos lugares, experiencias agradables y ofertas fáciles de descubrir.",
    "offer.venues.title": "Para los locales",
    "offer.venues.text": "Visibilidad, promoción y acceso a un nuevo público.",
    "offer.closing": "Creamos colaboraciones en las que todos ganan, y nuestras recomendaciones siempre parten de una experiencia real.",
    "closing.line": "Experiencias diferentes. Una sola dirección.",
    "closing.text": "No solo promocionamos locales. Ayudamos a las personas a descubrir lugares donde sentirse bien, crear recuerdos bonitos y tener un motivo para volver.",
    "contact.title": "Contacto",
    "contact.email": "Correo electrónico",
    "contact.website": "Sitio web"
  },
  en: {
    "meta.description": "Cocktail Experience: a team connecting visitors with special bars and restaurants in South Tenerife, through cocktail offers and photo and video content.",
    "hero.title": "Authentic experiences in South Tenerife",
    "hero.subtitle": "Collaboration · Quality · Commitment",
    "hero.button": "Meet us ↓",
    "about.title": "About us",
    "about.p1": "Beyond more than 20 years of experience in sales and working directly with people, we share a deep appreciation for Tenerife and a desire to contribute to the growth of tourism and to improve the experiences offered to those who visit the island.",
    "about.p2": "We came together around a simple idea: there are many beautiful places, passionate people and experiences that deserve to be discovered by more visitors. We want to help promote them and build a stronger connection between visitors and the venues we consider truly special.",
    "about.p3": "We believe quality tourism is built on good experiences, good service and people who put passion into what they do.",
    "team.title": "Our team",
    "team.cristian.role": "Tourist relations",
    "team.cristian.desc": "Over 9 years as a manager at a premium cosmetics company, with solid experience in direct, face-to-face sales. Builds rapport quickly, understands what the other person is looking for and turns a simple conversation into a relationship of trust. Looks after the relationship with tourists and the way they discover the experiences we promote.",
    "team.camelia.role": "Venue relations",
    "team.camelia.desc": "Over 20 years in international hospitality and direct sales, in Spain, Austria and other countries. A background in hospitality and event coordination brings an insider's understanding of the challenges a venue faces and the ability to build relationships based on trust. Manages the relationship with partner venues and the development of our collaborations.",
    "team.claudiu.role": "Marketing & Video",
    "team.claudiu.desc": "Video marketing and digital marketing specialist, active since 2007 and focused on video since 2018. Degree in Marketing and Management, with training in film and video production. Co-founder of Facetiplace and Skool Romania, teaching 13 video marketing courses to a community of over 33,000 followers. Coordinates online marketing and creates the photo and video content for our partner venues.",
    "offer.title": "What we offer",
    "offer.p1": "We combine our experience in working with people, sales, hospitality and marketing to bring together tourists and the venues that deserve to be discovered.",
    "offer.p2": "We handle the entire process: we select the venues we work with, build the relationship with them, create promotional cocktail packages and attractive offers for tourists, and promote the experiences with photo and video content shot on location.",
    "offer.tourists.title": "For tourists",
    "offer.tourists.text": "New places, enjoyable experiences and offers that are easy to discover.",
    "offer.venues.title": "For venues",
    "offer.venues.text": "Visibility, promotion and access to a new audience.",
    "offer.closing": "We build partnerships where everyone wins, and our recommendations always start from a real experience.",
    "closing.line": "Different experiences. One direction.",
    "closing.text": "We don't just promote venues. We help people discover places where they feel good, create beautiful memories and have a reason to come back.",
    "contact.title": "Contact",
    "contact.email": "Email",
    "contact.website": "Website"
  }
};

/* ==========================================================
   LANGUAGE TOGGLE
   ========================================================== */

function setLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });
  document.querySelector('meta[name="description"]').setAttribute("content", dict["meta.description"]);
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active);
  });
}

document.querySelectorAll(".lang-toggle button").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage("es");

/* ==========================================================
   TEAM: photo / initials / YouTube video in the round frame
   ========================================================== */

const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function embedUrl(id, muted) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: muted ? "1" : "0",
    controls: "0",
    loop: "1",
    playlist: id,
    playsinline: "1",
    modestbranding: "1",
    rel: "0"
  });
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${params}`;
}

document.querySelectorAll(".member").forEach(member => {
  const avatar = member.querySelector(".avatar");
  const img = avatar.querySelector("img");
  const videoId = (VIDEOS[member.dataset.member] || "").trim();
  let state = "photo"; // "photo" | "muted" | "sound"

  // Photo missing -> keep the gold initials placeholder
  const markMissing = () => img.classList.add("missing");
  img.addEventListener("error", markMissing);
  if (img.complete && img.naturalWidth === 0) markMissing();

  if (!videoId) {
    avatar.removeAttribute("role");
    avatar.removeAttribute("tabindex");
    avatar.style.cursor = "default";
    return;
  }

  function play(muted) {
    stop();
    const frame = document.createElement("iframe");
    frame.src = embedUrl(videoId, muted);
    frame.title = img.alt;
    frame.allow = "autoplay; encrypted-media; picture-in-picture";
    frame.setAttribute("tabindex", "-1");
    avatar.appendChild(frame);
    state = muted ? "muted" : "sound";
  }

  function stop() {
    const frame = avatar.querySelector("iframe");
    if (frame) frame.remove();
    state = "photo";
  }

  if (canHover) {
    avatar.addEventListener("mouseenter", () => { if (state === "photo") play(true); });
    avatar.addEventListener("mouseleave", stop);
  }

  // Click / tap: play with sound; click or tap again: back to photo
  avatar.addEventListener("click", () => {
    if (state === "sound") stop();
    else play(false);
  });
  avatar.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      avatar.click();
    }
  });
});

/* ==========================================================
   CONTACT
   ========================================================== */

function contactLink(type, value) {
  switch (type) {
    case "whatsapp":
      return { href: "https://wa.me/" + value.replace(/\D/g, ""), text: value };
    case "email":
      return { href: "mailto:" + value, text: value };
    case "instagram": {
      if (/^https?:\/\//i.test(value)) {
        const handle = value.replace(/\/+$/, "").split("/").pop();
        return { href: value, text: "@" + handle };
      }
      const handle = value.replace(/^@/, "");
      return { href: "https://www.instagram.com/" + handle + "/", text: "@" + handle };
    }
    case "website": {
      const href = /^https?:\/\//i.test(value) ? value : "https://" + value;
      return { href, text: value.replace(/^https?:\/\//i, "").replace(/\/+$/, "") };
    }
  }
}

let visibleContacts = 0;
document.querySelectorAll("[data-contact]").forEach(li => {
  const value = (CONTACT[li.dataset.contact] || "").trim();
  if (!value) return;
  const { href, text } = contactLink(li.dataset.contact, value);
  const a = li.querySelector("a");
  a.href = href;
  li.querySelector(".contact-value").textContent = text;
  li.hidden = false;
  visibleContacts++;
});
// No contact details filled in yet -> hide the whole Contact section
if (!visibleContacts) document.getElementById("contact").hidden = true;
