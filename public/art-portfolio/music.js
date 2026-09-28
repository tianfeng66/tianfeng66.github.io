(() => {
  const audio = document.getElementById("background-audio");
  const control = document.getElementById("music-control");
  const icon = document.getElementById("music-control-icon");
  const label = document.getElementById("music-control-label");
  if (!audio || !control || !icon || !label) return;

  const source = audio.getAttribute("src") || audio.querySelector("source")?.getAttribute("src");
  if (!source) return;

  audio.volume = 0.45;
  control.disabled = false;
  let waitingForGesture = false;

  function updateControl() {
    const playing = !audio.paused;
    const action = playing ? "暂停音乐" : "播放音乐";
    icon.textContent = playing ? "Ⅱ" : "▶";
    label.textContent = action;
    control.setAttribute("aria-label", action);
    control.setAttribute("aria-pressed", String(playing));
    control.classList.toggle("is-playing", playing);
  }

  function removeGestureFallback() {
    if (!waitingForGesture) return;
    waitingForGesture = false;
    document.removeEventListener("pointerdown", playOnFirstGesture, true);
    document.removeEventListener("keydown", playOnFirstGesture, true);
  }

  function playOnFirstGesture(event) {
    if (control.contains(event.target)) return;
    void startMusic();
  }

  function addGestureFallback() {
    if (waitingForGesture) return;
    waitingForGesture = true;
    document.addEventListener("pointerdown", playOnFirstGesture, true);
    document.addEventListener("keydown", playOnFirstGesture, true);
  }

  async function startMusic() {
    try {
      await audio.play();
      removeGestureFallback();
    } catch (error) {
      if (error?.name === "NotAllowedError") {
        addGestureFallback();
        return;
      }
      label.textContent = "音乐无法播放";
      control.setAttribute("aria-label", "音乐无法播放");
    }
  }

  control.addEventListener("click", () => {
    if (audio.paused) void startMusic();
    else audio.pause();
  });

  audio.addEventListener("play", updateControl);
  audio.addEventListener("pause", updateControl);
  audio.addEventListener("error", () => {
    removeGestureFallback();
    control.disabled = true;
    label.textContent = "音乐无法播放";
    control.setAttribute("aria-label", "音乐无法播放");
  });
  updateControl();
  void startMusic();
})();
