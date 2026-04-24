const profile = window.MASTER_PROFILE;

const setText = (id, value) => {
  document.getElementById(id).textContent = value;
};

const setHref = (id, value) => {
  const element = document.getElementById(id);
  element.href = value;
  element.target = "_blank";
  element.rel = "noopener noreferrer";
};

document.title = `${profile.masterName} | Online Booking`;

document.getElementById("hero-image").src = profile.heroImage;
setText("master-name", profile.masterName);
setText("city", `${profile.area}, ${profile.city}`);
setText("languages", profile.languages);
setText("tagline", profile.tagline);
setText("currency-label", `Prices in ${profile.currency}`);
setText("address", profile.address);

setHref("booking-link", profile.bookingUrl);
setHref("portfolio-link", profile.portfolioUrl);
setHref("telegram-link", profile.telegramUrl);
setHref("viber-link", profile.viberUrl);
setHref("whatsapp-link", profile.whatsappUrl);
setHref("instagram-link", profile.instagramUrl);
setHref("maps-link", profile.mapsUrl);
setHref("map-click-link", profile.mapsUrl);

document.getElementById("map-frame").src = profile.mapEmbedUrl;

const serviceList = document.getElementById("service-list");
profile.services.forEach((service) => {
  const item = document.createElement("article");
  item.className = "service-item";
  item.innerHTML = `
    <div>
      <h3>${service.name}</h3>
      <p>${service.time}</p>
    </div>
    <strong>${service.price}</strong>
  `;
  serviceList.appendChild(item);
});

const demoVideo = document.getElementById("demo-video");
const demoPlaceholder = document.getElementById("demo-placeholder");
if (profile.demoVideo) {
  demoVideo.src = profile.demoVideo;
  if (profile.demoPoster) {
    demoVideo.poster = profile.demoPoster;
  }
  demoPlaceholder.hidden = true;
} else {
  demoVideo.hidden = true;
  document.getElementById("demo-video-wrap").classList.add("is-empty");
}

const demoSteps = document.getElementById("demo-steps");
profile.demoSteps.forEach((step, index) => {
  const item = document.createElement("article");
  item.className = "demo-step";
  const image = step.image
    ? `<img src="${step.image}" alt="${step.title}" />`
    : `<div class="demo-step__mock">${index + 1}</div>`;
  item.innerHTML = `
    ${image}
    <div>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    </div>
  `;
  demoSteps.appendChild(item);
});

if (window.lucide) {
  window.lucide.createIcons();
}
