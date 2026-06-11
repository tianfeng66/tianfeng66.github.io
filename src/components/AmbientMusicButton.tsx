import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const CHORDS = [
  [261.63, 329.63, 392, 493.88],
  [220, 261.63, 329.63, 392],
  [174.61, 220, 261.63, 329.63],
  [196, 246.94, 293.66, 392],
];

const MELODY = [
  659.25, 523.25, 587.33, 493.88,
  440, 523.25, 392, 440,
  523.25, 440, 392, 329.63,
  392, 493.88, 587.33, 523.25,
];

type AudioGraph = {
  context: AudioContext;
  master: GainNode;
  delay: DelayNode;
  delayGain: GainNode;
};

export default function AmbientMusicButton() {
  const [playing, setPlaying] = useState(false);
  const graphRef = useRef<AudioGraph | null>(null);
  const timerRef = useRef<number>();
  const beatRef = useRef(0);
  const manuallyPausedRef = useRef(false);

  const createGraph = useCallback(() => {
    if (graphRef.current) return graphRef.current;

    const AudioContextClass = window.AudioContext
      || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;

    const context = new AudioContextClass();
    const master = context.createGain();
    const delay = context.createDelay(1);
    const delayGain = context.createGain();
    const compressor = context.createDynamicsCompressor();

    master.gain.value = 0.28;
    delay.delayTime.value = 0.34;
    delayGain.gain.value = 0.2;
    compressor.threshold.value = -20;
    compressor.knee.value = 18;
    compressor.ratio.value = 3;
    compressor.attack.value = 0.02;
    compressor.release.value = 0.32;

    master.connect(compressor);
    master.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(delay);
    delay.connect(compressor);
    compressor.connect(context.destination);

    graphRef.current = { context, master, delay, delayGain };
    return graphRef.current;
  }, []);

  const playTone = useCallback((
    graph: AudioGraph,
    frequency: number,
    duration: number,
    volume: number,
    type: OscillatorType,
    detune = 0,
  ) => {
    const { context, master } = graph;
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;
    oscillator.detune.value = detune;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(type === "sine" ? 1700 : 1100, now);
    filter.frequency.exponentialRampToValueAtTime(480, now + duration);
    filter.Q.value = 0.7;

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    oscillator.connect(filter).connect(gain).connect(master);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.05);
  }, []);

  const playStep = useCallback(() => {
    const graph = graphRef.current;
    if (!graph || graph.context.state !== "running") return;

    const beat = beatRef.current;
    const chord = CHORDS[Math.floor(beat / 8) % CHORDS.length];

    if (beat % 8 === 0) {
      chord.forEach((frequency, index) => {
        playTone(graph, frequency / 2, 2.7, 0.018 - index * 0.002, "sine", index % 2 ? 3 : -3);
      });
      playTone(graph, chord[0] / 4, 1.2, 0.032, "sine");
    }

    if (beat % 2 === 0) {
      const note = MELODY[(beat / 2) % MELODY.length];
      playTone(graph, note, 0.72, 0.028, "triangle", beat % 4 === 0 ? -4 : 4);
    }

    if (beat % 4 === 2) {
      playTone(graph, chord[2], 0.38, 0.012, "sine");
    }

    beatRef.current += 1;
  }, [playTone]);

  const start = useCallback(async () => {
    const graph = createGraph();
    if (!graph) return false;

    try {
      await graph.context.resume();
    } catch {
      return false;
    }

    if (graph.context.state !== "running") return false;
    if (!timerRef.current) {
      playStep();
      timerRef.current = window.setInterval(playStep, 270);
    }
    setPlaying(true);
    return true;
  }, [createGraph, playStep]);

  const stop = useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = undefined;
    void graphRef.current?.context.suspend();
    setPlaying(false);
  }, []);

  const toggle = () => {
    if (playing) {
      manuallyPausedRef.current = true;
      stop();
      return;
    }

    manuallyPausedRef.current = false;
    void start();
  };

  useEffect(() => {
    void start();

    const resumeOnFirstInteraction = () => {
      if (!manuallyPausedRef.current) void start();
    };

    window.addEventListener("pointerdown", resumeOnFirstInteraction, { passive: true, once: true });
    window.addEventListener("wheel", resumeOnFirstInteraction, { passive: true, once: true });
    window.addEventListener("touchstart", resumeOnFirstInteraction, { passive: true, once: true });
    window.addEventListener("keydown", resumeOnFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", resumeOnFirstInteraction);
      window.removeEventListener("wheel", resumeOnFirstInteraction);
      window.removeEventListener("touchstart", resumeOnFirstInteraction);
      window.removeEventListener("keydown", resumeOnFirstInteraction);
      if (timerRef.current) window.clearInterval(timerRef.current);
      void graphRef.current?.context.close();
      graphRef.current = null;
    };
  }, [start]);

  return (
    <button
      type="button"
      className={`hero-control music-control ${playing ? "is-playing" : ""}`}
      onClick={toggle}
      aria-label={playing ? "暂停背景音乐" : "播放背景音乐"}
    >
      <span className="music-icon">{playing ? <Pause size={14} /> : <Play size={14} />}</span>
      <span className="hidden sm:inline">{playing ? "轻音乐播放中" : "播放轻音乐"}</span>
      <span className="equalizer" aria-hidden="true"><i /><i /><i /></span>
    </button>
  );
}
