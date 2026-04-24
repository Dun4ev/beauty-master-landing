const profile = window.MASTER_PROFILE;
const { copy, setText, setHref } = window.LandingI18n;

document.title = copy.title;

document.getElementById("hero-image").src = profile.heroImage;
setText("master-name", profile.masterName);
setText("city", `${profile.area}, ${profile.city}`);
setText("languages", profile.languages);
setText("demo-label", copy.demoLabel);
setText("online-booking-label", copy.onlineBooking);
setText("tagline", copy.tagline);
setText("demo-note", copy.demoNote);
setText("booking-label", copy.bookOnline);
setText("portfolio-label", copy.portfolio);
setText("features-label", copy.botFeatures);
setText("services-title", copy.servicesTitle);
setText("currency-label", copy.pricesIn);
setText("demo-title", copy.demoTitle);
setText("demo-subtitle", copy.demoSubtitle);
setText("demo-video-title", copy.demoVideoTitle);
setText("demo-video-text", copy.demoVideoText);
setText("location-title", copy.locationTitle);
setText("address", profile.address);
setText("maps-label", copy.openMap);
setText("map-fallback-label", copy.mapFallback);
setText("footer-note", copy.footerNote);
setText("creator-link", profile.creatorName);

setHref("booking-link", profile.bookingUrl);
setHref("portfolio-link", profile.portfolioUrl);
setHref("telegram-link", profile.telegramUrl);
setHref("viber-link", profile.viberUrl);
setHref("whatsapp-link", profile.whatsappUrl);
setHref("instagram-link", profile.instagramUrl);
setHref("maps-link", profile.mapsUrl);
setHref("map-click-link", profile.mapsUrl);
setHref("creator-link", profile.creatorUrl);

document.getElementById("map-frame").src = profile.mapEmbedUrl;

const serviceList = document.getElementById("service-list");
copy.services.forEach((service) => {
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
const demoVideoWrap = document.getElementById("demo-video-wrap");
const videoModal = document.getElementById("video-modal");
const videoModalClose = document.getElementById("video-modal-close");
const videoModalBackdrop = document.getElementById("video-modal-backdrop");
if (profile.demoPoster) {
  demoVideoWrap.style.setProperty("--demo-poster", `url("${profile.demoPoster}")`);
  demoVideoWrap.classList.add("has-poster");
}
if (profile.demoVideo) {
  demoVideo.src = profile.demoVideo;
  if (profile.demoPoster) {
    demoVideo.poster = profile.demoPoster;
  }
  demoVideoWrap.classList.add("is-playable");
} else {
  demoVideoWrap.disabled = true;
  demoVideoWrap.classList.add("is-empty");
}

const openVideo = async () => {
  if (!profile.demoVideo) {
    return;
  }
  videoModal.hidden = false;
  document.body.classList.add("has-open-modal");
  try {
    await demoVideo.play();
  } catch (_) {
    // Browsers may block autoplay; controls remain visible for manual playback.
  }
};

const closeVideo = () => {
  demoVideo.pause();
  videoModal.hidden = true;
  document.body.classList.remove("has-open-modal");
};

demoVideoWrap.addEventListener("click", openVideo);
videoModalClose.addEventListener("click", closeVideo);
videoModalBackdrop.addEventListener("click", closeVideo);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !videoModal.hidden) {
    closeVideo();
  }
});

const demoSteps = document.getElementById("demo-steps");
copy.demoSteps.forEach((step, index) => {
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
