import FlyingPosters from "./FlyingPosters";

const campusImages = Array.from(
  { length: 11 },
  (_, index) => `/media/experience/campus-${String(index + 1).padStart(2, "0")}.webp`,
);

const armyImages = Array.from(
  { length: 11 },
  (_, index) => `/media/experience/army-${String(index + 1).padStart(2, "0")}.webp`,
);

export default function ExperienceCarousel() {
  return (
    <div className="dual-experience">
      <article className="experience-column campus-column">
        <div className="experience-column-head">
          <span>01 / CAMPUS</span>
          <h3>校园经历</h3>
          <p>竞赛、科研与团队管理，持续把想法转化为可交付的项目成果。</p>
        </div>
        <div className="flying-poster-stage">
          <FlyingPosters
            items={campusImages}
            planeWidth={500}
            planeHeight={520}
            distortion={2.4}
            scrollEase={0.055}
            cameraFov={42}
            cameraZ={18}
            autoScrollSpeed={1.8}
            aria-label="校园经历飞行海报画廊，可滚轮或拖动浏览"
          />
          <span className="poster-instruction">AUTO DOWN · HOVER TO SLOW</span>
        </div>
      </article>

      <article className="experience-column army-column">
        <div className="experience-column-head">
          <span>02 / SERVICE</span>
          <h3>军旅生涯</h3>
          <p>以杭州亚运会保障和部队经历为主，记录纪律、协作与高压执行。</p>
        </div>
        <div className="flying-poster-stage">
          <FlyingPosters
            items={armyImages}
            planeWidth={500}
            planeHeight={520}
            distortion={3.1}
            scrollEase={0.05}
            cameraFov={42}
            cameraZ={18}
            autoScrollSpeed={1.56}
            aria-label="军旅生涯飞行海报画廊，可滚轮或拖动浏览"
          />
          <span className="poster-instruction">AUTO DOWN · HOVER TO SLOW</span>
        </div>
      </article>
    </div>
  );
}
