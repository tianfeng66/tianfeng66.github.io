import { useEffect, useRef } from "react";
import * as THREE from "three";
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";

type HyperspeedProps = {
  className?: string;
  effectOptions?: {
    length?: number;
    roadWidth?: number;
    islandWidth?: number;
    lanesPerRoad?: number;
    fov?: number;
    fovSpeedUp?: number;
    speedUp?: number;
    totalSideLightSticks?: number;
    lightPairsPerRoadWay?: number;
    colors?: {
      roadColor?: number;
      islandColor?: number;
      background?: number;
      shoulderLines?: number;
      brokenLines?: number;
      leftCars?: number[];
      rightCars?: number[];
      sticks?: number;
    };
  };
};

type Streak = {
  line: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  z: number;
  x: number;
  side: number;
  speed: number;
  length: number;
  phase: number;
};

type CarStreak = {
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;
  z: number;
  x: number;
  side: number;
  speed: number;
  length: number;
  phase: number;
};

const ROAD_LENGTH = 400;

function roadX(baseX: number, z: number, phase = 0, time = 0) {
  const depth = THREE.MathUtils.clamp((-z + 8) / ROAD_LENGTH, 0, 1);
  const broadCurve = Math.sin(depth * 5.2 + time * 0.16) * (0.2 + depth * 5.2);
  const turbulence = Math.cos(depth * 12.5 + phase + time * 0.32) * depth * 1.15;
  return baseX + broadCurve + turbulence;
}

const defaultColors = {
  roadColor: 0x080808,
  islandColor: 0x0a0a0a,
  background: 0x000000,
  shoulderLines: 0xffffff,
  brokenLines: 0xffffff,
  leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
  rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
  sticks: 0x03b3c3,
};

export default function Hyperspeed({ className = "", effectOptions = {} }: HyperspeedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const roadLength = effectOptions.length ?? 400;
    const roadWidth = effectOptions.roadWidth ?? 10;
    const islandWidth = effectOptions.islandWidth ?? 2;
    const lanesPerRoad = effectOptions.lanesPerRoad ?? 3;
    const colors = { ...defaultColors, ...effectOptions.colors };
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(colors.background);
    scene.fog = new THREE.Fog(colors.background, roadLength * 0.18, roadLength * 0.92);

    const baseFov = effectOptions.fov ?? 90;
    const acceleratedFov = effectOptions.fovSpeedUp ?? 150;
    const camera = new THREE.PerspectiveCamera(baseFov, 1, 0.1, 1000);
    camera.position.set(0, 7.6, 10);
    camera.lookAt(0, -1.2, -88);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(
      new EffectPass(
        camera,
        new BloomEffect({
          intensity: 2.2,
          luminanceThreshold: 0.025,
          luminanceSmoothing: 0.82,
        }),
      ),
    );

    const roadGroup = new THREE.Group();
    const addRoadPlane = (width: number, x: number, color: number) => {
      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(width, roadLength),
        new THREE.MeshBasicMaterial({ color }),
      );
      plane.rotation.x = -Math.PI / 2;
      plane.position.set(x, -1.08, -roadLength / 2 + 10);
      roadGroup.add(plane);
    };
    addRoadPlane(roadWidth, -(roadWidth + islandWidth) / 2, colors.roadColor);
    addRoadPlane(roadWidth, (roadWidth + islandWidth) / 2, colors.roadColor);
    addRoadPlane(islandWidth, 0, colors.islandColor);
    scene.add(roadGroup);

    const staticMaterials: THREE.Material[] = [];
    const animatedRoadLines: Array<{ line: THREE.Line; baseX: number; phase: number }> = [];
    const addRoadLine = (x: number, color: number, opacity: number, phase: number) => {
      const points: THREE.Vector3[] = [];
      for (let i = 0; i <= 46; i += 1) {
        const z = 10 - (roadLength * i) / 46;
        points.push(new THREE.Vector3(roadX(x, z, phase), -1.01, z));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
      });
      staticMaterials.push(material);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      animatedRoadLines.push({ line, baseX: x, phase });
    };

    const roadwayCenter = (roadWidth + islandWidth) / 2;
    const laneWidth = roadWidth / lanesPerRoad;
    [-1, 1].forEach((side) => {
      addRoadLine(side * islandWidth / 2, colors.shoulderLines, 0.52, side * 0.2);
      addRoadLine(side * (roadWidth + islandWidth / 2), colors.shoulderLines, 0.32, side * 0.4);
      for (let lane = 1; lane < lanesPerRoad; lane += 1) {
        addRoadLine(
          side * (islandWidth / 2 + lane * laneWidth),
          colors.brokenLines,
          0.18,
          lane * 0.3,
        );
      }
    });

    const streaks: CarStreak[] = [];
    const totalStreaks = (effectOptions.lightPairsPerRoadWay ?? 40) * 2;
    for (let i = 0; i < totalStreaks; i += 1) {
      const side = i % 2 === 0 ? -1 : 1;
      const palette = side < 0 ? colors.leftCars : colors.rightCars;
      const material = new THREE.MeshBasicMaterial({
        color: palette[i % palette.length],
        transparent: true,
        opacity: 0.6 + Math.random() * 0.38,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
      scene.add(mesh);
      const length = 8 + Math.random() * 52;
      mesh.scale.set(0.06 + Math.random() * 0.09, 0.025 + Math.random() * 0.045, length);
      streaks.push({
        mesh,
        z: -Math.random() * roadLength,
        x: side * (islandWidth / 2 + 0.4 + Math.random() * (roadWidth - 0.8)),
        side,
        speed: 36 + Math.random() * 48,
        length,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const sticks: Streak[] = [];
    const stickCount = effectOptions.totalSideLightSticks ?? 20;
    for (let i = 0; i < stickCount; i += 1) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6), 3));
      const material = new THREE.LineBasicMaterial({
        color: colors.sticks,
        transparent: true,
        opacity: 0.72,
        blending: THREE.AdditiveBlending,
      });
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      sticks.push({
        line,
        z: -(i / stickCount) * roadLength,
        x: i % 2 === 0 ? -(roadWidth + islandWidth / 2 + 1.2) : roadWidth + islandWidth / 2 + 1.2,
        side: i % 2 === 0 ? -1 : 1,
        speed: 60,
        length: 1.3 + Math.random() * 1.8,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height, false);
      composer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    let speedTarget = reducedMotion ? 0.18 : 1;
    let speed = speedTarget;
    let raf = 0;
    let last = performance.now();
    let elapsed = 0;
    let inView = true;
    let lastRender = 0;
    const frameInterval = reducedMotion ? 1000 / 10 : 1000 / 30;

    const accelerate = () => {
      if (!reducedMotion) speedTarget = effectOptions.speedUp ?? 2;
      container.classList.add("is-accelerating");
    };
    const decelerate = () => {
      speedTarget = reducedMotion ? 0.18 : 1;
      container.classList.remove("is-accelerating");
    };
    container.addEventListener("pointerdown", accelerate);
    window.addEventListener("pointerup", decelerate);
    window.addEventListener("pointercancel", decelerate);

    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      if (!inView || document.hidden || now - lastRender < frameInterval) {
        last = now;
        return;
      }
      lastRender = now;
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;
      elapsed += delta * speed;
      speed = THREE.MathUtils.lerp(speed, speedTarget, 1 - Math.pow(0.001, delta));

      animatedRoadLines.forEach(({ line, baseX, phase }) => {
        const positions = line.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i <= 46; i += 1) {
          const z = 10 - (roadLength * i) / 46;
          positions[i * 3] = roadX(baseX, z, phase, elapsed);
        }
        line.geometry.attributes.position.needsUpdate = true;
      });

      streaks.forEach((streak) => {
        streak.z += streak.speed * speed * delta;
        if (streak.z > 13) streak.z = -roadLength + Math.random() * -18;
        const x1 = roadX(streak.x, streak.z, streak.phase, elapsed);
        const x2 = roadX(streak.x + streak.side * 0.15, streak.z - streak.length, streak.phase, elapsed);
        streak.mesh.position.set((x1 + x2) / 2, -0.84, streak.z - streak.length / 2);
        streak.mesh.rotation.y = Math.atan2(x1 - x2, streak.length);
      });

      sticks.forEach((stick) => {
        stick.z += stick.speed * speed * delta;
        if (stick.z > 12) stick.z -= roadLength;
        const x = roadX(stick.x, stick.z, stick.phase, elapsed);
        const positions = stick.line.geometry.attributes.position.array as Float32Array;
        positions.set([x, -1, stick.z, x, stick.length, stick.z]);
        stick.line.geometry.attributes.position.needsUpdate = true;
      });

      roadGroup.position.x = Math.sin(elapsed * 0.16) * 0.35;
      camera.fov = THREE.MathUtils.lerp(camera.fov, speedTarget > 1.4 ? acceleratedFov : baseFov, 0.045);
      camera.updateProjectionMatrix();
      composer.render(delta);
    };
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => { inView = entry.isIntersecting; },
      { rootMargin: "120px" },
    );
    visibilityObserver.observe(container);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      visibilityObserver.disconnect();
      container.removeEventListener("pointerdown", accelerate);
      window.removeEventListener("pointerup", decelerate);
      window.removeEventListener("pointercancel", decelerate);
      scene.traverse((object) => {
        const drawable = object as THREE.Mesh | THREE.Line;
        drawable.geometry?.dispose();
        const material = drawable.material;
        if (Array.isArray(material)) material.forEach((item) => item.dispose());
        else material?.dispose();
      });
      staticMaterials.forEach((material) => material.dispose());
      composer.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [effectOptions]);

  return <div ref={containerRef} className={`hyperspeed-container ${className}`} aria-hidden="true" />;
}
