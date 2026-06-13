import { useEffect, useRef, useState } from "react";
import headImage from "../assets/chibi-parts/head.png";
import leftForearmImage from "../assets/chibi-parts/left-forearm.png";
import leftShinImage from "../assets/chibi-parts/left-shin.png";
import leftThighImage from "../assets/chibi-parts/left-thigh.png";
import leftUpperArmImage from "../assets/chibi-parts/left-upper-arm.png";
import rightForearmSleeveImage from "../assets/chibi-parts/right-forearm-sleeve.png";
import rightHandImage from "../assets/chibi-parts/right-hand.png";
import rightShinImage from "../assets/chibi-parts/right-shin.png";
import rightThighImage from "../assets/chibi-parts/right-thigh.png";
import rightUpperArmImage from "../assets/chibi-parts/right-upper-arm.png";
import torsoImage from "../assets/chibi-parts/torso.png";

export default function ChibiMascot() {
  const [waveState, setWaveState] = useState<"idle" | "hover" | "click">("idle");
  const resetTimerRef = useRef<number>();

  useEffect(() => () => {
    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
  }, []);

  const playClickWave = () => {
    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    setWaveState("click");
    resetTimerRef.current = window.setTimeout(() => setWaveState("idle"), 1750);
  };

  return (
    <div className="chibi-mascot-layer is-page-position">
      <button
        type="button"
        className={`chibi-mascot is-idle wave-${waveState}`}
        onMouseEnter={() => {
          if (waveState !== "click") setWaveState("hover");
        }}
        onMouseLeave={() => {
          if (waveState !== "click") setWaveState("idle");
        }}
        onClick={playClickWave}
        aria-label="向田丰打招呼"
      >
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
                  <img src={rightForearmSleeveImage} alt="" draggable="false" />
                  <span className="chibi-part chibi-part-hand-right">
                    <img src={rightHandImage} alt="" draggable="false" />
                  </span>
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
      </button>
    </div>
  );
}
