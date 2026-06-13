import { useEffect, useState, type CSSProperties } from "react";
import headImage from "../assets/chibi-parts/head.png";
import leftForearmImage from "../assets/chibi-parts/left-forearm.png";
import leftShinImage from "../assets/chibi-parts/left-shin.png";
import leftThighImage from "../assets/chibi-parts/left-thigh.png";
import leftUpperArmImage from "../assets/chibi-parts/left-upper-arm.png";
import rightForearmImage from "../assets/chibi-parts/right-forearm.png";
import rightShinImage from "../assets/chibi-parts/right-shin.png";
import rightThighImage from "../assets/chibi-parts/right-thigh.png";
import rightUpperArmImage from "../assets/chibi-parts/right-upper-arm.png";
import torsoImage from "../assets/chibi-parts/torso.png";

export default function ChibiMascot() {
  const [isHome, setIsHome] = useState(true);
  const [heroAnchor, setHeroAnchor] = useState({ left: 0, top: 0 });

  useEffect(() => {
    let frame = 0;

    const updatePosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const hero = document.getElementById("home");
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        const nextIsHome = rect.bottom > window.innerHeight * 0.55;
        setIsHome(nextIsHome);

        if (nextIsHome) {
          const name = hero.querySelector<HTMLElement>(".hero-copy h1 span");
          if (name) {
            const nameRect = name.getBoundingClientRect();
            const scale = window.innerWidth <= 640 ? 0.54 : window.innerWidth <= 900 ? 0.64 : 0.78;
            const mascotHeight = 230 * scale;
            setHeroAnchor({
              left: Math.min(window.innerWidth - 126 * scale - 10, nameRect.right + 22),
              top: nameRect.top + nameRect.height / 2 - mascotHeight / 2,
            });
          }
        }
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div
      className={`chibi-mascot-layer ${isHome ? "is-home-position" : "is-page-position"}`}
      style={isHome ? {
        "--chibi-home-left": `${heroAnchor.left}px`,
        "--chibi-home-top": `${heroAnchor.top}px`,
      } as CSSProperties : undefined}
      aria-hidden="true"
    >
      <div className="chibi-mascot is-idle">
        <span className="chibi-character-rig">
          <span className="chibi-body-layer">
            <span className="chibi-skeleton">
              <span className="chibi-part chibi-part-leg-left">
                <img src={leftThighImage} alt="" draggable="false" />
                <span className="chibi-part chibi-part-shin-left">
                  <img src={leftShinImage} alt="" draggable="false" />
                </span>
              </span>
              <span className="chibi-part chibi-part-leg-right">
                <img src={rightThighImage} alt="" draggable="false" />
                <span className="chibi-part chibi-part-shin-right">
                  <img src={rightShinImage} alt="" draggable="false" />
                </span>
              </span>
              <span className="chibi-part chibi-part-arm-left">
                <img src={leftUpperArmImage} alt="" draggable="false" />
                <span className="chibi-part chibi-part-forearm-left">
                  <img src={leftForearmImage} alt="" draggable="false" />
                </span>
              </span>
              <span className="chibi-part chibi-part-arm-right">
                <img src={rightUpperArmImage} alt="" draggable="false" />
                <span className="chibi-part chibi-part-forearm-right">
                  <img src={rightForearmImage} alt="" draggable="false" />
                </span>
              </span>
              <span className="chibi-part chibi-part-torso">
                <img src={torsoImage} alt="" draggable="false" />
              </span>
              <span className="chibi-part chibi-part-head">
                <img src={headImage} alt="" draggable="false" />
              </span>
            </span>
          </span>
        </span>
        <span className="chibi-shadow" />
      </div>
    </div>
  );
}
