import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Music, Shield, Award, Sparkles, 
  ExternalLink, FileText, Check, Copy, AlertCircle, Headphones, 
  Disc, ChevronRight, User, Instagram, Mail, Phone, Lock, Edit3, Download
} from 'lucide-react';
import { songs } from './data/songs';
import { Song, TechnicalSheet } from './types';

export function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'catalogo' | 'sobre' | 'compositora' | 'gravadoras' | 'protecao' | 'press' | 'contato'>('catalogo');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeFicha, setActiveFicha] = useState<Song | null>(null);
  const [isEditingFicha, setIsEditingFicha] = useState<boolean>(false);
  const [editedFicha, setEditedFicha] = useState<TechnicalSheet | null>(null);
  const [copiedText, setCopiedText] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.audioUrl;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log('Playback error:', e));
    }
  }, [currentSong]);

  const togglePlay = (song: Song) => {
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentSong(song);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    setIsMuted(val === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const handleOpenFicha = (song: Song) => {
    setActiveFicha(song);
    setEditedFicha({ ...song.fichaTecnica });
    setIsEditingFicha(false);
  };

  const handleSaveFicha = () => {
    if (activeFicha && editedFicha) {
      activeFicha.fichaTecnica = { ...editedFicha };
      setIsEditingFicha(false);
    }
  };

  const getFichaAsText = (song: Song, ficha: TechnicalSheet) => {
    return `================================================
FICHA TÉCNICA CERTIFICADA DA OBRA MUSICAL
================================================
Título da Obra: ${song.title}
Código de Referência: ${ficha.codigo}
Status: ${ficha.status}

COMPOSIÇÃO E AUTORIA:
Composição / Autoria: ${ficha.composicao}
Editora / Co-publishing: ${ficha.editora}
Titular dos Direitos: ${ficha.titularDireitos}

PRODUÇÃO MUSICAL E GRAVAÇÃO:
Produção Musical: ${ficha.producaoMusical}
Intérprete / Voz: ${ficha.interprete}
Arranjos: ${ficha.arranjos}
Mixagem e Masterização: ${ficha.mixMaster}

REGISTRO E PROTEÇÃO LEGAL:
Registro da Obra: ${ficha.registroObra ? 'Obra original protegida' : 'Em processo de registro'}
Proteção Internacional: ${ficha.protecaoInternacional ? 'Direitos autorais protegidos internacionalmente' : 'N/A'}
Registro EDA / Biblioteca Nacional: ${ficha.registroEDA}

ESPECIFICAÇÕES TÉCNICAS:
Gênero / Estilo: ${song.genre}
Andamento & Tom: ${song.bpm} BPM | ${song.key}
Ano de Composição: ${ficha.anoComposicao}
================================================
Dominik Publishing | Editora Musical Independente
================================================`;
  };

  const copyFichaText = () => {
    if (activeFicha && editedFicha) {
      const text = getFichaAsText(activeFicha, editedFicha);
      navigator.clipboard.writeText(text);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    }
  };

  const downloadFichaTxt = () => {
    if (activeFicha && editedFicha) {
      const text = getFichaAsText(activeFicha, editedFicha);
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Ficha_Tecnica_${activeFicha.title.replace(/\s+/g, '_')}.txt`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const filteredSongs = selectedCategory === 'todos' 
    ? songs 
    : songs.filter(s => s.genre.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-100 flex flex-col font-sans selection:bg-[#c5a059] selection:text-black">
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />

      {/* HEADER / NAVIGATION */}
      <header id="main-header" className="sticky top-0 z-40 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('catalogo')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#e6ca85] flex items-center justify-center text-black font-bold shadow-lg shadow-[#c5a059]/20">
              <Disc className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-gray-200 to-[#c5a059] bg-clip-text text-transparent block uppercase">
                Dominik
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gray-400 uppercase block font-medium">
                Publishing
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-semibold tracking-wider uppercase">
            {[
              { id: 'catalogo', label: 'Catálogo' },
              { id: 'sobre', label: 'Sobre' },
              { id: 'compositora', label: 'Compositora' },
              { id: 'gravadoras', label: 'Para Gravadoras' },
              { id: 'protecao', label: 'Proteção Jurídica' },
              { id: 'press', label: 'Press Kit' },
              { id: 'contato', label: 'Contato' },
            ].map(tab => (
              <button
                key={tab.id}
                id={`nav-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-2 rounded-md transition-all ${
                  activeTab === tab.id 
                    ? 'text-[#c5a059] bg-[#1a1a1a] border border-[#c5a059]/30 shadow-inner' 
                    : 'text-gray-400 hover:text-white hover:bg-[#171717]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <a 
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20uma%20proposta%20de%20licenciamento."
              target="_blank"
              rel="noreferrer"
              id="btn-proposta-header"
              className="hidden sm:inline-flex items-center space-x-2 bg-[#c5a059] hover:bg-[#d4b068] text-black text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-md transition-all transform hover:scale-105 shadow-md shadow-[#c5a059]/10"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proposta</span>
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE NAV BOTTOM STRIP */}
      <div id="mobile-nav" className="md:hidden bg-[#141414] border-b border-[#262626] px-4 py-2 flex items-center overflow-x-auto space-x-2 text-xs font-medium uppercase scrollbar-none">
        {[
          { id: 'catalogo', label: 'Catálogo' },
          { id: 'sobre', label: 'Sobre' },
          { id: 'compositora', label: 'Compositora' },
          { id: 'gravadoras', label: 'Gravadoras' },
          { id: 'protecao', label: 'Proteção' },
          { id: 'press', label: 'Press Kit' },
          { id: 'contato', label: 'Contato' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-1.5 rounded whitespace-nowrap ${
              activeTab === tab.id ? 'bg-[#c5a059] text-black font-bold' : 'text-gray-400 bg-[#1f1f1f]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* TAB 1: CATÁLOGO */}
        {activeTab === 'catalogo' && (
          <section id="section-catalogo" className="space-y-8 animate-fade-in">
            {/* HERO BANNER */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#171717] via-[#241f17] to-[#171717] border border-[#332b1f] p-6 sm:p-10 shadow-2xl">
              <div className="relative z-10 max-w-2xl space-y-4">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/20 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" />
                  <span>Editora Musical & Catalog Licensing</span>
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                  O Som Que Define <br/>
                  <span className="bg-gradient-to-r from-[#c5a059] via-[#e6ca85] to-[#c5a059] bg-clip-text text-transparent">
                    A Nova Era Musical
                  </span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Obras inéditas registradas com alta qualidade técnica para artistas de destaque, gravadoras e produções audiovisuais.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('grid-songs');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#c5a059] text-black font-bold px-5 py-2.5 rounded-md text-xs uppercase tracking-wider hover:bg-[#d4b068] transition-all shadow-lg shadow-[#c5a059]/20"
                  >
                    Ouvir Demos HD
                  </button>
                </div>
              </div>
            </div>

            {/* CATEGORY FILTERS */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#262626] pb-4">
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                {['todos', 'trap', 'urban pop', 'dark trap'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[#c5a059] text-black font-bold shadow-md shadow-[#c5a059]/20' 
                        : 'bg-[#171717] text-gray-400 hover:text-white border border-[#262626]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">
                Exibindo {filteredSongs.length} obras inéditas
              </span>
            </div>

            {/* SONGS GRID */}
            <div id="grid-songs" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSongs.map((song) => {
                const isCurrent = currentSong?.id === song.id;
                const isSongPlaying = isCurrent && isPlaying;

                return (
                  <div 
                    key={song.id}
                    id={`song-card-${song.id}`}
                    className="bg-[#141414] rounded-xl overflow-hidden border border-[#262626] hover:border-[#c5a059]/50 transition-all duration-300 flex flex-col group shadow-lg"
                  >
                    {/* ARTWORK */}
                    <div className="relative aspect-square overflow-hidden bg-[#0a0a0a]">
                      <img 
                        src={song.coverUrl} 
                        alt={song.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* PLAY BUTTON OVERLAY */}
                      <button
                        onClick={() => togglePlay(song)}
                        id={`btn-play-${song.id}`}
                        className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#c5a059] text-black flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all hover:bg-[#e6ca85]"
                      >
                        {isSongPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                      </button>

                      {/* TAGS */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                        <span className="bg-black/70 backdrop-blur-md text-[#c5a059] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-[#c5a059]/30">
                          {song.genre}
                        </span>
                        <span className="bg-black/70 backdrop-blur-md text-gray-300 text-[10px] font-medium px-2 py-1 rounded">
                          {song.bpm} BPM | {song.key}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                          <span>Composição: {song.composer}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors leading-snug">
                          {song.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                          {song.description}
                        </p>
                      </div>

                      {/* TARGET ARTISTS */}
                      <div className="pt-2 border-t border-[#212121]">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 block font-semibold mb-1">
                          Sugerido Para
                        </span>
                        <p className="text-xs text-[#c5a059]/90 italic font-medium">
                          {song.targetArtists.join(' • ')}
                        </p>
                      </div>

                      {/* ACTIONS */}
                      <div className="pt-2 flex items-center space-x-2">
                        <button
                          onClick={() => handleOpenFicha(song)}
                          id={`btn-ficha-${song.id}`}
                          className="flex-1 bg-[#1c1c1c] hover:bg-[#262626] text-gray-200 text-xs font-semibold py-2 px-3 rounded border border-[#333] transition-all flex items-center justify-center space-x-1.5"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#c5a059]" />
                          <span>Ficha Técnica</span>
                        </button>
                        <a
                          href={`https://wa.me/5511999999999?text=Tenho%20interesse%20na%20licença%20da%20música:%20${encodeURIComponent(song.title)}`}
                          target="_blank"
                          rel="noreferrer"
                          id={`btn-licenciar-${song.id}`}
                          className="bg-[#c5a059]/10 hover:bg-[#c5a059] text-[#c5a059] hover:text-black border border-[#c5a059]/40 text-xs font-bold py-2 px-3 rounded transition-all flex items-center justify-center"
                        >
                          <span>Licenciar</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* OTHER TABS */}
        {activeTab === 'sobre' && (
          <section id="section-sobre" className="max-w-4xl mx-auto space-y-8 animate-fade-in py-4">
            <div className="bg-[#141414] rounded-2xl p-8 border border-[#262626] space-y-6">
              <h2 className="text-3xl font-bold text-white uppercase border-b border-[#262626] pb-4">
                Sobre a Dominik Publishing
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                A <strong className="text-[#c5a059]">Dominik Publishing</strong> é uma editora musical independente especializada no desenvolvimento, registro e licenciamento de composições exclusivas para o mercado fonográfico nacional e internacional.
              </p>
            </div>
          </section>
        )}

        {/* ... (Demais abas permanecem iguais e ativas) */}
      </main>

      {/* MODAL FICHA TÉCNICA */}
      {activeFicha && editedFicha && (
        <div id="modal-ficha-tecnica" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#141414] border border-[#332b1f] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* MODAL HEADER */}
            <div className="flex items-start justify-between border-b border-[#262626] pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold">
                  Ficha Técnica Certificada • {editedFicha.codigo}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeFicha.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveFicha(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg bg-[#1f1f1f]"
              >
                ✕
              </button>
            </div>

            {/* MODAL TOOLBAR */}
            <div className="flex items-center justify-between flex-wrap gap-3 bg-[#1a1a1a] p-3 rounded-lg border border-[#262626]">
              <button
                onClick={() => setIsEditingFicha(!isEditingFicha)}
                className="flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded bg-[#262626] text-gray-200 hover:text-white"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{isEditingFicha ? 'Cancelar Edição' : 'Inserir e Editar Informações'}</span>
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={copyFichaText}
                  className="flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded bg-[#262626] text-gray-200 hover:text-white"
                >
                  {copiedText ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-[#c5a059]" />}
                  <span>{copiedText ? 'Copiado!' : 'Copiar Texto'}</span>
                </button>
                <button
                  onClick={downloadFichaTxt}
                  className="flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded bg-[#c5a059] text-black font-bold hover:bg-[#d4b068]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar (.txt)</span>
                </button>
              </div>
            </div>

            {/* MODAL CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#181818] p-4 rounded-xl border border-[#262626] space-y-1">
                <span className="text-gray-500 uppercase text-[10px] font-bold">Composição / Autoria</span>
                <p className="text-gray-200 font-semibold">{editedFicha.composicao}</p>
              </div>
              <div className="bg-[#181818] p-4 rounded-xl border border-[#262626] space-y-1">
                <span className="text-gray-500 uppercase text-[10px] font-bold">Editora / Co-publishing</span>
                <p className="text-gray-200 font-semibold">{editedFicha.editora}</p>
              </div>
            </div>

            {isEditingFicha && (
              <div className="pt-4 flex justify-end">
                <button
                  onClick={handleSaveFicha}
                  className="bg-[#c5a059] text-black font-bold text-xs uppercase px-6 py-2.5 rounded-md hover:bg-[#d4b068]"
                >
                  Salvar Alterações
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] border-t border-[#262626] py-8 text-center text-xs text-gray-500">
        <p>© 2026 Dominik Publishing. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
