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

if (window.lucide) {
  window.lucide.createIcons();
}
