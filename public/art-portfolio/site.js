(() => {
  const heroArtwork = { id: "hero-scroll", category: "工笔", name: "工笔长卷 · 人物线描", src: "art/hero-scroll.png", thumb: "art/hero-scroll.png", width: 2172, height: 724 };
  const artworks = Array.isArray(window.ARTWORKS) ? [...window.ARTWORKS, heroArtwork] : [heroArtwork];
  const featuredLeadIds = ["hero-scroll", "gongbi-63", "gongbi-30", "gongbi-50", "ink-01"];
  const featuredRightIds = ["ink-02", "ink-03"];
  const featuredIds = [
    ...featuredLeadIds, ...featuredRightIds, "gongbi-34", "gongbi-35", "gongbi-36", "gongbi-37",
    "gongbi-61", "gongbi-60", "gongbi-55", "gongbi-52",
    "gongbi-46", "gongbi-47", "gongbi-15",
    "watercolor-03", "watercolor-04"
  ];
  const featured = featuredIds.map(id => artworks.find(art => art.id === id)).filter(Boolean);
  const techniqueDescriptions = {
    "工笔": "工笔，以线为骨，以薄彩为魂。不急于落笔成画，待一层色彩干透，再染下一层。于反复晕染之间，藏草木风月的温柔。不求酣畅挥洒，而在精微处见天地，于沉静细腻里，捕捉万物含蓄清雅的意境。",
    "水彩": "水为媒介，色随水走。水彩以通透的颜料融于清水，在纸间自然晕化，虚实相生。不必处处填满，留白即是诗意，灵动轻盈，捕捉刹那光影。",
    "素描": "以黑白塑万象，用线条与明暗剥离浮华。褪去色彩，单靠光影层次，触摸万物最本真的形体与质感。",
    "彩铅": "细笔叠色，温润入微。以铅笔色粉层层叠加，细腻柔和，可精微刻画，亦可铺叙温柔氛围。"
  };
  const processGroups = [
    { number: "01", draft: "gongbi-17", color: "gongbi-19" },
    { number: "02", draft: "gongbi-24", color: "gongbi-21" },
    { number: "03", draft: "gongbi-25", color: "gongbi-23" },
    { number: "04", draft: "gongbi-26", color: "gongbi-27" }
  ];
  const processLookup = new Map(processGroups.flatMap(group => [
    [group.draft, { group, stage: "线稿" }],
    [group.color, { group, stage: "设色稿" }]
  ]));
  const processSequence = processGroups.flatMap(group => [group.draft, group.color].map(id => artworks.find(art => art.id === id))).filter(Boolean);
  const galleryArtworks = artworks.filter(art => art.id !== "hero-scroll" && !processLookup.has(art.id));
  const allSequence = [heroArtwork, ...galleryArtworks, ...processSequence];
  const gallery = document.getElementById("gallery");
  const viewer = document.getElementById("viewer");
  const viewerImage = document.getElementById("viewer-image");
  const viewerImageWrap = viewerImage.closest(".viewer-image-wrap");
  const viewerZoomButton = document.getElementById("viewer-zoom");
  const detailImageSources = {
    "gongbi-50": "art/gongbi-50-original.jpeg",
    "gongbi-60": "art/gongbi-60-original.jpeg"
  };
  const closeButton = document.getElementById("viewer-close");
  const filterButtons = [...document.querySelectorAll(".filter")];
  let currentFilter = "精选";
  let activeItems = featured;
  let currentArt = null;
  let viewerSequence = [];
  let openedFromGallery = false;
  let returnFocus = null;
  let galleryResizeTimer = null;

  const heroCarousel = document.getElementById("hero-carousel");
  const heroSlides = [...heroCarousel.querySelectorAll(".hero-slide")];
  const heroTitles = ["工笔长卷 · 人物线描", "工笔 · 50", "工笔 · 16", "钢笔创意 · 01"];
  const heroDots = document.getElementById("hero-dots");
  const heroPlayToggle = document.getElementById("hero-play-toggle");
  let heroIndex = 0;
  let heroTimer = null;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let heroPaused = prefersReducedMotion;
  let heroPointerStart = null;

  const heroStage = document.getElementById("hero-stage");
  const heroVideo = document.getElementById("hero-video");
  const floralLeft = document.getElementById("hero-floral-left");
  const floralRight = document.getElementById("hero-floral-right");
  const heroDoor = document.getElementById("hero-door");
  let floralTargetX = 0;
  let floralTargetY = 0;
  let floralCurrentX = 0;
  let floralCurrentY = 0;
  let floralFrame = 0;

  function animateFlorals() {
    floralCurrentX += (floralTargetX - floralCurrentX) * 0.09;
    floralCurrentY += (floralTargetY - floralCurrentY) * 0.09;
    floralLeft.style.transform = `translate3d(${floralCurrentX * 25}px, ${floralCurrentY * 17}px, 0)`;
    floralRight.style.transform = `translate3d(${floralCurrentX * -35}px, ${floralCurrentY * 24}px, 0)`;
    if (Math.abs(floralTargetX - floralCurrentX) + Math.abs(floralTargetY - floralCurrentY) > 0.003) {
      floralFrame = window.requestAnimationFrame(animateFlorals);
    } else {
      floralFrame = 0;
    }
  }

  function scheduleFlorals() {
    if (!floralFrame) floralFrame = window.requestAnimationFrame(animateFlorals);
  }

  function positionHeroDoor() {
    const stage = heroStage.getBoundingClientRect();
    const videoWidth = 1920;
    const videoHeight = 1080;
    const door = { x: 792, y: 190, width: 324, height: 560 };
    const scale = Math.max(stage.width / videoWidth, stage.height / videoHeight);
    const cropX = (videoWidth * scale - stage.width) / 2;
    const cropY = (videoHeight * scale - stage.height) / 2;
    heroDoor.style.left = `${door.x * scale - cropX}px`;
    heroDoor.style.top = `${door.y * scale - cropY}px`;
    heroDoor.style.width = `${door.width * scale}px`;
    heroDoor.style.height = `${door.height * scale}px`;
    heroDoor.style.setProperty("--door-bg-width", `${videoWidth * scale}px`);
    heroDoor.style.setProperty("--door-bg-height", `${videoHeight * scale}px`);
    heroDoor.style.setProperty("--door-bg-x", `${-door.x * scale}px`);
    heroDoor.style.setProperty("--door-bg-y", `${-door.y * scale}px`);
    heroDoor.classList.add("is-ready");
  }

  positionHeroDoor();
  window.addEventListener("resize", positionHeroDoor);

  const interiorFlorals = document.getElementById("interior-florals");
  const interiorLeft = document.getElementById("interior-floral-left");
  const interiorRight = document.getElementById("interior-floral-right");
  const worksSection = document.getElementById("works");
  const processSection = document.getElementById("process");
  let interiorVisible = false;
  let interiorTargetX = 0;
  let interiorTargetY = 0;
  let interiorCurrentX = 0;
  let interiorCurrentY = 0;
  let interiorFrame = 0;
  let interiorScrollFrame = 0;

  function updateInteriorFlorals() {
    interiorScrollFrame = 0;
    const midpoint = window.innerHeight / 2;
    const worksBounds = worksSection.getBoundingClientRect();
    const processBounds = processSection.getBoundingClientRect();
    const inWorks = worksBounds.top <= midpoint && worksBounds.bottom > midpoint;
    const inProcess = processBounds.top <= midpoint && processBounds.bottom > midpoint;
    interiorVisible = inWorks || inProcess;
    interiorFlorals.classList.toggle("is-visible", interiorVisible);
    interiorFlorals.classList.toggle("is-process", inProcess);
    if (!interiorVisible) {
      interiorTargetX = 0;
      interiorTargetY = 0;
    }
  }

  function animateInteriorFlorals() {
    interiorCurrentX += (interiorTargetX - interiorCurrentX) * 0.07;
    interiorCurrentY += (interiorTargetY - interiorCurrentY) * 0.07;
    interiorLeft.style.transform = `translate3d(${interiorCurrentX * 20}px, ${interiorCurrentY * 18}px, 0)`;
    interiorRight.style.transform = `translate3d(${interiorCurrentX * -24}px, ${interiorCurrentY * 22}px, 0)`;
    if (Math.abs(interiorTargetX - interiorCurrentX) + Math.abs(interiorTargetY - interiorCurrentY) > 0.003) {
      interiorFrame = window.requestAnimationFrame(animateInteriorFlorals);
    } else {
      interiorFrame = 0;
    }
  }

  updateInteriorFlorals();
  window.addEventListener("scroll", () => {
    if (!interiorScrollFrame) interiorScrollFrame = window.requestAnimationFrame(updateInteriorFlorals);
  }, { passive: true });
  window.addEventListener("resize", updateInteriorFlorals);
  if (!prefersReducedMotion) {
    window.addEventListener("pointermove", event => {
      if (!interiorVisible || event.pointerType === "touch") return;
      interiorTargetX = (event.clientX / window.innerWidth - 0.5) * 2;
      interiorTargetY = (event.clientY / window.innerHeight - 0.5) * 2;
      if (!interiorFrame) interiorFrame = window.requestAnimationFrame(animateInteriorFlorals);
    });
  }

  if (!prefersReducedMotion) {
    heroStage.addEventListener("pointermove", event => {
      if (event.pointerType === "touch") return;
      const bounds = heroStage.getBoundingClientRect();
      floralTargetX = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
      floralTargetY = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
      scheduleFlorals();
    });
    heroStage.addEventListener("pointerleave", () => {
      floralTargetX = 0;
      floralTargetY = 0;
      scheduleFlorals();
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !document.hidden) heroVideo.play().catch(() => {});
        else heroVideo.pause();
      }, { threshold: 0.05 }).observe(heroStage);
    }
  } else {
    heroVideo.pause();
  }

  function showHeroSlide(index) {
    heroIndex = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, position) => {
      const active = position === heroIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    [...heroDots.children].forEach((dot, position) => {
      const active = position === heroIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
    document.getElementById("hero-caption-title").textContent = heroTitles[heroIndex];
    document.getElementById("hero-slide-count").textContent = `${String(heroIndex + 1).padStart(2, "0")} / ${String(heroSlides.length).padStart(2, "0")}`;
  }

  function startHeroTimer() {
    window.clearInterval(heroTimer);
    heroTimer = null;
    if (!heroPaused && !document.hidden) heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1), 1500);
  }

  function moveHero(direction) {
    showHeroSlide(heroIndex + direction);
    startHeroTimer();
  }

  heroTitles.forEach((title, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot";
    dot.setAttribute("aria-label", `显示第 ${index + 1} 张：${title}`);
    dot.addEventListener("click", () => { showHeroSlide(index); startHeroTimer(); });
    heroDots.appendChild(dot);
  });
  document.getElementById("hero-prev").addEventListener("click", () => moveHero(-1));
  document.getElementById("hero-next").addEventListener("click", () => moveHero(1));
  heroPlayToggle.addEventListener("click", () => {
    heroPaused = !heroPaused;
    heroPlayToggle.textContent = heroPaused ? "播放" : "暂停";
    heroPlayToggle.setAttribute("aria-label", heroPaused ? "播放轮播" : "暂停轮播");
    startHeroTimer();
  });
  heroCarousel.addEventListener("pointerdown", event => {
    heroPointerStart = { x: event.clientX, y: event.clientY };
  });
  heroCarousel.addEventListener("pointerup", event => {
    if (!heroPointerStart) return;
    const deltaX = event.clientX - heroPointerStart.x;
    const deltaY = event.clientY - heroPointerStart.y;
    heroPointerStart = null;
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) moveHero(deltaX < 0 ? 1 : -1);
  });
  heroCarousel.addEventListener("pointercancel", () => { heroPointerStart = null; });
  document.addEventListener("visibilitychange", startHeroTimer);
  showHeroSlide(0);
  heroPlayToggle.textContent = heroPaused ? "播放" : "暂停";
  heroPlayToggle.setAttribute("aria-label", heroPaused ? "播放轮播" : "暂停轮播");
  startHeroTimer();

  let doorOpening = false;
  heroDoor.addEventListener("click", () => {
    if (doorOpening) return;
    doorOpening = true;
    showHeroSlide(0);
    window.clearInterval(heroTimer);
    heroVideo.pause();
    if (!prefersReducedMotion) heroStage.classList.add("is-door-opening");
    window.setTimeout(() => {
      document.querySelector(".hero-art").scrollIntoView({ behavior: "instant", block: "start" });
      heroCarousel.focus({ preventScroll: true });
      startHeroTimer();
    }, prefersReducedMotion ? 0 : 650);
    window.setTimeout(() => {
      heroStage.classList.remove("is-door-opening");
      doorOpening = false;
    }, prefersReducedMotion ? 0 : 900);
  });

  function label(art) {
    const process = processLookup.get(art.id);
    if (process) return `${art.name} · ${process.stage}`;
    const numberedName = art.name.match(/^(.+?)\s*\((\d+)\)$/);
    return numberedName ? `${numberedName[1]} · ${numberedName[2].padStart(2, "0")}` : art.name;
  }

  function renderGallery(filter) {
    currentFilter = filter;
    activeItems = filter === "精选" ? featured : filter === "全部" ? galleryArtworks : galleryArtworks.filter(art => art.category === filter);
    filterButtons.forEach(button => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.getElementById("gallery-heading").textContent = filter === "精选" ? "精选作品" : filter === "全部" ? "全部作品" : `${filter}作品`;
    document.getElementById("gallery-count").textContent = `${activeItems.length} 件`;
    const techniqueDescription = document.getElementById("technique-description");
    const techniqueCopy = techniqueDescriptions[filter];
    techniqueDescription.hidden = !techniqueCopy;
    document.getElementById("technique-description-name").textContent = techniqueCopy ? `${filter} / 技法介绍` : "";
    document.getElementById("technique-description-copy").textContent = techniqueCopy || "";
    const fragment = document.createDocumentFragment();
    const featuredCards = [];
    gallery.classList.toggle("gallery-featured", filter === "精选");
    activeItems.forEach(art => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "work-card";
      button.setAttribute("aria-label", `查看${label(art)}`);
      const media = document.createElement("span");
      media.className = "work-media";
      const img = document.createElement("img");
      img.src = art.thumb;
      img.alt = label(art);
      img.loading = "lazy";
      img.decoding = "async";
      img.width = art.width;
      img.height = art.height;
      media.appendChild(img);
      const caption = document.createElement("span");
      caption.className = "work-caption";
      const title = document.createElement("span");
      title.textContent = label(art);
      caption.appendChild(title);
      button.append(media, caption);
      button.addEventListener("click", () => openArtwork(art, button));
      if (filter !== "精选") fragment.appendChild(button);
      else featuredCards.push({ art, button });
    });
    if (filter === "精选") {
      const columnCount = window.innerWidth <= 420 ? 1 : window.innerWidth <= 700 ? 2 : 3;
      const gap = window.innerWidth <= 700 ? 15 : window.innerWidth <= 950 ? 18 : 34;
      const cardWidth = (gallery.clientWidth - gap * (columnCount - 1)) / columnCount;
      const columns = Array.from({ length: columnCount }, () => {
        const column = document.createElement("div");
        column.className = "featured-column";
        fragment.appendChild(column);
        return column;
      });
      const heights = Array(columnCount).fill(0);
      const place = (entry, index) => {
        columns[index].appendChild(entry.button);
        heights[index] += Math.min(660, cardWidth * entry.art.height / entry.art.width) + (columnCount === 1 ? 70 : 85);
      };
      if (columnCount > 1) {
        featuredRightIds.forEach(id => {
          const entry = featuredCards.find(item => item.art.id === id);
          if (entry) place(entry, columnCount - 1);
        });
      }
      featuredCards.forEach(entry => {
        if (columnCount > 1 && featuredRightIds.includes(entry.art.id)) return;
        const shortest = heights.indexOf(Math.min(...heights));
        place(entry, shortest);
      });
    }
    gallery.replaceChildren(fragment);
  }

  function renderProcess() {
    const section = document.getElementById("process-gallery");
    const fragment = document.createDocumentFragment();
    processGroups.forEach(group => {
      const article = document.createElement("article");
      article.className = "process-card";
      const heading = document.createElement("div");
      heading.className = "process-heading";
      const title = document.createElement("span");
      title.textContent = "工笔画绘制过程";
      const number = document.createElement("span");
      number.textContent = `${group.number} / 04`;
      heading.append(title, number);
      const pair = document.createElement("div");
      pair.className = "process-pair";
      [group.draft, group.color].forEach(id => {
        const art = artworks.find(item => item.id === id);
        if (!art) return;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "process-image-button";
        button.setAttribute("aria-label", `查看${label(art)}`);
        const img = document.createElement("img");
        img.src = art.thumb;
        img.alt = label(art);
        img.loading = "lazy";
        img.decoding = "async";
        img.width = art.width;
        img.height = art.height;
        const caption = document.createElement("span");
        caption.textContent = label(art);
        button.append(img, caption);
        button.addEventListener("click", () => openArtwork(art, button, processSequence));
        pair.appendChild(button);
      });
      article.append(heading, pair);
      fragment.appendChild(article);
    });
    section.replaceChildren(fragment);
  }

  function openArtwork(art, button, sequence = activeItems) {
    returnFocus = button;
    viewerSequence = sequence;
    openedFromGallery = true;
    history.pushState(null, "", `#work=${art.id}`);
    showViewer(art);
  }

  function showViewer(art) {
    currentArt = art;
    setViewerZoom(false);
    viewerImage.src = detailImageSources[art.id] || art.src;
    viewerImage.alt = label(art);
    document.getElementById("viewer-category").textContent = art.category;
    document.getElementById("viewer-title").textContent = label(art);
    const sequence = sequenceFor(art);
    document.getElementById("viewer-counter").textContent = `${String(sequence.findIndex(item => item.id === art.id) + 1).padStart(2, "0")} / ${String(sequence.length).padStart(2, "0")}`;
    viewer.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton.focus({ preventScroll: true });
  }

  function hideViewer() {
    setViewerZoom(false);
    viewer.hidden = true;
    viewerImage.removeAttribute("src");
    document.body.style.overflow = "";
    currentArt = null;
    viewerSequence = [];
    if (returnFocus && document.contains(returnFocus)) returnFocus.focus({ preventScroll: true });
  }

  function syncFromHash() {
    const match = location.hash.match(/^#work=([a-z0-9-]+)$/);
    const art = match && artworks.find(item => item.id === match[1]);
    if (art) showViewer(art);
    else hideViewer();
  }

  function closeViewer() {
    if (openedFromGallery) {
      openedFromGallery = false;
      history.back();
    } else {
      history.replaceState(null, "", "#works");
      syncFromHash();
    }
  }

  function moveViewer(direction) {
    if (!currentArt) return;
    const sequence = sequenceFor(currentArt);
    const index = sequence.findIndex(item => item.id === currentArt.id);
    const next = sequence[(index + direction + sequence.length) % sequence.length];
    history.replaceState(null, "", `#work=${next.id}`);
    showViewer(next);
  }

  function setViewerZoom(zoomed) {
    viewerImageWrap.classList.toggle("is-zoomed", zoomed);
    viewerZoomButton.setAttribute("aria-pressed", String(zoomed));
    viewerZoomButton.textContent = zoomed ? "查看全图" : "放大细节";
    if (zoomed) {
      window.requestAnimationFrame(() => {
        viewerImageWrap.scrollLeft = (viewerImageWrap.scrollWidth - viewerImageWrap.clientWidth) / 2;
        viewerImageWrap.scrollTop = (viewerImageWrap.scrollHeight - viewerImageWrap.clientHeight) / 2;
      });
    } else {
      viewerImageWrap.scrollLeft = 0;
      viewerImageWrap.scrollTop = 0;
    }
  }

  function sequenceFor(art) {
    if (viewerSequence.some(item => item.id === art.id)) return viewerSequence;
    if (processLookup.has(art.id)) return processSequence;
    if (activeItems.some(item => item.id === art.id)) return activeItems;
    return allSequence;
  }

  filterButtons.forEach(button => button.addEventListener("click", () => renderGallery(button.dataset.filter)));
  closeButton.addEventListener("click", closeViewer);
  document.querySelector("[data-close]").addEventListener("click", closeViewer);
  document.getElementById("viewer-prev").addEventListener("click", () => moveViewer(-1));
  document.getElementById("viewer-next").addEventListener("click", () => moveViewer(1));
  viewerZoomButton.addEventListener("click", () => setViewerZoom(!viewerImageWrap.classList.contains("is-zoomed")));
  viewerImage.addEventListener("click", () => setViewerZoom(!viewerImageWrap.classList.contains("is-zoomed")));
  document.addEventListener("keydown", event => {
    if (viewer.hidden) return;
    if (event.key === "Escape") closeViewer();
    if (event.key === "ArrowLeft") moveViewer(-1);
    if (event.key === "ArrowRight") moveViewer(1);
  });
  document.getElementById("copy-link").addEventListener("click", async event => {
    if (!currentArt) return;
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(location.href);
      button.textContent = "已复制";
      window.setTimeout(() => { button.textContent = "复制作品链接"; }, 1800);
    } catch {
      button.textContent = "请复制浏览器地址";
      window.setTimeout(() => { button.textContent = "复制作品链接"; }, 2400);
    }
  });
  window.addEventListener("hashchange", () => { openedFromGallery = false; syncFromHash(); });
  window.addEventListener("popstate", () => { openedFromGallery = false; syncFromHash(); });
  window.addEventListener("resize", () => {
    if (currentFilter !== "精选") return;
    window.clearTimeout(galleryResizeTimer);
    galleryResizeTimer = window.setTimeout(() => renderGallery("精选"), 180);
  });
  renderGallery("精选");
  renderProcess();
  syncFromHash();
})();
