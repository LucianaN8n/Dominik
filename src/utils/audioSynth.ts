/**
 * Web Audio API procedural music beat synthesizer for Dominik Publishing demo tracks.
 * Generates dark luxury Trap, Trap Soul, Dark Trap, and Boom Bap Hip-Hop audio vibes.
 */

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let analyzerNode: AnalyserNode | null = null;
let currentLoopTimer: number | null = null;
let activeLoopType: string | null = null;
let activeAudioElement: HTMLAudioElement | null = null;

export function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function initAudioEngine() {
  const ctx = getAudioContext();
  if (!masterGain) {
    masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.7, ctx.currentTime);

    analyzerNode = ctx.createAnalyser();
    analyzerNode.fftSize = 32;

    masterGain.connect(analyzerNode);
    analyzerNode.connect(ctx.destination);
  }
}

export function setMasterVolume(volume: number) {
  if (masterGain && audioCtx) {
    const clamped = Math.max(0, Math.min(1, volume));
    masterGain.gain.setTargetAtTime(clamped, audioCtx.currentTime, 0.05);
  }
}

export function getFrequencyData(array: Uint8Array) {
  if (analyzerNode) {
    analyzerNode.getByteFrequencyData(array);
  } else {
    array.fill(0);
  }
}

function playSub808(time: number, freq: number, duration: number) {
  if (!audioCtx || !masterGain) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq * 1.5, time);
  osc.frequency.exponentialRampToValueAtTime(freq, time + 0.08);

  gain.gain.setValueAtTime(0.8, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc.connect(gain);
  gain.connect(masterGain);

  osc.start(time);
  osc.stop(time + duration);
}

function playHiHat(time: number, isAccent = false) {
  if (!audioCtx || !masterGain) return;
  const bufferSize = audioCtx.sampleRate * 0.05;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(isAccent ? 8000 : 10000, time);

  const gain = audioCtx.createGain();
  const vol = isAccent ? 0.3 : 0.15;
  gain.gain.setValueAtTime(vol, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);

  noise.start(time);
}

function playSnare(time: number) {
  if (!audioCtx || !masterGain) return;
  // Tone
  const osc = audioCtx.createOscillator();
  const oscGain = audioCtx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(180, time);
  osc.frequency.exponentialRampToValueAtTime(80, time + 0.1);
  oscGain.gain.setValueAtTime(0.5, time);
  oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

  // Noise
  const bufferSize = audioCtx.sampleRate * 0.15;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(1200, time);

  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.35, time);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

  osc.connect(oscGain);
  oscGain.connect(masterGain);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(masterGain);

  osc.start(time);
  osc.stop(time + 0.12);
  noise.start(time);
}

function playPadChord(time: number, freqs: number[], duration: number) {
  if (!audioCtx || !masterGain) return;
  freqs.forEach((freq) => {
    const osc = audioCtx!.createOscillator();
    const gain = audioCtx!.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    const filter = audioCtx!.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, time);

    gain.gain.setValueAtTime(0.01, time);
    gain.gain.linearRampToValueAtTime(0.12, time + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain!);

    osc.start(time);
    osc.stop(time + duration);
  });
}

export function startDemoBeat(demoType: string = 'Trap', bpm: number = 130, audioUrl?: string) {
  stopDemoBeat();
  initAudioEngine();

  const ctx = getAudioContext();
  activeLoopType = demoType;

  if (audioUrl) {
    try {
      activeAudioElement = new Audio(audioUrl);
      activeAudioElement.volume = masterGain ? masterGain.gain.value : 0.7;
      activeAudioElement.loop = true;
      activeAudioElement.play().catch(() => {
        // Fallback to procedural synth if audio playback is blocked or fails
        runProceduralBeat(demoType, bpm);
      });
      return;
    } catch {
      // Fallback
    }
  }

  runProceduralBeat(demoType, bpm);
}

function runProceduralBeat(demoType: string, bpm: number) {
  const ctx = getAudioContext();
  const secondsPerBeat = 60 / bpm;
  const stepTime = secondsPerBeat / 4; // 16th notes
  let currentStep = 0;

  // Key frequencies
  const rootFreq = demoType === 'DarkTrap' ? 43.65 : demoType === 'TrapSoul' ? 65.41 : demoType === 'HipHop' ? 55.0 : 49.0;

  const chordPads = demoType === 'TrapSoul'
    ? [261.63, 311.13, 392.00, 466.16] // Cm9
    : demoType === 'DarkTrap'
    ? [185.00, 220.00, 277.18] // F#m
    : [196.00, 233.08, 293.66]; // Gm

  function scheduleMeasure() {
    if (!audioCtx || activeLoopType !== demoType) return;
    const now = ctx.currentTime;

    for (let step = 0; step < 16; step++) {
      const time = now + step * stepTime;

      // 808 Kick / Sub
      if (step === 0) playSub808(time, rootFreq, stepTime * 6);
      if (step === 6 && demoType !== 'HipHop') playSub808(time, rootFreq * 0.89, stepTime * 3);
      if (step === 10) playSub808(time, rootFreq * 1.12, stepTime * 4);

      // Snares / Claps
      if (step === 4 || step === 12) {
        playSnare(time);
      }

      // Hi Hats (16th notes with rolls)
      if (step % 2 === 0 || (step >= 12 && demoType === 'DarkTrap')) {
        playHiHat(time, step % 4 === 0);
      }

      // Chords on step 0 and 8
      if (step === 0 || step === 8) {
        playPadChord(time, chordPads, stepTime * 7);
      }
    }

    currentStep = (currentStep + 16) % 16;
    const measureDuration = stepTime * 16 * 1000;
    currentLoopTimer = window.setTimeout(scheduleMeasure, measureDuration - 50);
  }

  scheduleMeasure();
}

export function stopDemoBeat() {
  if (activeAudioElement) {
    activeAudioElement.pause();
    activeAudioElement.currentTime = 0;
    activeAudioElement = null;
  }
  if (currentLoopTimer) {
    clearTimeout(currentLoopTimer);
    currentLoopTimer = null;
  }
  activeLoopType = null;
}
