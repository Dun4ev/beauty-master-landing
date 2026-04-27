const profile = window.MASTER_PROFILE;
const { copy, setText, setHref } = window.LandingI18n;

document.title = `${copy.botFeatures} | Beauty Booking`;

setText("feature-back-label", copy.featureBack);
setText("feature-badge-bot", copy.featureBadgeBot);
setText("feature-badge-website", copy.featureBadgeWebsite);
setText("feature-badge-setup", copy.featureBadgeSetup);
setText("feature-hero-title", copy.featureHeroTitle);
setText("feature-hero-text", copy.featureHeroText);
setText("feature-demo-title", copy.featureDemoTitle);
setText("feature-demo-subtitle", copy.featureDemoSubtitle);
setText("feature-demo-video-title", copy.demoVideoTitle);
setText("feature-demo-video-text", copy.demoVideoText);
setText("options-title", copy.upgradeTitle);
setText("options-subtitle", copy.upgradeSubtitle);
setText("package-title", copy.packageTitle);
setText("package-text", copy.packageText);
setText("feature-contact-label", copy.discussCustom);

const demoVideo = document.getElementById("feature-demo-video");
const demoPlaceholder = document.getElementById("feature-demo-placeholder");
const demoVideoWrap = document.getElementById("feature-demo-video-wrap");
const videoModal = document.getElementById("feature-video-modal");
const videoModalClose = document.getElementById("feature-video-modal-close");
const videoModalBackdrop = document.getElementById("feature-video-modal-backdrop");
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

const demoSteps = document.getElementById("feature-demo-steps");
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

const featureGrid = document.getElementById("feature-grid");
copy.featureGroups.forEach((group) => {
  const card = document.createElement("article");
  card.className = "feature-card";
  card.innerHTML = `
    <div>
      <h3>${group.title}</h3>
      <p>${group.text}</p>
    </div>
    <ul>
      ${group.items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
  featureGrid.appendChild(card);
});

setText("feature-footer-note", copy.footerNote);
setText("feature-creator-link", profile.creatorName);
setHref("feature-creator-link", profile.creatorUrl);
setHref("feature-contact-link", profile.creatorUrl);

if (window.lucide) {
  window.lucide.createIcons();
}
