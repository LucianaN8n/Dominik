import React from 'react';
import { Song } from '../types';
import { Info, FileSpreadsheet, ExternalLink, Radio } from 'lucide-react';

interface SongCardProps {
  song: Song;
  onViewDetails: (song: Song) => void;
  onViewTechnicalSheet?: (song: Song) => void;
  onUpdateAudio?: (songId: string, newAudioUrl: string, file?: File | Blob, fileName?: string) => void;
  isAuthorMode?: boolean;
}

const SpotifyIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.38-1.38 9.78-.72 13.5 1.56.36.24.54.84.241 1.26zm.12-3.36C15.241 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

export const SongCard: React.FC<SongCardProps> = ({
  song,
  onViewDetails,
  onViewTechnicalSheet,
  isAuthorMode
}) => {
  return (
    <div className="bg-[#111111] border border-[#222222] border-l-2 border-l-[#C5A059] hover:border-[#C5A059] transition-all duration-300 flex flex-col group hover:bg-[#151515] shadow-xl">
      {/* COVER ART */}
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
        </div>

        {/* BPM & KEY BADGE */}
        <div className="absolute top-3 right-3 bg-black/90 border border-[#222222] px-2.5 py-0.5 text-[9px] font-mono text-white/60 tracking-wider">
          {song.bpm} BPM | {song.key}
        </div>
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

          {/* SPOTIFY STATUS BOX */}
          <div className="mb-4">
            {song.spotifyUrl ? (
              <a
                href={song.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2.5 bg-[#1DB954]/10 hover:bg-[#1DB954] border border-[#1DB954]/40 hover:border-[#1DB954] text-[#1DB954] hover:text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-sm shadow-md"
              >
                <SpotifyIcon className="w-4 h-4 fill-current shrink-0" />
                <span>Ouvir no Spotify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="w-full p-2.5 bg-[#181818] border border-white/10 text-white/70 text-xs font-semibold tracking-wider flex items-center justify-between gap-2 rounded-sm">
                <div className="flex items-center gap-2">
                  <SpotifyIcon className="w-4 h-4 text-[#1DB954] shrink-0" />
                  <span className="text-[11px] uppercase tracking-wider">Spotify</span>
                </div>
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest bg-[#C5A059]/10 px-2 py-0.5 border border-[#C5A059]/30">
                  Em Breve
                </span>
              </div>
            )}
          </div>
        </div>

        {/* BUTTONS: FICHA TÉCNICA, DETALHES */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#222222]">
          <button
            onClick={() => onViewTechnicalSheet ? onViewTechnicalSheet(song) : onViewDetails(song)}
            className="py-2.5 px-2 border border-[#C5A059] bg-[#C5A059]/15 hover:bg-[#C5A059] text-[#C5A059] hover:text-black text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md"
            title="Ver Ficha Técnica da Obra"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 shrink-0" />
            <span>Ficha Técnica</span>
          </button>

          <button
            onClick={() => onViewDetails(song)}
            className="py-2.5 px-2 border border-[#222222] hover:border-white/40 bg-black text-white/80 hover:text-white text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
          >
            <Info className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span>Detalhes</span>
          </button>
        </div>
      </div>
    </div>
  );
};
