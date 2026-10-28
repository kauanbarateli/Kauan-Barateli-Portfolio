(() => {
  document.body.classList.remove("no-js");
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  const toggle = document.querySelector(".motion-toggle");
  let optedOut = false;
  try {
    optedOut = localStorage.getItem("kb-motion-paused") === "true";
  } catch {
    /* Browsing remains available without storage. */
  }
  let paused = media.matches || optedOut;
  let activeAnimation;
  const header = document.querySelector(".site-header");
  const stage = document.querySelector(".hero-stage");
  const statement = document.querySelector("[data-words]");
  const words = statement ? [...statement.querySelectorAll(".word")] : [];
  const updateMotion = () => {
    document.body.classList.toggle("motion-paused", paused);
    toggle?.setAttribute("aria-pressed", String(paused));
    toggle?.setAttribute(
      "aria-label",
      paused ? "Ativar movimento" : "Pausar movimento",
    );
    if (toggle) toggle.title = paused ? "Ativar movimento" : "Pausar movimento";
    if (toggle && media.matches) {
      toggle.disabled = true;
      toggle.title = "Movimento reduzido pela preferência do sistema";
      toggle.setAttribute("aria-label", toggle.title);
    } else if (toggle) toggle.disabled = false;
    activeAnimation?.cancel();
    if (paused) {
      stage?.style.removeProperty("--p");
      statement?.removeAttribute("data-lit");
    }
  };
  updateMotion();
  toggle?.addEventListener("click", () => {
    paused = !paused;
    optedOut = paused;
    try {
      localStorage.setItem("kb-motion-paused", String(paused));
    } catch {
      /* Optional preference. */
    }
    updateMotion();
    renderScroll();
  });
  media.addEventListener("change", (e) => {
    paused = e.matches || optedOut;
    updateMotion();
    renderScroll();
  });

  // Old page decides: a paused visitor gets an instant page change.
  window.addEventListener("pageswap", (event) => {
    if (paused) event.viewTransition?.skipTransition();
  });

  // Scroll-linked moments. Default content is visible, no scroll interception.
  const clamp = (value) => Math.min(1, Math.max(0, value));
  let pending = false;
  function renderScroll() {
    pending = false;
    header?.classList.toggle("is-scrolled", window.scrollY > 4);
    if (paused) return;
    // Hero: the stage opens to full width and the windows settle flat.
    if (stage && window.innerWidth >= 701) {
      const progress = clamp(window.scrollY / (window.innerHeight * 0.55));
      stage.style.setProperty("--p", progress.toFixed(3));
    }
    // Statement: words light up in reading order as it crosses the viewport.
    if (statement) {
      statement.dataset.lit = "";
      const bounds = statement.getBoundingClientRect();
      const start = window.innerHeight * 0.9;
      const progress = clamp(
        (start - bounds.top) / (bounds.height + window.innerHeight * 0.35),
      );
      const lit = Math.round(progress * words.length);
      words.forEach((word, i) => word.classList.toggle("is-lit", i < lit));
    }
  }
  const onScroll = () => {
    if (!pending) {
      pending = true;
      requestAnimationFrame(renderScroll);
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth < 701) stage?.style.removeProperty("--p");
      renderScroll();
    },
    { passive: true },
  );
  renderScroll();

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
    if (!paused && image.animate) {
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
