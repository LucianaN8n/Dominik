import React, { useEffect, useRef, useState } from 'react';
import { Song } from '../types';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, ArrowUpRight, Disc3, Music2, Upload } from 'lucide-react';
import { getFrequencyData } from '../utils/audioSynth';

interface AudioPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onRequestLicensing: (song: Song) => void;
  volume: number;
  onVolumeChange: (vol: number) => void;
  onUpdateAudio?: (songId: string, audioUrl: string, file?: File | Blob, fileName?: string) => void;
  isAuthorMode?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  currentSong,
  isPlaying,
  onTogglePlay,
  onRequestLicensing,
  volume,
  onVolumeChange,
  onUpdateAudio,
  isAuthorMode
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [prevVol, setPrevVol] = useState(volume);
  const [progress, setProgress] = useState(0);

  // Audio frequency visualizer animation loop
  useEffect(() => {
    let animId: number;
    const freqArray = new Uint8Array(16);

    const drawVisualizer = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          if (isPlaying) {
            getFrequencyData(freqArray);
          } else {
            freqArray.fill(0);
          }

          const barWidth = (canvas.width / 16) - 2;
          for (let i = 0; i < 16; i++) {
            const val = isPlaying ? (freqArray[i] || Math.sin(Date.now() / 200 + i) * 20 + 20) : 4;
            const barHeight = Math.max(3, (val / 255) * canvas.height);
            const x = i * (barWidth + 2);
            const y = canvas.height - barHeight;

            // Gold color for bars
            const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
            grad.addColorStop(0, '#C5A059');
            grad.addColorStop(1, '#E2C889');

            ctx.fillStyle = grad;
            ctx.fillRect(x, y, barWidth, barHeight);
          }
        }
      }
      animId = requestAnimationFrame(drawVisualizer);
    };

    drawVisualizer();
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  // Simulated track playback timer progress
  useEffect(() => {
    let timer: number;
    if (isPlaying) {
      timer = window.setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.8));
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!currentSong) return null;

  const handleMuteToggle = () => {
    if (muted) {
      setMuted(false);
      onVolumeChange(prevVol || 0.7);
    } else {
      setPrevVol(volume);
      setMuted(true);
      onVolumeChange(0);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[#C5A059] py-3 px-4 sm:px-8 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        
        {/* SONG DETAILS */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-12 h-12 overflow-hidden shrink-0 border border-[#222222] bg-[#111111]">
            <img
              src={currentSong.coverUrl}
              alt={currentSong.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Disc3 className="w-6 h-6 text-[#C5A059] animate-spin" />
              </div>
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-base sm:text-lg text-white truncate">
                {currentSong.title}
              </span>
              <span className="border border-[#C5A059]/60 text-[#C5A059] text-[9px] uppercase font-bold px-2 py-0.5 tracking-wider">
                {currentSong.genre}
              </span>
            </div>
            <div className="text-[11px] text-white/50 font-light truncate mt-0.5 italic">
              Sugestão: <span className="text-white font-medium">{currentSong.suggestedArtists.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* CONTROLS & ANIMATED WAVEFORM */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-center">
          {/* PLAY / PAUSE BUTTON */}
          <button
            onClick={onTogglePlay}
            className={`w-11 h-11 flex items-center justify-center transition-all duration-300 shrink-0 ${
              isPlaying
                ? 'bg-[#C5A059] text-black scale-105'
                : 'bg-white text-black hover:bg-[#C5A059]'
            }`}
            title={isPlaying ? 'Pausar' : 'Ouvir Demo'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          {/* CANVAS AUDIO WAVEFORM */}
          <div className="hidden sm:flex flex-col items-center">
            <canvas ref={canvasRef} width={120} height={24} />
            <div className="w-32 bg-[#222222] h-1 mt-1.5 overflow-hidden">
              <div
                className="bg-[#C5A059] h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* VOLUME SLIDER */}
          <div className="hidden lg:flex items-center gap-2">
            <button onClick={handleMuteToggle} className="text-white/50 hover:text-[#C5A059]">
              {muted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={muted ? 0 : volume}
              onChange={(e) => {
                setMuted(false);
                onVolumeChange(parseFloat(e.target.value));
              }}
              className="w-16 accent-[#C5A059] bg-[#222222] h-1 cursor-pointer"
            />
          </div>
        </div>

        {/* LICENSING & UPLOAD CTA IN PLAYER */}
        <div className="w-full md:w-auto flex items-center justify-end gap-2">
          {isAuthorMode && onUpdateAudio && (
            <label className="px-3 py-2 bg-[#181818] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:text-white text-[10px] font-bold uppercase tracking-[0.15em] cursor-pointer flex items-center gap-1.5 transition-all" title="Anexar/Atualizar Áudio Demo MP3">
              <Upload className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">Anexar MP3</span>
              <input
                type="file"
                accept="audio/*,.mp3,.wav,.m4a"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && currentSong) {
                    const url = URL.createObjectURL(file);
                    onUpdateAudio(currentSong.id, url, file, file.name);
                  }
                }}
              />
            </label>
          )}

          <button
            onClick={() => onRequestLicensing(currentSong)}
            className="w-full sm:w-auto px-5 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2"
          >
            <span>Licenciar Faixa</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
