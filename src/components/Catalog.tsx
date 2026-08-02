import React, { useState, useMemo } from 'react';
import { Song } from '../types';
import { SongCard } from './SongCard';
import { Filter, Music, Sparkles, SlidersHorizontal, Search } from 'lucide-react';

interface CatalogProps {
  songs: Song[];
  onViewDetails: (song: Song) => void;
  onViewTechnicalSheet?: (song: Song) => void;
  onUpdateAudio?: (songId: string, newAudioUrl: string, file?: File | Blob, fileName?: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isAuthorMode?: boolean;
  onAddNewSong?: () => void;
}

export const Catalog: React.FC<CatalogProps> = ({
  songs,
  onViewDetails,
  onViewTechnicalSheet,
  onUpdateAudio,
  searchTerm,
  setSearchTerm,
  isAuthorMode,
  onAddNewSong
}) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('Todos');
  const [selectedMood, setSelectedMood] = useState<string>('Todos');

  // Extract unique genres and moods cleanly
  const genres = useMemo(() => {
    const set = new Set<string>();
    songs.forEach((s) => {
      // Add individual genre components as well as full string
      s.genre.split('/').forEach((g) => set.add(g.trim()));
    });
    return ['Todos', ...Array.from(set)];
  }, [songs]);

  const moods = useMemo(() => {
    const set = new Set<string>();
    songs.forEach((s) => s.mood.forEach((m) => set.add(m)));
    return ['Todos', ...Array.from(set)];
  }, [songs]);

  // Filter songs
  const filteredSongs = useMemo(() => {
    return songs.filter((song) => {
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        song.title.toLowerCase().includes(query) ||
        song.genre.toLowerCase().includes(query) ||
        song.composer.toLowerCase().includes(query) ||
        (song.artist && song.artist.toLowerCase().includes(query)) ||
        song.suggestedArtists.some((a) => a.toLowerCase().includes(query)) ||
        song.mood.some((m) => m.toLowerCase().includes(query));

      const matchesGenre =
        selectedGenre === 'Todos' ||
        song.genre.toLowerCase().includes(selectedGenre.toLowerCase());

      const matchesMood = selectedMood === 'Todos' || song.mood.includes(selectedMood);

      return matchesSearch && matchesGenre && matchesMood;
    });
  }, [songs, searchTerm, selectedGenre, selectedMood]);

  return (
    <section id="catalogo" className="py-24 bg-[#0a0a0a] relative border-t border-[#222222]">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#222222] pb-8">
          <div>
            <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-2">
              Destaques do Catálogo
            </span>
            <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white">
              Catálogo de Obras
            </h2>
            <p className="text-white/50 text-sm sm:text-base mt-2 max-w-xl font-light italic">
              Obras autorais desenvolvidas com excelência melódica para grandes projetos fonográficos e audiovisuais.
            </p>
          </div>

          {/* TOTAL METRIC & AUTHOR ACTION */}
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {isAuthorMode && onAddNewSong && (
              <button
                onClick={onAddNewSong}
                className="bg-[#C5A059] hover:bg-white text-black font-extrabold text-xs uppercase tracking-[0.2em] px-5 py-3.5 flex items-center justify-center gap-2 transition-all shadow-xl"
              >
                <Sparkles className="w-4 h-4" />
                <span>Cadastrar Nova Obra</span>
              </button>
            )}
            <div className="bg-[#111111] px-6 py-3.5 border border-[#222222] border-l-2 border-l-[#C5A059] flex items-center gap-4">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block">Disponíveis</span>
                <span className="font-serif text-2xl text-white italic">{filteredSongs.length} Obras</span>
              </div>
            </div>
          </div>
        </div>

        {/* FILTERS & SEARCH STRIP */}
        <div className="bg-[#111111] p-5 border border-[#222222] mb-12 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* SEARCH INPUT */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por título, artista sugerido, gênero..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm pl-10 pr-4 py-2.5 focus:border-[#C5A059] focus:outline-none transition-colors tracking-wide"
              />
            </div>

            {/* GENRE FILTER BUTTONS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 whitespace-nowrap mr-1">
                Gênero:
              </span>
              {genres.map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGenre(g)}
                  className={`px-3.5 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase whitespace-nowrap transition-all border ${
                    selectedGenre === g
                      ? 'bg-[#C5A059] text-black border-[#C5A059]'
                      : 'bg-[#181818] text-white/60 hover:text-white border-[#222222]'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* MOOD FILTER CHIPS */}
          <div className="pt-3 border-t border-[#222222] flex items-center gap-2 overflow-x-auto scrollbar-none">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 shrink-0">
              Vibe:
            </span>
            {moods.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMood(m)}
                className={`px-3 py-1 text-[10px] uppercase tracking-wider whitespace-nowrap transition-all border ${
                  selectedMood === m
                    ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#C5A059] font-bold'
                    : 'bg-[#151515] border-[#222222] text-white/50 hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* SONG CARDS GRID */}
        {filteredSongs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSongs.map((song) => (
              <SongCard
                key={song.id}
                song={song}
                onViewDetails={onViewDetails}
                onViewTechnicalSheet={onViewTechnicalSheet}
                onUpdateAudio={onUpdateAudio}
                isAuthorMode={isAuthorMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-matte-card rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-sm">Nenhuma música encontrada com os filtros selecionados.</p>
            <button
              onClick={() => {
                setSelectedGenre('Todos');
                setSelectedMood('Todos');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
