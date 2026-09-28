(() => {
  const scene = document.getElementById("falling-scene");
  const sections = ["works", "process", "about"].map(id => document.getElementById(id));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pieceCount = window.innerWidth <= 700 ? 12 : 26;
  let scrollFrame = 0;

  if (!reducedMotion) {
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < pieceCount; index += 1) {
      const leaf = index % 3 === 0;
      const piece = document.createElement("img");
      piece.className = "falling-piece";
      piece.src = leaf ? "art/falling-leaf.png" : "art/falling-petal.png";
      piece.alt = "";
      piece.decoding = "async";
      piece.style.setProperty("--piece-left", `${(index * 43 + 11) % 101}vw`);
      piece.style.setProperty("--piece-size", `${leaf ? 45 + (index * 13) % 35 : 48 + (index * 17) % 42}px`);
      piece.style.setProperty("--piece-duration", `${14 + (index * 7) % 13}s`);
      piece.style.setProperty("--piece-delay", `${-((index * 11) % 29)}s`);
      piece.style.setProperty("--piece-drift", `${(index * 19) % 19 - 9}vw`);
      piece.style.setProperty("--piece-turn", `${index % 2 ? 300 + index * 7 : -(270 + index * 9)}deg`);
      piece.style.setProperty("--piece-opacity", leaf ? ".48" : ".56");
      fragment.appendChild(piece);
    }
    scene.appendChild(fragment);
  }

  function updateScene() {
    scrollFrame = 0;
    const center = window.innerHeight / 2;
    const visible = sections.some(section => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= center && bounds.bottom > center;
    });
    scene.classList.toggle("is-visible", visible && !reducedMotion);
  }

  window.addEventListener("scroll", () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScene);
  }, { passive: true });
  window.addEventListener("resize", updateScene);
  updateScene();
})();
