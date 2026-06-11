import { useEffect } from "react";

const GLOW_TARGETS = [
  '[class~="border"]',
  ".glass-card",
  ".glass-panel",
  ".hero-control",
  ".hero-cta",
  ".hero-kicker",
  ".video-frame",
  ".spring-film",
  ".tool-lab",
  ".tool-switcher button",
  ".tool-stage",
  ".instructor-profile",
  ".match-result",
  ".risk-map",
  ".risk-console",
  ".property-filter label",
  ".property-results > button",
  ".ai-answer",
  ".collaborator-card",
  ".experience-column",
  ".wechat-card",
  ".social-card",
  ".posters-container",
].join(",");

type GlowHost = HTMLElement & {
  dataset: DOMStringMap & {
    borderGlow?: string;
    borderGlowPosition?: string;
  };
};

function decorateTarget(target: GlowHost) {
  if (target.dataset.borderGlow || target.matches("input, textarea, select, option")) return;

  const position = window.getComputedStyle(target).position;
  if (position === "static") {
    target.dataset.borderGlowPosition = "static";
    target.style.position = "relative";
  }

  target.dataset.borderGlow = "true";
  target.classList.add("global-border-glow-host");

  const glow = document.createElement("span");
  glow.className = "global-border-glow-edge";
  glow.setAttribute("aria-hidden", "true");
  target.appendChild(glow);
}

export default function GlobalBorderGlow() {
  useEffect(() => {
    let activeTarget: GlowHost | null = null;
    let frame = 0;
    let pointerX = -1;
    let pointerY = -1;

    const decorateAll = (root: ParentNode = document) => {
      root.querySelectorAll<GlowHost>(GLOW_TARGETS).forEach(decorateTarget);
    };

    const clearActive = () => {
      activeTarget?.classList.remove("is-border-glow-active");
      activeTarget = null;
    };

    const updateGlow = () => {
      frame = 0;
      const hovered = document
        .elementFromPoint(pointerX, pointerY)
        ?.closest<GlowHost>(GLOW_TARGETS);

      if (!hovered?.dataset.borderGlow) {
        clearActive();
        return;
      }

      if (hovered !== activeTarget) {
        clearActive();
        activeTarget = hovered;
        activeTarget.classList.add("is-border-glow-active");
      }

      const rect = hovered.getBoundingClientRect();
      const localX = Math.max(0, Math.min(rect.width, pointerX - rect.left));
      const localY = Math.max(0, Math.min(rect.height, pointerY - rect.top));
      const edgeDistance = Math.min(localX, localY, rect.width - localX, rect.height - localY);
      const edgeProximity = Math.max(0, Math.min(1, 1 - edgeDistance / 92));
      const angle =
        (Math.atan2(localY - rect.height / 2, localX - rect.width / 2) * 180) /
          Math.PI +
        90;

      hovered.style.setProperty("--border-glow-x", `${localX}px`);
      hovered.style.setProperty("--border-glow-y", `${localY}px`);
      hovered.style.setProperty("--border-glow-angle", `${angle}deg`);
      hovered.style.setProperty("--border-glow-proximity", edgeProximity.toFixed(3));
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(updateGlow);
    };

    decorateAll();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(GLOW_TARGETS)) decorateTarget(node as GlowHost);
          decorateAll(node);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", clearActive);
    window.addEventListener("blur", clearActive);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", clearActive);
      window.removeEventListener("blur", clearActive);
      if (frame) window.cancelAnimationFrame(frame);

      document.querySelectorAll<GlowHost>('[data-border-glow="true"]').forEach((target) => {
        target.querySelector(":scope > .global-border-glow-edge")?.remove();
        target.classList.remove("global-border-glow-host", "is-border-glow-active");
        target.removeAttribute("data-border-glow");
        if (target.dataset.borderGlowPosition === "static") {
          target.style.removeProperty("position");
          target.removeAttribute("data-border-glow-position");
        }
      });
    };
  }, []);

  return null;
}
