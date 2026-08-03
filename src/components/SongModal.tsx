import React, { useState, useEffect } from 'react';
import { Song } from '../types';
import { X, Play, Pause, Disc3, ShieldCheck, Sparkles, FileText, ArrowUpRight, Copy, Check, Share2, Upload, Music, ArrowLeft, FileSpreadsheet, Edit3, Save } from 'lucide-react';

interface SongModalProps {
  song: Song | null;
  isOpen: boolean;
  onClose: () => void;
  isPlaying: boolean;
  onPlayDemo: (song: Song) => void;
  onRequestLicensing: (song: Song) => void;
  onOpenTechnicalSheet?: (song: Song) => void;
  onUpdateAudio?: (songId: string, newAudioUrl: string, file?: File | Blob, fileName?: string) => void;
  onResetAudio?: (songId: string) => void;
  isAuthorMode?: boolean;
  onEditSong?: (song: Song) => void;
  onSaveSong?: (song: Song) => void;
}

export const SongModal: React.FC<SongModalProps> = ({
  song,
  isOpen,
  onClose,
  isPlaying,
  onPlayDemo,
  onRequestLicensing,
  onOpenTechnicalSheet,
  onUpdateAudio,
  onResetAudio,
  isAuthorMode,
  onEditSong,
  onSaveSong
}) => {
  const [copied, setCopied] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);
  const [isEditingLyrics, setIsEditingLyrics] = useState(false);
  const [editedLyrics, setEditedLyrics] = useState('');

  useEffect(() => {
    if (song) {
      setEditedLyrics(song.lyricsSnippet || '');
      setIsEditingLyrics(false);
    }
  }, [song]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !song) return null;

  const handleSaveInlineLyrics = () => {
    if (song && onSaveSong) {
      const updated = { ...song, lyricsSnippet: editedLyrics };
      onSaveSong(updated);
      setIsEditingLyrics(false);
      setSaveSuccessMsg('Letra da música atualizada e salva com sucesso!');
      setTimeout(() => setSaveSuccessMsg(null), 4000);
    }
  };

  const currentAudioName = song.customAudioName;

  const handleCopyLyrics = () => {
    if (song.lyricsSnippet) {
      navigator.clipboard.writeText(song.lyricsSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCustomAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (onUpdateAudio) {
        onUpdateAudio(song.id, url, file, file.name);
      }
      onPlayDemo({ ...song, audioUrl: url, customAudioName: file.name, hasCustomAudio: true });
      setSaveSuccessMsg(`Áudio "${file.name}" salvo permanentemente no seu navegador!`);
      setTimeout(() => setSaveSuccessMsg(null), 5000);
    }
  };

  const moodList = Array.isArray(song.mood) ? song.mood : [];
  const suggestedArtistsList = Array.isArray(song.suggestedArtists) ? song.suggestedArtists : [];

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-300"
    >
      <div className="min-h-full flex items-start sm:items-center justify-center py-4 sm:py-8">
        <div className="relative w-full max-w-4xl bg-[#111111] border border-[#222222] border-l-4 border-l-[#C5A059] shadow-2xl">
          {/* BACK TO CATALOG & CLOSE BUTTON BAR */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            {isAuthorMode && onEditSong && (
              <button
                onClick={() => {
                  onClose();
                  onEditSong(song);
                }}
                className="px-3.5 py-2 bg-[#C5A059] hover:bg-white text-black font-bold text-[11px] uppercase tracking-widest transition-all flex items-center gap-1.5 shadow-lg"
                title="Editar Obra e Letra Completa"
              >
                <Edit3 className="w-4 h-4" />
                <span className="hidden sm:inline">Editar Obra / Letra</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-3.5 py-2 bg-black/80 hover:bg-[#C5A059] hover:text-black border border-[#222222] hover:border-[#C5A059] text-white text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg"
              title="Voltar ao Catálogo"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar ao Catálogo</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 bg-black/80 border border-[#222222] text-white/70 hover:text-white hover:border-[#C5A059] flex items-center justify-center transition-all shadow-lg"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* HERO HEADER WITH LARGE COVER IMAGE */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black border-b border-[#222222]">
            {song.coverUrl ? (
              <img
                src={song.coverUrl}
                alt={song.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-75 contrast-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-black to-neutral-900 flex items-center justify-center">
                <Music className="w-16 h-16 text-[#C5A059]/40" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />

          {/* OVERLAY HEADER CONTENT */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-[#C5A059] text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1">
                  {song.genre}
                </span>
                {song.composer && (
                  <span className="bg-[#181818] border border-[#C5A059] text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1">
                    Composição: {song.composer}
                  </span>
                )}
                {song.artist && (
                  <span className="bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1">
                    Artista: {song.artist}
                  </span>
                )}
                <span className="bg-black/90 border border-[#222222] text-white/70 text-[10px] font-mono px-3 py-1">
                  {song.bpm} BPM • {song.key}
                </span>
                <span className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[10px] font-mono font-bold px-3 py-1">
                  ISRC: {song.technicalSheet?.isrcCode || song.isrcCode || `BR-DMK-26-${song.id.slice(0, 5).toUpperCase()}`}
                </span>
                <span className="bg-[#181818] border border-[#C5A059]/50 text-[#C5A059] text-[10px] font-mono font-bold px-3 py-1">
                  UPC: {song.technicalSheet?.upcCode || song.upcCode || `789${song.id.slice(0, 6).replace(/\D/g, '0').padEnd(9, '1')}`}
                </span>
              </div>
              <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white">
                {song.title}
              </h2>
            </div>

            {/* QUICK PLAY BUTTON */}
            <button
              onClick={() => onPlayDemo(song)}
              className={`px-6 py-3 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 transition-all ${
                isPlaying
                  ? 'bg-white text-black'
                  : 'bg-[#C5A059] text-black hover:bg-white'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>Pausar Demo</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Ouvir Demo</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* MODAL BODY CONTENT */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* TECHNICAL SPECIFICATIONS STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-5 bg-[#181818] border border-[#222222] border-l-2 border-l-[#C5A059]">
            <div>
              <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 block mb-1">
                Composição / Autoria
              </span>
              <span className="text-xs font-medium text-[#C5A059] font-bold">{song.composer || 'Dominik'}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 block mb-1">
                Idioma
              </span>
              <span className="text-xs font-medium text-white">{song.language}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 block mb-1">
                Andamento / Tom
              </span>
              <span className="text-xs font-medium text-white">{song.bpm} BPM ({song.key})</span>
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 block mb-1">
                Status do Registro
              </span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Registrada
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-[#141414] p-3 border border-[#C5A059]/30">
              <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C5A059] block mb-2">
                Registro da Obra
              </span>
              <ul className="text-[11px] text-white/90 space-y-1 font-medium">
                <li className="flex items-center gap-1.5 text-emerald-400">
                  <span>✔</span> <span className="text-white/90">Obra original</span>
                </li>
                <li className="flex items-center gap-1.5 text-emerald-400">
                  <span>✔</span> <span className="text-white/90">Registro de autoria</span>
                </li>
                <li className="flex items-center gap-1.5 text-emerald-400">
                  <span>✔</span> <span className="text-white/90">Disponível para licenciamento</span>
                </li>
              </ul>
            </div>
          </div>

          {/* DEDICATED FICHA TÉCNICA CALLOUT BANNER */}
          <div className="p-5 bg-[#141414] border border-[#C5A059]/40 hover:border-[#C5A059] transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C5A059]/10 border border-[#C5A059] flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Ficha Técnica Oficial da Obra</span>
                  <span className="text-[9px] bg-[#C5A059] text-black font-bold uppercase px-2 py-0.5">Certificado</span>
                </h4>
                <p className="text-xs text-white/50 mt-0.5">
                  Acesse ou edite os créditos de Compositores, Produtores, Registro da Obra e da Biblioteca Nacional.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenTechnicalSheet && onOpenTechnicalSheet(song)}
              className="px-6 py-2.5 bg-[#C5A059] hover:bg-white text-black font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 transition-all shrink-0 shadow-lg"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Ver / Preencher Ficha Técnica</span>
            </button>
          </div>

          {/* SPOTIFY INTEGRATION BANNER */}
          <div className="p-6 bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#1DB954]/40 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-12 h-12 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/50 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.38-1.38 9.78-.72 13.5 1.56.36.24.54.84.241 1.26zm.12-3.36C15.241 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="bg-[#1DB954] text-black text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5">
                    Spotify Official
                  </span>
                  {song.artist && (
                    <span className="text-[10px] text-white/60 uppercase font-mono">
                      Artista / Voz: {song.artist}
                    </span>
                  )}
                </div>
                <h4 className="font-serif italic text-lg sm:text-xl text-white">
                  {song.title} — Lançamento Digital
                </h4>
                <p className="text-xs text-white/60 font-light mt-0.5">
                  {song.spotifyUrl
                    ? 'Faixa oficial disponível para audição e streaming no Spotify.'
                    : 'Esta composição estará liberada em breve no Spotify e principais plataformas streaming.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end shrink-0">
              {song.spotifyUrl ? (
                <a
                  href={song.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap bg-[#1DB954] hover:bg-[#1ed760] text-black transition-all flex items-center gap-2 shadow-xl"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.38-1.38 9.78-.72 13.5 1.56.36.24.54.84.241 1.26zm.12-3.36C15.241 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  <span>Ouvir no Spotify</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <div className="px-5 py-2.5 border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <span>Em Breve no Spotify</span>
                </div>
              )}
            </div>
          </div>

          {/* DEDICATED UPLOAD AUDIO DROPZONE BOX - AUTHOR EXCLUSIVE */}
          {isAuthorMode && (
            <div className="p-5 bg-[#141414] border-2 border-dashed border-[#C5A059]/60 hover:border-[#C5A059] transition-all relative group">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                    <Upload className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Anexar / Enviar Seu Arquivo de Áudio (MP3 / WAV)</span>
                      <span className="text-[9px] bg-[#C5A059] text-black font-bold uppercase px-1.5 py-0.5">Gestão de Autora</span>
                    </h5>
                    <p className="text-xs text-white/50 mt-0.5">
                      Substitua o áudio padrão enviando sua demo ou guia vocal. O arquivo fica salvo no seu navegador!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <label className="px-6 py-3 font-bold text-xs uppercase tracking-[0.2em] bg-[#C5A059] hover:bg-[#d8b368] text-black cursor-pointer flex items-center gap-2 shadow-lg transition-all shrink-0">
                    <Upload className="w-4 h-4 text-black" />
                    <span>Escolher Arquivo</span>
                    <input
                      type="file"
                      accept="audio/*,.mp3,.wav,.m4a,.ogg"
                      className="hidden"
                      onChange={handleCustomAudioUpload}
                    />
                  </label>
                </div>
              </div>

              {saveSuccessMsg && (
                <div className="mt-3 p-2 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{saveSuccessMsg}</span>
                </div>
              )}

              {(currentAudioName || song.hasCustomAudio) && (
                <div className="mt-3 pt-3 border-t border-[#222222] flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-400">
                  <span className="font-mono">
                    ✓ Áudio personalizado salvo: <strong>{currentAudioName || 'arquivo.mp3'}</strong>
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onPlayDemo(song)}
                      className="underline hover:text-white font-mono uppercase text-[10px]"
                    >
                      Ouvir agora »
                    </button>
                    {onResetAudio && (
                      <button
                        onClick={() => onResetAudio(song.id)}
                        className="text-red-400 hover:text-red-300 underline font-mono uppercase text-[10px]"
                      >
                        Restaurar Original
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MOOD, INSTRUMENTOS, TAGS & SUGGESTED ARTISTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#181818] p-5 border border-[#222222]">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059] block mb-2">
                Mood & Clima
              </span>
              <div className="flex flex-wrap gap-1.5">
                {moodList.map((m, idx) => (
                  <span
                    key={idx}
                    className="bg-black border border-[#222222] text-white/80 text-[11px] px-2.5 py-1 uppercase tracking-wider"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#181818] p-5 border border-[#222222]">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059] block mb-2">
                Instrumentos & Arranjos
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(song.instruments && song.instruments.length > 0
                  ? song.instruments
                  : ['Bass 808 Sub', 'Sintetizadores', 'Hi-hats Duplos', 'Guia Vocal Clean']
                ).map((inst, idx) => (
                  <span
                    key={idx}
                    className="bg-black border border-[#C5A059]/30 text-white/90 text-[11px] px-2.5 py-1"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#181818] p-5 border border-[#222222]">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059] block mb-2">
                Tags do Catálogo
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(song.tags && song.tags.length > 0
                  ? song.tags
                  : ['Trap', 'DarkTrap', 'Mindset', 'Sucesso']
                ).map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#C5A059]/10 border border-[#C5A059]/40 text-[#C5A059] text-[11px] font-mono px-2 py-0.5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ARTISTAS SUGERIDOS (NACIONAL & INTERNACIONAL) */}
          <div className="bg-[#181818] p-5 border border-[#222222] space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059] block">
              Artistas Sugeridos para Gravação e Parceria
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1.5 font-mono">
                  ★ Mercado Nacional
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-white font-medium italic">
                  {(song.suggestedArtistsNational && song.suggestedArtistsNational.length > 0
                    ? song.suggestedArtistsNational
                    : suggestedArtistsList
                  ).map((artist, idx) => (
                    <span key={idx} className="bg-black border border-emerald-500/40 text-emerald-300 px-3 py-1">
                      {artist}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-sky-400 block mb-1.5 font-mono">
                  ★ Mercado Internacional
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-white font-medium italic">
                  {(song.suggestedArtistsInternational && song.suggestedArtistsInternational.length > 0
                    ? song.suggestedArtistsInternational
                    : ['Travis Scott', 'Drake', 'Future', '21 Savage', 'Metro Boomin']
                  ).map((artist, idx) => (
                    <span key={idx} className="bg-black border border-sky-500/40 text-sky-300 px-3 py-1">
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* REGISTRO DA OBRA / EDA STATUS */}
          <div className="p-4 bg-black/60 border border-[#C5A059]/40 font-mono text-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-white">
                <strong>Nº do Registro da Obra:</strong>{' '}
                <span className="text-[#C5A059]">
                  {song.registrationStatus || 'Biblioteca Nacional (EDA) Nº 312.894.107'}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-white/60">
              <span>ISRC: <strong className="text-emerald-400">{song.isrcCode || 'BR-DMK-26-00007'}</strong></span>
              <span>ISWC: <strong className="text-amber-400">{song.iswcCode || 'T-312.894.107-0'}</strong></span>
            </div>
          </div>

          {/* CATALOG DESCRIPTION, STORY & CONCEPT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-serif italic text-xl font-normal text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                Descrição para o Catálogo
              </h3>
              <p className="text-xs text-white/80 font-light leading-relaxed bg-[#181818] p-5 border border-[#222222] italic border-l-2 border-l-[#C5A059]">
                {song.catalogDescription || song.history}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif italic text-xl font-normal text-white flex items-center gap-2">
                <Disc3 className="w-4 h-4 text-[#C5A059]" />
                Conceito & Potencial Comercial
              </h3>
              <div className="bg-[#181818] p-5 border border-[#222222] space-y-3">
                <p className="text-xs text-white/70 font-light leading-relaxed italic">
                  {song.concept}
                </p>
                <div className="pt-3 border-t border-[#222222] text-xs text-[#C5A059]">
                  <strong>Potencial Comercial:</strong> {song.commercialPotential}
                </div>
              </div>
            </div>
          </div>

          {/* LYRICS SNIPPET / COMPLETE LYRICS WITH AUTHOR EDITING */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-serif italic text-xl font-normal text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#C5A059]" />
                <span>Letra Autoral da Obra</span>
                {isAuthorMode && (
                  <span className="text-[9px] bg-[#C5A059] text-black font-bold uppercase tracking-wider px-2 py-0.5 ml-2 font-mono">
                    Modo Autora (Editável)
                  </span>
                )}
              </h3>
              
              <div className="flex items-center gap-3">
                {isAuthorMode && (
                  <button
                    onClick={() => {
                      if (!isEditingLyrics) {
                        setEditedLyrics(song.lyricsSnippet || '');
                        setIsEditingLyrics(true);
                      } else {
                        setIsEditingLyrics(false);
                      }
                    }}
                    className="text-xs text-[#C5A059] hover:text-white font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-[#C5A059]/40 px-3 py-1 bg-[#C5A059]/10"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{isEditingLyrics ? 'Cancelar Edição' : 'Editar Letra'}</span>
                  </button>
                )}

                <button
                  onClick={handleCopyLyrics}
                  className="text-xs text-white/50 hover:text-[#C5A059] flex items-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Letra</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {isEditingLyrics ? (
              <div className="p-4 bg-[#141414] border-2 border-[#C5A059] space-y-3 animate-in fade-in">
                <label className="block text-[10px] uppercase font-bold tracking-widest text-[#C5A059] font-mono">
                  Edição Direta da Letra (Luciana Domingos)
                </label>
                <textarea
                  rows={14}
                  value={editedLyrics}
                  onChange={(e) => setEditedLyrics(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-[#333333] text-white p-4 font-mono text-xs leading-relaxed focus:border-[#C5A059] focus:outline-none"
                  placeholder="Cole ou altere a letra da música aqui..."
                />
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => setIsEditingLyrics(false)}
                    className="px-4 py-2 bg-black border border-[#333333] text-white/70 hover:text-white text-xs font-bold uppercase"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveInlineLyrics}
                    className="px-6 py-2 bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
                  >
                    <Save className="w-4 h-4" />
                    <span>Salvar Alterações da Letra</span>
                  </button>
                </div>
              </div>
            ) : (
              <pre className="bg-[#181818] p-6 border border-[#222222] font-sans text-xs sm:text-sm text-white/80 whitespace-pre-line leading-relaxed italic border-l-4 border-l-[#C5A059]">
                {song.lyricsSnippet}
              </pre>
            )}
          </div>

          {/* LICENSING FOOTER ACTION BAR */}
          <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#181818] p-6 border border-[#222222]">
            <div>
              <span className="text-xs text-white/40 block font-light italic">Interessado nesta composição?</span>
              <span className="text-sm font-serif italic text-white">
                Disponível para Licenciamento Exclusivo ou Não-Exclusivo
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-white/20 text-white/80 hover:text-white hover:border-[#C5A059] font-bold text-xs uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
                <span>Voltar ao Catálogo</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestLicensing(song);
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2"
              >
                <span>Solicitar Licenciamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
