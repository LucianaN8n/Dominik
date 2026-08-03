import React, { useState } from 'react';
import { X, Music, Upload, Sparkles, Plus, Check } from 'lucide-react';
import { Song } from '../types';

interface AddSongModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveSong: (song: Song, audioFile?: File) => void;
  initialSong?: Song | null;
}

export const AddSongModal: React.FC<AddSongModalProps> = ({
  isOpen,
  onClose,
  onSaveSong,
  initialSong
}) => {
  const [title, setTitle] = useState(initialSong?.title || '');
  const [genre, setGenre] = useState(initialSong?.genre || 'Trap / Dark Trap');
  const [composer, setComposer] = useState(initialSong?.composer || 'Luciana Domingos');
  const [artist, setArtist] = useState(initialSong?.artist || 'Dominik');
  const [bpm, setBpm] = useState<number>(initialSong?.bpm || 132);
  const [key, setKey] = useState(initialSong?.key || 'Ré Menor (Dm)');
  
  const [moodInput, setMoodInput] = useState(initialSong?.mood?.join(', ') || 'Sucesso, Superação, Energia, Poder, Prosperidade');
  const [instrumentsInput, setInstrumentsInput] = useState(initialSong?.instruments?.join(', ') || 'Bass 808 Sub Heavy, Sintetizadores de Onda Analógica, Hi-hats Duplos Trap, Guia Vocal Clean');
  const [tagsInput, setTagsInput] = useState(initialSong?.tags?.join(', ') || 'Trap, DarkTrap, Ostentação, Superação, Mindset, Sucesso');
  
  const [suggestedNational, setSuggestedNational] = useState(initialSong?.suggestedArtistsNational?.join(', ') || initialSong?.suggestedArtists?.join(', ') || 'Matuê, WIU, Veigh, Teto, L7NNON, Orochi');
  const [suggestedInternational, setSuggestedInternational] = useState(initialSong?.suggestedArtistsInternational?.join(', ') || 'Travis Scott, Drake, Future, 21 Savage, Metro Boomin');
  
  const [registrationStatus, setRegistrationStatus] = useState(initialSong?.registrationStatus || 'Registro da Obra: Biblioteca Nacional (EDA) Nº 312.894.107 | Dominik Publishing');
  const [isrcCode, setIsrcCode] = useState(initialSong?.isrcCode || initialSong?.technicalSheet?.isrcCode || 'BR-DMK-26-00007');
  const [upcCode, setUpcCode] = useState(initialSong?.upcCode || initialSong?.technicalSheet?.upcCode || '7891000260007');
  const [iswcCode, setIswcCode] = useState(initialSong?.iswcCode || initialSong?.technicalSheet?.iswcCode || 'T-312.894.107-0');
  
  const [catalogDescription, setCatalogDescription] = useState(initialSong?.catalogDescription || initialSong?.history || '');
  const [history, setHistory] = useState(initialSong?.history || '');
  const [concept, setConcept] = useState(initialSong?.concept || '');
  const [lyricsSnippet, setLyricsSnippet] = useState(initialSong?.lyricsSnippet || '');
  
  const [demoType, setDemoType] = useState<'Trap' | 'TrapSoul' | 'DarkTrap' | 'HipHop'>(initialSong?.demoType || 'DarkTrap');
  const [spotifyUrl, setSpotifyUrl] = useState<string>(initialSong?.spotifyUrl || '');

  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioFileName, setAudioFileName] = useState<string>('');
  const [audioUrlInput, setAudioUrlInput] = useState<string>(initialSong?.audioUrl || '');

  if (!isOpen) return null;

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAudioFile(file);
      setAudioFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newSongId = initialSong?.id || `obra-${Date.now()}`;
    const codeNum = Math.floor(Math.random() * 900) + 100;

    const parsedMood = moodInput.split(',').map(s => s.trim()).filter(Boolean);
    const parsedInstruments = instrumentsInput.split(',').map(s => s.trim()).filter(Boolean);
    const parsedTags = tagsInput.split(',').map(s => s.trim()).filter(Boolean);
    const parsedNat = suggestedNational.split(',').map(s => s.trim()).filter(Boolean);
    const parsedInt = suggestedInternational.split(',').map(s => s.trim()).filter(Boolean);

    const songData: Song = {
      id: newSongId,
      code: initialSong?.code || `DP-${codeNum}`,
      title: title.trim(),
      genre: genre.trim(),
      composer: composer.trim(),
      artist: artist.trim(),
      mood: parsedMood.length > 0 ? parsedMood : ['Autoral', genre.trim()],
      instruments: parsedInstruments,
      tags: parsedTags,
      suggestedArtists: [...parsedNat, ...parsedInt],
      suggestedArtistsNational: parsedNat,
      suggestedArtistsInternational: parsedInt,
      coverUrl: initialSong?.coverUrl || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
      audioUrl: audioFile ? URL.createObjectURL(audioFile) : (audioUrlInput.trim() || initialSong?.audioUrl || '/audio/frequencia_manifestacao_demo.wav'),
      history: history.trim() || catalogDescription.trim() || 'Composição autoral desenvolvida por Luciana Domingos.',
      concept: concept.trim() || 'Obra musical autoral com arranjos modernos e alta identidade urbana.',
      catalogDescription: catalogDescription.trim() || history.trim(),
      language: 'Português (Brasil)',
      bpm: Number(bpm) || 128,
      key: key.trim() || 'C Menor',
      commercialPotential: 'Elevado potencial fonográfico para lançamentos, singles e trilhas sonoras.',
      lyricsSnippet: lyricsSnippet.trim() || 'Letra disponível sob consulta.',
      registrationStatus: registrationStatus.trim() || 'Registro da Obra: Biblioteca Nacional (EDA) | Dominik Publishing',
      iswcCode: iswcCode.trim(),
      isrcCode: isrcCode.trim() || `BR-DMK-26-${newSongId.slice(0, 5).toUpperCase()}`,
      upcCode: upcCode.trim() || `789${newSongId.slice(0, 6).replace(/\D/g, '0').padEnd(9, '1')}`,
      featured: true,
      demoType,
      spotifyUrl: spotifyUrl.trim() || undefined,
      customAudioName: audioFileName || initialSong?.customAudioName,
      hasCustomAudio: !!audioFile || !!initialSong?.hasCustomAudio,
      technicalSheet: {
        title: title.trim(),
        composer: composer.trim(),
        producers: 'Dominik',
        arrangers: 'Dominik',
        publishers: 'Dominik Publishing',
        releaseYear: '2026',
        genreDetails: genre.trim(),
        bpm: Number(bpm) || 128,
        key: key.trim(),
        iswcCode: iswcCode.trim(),
        isrcCode: isrcCode.trim() || `BR-DMK-26-${newSongId.slice(0, 5).toUpperCase()}`,
        upcCode: upcCode.trim() || `789${newSongId.slice(0, 6).replace(/\D/g, '0').padEnd(9, '1')}`,
        edaRegistration: registrationStatus.trim()
      }
    };

    onSaveSong(songData, audioFile || undefined);
    onClose();
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#222222] border-l-4 border-l-[#C5A059] shadow-2xl my-8 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 bg-black border border-[#222222] text-white/70 hover:text-white hover:border-[#C5A059] flex items-center justify-center transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C5A059] block mb-1">
            Gestão Autoral (Modo Autora)
          </span>
          <h3 className="font-serif italic text-2xl font-normal text-white flex items-center gap-2">
            <Plus className="w-5 h-5 text-[#C5A059]" />
            {initialSong ? 'Editar Obra do Catálogo' : 'Cadastrar Nova Obra no Catálogo'}
          </h3>
          <p className="text-xs text-white/60 font-light mt-1">
            Preencha os dados da composição e anexe o áudio demonstrativo (.mp3 / .wav) para publicação instantânea.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-xs">
          {/* SEÇÃO 1: INFORMAÇÕES BÁSICAS */}
          <div className="bg-[#181818] p-4 border border-[#222222] space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block">
              1. Identificação Básica
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                  Título da Obra *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Código Invicto"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                  Gênero Musical *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Trap / Dark Trap"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                  Compositor(a)
                </label>
                <input
                  type="text"
                  value={composer}
                  onChange={(e) => setComposer(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                  Artista / Voz Guia
                </label>
                <input
                  type="text"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                  BPM (Andamento)
                </label>
                <input
                  type="number"
                  value={bpm}
                  onChange={(e) => setBpm(Number(e.target.value))}
                  className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                  Tom (Tonalidade)
                </label>
                <input
                  type="text"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* SEÇÃO 2: MOOD, INSTRUMENTOS E TAGS */}
          <div className="bg-[#181818] p-4 border border-[#222222] space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block">
              2. Mood, Instrumentos & Tags
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                  Mood / Clima da Obra (separados por vírgula)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Sucesso, Superação, Energia, Poder, Prosperidade"
                  value={moodInput}
                  onChange={(e) => setMoodInput(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                  Tags da Música (separadas por vírgula)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Trap, DarkTrap, Ostentação, Mindset"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                Instrumentos & Elementos da Produção
              </label>
              <input
                type="text"
                placeholder="Ex: Bass 808 Sub Heavy, Sintetizadores de Onda Analógica, Hi-hats Duplos Trap, Snare Roll"
                value={instrumentsInput}
                onChange={(e) => setInstrumentsInput(e.target.value)}
                className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
              />
            </div>
          </div>

          {/* SEÇÃO 3: ARTISTAS SUGERIDOS (NACIONAL E INTERNACIONAL) */}
          <div className="bg-[#181818] p-4 border border-[#222222] space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block">
              3. Artistas Sugeridos (Nacional & Internacional)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-emerald-400 mb-1">
                  Artistas Sugeridos (Nacional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Matuê, WIU, Veigh, Teto, L7NNON, Orochi, KayBlack"
                  value={suggestedNational}
                  onChange={(e) => setSuggestedNational(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-emerald-400 p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-sky-400 mb-1">
                  Artistas Sugeridos (Internacional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Travis Scott, Drake, Future, 21 Savage, Metro Boomin"
                  value={suggestedInternational}
                  onChange={(e) => setSuggestedInternational(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-sky-400 p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* SEÇÃO 4: REGISTRO DA OBRA & CÓDIGOS ISWC/ISRC */}
          <div className="bg-[#181818] p-4 border border-[#222222] space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block">
              4. Registro da Obra & Códigos Fonográficos
            </span>
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-amber-400 mb-1">
                Nº do Registro da Obra / Status de Proteção (EDA / Biblioteca Nacional)
              </label>
              <input
                type="text"
                placeholder="Ex: Registro da Obra: Biblioteca Nacional (EDA) Nº 312.894.107 | Dominik Publishing"
                value={registrationStatus}
                onChange={(e) => setRegistrationStatus(e.target.value)}
                className="w-full bg-[#111111] border border-[#222222] text-amber-400 font-mono p-2.5 focus:border-[#C5A059] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-emerald-400 mb-1">
                  Código ISRC
                </label>
                <input
                  type="text"
                  placeholder="Ex: BR-DMK-26-00007"
                  value={isrcCode}
                  onChange={(e) => setIsrcCode(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-emerald-400 font-mono p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-[#C5A059] mb-1">
                  Código UPC / EAN
                </label>
                <input
                  type="text"
                  placeholder="Ex: 7891000260007"
                  value={upcCode}
                  onChange={(e) => setUpcCode(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-[#C5A059] font-mono p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-amber-400 mb-1">
                  Código ISWC
                </label>
                <input
                  type="text"
                  placeholder="Ex: T-312.894.107-0"
                  value={iswcCode}
                  onChange={(e) => setIswcCode(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-amber-400 font-mono p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* SEÇÃO 5: DESCRIÇÃO PARA O CATÁLOGO */}
          <div className="bg-[#181818] p-4 border border-[#222222] space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block">
              5. Descrição para o Catálogo Fonográfico
            </span>
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                Descrição para Catálogo / Apresentação Comercial
              </label>
              <textarea
                rows={3}
                placeholder="Ex: Faixa de alta pressão sonora para o mercado urbano. Apresenta o manifesto do Código Invicto com graves 808 potentes..."
                value={catalogDescription}
                onChange={(e) => setCatalogDescription(e.target.value)}
                className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                  Histórico da Obra
                </label>
                <textarea
                  rows={2}
                  placeholder="Descreva a inspiração ou histórico da composição..."
                  value={history}
                  onChange={(e) => setHistory(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                  Conceito Artístico
                </label>
                <textarea
                  rows={2}
                  placeholder="Explique o conceito ou narrativa da música..."
                  value={concept}
                  onChange={(e) => setConcept(e.target.value)}
                  className="w-full bg-[#111111] border border-[#222222] text-white p-2.5 focus:border-[#C5A059] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* SEÇÃO 6: SPOTIFY & ÁUDIO */}
          <div className="bg-[#181818] p-4 border border-[#222222] space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block">
              6. Link do Spotify & Anexo de Áudio
            </span>
            <div className="p-3 bg-[#111111] border border-[#1DB954]/40 rounded-sm">
              <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1DB954] mb-1 flex items-center justify-between">
                <span>Link do Spotify (quando lançada)</span>
                <span className="text-[9px] text-white/40 font-mono">https://open.spotify.com/track/...</span>
              </label>
              <input
                type="url"
                placeholder="Ex: https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT"
                value={spotifyUrl}
                onChange={(e) => setSpotifyUrl(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#222222] text-emerald-400 p-2.5 focus:border-[#1DB954] focus:outline-none font-mono"
              />
            </div>

            <div className="p-3 bg-[#111111] border border-[#C5A059]/40 rounded-sm">
              <label className="block text-[10px] uppercase font-bold tracking-wider text-[#C5A059] mb-2 flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#C5A059]" />
                Anexar Arquivo de Áudio / Guia (.mp3, .wav, .m4a)
              </label>
              <input
                type="file"
                accept="audio/*"
                onChange={handleAudioChange}
                className="block w-full text-xs text-white/70 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-bold file:uppercase file:bg-[#C5A059] file:text-black hover:file:bg-white cursor-pointer"
              />
              {audioFileName && (
                <p className="text-[11px] text-emerald-400 font-mono mt-2 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Áudio selecionado: {audioFileName}
                </p>
              )}
            </div>
          </div>

          {/* SEÇÃO 7: LETRA COMPLETA */}
          <div className="bg-[#181818] p-4 border border-[#C5A059]/50 rounded-sm space-y-2">
            <label className="block text-[10px] uppercase font-bold tracking-wider text-[#C5A059] flex items-center justify-between">
              <span>7. Letra Completa / Composição Musical (Editável)</span>
              <span className="text-[9px] text-white/40 font-mono">Estrutura: [Intro], [Verse], [Chorus], [Outro]</span>
            </label>
            <textarea
              rows={14}
              placeholder="Digite ou cole a letra completa da música aqui..."
              value={lyricsSnippet}
              onChange={(e) => setLyricsSnippet(e.target.value)}
              className="w-full bg-[#111111] border border-[#222222] text-white p-3 focus:border-[#C5A059] focus:outline-none font-mono text-xs leading-relaxed"
            />
            <p className="text-[10px] text-white/40">
              Permite inserir e editar a letra completa da composição a qualquer momento.
            </p>
          </div>

          <div className="pt-4 border-t border-[#222222] flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#181818] text-white/70 hover:text-white border border-[#222222] text-xs font-bold uppercase tracking-wider"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4" />
              <span>Salvar Alterações e Publicar no Catálogo</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
