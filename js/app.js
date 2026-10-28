(() => {
  document.body.classList.remove("no-js");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeAnimation;

  // The header gets its divider once the page scrolls beneath it.
  const header = document.querySelector(".site-header");
  let pending = false;
  const updateHeader = () => {
    pending = false;
    header?.classList.toggle("is-scrolled", window.scrollY > 4);
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(updateHeader);
      }
    },
    { passive: true },
  );
  updateHeader();

  const updatePreview = (preview, device) => {
    const image = preview.querySelector(".screen-image");
    const name = preview.dataset[device];
    if (!image || !name) return;
    preview.classList.toggle("is-mobile", device === "mobile");
    preview.dataset.device = device;
    preview
      .querySelectorAll("[data-device]")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.device === device),
        ),
      );
    image.src = `/assets/visuals/${name}.webp`;
    image.alt = `Interface de ${preview.dataset.name} em ${device === "mobile" ? "celular" : "desktop"}`;
    preview.querySelector(".screen-scroll").scrollTop = 0;
    const full = document.querySelector(".full-capture");
    if (full) full.href = image.src;
    if (!reducedMotion.matches && image.animate) {
      activeAnimation?.cancel();
      activeAnimation = image.animate(
        [
          { opacity: 0.65, transform: "translateY(5px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 240, easing: "cubic-bezier(.16,1,.3,1)" },
      );
    }
  };
  document.querySelectorAll("[data-preview]").forEach((preview) => {
    preview
      .querySelectorAll("[data-device]")
      .forEach((button) =>
        button.addEventListener("click", () =>
          updatePreview(preview, button.dataset.device),
        ),
      );
    if (window.innerWidth < 701) updatePreview(preview, "mobile");
  });

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const gallery = document.querySelector(".case-gallery [data-preview]");
  function revealTab(tab) {
    if (!tab) return;
    const scroller = tab.closest('[role="tablist"]');
    const bounds = scroller.getBoundingClientRect();
    const item = tab.getBoundingClientRect();
    const inset = 10;
    if (item.left < bounds.left + inset) {
      scroller.scrollLeft += item.left - bounds.left - inset;
    } else if (item.right > bounds.right - inset) {
      scroller.scrollLeft += item.right - bounds.right + inset;
    }
  }
  window.addEventListener(
    "resize",
    () =>
      revealTab(
        tabs.find((tab) => tab.getAttribute("aria-selected") === "true"),
      ),
    { passive: true },
  );
  function selectTab(tab) {
    if (!gallery) return;
    tabs.forEach((item) => {
      item.setAttribute("aria-selected", String(item === tab));
      item.tabIndex = item === tab ? 0 : -1;
    });
    gallery.dataset.desktop = tab.dataset.frame;
    gallery.dataset.mobile = tab.dataset.mobile;
    gallery.querySelector(".preview-status").textContent = tab.dataset.caption;
    document
      .querySelector('[role="tabpanel"]')
      .setAttribute("aria-labelledby", tab.id);
    updatePreview(gallery, gallery.dataset.device || "desktop");
    revealTab(tab);
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft")
        next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        tabs[next].focus({ preventScroll: true });
        selectTab(tabs[next]);
      }
    });
  });
})();
