const profile = window.MASTER_PROFILE;
const { copy, setHref } = window.LandingI18n;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const textAll = (selector, value) => {
  $$(selector).forEach((element) => {
    element.textContent = value;
  });
};

const hrefAll = (selector, value, external = true) => {
  $$(selector).forEach((element) => {
    element.href = value;
    if (external) {
      element.target = "_blank";
      element.rel = "noopener noreferrer";
    }
  });
};

const icon = (name) => `<i data-lucide="${name}"></i>`;

document.title = copy.title;
$('meta[name="description"]').setAttribute("content", copy.metaDescription);

textAll("[data-product-name]", profile.productName);
textAll("[data-discuss-label]", copy.discussCustom);
textAll("[data-hero-badge]", copy.hero.badge);
textAll("[data-hero-title]", copy.hero.title);
textAll("[data-hero-text]", copy.hero.text);
textAll("[data-hero-primary]", copy.hero.primaryCta);
textAll("[data-hero-secondary]", copy.hero.secondaryCta);
textAll("[data-mockup-phone-title]", copy.mockup.phoneTitle);
textAll("[data-mockup-landing-label]", copy.mockup.landingLabel);
textAll("[data-mockup-landing-cta]", copy.mockup.landingCta);
textAll("[data-mockup-map]", copy.mockup.map);
textAll("[data-section-client-benefits]", copy.sectionTitles.clientBenefits);
textAll("[data-section-workflow]", copy.sectionTitles.workflow);
textAll("[data-workflow-note]", copy.workflowNote);
textAll("[data-video-title]", copy.videoDemo.title);
textAll("[data-video-text]", copy.videoDemo.text);
textAll("[data-video-fallback]", copy.videoDemo.fallback);
textAll("[data-section-owner-benefits]", copy.sectionTitles.ownerBenefits);
textAll("[data-section-use-cases]", copy.sectionTitles.useCases);
textAll("[data-use-cases-note]", copy.useCasesNote);
textAll("[data-showcase-badge]", copy.nicheShowcase.badge);
textAll("[data-showcase-title]", copy.nicheShowcase.title);
textAll("[data-showcase-text]", copy.nicheShowcase.text);
textAll("[data-demo-title]", copy.demoCase.title);
textAll("[data-demo-badge]", copy.demoCase.badge);
textAll("[data-demo-name]", copy.demoCase.name);
textAll("[data-demo-intro]", copy.demoCase.intro);
textAll("[data-demo-open-page-cta]", copy.demoCase.openPageCta);
textAll("[data-demo-book-cta]", copy.demoCase.bookCta);
textAll("[data-demo-services-title]", copy.demoCase.servicesTitle);
textAll("[data-demo-reviews-title]", copy.demoCase.reviewsTitle);
textAll("[data-demo-location-title]", copy.demoCase.locationTitle);
textAll("[data-demo-review]", copy.demoCase.review);
textAll("[data-demo-location]", copy.demoCase.location);
textAll("[data-demo-checklist-title]", copy.demoCase.checklistTitle);
textAll("[data-demo-callout-title]", copy.demoCase.calloutTitle);
textAll("[data-demo-callout-text]", copy.demoCase.calloutText);
textAll("[data-section-business-features]", copy.sectionTitles.businessFeatures);
textAll("[data-pricing-title]", copy.pricingBlock.title);
textAll("[data-pricing-text]", copy.pricingBlock.text);
textAll("[data-faq-title]", copy.faqBlock.title);
textAll("[data-cta-title]", copy.cta.title);
textAll("[data-cta-text]", copy.cta.text);
textAll("[data-cta-discuss]", copy.cta.discuss);
textAll("[data-cta-watch]", copy.cta.watch);
textAll("[data-footer-subtitle]", copy.footer.subtitle);
textAll("[data-footer-telegram]", copy.footer.contacts.telegram);
textAll("[data-footer-location]", copy.footer.contacts.location);
textAll("[data-footer-copyright]", copy.footer.copyright);

copy.faqBlock.items.forEach((item, index) => {
  textAll(`[data-faq-question="${index}"]`, item.question);
  textAll(`[data-faq-answer="${index}"]`, item.answer);
});

Object.entries(copy.nav).forEach(([key, value]) => {
  textAll(`[data-nav="${key}"]`, value);
});

hrefAll("[data-booking-link]", profile.bookingUrl);
hrefAll("[data-contact-link]", profile.contactUrl || profile.telegramUrl);
hrefAll("[data-telegram-link]", profile.telegramUrl);
hrefAll("[data-instagram-link]", profile.instagramUrl);
hrefAll("[data-whatsapp-link]", profile.whatsappUrl);
setHref("creator-link", profile.creatorUrl);

const initEmail = () => {
  const emailLink = $("[data-email-link]");
  const emailTextContainer = $("[data-email-text]");
  const emailTextLink = $("[data-email-text-link]");

  const parts = ["dun4ev44", "gmail.com"];
  const email = parts.join("@");

  if (emailTextContainer) {
    emailTextContainer.textContent = email;
  }

  const openMail = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  if (emailLink) emailLink.addEventListener("click", openMail);
  if (emailTextLink) emailTextLink.addEventListener("click", openMail);
};

initEmail();

const trustRow = $("[data-trust-row]");
copy.hero.trust.forEach((item, index) => {
  const span = document.createElement("span");
  const icons = ["globe-2", "bell", "clock", "message-circle"];
  span.innerHTML = `${icon(icons[index] || "check")} ${item}`;
  trustRow.appendChild(span);
});

const phoneFlow = $("[data-phone-flow]");
copy.mockup.flow.forEach((item, index) => {
  const step = document.createElement("div");
  step.className = "phone-step";
  step.innerHTML = `
    <span>${index + 1}</span>
    <strong>${item}</strong>
    <small>${index === 2 ? "10:00  12:00  14:00" : `${copy.mockup.stepLabel} ${index + 1} / 4`}</small>
  `;
  phoneFlow.appendChild(step);
});

const previewServices = $("[data-preview-services]");
copy.demoCase.services.slice(0, 3).forEach((service) => {
  const item = document.createElement("div");
  item.innerHTML = `<strong>${service.name}</strong><span>${service.price}</span>`;
  previewServices.appendChild(item);
});

const renderCards = (selector, items, modifier = "") => {
  const root = $(selector);
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = `info-card ${modifier}`.trim();
    card.innerHTML = `
      <div class="info-card__icon">${icon(item.icon || "check")}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
    root.appendChild(card);
  });
};

renderCards("[data-client-benefits]", copy.clientBenefits);
renderCards("[data-owner-benefits]", copy.ownerBenefits);

const workflow = $("[data-workflow]");
copy.workflowSteps.forEach((step, index) => {
  const item = document.createElement("div");
  item.className = "step-flow__item";
  item.innerHTML = `<span>${index + 1}</span><p>${step}</p>`;
  workflow.appendChild(item);
});

const demoVideo = $("[data-demo-video]");
if (demoVideo) {
  if (profile.demoVideo) {
    demoVideo.src = profile.demoVideo;
  }
  if (profile.demoPoster) {
    demoVideo.poster = profile.demoPoster;
  }
}

const useCases = $("[data-use-cases]");
copy.useCases.forEach((item) => {
  const chip = document.createElement("span");
  chip.textContent = item;
  useCases.appendChild(chip);
});

const showcaseImage = $("[data-showcase-image]");
if (showcaseImage) {
  showcaseImage.src = profile.nicheShowcaseImage;
  showcaseImage.alt = copy.nicheShowcase.imageAlt;
}

const showcaseLinks = $("[data-showcase-links]");
copy.nicheShowcase.demos.forEach((demo) => {
  const link = document.createElement("a");
  link.href = demo.href;
  link.className = demo.status === "ready" ? "demo-link is-ready" : "demo-link is-soon";
  link.innerHTML = `
    <span>${demo.title}</span>
    <small>${demo.status === "ready" ? copy.nicheShowcase.cta : copy.nicheShowcase.soon}</small>
  `;
  showcaseLinks.appendChild(link);
});

const portfolioStrip = $("[data-portfolio-strip]");
if (portfolioStrip) {
  profile.demoImages.forEach((image, index) => {
    const item = document.createElement("div");
    item.style.backgroundImage = `url("${image}")`;
    item.setAttribute("aria-label", `Portfolio ${index + 1}`);
    portfolioStrip.appendChild(item);
  });
}

const demoServices = $("[data-demo-services]");
if (demoServices) {
  copy.demoCase.services.forEach((service) => {
    const row = document.createElement("p");
    row.innerHTML = `<span>${service.name}</span><strong>${service.price}</strong>`;
    demoServices.appendChild(row);
  });
}

const checklist = $("[data-demo-checklist]");
if (checklist) {
  copy.demoCase.checklist.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${icon("check-circle-2")} ${item}`;
    checklist.appendChild(li);
  });
}

const businessFeatures = $("[data-business-features]");
copy.featureGroups.forEach((group) => {
  const card = document.createElement("article");
  card.className = "feature-group-card";
  card.innerHTML = `
    <div class="feature-group-card__head">
      <span>${icon(group.icon || "box")}</span>
      <div>
        <h3>${group.title}</h3>
        <p>${group.text}</p>
      </div>
    </div>
    <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
  businessFeatures.appendChild(card);
});

const footerColumns = $("[data-footer-columns]");
copy.footer.columns.forEach((column) => {
  const block = document.createElement("div");
  block.innerHTML = `
    <h3>${column.title}</h3>
    ${column.links.map((link) => `<a href="#top">${link}</a>`).join("")}
  `;
  footerColumns.appendChild(block);
});

$$('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") {
      return;
    }
    const target = document.querySelector(href);
    if (!target) {
      return;
    }
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (window.lucide) {
  window.lucide.createIcons();
}
