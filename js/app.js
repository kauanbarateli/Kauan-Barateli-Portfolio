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
    if (paused) statement?.removeAttribute("data-lit");
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
    syncScenes();
    renderScroll();
  });
  media.addEventListener("change", (e) => {
    paused = e.matches || optedOut;
    updateMotion();
    syncScenes();
    renderScroll();
  });

  // Old page decides: a paused visitor gets an instant page change.
  window.addEventListener("pageswap", (event) => {
    if (paused) event.viewTransition?.skipTransition();
  });

  // Project panels: on large screens with motion on, each panel pins while the
  // page scrolls through it. Otherwise they stay static pictures of the project.
  const clamp = (value) => Math.min(1, Math.max(0, value));
  const pinQuery = window.matchMedia(
    "(min-width: 901px) and (min-height: 600px)",
  );
  const scenes = [...document.querySelectorAll("[data-scene]")].map((el) => ({
    el,
    kind: el.dataset.scene,
    panel: el.querySelector(".scene-panel"),
    sticky: el.querySelector(".scene-sticky"),
    screens: [...el.querySelectorAll(".device-screen")].map((screen) => ({
      screen,
      image: screen.querySelector("img"),
      distance: 0,
    })),
  }));
  let pinned = false;
  const measureScenes = () =>
    scenes.forEach((scene) =>
      scene.screens.forEach((item) => {
        item.distance = Math.max(
          0,
          item.image.offsetHeight - item.screen.clientHeight,
        );
      }),
    );
  const resetScene = (scene) => {
    ["--open", "--enter", "--w"].forEach((name) =>
      scene.panel.style.removeProperty(name),
    );
    scene.screens.forEach((item) => item.image.style.removeProperty("transform"));
  };
  function syncScenes() {
    const next = scenes.length > 0 && !paused && pinQuery.matches;
    if (next === pinned) return;
    // The page height changes: keep the section being read in view.
    const top = header?.offsetHeight ?? 0;
    const anchor = [...document.querySelectorAll(".scene, #atuacao")].find(
      (el) => el.getBoundingClientRect().bottom > top + 24,
    );
    const before = anchor ? Math.max(top, anchor.getBoundingClientRect().top) : 0;
    pinned = next;
    document.body.classList.toggle("scenes-pinned", pinned);
    if (!pinned) scenes.forEach(resetScene);
    if (anchor)
      window.scrollBy({
        top: anchor.getBoundingClientRect().top - before,
        behavior: "instant",
      });
    measureScenes();
  }
  function renderScenes() {
    if (!pinned) return;
    const top = header?.offsetHeight ?? 0;
    const view = window.innerHeight;
    for (const scene of scenes) {
      const rect = scene.el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > view) continue;
      const progress = clamp(
        (top - rect.top) / (scene.el.offsetHeight - scene.sticky.offsetHeight),
      );
      const style = scene.panel.style;
      if (scene.kind === "scroll") {
        // The panel opens to full width, then the screens scroll top to bottom.
        style.setProperty("--open", clamp(progress / 0.12).toFixed(3));
        const travel = clamp((progress - 0.1) / 0.85);
        scene.screens.forEach((item) => {
          item.image.style.transform = `translate3d(0, ${(-travel * item.distance).toFixed(1)}px, 0)`;
        });
      } else {
        // The screens rise in as the panel arrives, then a wipe reveals the next screen.
        style.setProperty(
          "--enter",
          clamp((view - rect.top) / (view - top)).toFixed(3),
        );
        style.setProperty("--w", clamp((progress - 0.25) / 0.5).toFixed(3));
      }
    }
  }

  let pending = false;
  function renderScroll() {
    pending = false;
    header?.classList.toggle("is-scrolled", window.scrollY > 4);
    if (paused) return;
    renderScenes();
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
      syncScenes();
      measureScenes();
      renderScroll();
    },
    { passive: true },
  );
  scenes.forEach((scene) =>
    scene.screens.forEach((item) =>
      item.image.addEventListener("load", () => {
        measureScenes();
        renderScroll();
      }),
    ),
  );
  syncScenes();
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
