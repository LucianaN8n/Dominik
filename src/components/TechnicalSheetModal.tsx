import React, { useState, useEffect } from 'react';
import { Song, SongTechnicalSheet } from '../types';
import { X, FileSpreadsheet, ShieldCheck, Edit3, Save, Copy, Check, Download, Info, Building2, Music, UserCheck, Disc, FileText } from 'lucide-react';

interface TechnicalSheetModalProps {
  song: Song | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveTechnicalSheet: (songId: string, sheet: SongTechnicalSheet) => void;
  isAuthorMode?: boolean;
  onOpenAuthorAuth?: () => void;
}

export const TechnicalSheetModal: React.FC<TechnicalSheetModalProps> = ({
  song,
  isOpen,
  onClose,
  onSaveTechnicalSheet,
  isAuthorMode,
  onOpenAuthorAuth,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  // Form state initialized with song data
  const [formData, setFormData] = useState<SongTechnicalSheet>({});

  useEffect(() => {
    if (song) {
      setFormData({
        code: song.technicalSheet?.code || song.code || 'DP-001',
        title: song.technicalSheet?.title || song.title,
        composer: song.technicalSheet?.composer || song.composer || 'Luciana Domingos (Lyra)',
        producers: song.technicalSheet?.producers || 'Dominik',
        arrangers: song.technicalSheet?.arrangers || 'Dominik',
        performers: song.technicalSheet?.performers || song.artist || 'Dominik',
        publishers: song.technicalSheet?.publishers || 'Dominik Records Publishing / UBC',
        isrcCode: song.technicalSheet?.isrcCode || `BR-DMK-26-${song.id.slice(0, 5).toUpperCase()}`,
        iswcCode: song.technicalSheet?.iswcCode || song.iswcCode || 'T-312.894.100-0',
        edaRegistration: song.technicalSheet?.edaRegistration || 'Reg. EDA / Biblioteca Nacional',
        releaseYear: song.technicalSheet?.releaseYear || '2026',
        genreDetails: song.technicalSheet?.genreDetails || song.genre,
        bpm: song.technicalSheet?.bpm || song.bpm,
        key: song.technicalSheet?.key || song.key,
        mixMaster: song.technicalSheet?.mixMaster || 'Dominik Studios (São Paulo, BR)',
        rightsOwner: song.technicalSheet?.rightsOwner || 'Luciana Domingos & Dominik Records (100% Autoral e Licenciável)',
        status: song.technicalSheet?.status || '🟢 Disponível para licenciamento',
        notes: song.technicalSheet?.notes || song.concept || 'Uma composição sobre força, identidade e autoconfiança. Criada para artistas que desejam interpretar uma narrativa de transformação e empoderamento feminino.',
      });
      setIsEditing(false);
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

  const handleInputChange = (field: keyof SongTechnicalSheet, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveTechnicalSheet(song.id, formData);
    setIsEditing(false);
    setSaveMessage('Ficha Técnica atualizada e salva com sucesso!');
    setTimeout(() => setSaveMessage(null), 4000);
  };

  const formattedSheetText = `
====================================================
           FICHA TÉCNICA DA OBRA MUSICAL
                DOMINIK RECORDS
====================================================

• Título da Obra: ${formData.title}
• Gênero Musical: ${formData.genreDetails}
• Composição / Autoria: ${formData.composer}
• Produtor(es) Musical(is): ${formData.producers}
• Arranjador(es): ${formData.arrangers}
• Intérprete / Voz: ${formData.performers}
• Editora / Publishing: ${formData.publishers}
• Titular dos Direitos: ${formData.rightsOwner}

----------------------------------------------------
               IDENTIFICAÇÃO JURÍDICA
----------------------------------------------------
• Registro da Obra:
  ✔ Obra original
  ✔ Direitos autorais protegidos internacionalmente
  ✔ Registro de autoria
  ✔ Disponível para licenciamento
• Registro EDA / Bib. Nacional: ${formData.edaRegistration}
• Ano de Registro / Lançamento: ${formData.releaseYear}
• Andamento (BPM) & Tom: ${formData.bpm} BPM | ${formData.key}
• Mixagem & Masterização: ${formData.mixMaster}

----------------------------------------------------
                     OBSERVAÇÕES
----------------------------------------------------
${formData.notes}

====================================================
Dominik Records • Todos os Direitos Reservados
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedSheetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([formattedSheetText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Ficha_Tecnica_${song.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-300"
    >
      <div className="min-h-full flex items-start sm:items-center justify-center py-4 sm:py-8">
        <div className="relative w-full max-w-4xl bg-[#111111] border border-[#222222] border-l-4 border-l-[#C5A059] shadow-2xl">
        {/* HEADER BAR */}
        <div className="p-6 bg-[#181818] border-b border-[#222222] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C5A059]/10 border border-[#C5A059] flex items-center justify-center shrink-0">
              <FileSpreadsheet className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A059] block">
                Catálogo Oficial • Dominik Records
              </span>
              <h2 className="font-serif italic text-2xl font-normal text-white">
                Ficha Técnica da Obra — {song.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 bg-black border border-[#222222] text-white/70 hover:text-white hover:border-[#C5A059] flex items-center justify-center transition-all"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* TOP CONTROLS & STATUS STRIP */}
        <div className="px-6 py-4 bg-black/60 border-b border-[#222222] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Documento Registrado</span>
            </span>
            <span className="bg-[#181818] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-bold uppercase tracking-wider px-3 py-1">
              Registro da Obra (Protegida)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isAuthorMode ? (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all shadow-xl border ${
                  isEditing
                    ? 'bg-amber-500 text-black border-amber-400'
                    : 'bg-[#C5A059] hover:bg-white text-black border-[#C5A059]'
                }`}
              >
                <Edit3 className="w-4 h-4" />
                <span>{isEditing ? '👁️ Visualizar Ficha' : '✏️ Inserir e Editar Informações'}</span>
              </button>
            ) : (
              <button
                onClick={() => onOpenAuthorAuth?.()}
                className="px-3.5 py-2 bg-[#181818] hover:bg-[#C5A059] text-[#C5A059] hover:text-black border border-[#C5A059]/40 hover:border-[#C5A059] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
                title="Área Restrita da Autora (Luciana) - Ativar Edição"
              >
                <span>🔒 Acesso Autora</span>
              </button>
            )}

            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-[#181818] hover:bg-white text-white hover:text-black border border-[#222222] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
              title="Copiar Ficha Técnica completa"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#C5A059]" />}
              <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-4 py-2 bg-[#C5A059] text-black hover:bg-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
              title="Baixar Ficha Técnica (.txt)"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Baixar (.txt)</span>
            </button>
          </div>
        </div>

        {/* FEEDBACK SUCCESS MESSAGE */}
        {saveMessage && (
          <div className="mx-6 mt-4 p-3 bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{saveMessage}</span>
          </div>
        )}

        {/* MAIN CONTENT AREA: VIEW OR EDIT FORM */}
        <div className="p-6 sm:p-8 space-y-8">
          {isEditing ? (
            /* EDIT FORM MODE */
            <form onSubmit={handleSave} className="space-y-6">
              <div className="p-4 bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Edite ou preencha os dados técnicos da obra. Todas as alterações serão salvas permanentemente no seu navegador!
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Código de Identificação da Obra
                  </label>
                  <input
                    type="text"
                    value={formData.code || ''}
                    onChange={(e) => handleInputChange('code', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-[#C5A059] font-mono font-bold text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                    placeholder="Ex: DP-001"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Status de Licenciamento
                  </label>
                  <input
                    type="text"
                    value={formData.status || ''}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-emerald-400 font-bold text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                    placeholder="Ex: 🟢 Disponível para licenciamento"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Título Oficial da Obra
                  </label>
                  <input
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Composição / Autoria (Compositores)
                  </label>
                  <input
                    type="text"
                    value={formData.composer || ''}
                    onChange={(e) => handleInputChange('composer', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Produtores Musicais / Beatmakers
                  </label>
                  <input
                    type="text"
                    value={formData.producers || ''}
                    onChange={(e) => handleInputChange('producers', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Arranjadores
                  </label>
                  <input
                    type="text"
                    value={formData.arrangers || ''}
                    onChange={(e) => handleInputChange('arrangers', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Intérprete / Voz Guia / Artista
                  </label>
                  <input
                    type="text"
                    value={formData.performers || ''}
                    onChange={(e) => handleInputChange('performers', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Editora / Co-Publishing
                  </label>
                  <input
                    type="text"
                    value={formData.publishers || ''}
                    onChange={(e) => handleInputChange('publishers', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2 bg-[#181818] p-4 border border-[#C5A059]/30">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-2">
                    Registro da Obra
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <span>✔</span> Obra original
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <span>✔</span> Direitos autorais protegidos internacionalmente
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <span>✔</span> Registro de autoria
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <span>✔</span> Disponível para licenciamento
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Registro EDA / Biblioteca Nacional
                  </label>
                  <input
                    type="text"
                    value={formData.edaRegistration || ''}
                    onChange={(e) => handleInputChange('edaRegistration', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Ano de Composição / Registro
                  </label>
                  <input
                    type="text"
                    value={formData.releaseYear || ''}
                    onChange={(e) => handleInputChange('releaseYear', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Mixagem & Masterização
                  </label>
                  <input
                    type="text"
                    value={formData.mixMaster || ''}
                    onChange={(e) => handleInputChange('mixMaster', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Titular dos Direitos Patrimoniais
                  </label>
                  <input
                    type="text"
                    value={formData.rightsOwner || ''}
                    onChange={(e) => handleInputChange('rightsOwner', e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                  Observações Técnicas & Licenciamento
                </label>
                <textarea
                  rows={3}
                  value={formData.notes || ''}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="w-full bg-[#181818] border border-[#222222] text-white text-xs p-3 focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#222222]">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 bg-[#181818] text-white/70 hover:text-white border border-[#222222] text-xs font-bold uppercase tracking-wider"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#C5A059] hover:bg-white text-black font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 transition-all shadow-xl"
                >
                  <Save className="w-4 h-4" />
                  <span>Salvar Informações da Obra</span>
                </button>
              </div>
            </form>
          ) : (
            /* VIEW FORM CERTIFICATE MODE */
            <div className="space-y-8">
              {/* FORMAL CERTIFICATE CARD HEADER */}
              <div className="bg-gradient-to-r from-[#181818] via-[#1c1a14] to-[#181818] p-6 border border-[#C5A059]/40 relative overflow-hidden shadow-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={song.coverUrl}
                      alt={song.title}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 object-cover border border-[#C5A059]/50 shadow-md shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#C5A059]">
                          Ficha Técnica Certificada
                        </span>
                        {formData.code && (
                          <span className="text-[10px] bg-[#C5A059] text-black font-bold uppercase font-mono px-2 py-0.5">
                            {formData.code}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif italic text-2xl text-white mt-0.5">{formData.title}</h3>
                      <p className="text-xs text-white/60 font-light mt-0.5">
                        {formData.genreDetails} • {formData.bpm} BPM • {formData.key}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 block">
                      Status de Licenciamento
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 inline-flex items-center gap-1.5 mt-1">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>{formData.status || '🟢 Disponível para licenciamento'}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* GRID OF CREDITS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#181818] p-5 border border-[#222222] border-l-2 border-l-[#C5A059]">
                  <div className="flex items-center gap-2 mb-2 text-[#C5A059]">
                    <UserCheck className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Composição / Autoria</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{formData.composer}</p>
                </div>

                <div className="bg-[#181818] p-5 border border-[#222222] border-l-2 border-l-[#C5A059]">
                  <div className="flex items-center gap-2 mb-2 text-[#C5A059]">
                    <Disc className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Produção Musical</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{formData.producers}</p>
                </div>

                <div className="bg-[#181818] p-5 border border-[#222222] border-l-2 border-l-[#C5A059]">
                  <div className="flex items-center gap-2 mb-2 text-[#C5A059]">
                    <Music className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Intérprete / Voz</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{formData.performers}</p>
                </div>

                <div className="bg-[#181818] p-5 border border-[#222222]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block mb-1">
                    Arranjos
                  </span>
                  <p className="text-xs font-medium text-white">{formData.arrangers}</p>
                </div>

                <div className="bg-[#181818] p-5 border border-[#222222]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block mb-1">
                    Editora / Co-Publishing
                  </span>
                  <p className="text-xs font-medium text-white">{formData.publishers}</p>
                </div>

                <div className="bg-[#181818] p-5 border border-[#222222]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block mb-1">
                    Titular dos Direitos
                  </span>
                  <p className="text-xs font-medium text-white">{formData.rightsOwner}</p>
                </div>

                <div className="sm:col-span-2 bg-[#181818] p-5 border border-[#C5A059]/40">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
                    Registro da Obra
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-white/90">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <span>✔</span> Obra original
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <span>✔</span> Direitos autorais protegidos internacionalmente
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <span>✔</span> Registro de autoria
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <span>✔</span> Disponível para licenciamento
                    </div>
                  </div>
                </div>

                <div className="bg-[#181818] p-5 border border-[#222222]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block mb-1">
                    Registro EDA / Biblioteca Nacional
                  </span>
                  <p className="text-xs font-medium text-emerald-400">{formData.edaRegistration}</p>
                </div>

                <div className="bg-[#181818] p-5 border border-[#222222]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block mb-1">
                    Ano de Composição
                  </span>
                  <p className="text-xs font-medium text-white">{formData.releaseYear}</p>
                </div>

                <div className="bg-[#181818] p-5 border border-[#222222]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block mb-1">
                    Mixagem & Masterização
                  </span>
                  <p className="text-xs font-medium text-white">{formData.mixMaster}</p>
                </div>

                <div className="bg-[#181818] p-5 border border-[#222222]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block mb-1">
                    Andamento & Tom
                  </span>
                  <p className="text-xs font-medium text-white">
                    {formData.bpm} BPM • {formData.key}
                  </p>
                </div>
              </div>

              {/* NOTES */}
              {formData.notes && (
                <div className="bg-[#181818] p-6 border border-[#222222]">
                  <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Observações Técnicas & Conceito</span>
                  </div>
                  <p className="text-xs text-white/80 font-light leading-relaxed italic">
                    {formData.notes}
                  </p>
                </div>
              )}

              {/* EDIT & INSERT DATA CALLOUT BANNER - AUTHOR MODE ONLY */}
              {isAuthorMode ? (
                <div className="p-6 bg-gradient-to-r from-[#181818] via-[#1c1a14] to-[#181818] border border-[#C5A059] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center shrink-0">
                      <Edit3 className="w-5 h-5 text-[#C5A059]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Modo Autora Ativo: Edição Liberada</h4>
                      <p className="text-xs text-white/60">Edite, atualize ou personalize campos de compositores, registro da obra e notas desta ficha técnica.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-3 bg-[#C5A059] hover:bg-white text-black font-extrabold text-xs uppercase tracking-[0.2em] flex items-center gap-2 transition-all shrink-0 shadow-xl"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>✏️ Inserir / Editar Ficha</span>
                  </button>
                </div>
              ) : (
                <div className="p-4 bg-[#111111] border border-[#222222] flex items-center justify-between text-xs text-white/50">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Ficha técnica oficial registrada pela Dominik Records e editora. Modo de leitura pública.</span>
                  </span>
                  <button
                    onClick={() => onOpenAuthorAuth?.()}
                    className="text-[#C5A059] hover:underline text-[10px] uppercase font-bold tracking-wider shrink-0"
                  >
                    Área da Compositora »
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="p-6 bg-[#181818] border-t border-[#222222] flex items-center justify-between">
          <span className="text-xs text-white/40 font-mono">
            Dominik Records • Licenciamento e Direitos Autorais
          </span>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-black border border-[#222222] text-white hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
);
};
