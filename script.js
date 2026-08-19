// ================================================================
// OH PARTY! — CONFIGURACIÓN RÁPIDA
// Reemplaza el número por el WhatsApp real en formato internacional.
// México: 52 + lada + número, SIN "+" ni espacios.
// ================================================================
const OH_PARTY = {
  whatsapp: "529980000000"
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

document.documentElement.classList.add("js-motion");
$("#year").textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Elegant page entrance
requestAnimationFrame(() => {
  requestAnimationFrame(() => document.body.classList.remove("is-loading"));
});

// Sticky header refinement
const header = $(".site-header");
const syncHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

// Scroll reveal system
if (!reducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -7% 0px"
  });

  $$(".reveal, .reveal-stagger").forEach((el) => observer.observe(el));
} else {
  $$(".reveal, .reveal-stagger").forEach((el) => el.classList.add("is-visible"));
}

// Ambient cursor glow — only on precise pointer devices
const finePointer = window.matchMedia("(pointer:fine)").matches;
if (!reducedMotion && finePointer) {
  window.addEventListener("pointermove", (event) => {
    const glow = $(".ambient-glow");
    if (!glow) return;
    glow.style.setProperty("--glow-x", `${event.clientX - 210}px`);
    glow.style.setProperty("--glow-y", `${event.clientY - 210}px`);
  }, { passive: true });
}

// Button light follows pointer
$$(".button, .mobile-cta a").forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const rect = button.getBoundingClientRect();
    button.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    button.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });
});

// Hero depth effect: subtle, restrained
const heroStage = $(".hero-stage");
const ticket = $(".ticket--main");

if (!reducedMotion && finePointer && heroStage && ticket) {
  heroStage.addEventListener("pointermove", (event) => {
    const rect = heroStage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    ticket.style.animationPlayState = "paused";
    ticket.style.transform =
      `rotate(4.5deg) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
  });

  heroStage.addEventListener("pointerleave", () => {
    ticket.style.transform = "";
    ticket.style.animationPlayState = "running";
  });
}

// Very light 3D movement on cards
if (!reducedMotion && finePointer) {
  $$(".mood-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform =
        `translateY(-7px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function openWhatsApp(message) {
  const number = OH_PARTY.whatsapp;

  if (!number || number === "529980000000") {
    $("#cotiza").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    alert("Antes de publicar, reemplaza el número de WhatsApp en script.js.");
    return;
  }

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

$$(".js-whatsapp").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp("¡Hola Oh Party! 👋 Quiero organizar una celebración y me gustaría platicarles mi idea.");
  });
});

$$(".mood-card").forEach((card) => {
  card.addEventListener("click", () => {
    $$(".mood-card").forEach((item) => item.classList.remove("is-selected"));
    card.classList.add("is-selected");

    const select = $('select[name="event"]');
    const mood = card.dataset.mood || "";

    if (mood.startsWith("Cumpleaños")) select.value = "Cumpleaños";
    else if (mood.startsWith("Baby")) select.value = "Baby shower";
    else if (mood.startsWith("Fiesta sorpresa")) select.value = "Fiesta sorpresa";
    else select.value = "Otra celebración";

    $("#cotiza").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });

    setTimeout(() => $('textarea[name="idea"]')?.focus(), reducedMotion ? 0 : 500);
  });
});

$("#quote-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const name = data.get("name")?.trim();
  const type = data.get("event") || "Celebración";
  const date = data.get("date") || "Por definir";
  const guests = data.get("guests") || "Por definir";
  const location = data.get("location")?.trim() || "Por definir";
  const idea = data.get("idea")?.trim() || "Todavía estoy aterrizando la idea.";
  const budget = data.get("budget") || "Prefiero platicarlo";

  const message =
`¡Hola Oh Party! 🎉 Soy ${name}.

Quiero cotizar una celebración:
• Tipo: ${type}
• Fecha: ${date}
• Personas aprox.: ${guests}
• Lugar: ${location}
• Presupuesto: ${budget}

Lo que traigo en mente:
${idea}

¿Me ayudan a darle forma?`;

  openWhatsApp(message);
});


// OhPartyRealPhotos: very subtle depth for real event photography
const ohPartyRealPhotos = $$(".real-shot img");

if (!reducedMotion && finePointer) {
  window.addEventListener("scroll", () => {
    const vh = window.innerHeight;
    ohPartyRealPhotos.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      const p = (rect.top + rect.height / 2 - vh / 2) / vh;
      img.style.objectPosition = `center ${50 + p * 5}%`;
    });
  }, { passive: true });
}
