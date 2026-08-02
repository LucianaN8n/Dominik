import React from 'react';
import { Song } from '../types';
import { Play, Pause, Info, Disc3, Upload, Check, FileSpreadsheet } from 'lucide-react';

interface SongCardProps {
  song: Song;
  isPlaying: boolean;
  onPlayDemo: (song: Song) => void;
  onViewDetails: (song: Song) => void;
  onViewTechnicalSheet?: (song: Song) => void;
  onUpdateAudio?: (songId: string, newAudioUrl: string, file?: File | Blob, fileName?: string) => void;
  isAuthorMode?: boolean;
}

export const SongCard: React.FC<SongCardProps> = ({
  song,
  isPlaying,
  onPlayDemo,
  onViewDetails,
  onViewTechnicalSheet,
  onUpdateAudio,
  isAuthorMode
}) => {
  return (
    <div
      className={`bg-[#111111] border ${
        isPlaying ? 'border-[#C5A059] border-l-4' : 'border-[#222222] border-l-2 border-l-[#C5A059]/60'
      } hover:border-[#C5A059] transition-all duration-300 flex flex-col group hover:bg-[#151515] shadow-xl`}
    >
      {/* COVER ART WITH HOVER PLAY OVERLAY */}
      <div className="relative aspect-video sm:aspect-square w-full overflow-hidden bg-[#0d0d0d] border-b border-[#222222]">
        <img
          src={song.coverUrl}
          alt={song.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* GENRE BADGE */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          <div className="bg-black/90 border border-[#C5A059]/50 px-2.5 py-0.5 text-[9px] font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
            {song.genre}
          </div>
          {song.hasCustomAudio ? (
            <div className="bg-emerald-500 text-black font-bold px-2 py-0.5 text-[8px] tracking-[0.15em] uppercase shadow-lg flex items-center gap-1">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
              <span>Áudio Anexado</span>
            </div>
          ) : song.audioUrl ? (
            <div className="bg-[#C5A059] text-black px-2 py-0.5 text-[8px] font-bold tracking-[0.15em] uppercase shadow-lg">
              Demo HD
            </div>
          ) : null}
        </div>

        {/* BPM & KEY BADGE */}
        <div className="absolute top-3 right-3 bg-black/90 border border-[#222222] px-2.5 py-0.5 text-[9px] font-mono text-white/60 tracking-wider">
          {song.bpm} BPM | {song.key}
        </div>

        {/* PLAY DEMO FLOATING OVERLAY BUTTON */}
        <button
          onClick={() => onPlayDemo(song)}
          className={`absolute bottom-4 right-4 w-11 h-11 flex items-center justify-center transition-all duration-300 shadow-2xl ${
            isPlaying
              ? 'bg-[#C5A059] text-black scale-105'
              : 'bg-black/90 hover:bg-[#C5A059] text-[#C5A059] hover:text-black border border-[#C5A059]'
          }`}
          title={isPlaying ? 'Pausar Demo' : 'Ouvir Demo'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* TITLE & COMPOSER / ARTIST */}
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="font-serif italic text-2xl font-normal text-white group-hover:text-[#C5A059] transition-colors">
              {song.title}
            </h3>
            {(song.artist || song.composer) && (
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059] shrink-0 border border-[#C5A059]/40 bg-[#C5A059]/10 px-2 py-0.5">
                {song.artist || song.composer}
              </span>
            )}
          </div>

          {/* CUSTOM AUDIO INDICATOR IF SAVED */}
          {song.hasCustomAudio && (
            <div className="mb-3 text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-1 font-mono flex items-center justify-between">
              <span className="truncate">✓ Salvo: {song.customAudioName || 'áudio_personalizado.mp3'}</span>
            </div>
          )}

          {/* MOOD TAGS */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {song.mood.map((m, idx) => (
              <span
                key={idx}
                className="bg-[#181818] border border-[#222222] text-white/60 text-[9px] px-2 py-0.5 uppercase tracking-[0.15em]"
              >
                {m}
              </span>
            ))}
          </div>

          {/* SUGGESTED ARTISTS */}
          <div className="mb-4 pt-3 border-t border-[#222222]">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 block mb-1">
              Sugerido para
            </span>
            <div className="text-xs text-[#C5A059] font-medium italic tracking-wide">
              {song.suggestedArtists.join(' • ')}
            </div>
          </div>

          {/* AUDIO TRACK WAVEFORM / PLAYER STRIP */}
          <div
            onClick={() => onPlayDemo(song)}
            className={`mb-4 p-2.5 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
              isPlaying
                ? 'bg-[#C5A059]/15 border-[#C5A059]'
                : 'bg-[#0d0d0d] border-[#222222] hover:border-[#C5A059]/60'
            }`}
            title={isPlaying ? 'Pausar reprodução' : 'Tocar reprodução desta faixa'}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded flex items-center justify-center shrink-0 ${
                  isPlaying ? 'bg-[#C5A059] text-black' : 'bg-[#1a1a1a] text-[#C5A059]'
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                )}
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/90 block">
                  {isPlaying ? 'Reproduzindo Faixa Demo' : 'Faixa de Áudio Demo'}
                </span>
                <span className="text-[9px] text-white/50 block font-mono">
                  {song.customAudioName ? `MP3: ${song.customAudioName}` : `${song.bpm} BPM • ${song.key}`}
                </span>
              </div>
            </div>

            {/* SOUNDWAVE / EQUALIZER BARS */}
            <div className="flex items-end gap-0.5 h-5 shrink-0 px-1">
              {(song.audioFrequencyProfile || [50, 80, 100, 60, 90, 75, 45, 85, 95, 70]).slice(0, 10).map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying ? 'bg-[#C5A059] animate-pulse' : 'bg-white/20'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(20, (h / 100) * 20)}px` : '6px',
                    animationDelay: `${i * 80}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* BUTTONS: OUVIR, ANEXAR ÁUDIO, FICHA TÉCNICA, DETALHES */}
        <div className={`grid gap-1.5 pt-2 border-t border-[#222222] ${isAuthorMode ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'}`}>
          <button
            onClick={() => onPlayDemo(song)}
            className={`py-2 px-1 border text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-all ${
              isPlaying
                ? 'bg-[#C5A059] text-black border-[#C5A059]'
                : 'bg-[#181818] hover:bg-[#C5A059] text-white hover:text-black border-[#222222] hover:border-[#C5A059]'
            }`}
          >
            {isPlaying ? (
              <>
                <Disc3 className="w-3 h-3 animate-spin shrink-0" />
                <span>Tocando</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-[#C5A059] group-hover:text-black shrink-0" />
                <span>Ouvir</span>
              </>
            )}
          </button>

          {isAuthorMode && (
            <label className="py-2 px-1 border border-[#C5A059]/40 hover:border-[#C5A059] bg-[#181818] text-[#C5A059] hover:text-white text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-all" title="Anexar/Atualizar Áudio Demo">
              <Upload className="w-3 h-3 shrink-0" />
              <span>Anexar</span>
              <input
                type="file"
                accept="audio/*,.mp3,.wav,.m4a,.ogg"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && onUpdateAudio) {
                    const url = URL.createObjectURL(file);
                    onUpdateAudio(song.id, url, file, file.name);
                    onPlayDemo({ ...song, audioUrl: url, customAudioName: file.name, hasCustomAudio: true });
                  }
                }}
              />
            </label>
          )}

          <button
            onClick={() => onViewTechnicalSheet ? onViewTechnicalSheet(song) : onViewDetails(song)}
            className="py-2 px-1 border border-[#C5A059] bg-[#C5A059]/15 hover:bg-[#C5A059] text-[#C5A059] hover:text-black text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-all shadow-md"
            title="Ver, Preencher e Editar Ficha Técnica da Obra"
          >
            <FileSpreadsheet className="w-3 h-3 shrink-0" />
            <span>Ficha Técnica</span>
          </button>

          <button
            onClick={() => onViewDetails(song)}
            className="py-2 px-1 border border-[#222222] hover:border-white/40 bg-black text-white/70 hover:text-white text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
          >
            <Info className="w-3 h-3 text-[#C5A059] shrink-0" />
            <span>Detalhes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

