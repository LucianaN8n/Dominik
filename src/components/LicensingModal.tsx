import React, { useState, useEffect } from 'react';
import { Song, LicensingRequest } from '../types';
import { X, ShieldCheck, Send, CheckCircle2, Sparkles, Building2, Music, Phone, Mail, User, ArrowLeft, Copy, ExternalLink, Check } from 'lucide-react';

interface LicensingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSong?: Song | null;
  allSongs: Song[];
}

export const LicensingModal: React.FC<LicensingModalProps> = ({
  isOpen,
  onClose,
  selectedSong,
  allSongs
}) => {
  const [songId, setSongId] = useState<string>(selectedSong ? selectedSong.id : allSongs[0]?.id || '');
  const [entityType, setEntityType] = useState<LicensingRequest['entityType']>('Gravadora');
  const [licenseScope, setLicenseScope] = useState<LicensingRequest['licenseScope']>('Exclusiva');
  const [applicantName, setApplicantName] = useState('');
  const [companyOrArtistName, setCompanyOrArtistName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [intendedProject, setIntendedProject] = useState('');
  const [budgetRange, setBudgetRange] = useState('Sob Consulta');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen && selectedSong) {
      setSongId(selectedSong.id);
    }
  }, [isOpen, selectedSong]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentSong = allSongs.find((s) => s.id === songId) || selectedSong;
  const songTitle = currentSong?.title || 'Obra';

  const mailSubject = `[Solicitação de Licenciamento] Obra: ${songTitle} - ${companyOrArtistName || applicantName}`;
  const whatsappMessage = `Olá, Dominik Publishing! Enviei uma solicitação de licenciamento no site para a obra "${songTitle}".\nSolicitante: ${applicantName} (${companyOrArtistName || 'Independente'})\nE-mail: ${email}`;
  const whatsappUrl = `https://wa.me/5511915329483?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/lucsdomingos@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: mailSubject,
          _cc: 'contato@dominikpublishing.com',
          Obra: songTitle,
          Solicitante: applicantName,
          Empresa_Artista: companyOrArtistName,
          Tipo_Entidade: entityType,
          Escopo_Licenca: licenseScope,
          Email: email,
          Telefone_WhatsApp: phone,
          Descricao_Projeto: intendedProject
        })
      });
    } catch (err) {
      console.warn('FormSubmit AJAX error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#222222] border-l-4 border-l-[#C5A059] shadow-2xl my-8 p-6 sm:p-10">
        
        {/* BACK TO CATALOG & CLOSE BUTTON */}
        <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-black/80 hover:bg-[#C5A059] hover:text-black border border-[#222222] hover:border-[#C5A059] text-white text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 shadow-lg"
            title="Voltar ao Catálogo"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Voltar ao Catálogo</span>
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-black border border-[#222222] text-white/70 hover:text-white hover:border-[#C5A059] flex items-center justify-center transition-all"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto rounded-full">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif italic text-2xl font-normal text-white mb-2">
                Solicitação Enviada com Sucesso!
              </h3>
              <p className="text-sm text-white/80 font-light max-w-md mx-auto italic leading-relaxed">
                Sua solicitação de licenciamento para a obra <strong className="text-[#C5A059]">{songTitle}</strong> foi enviada com sucesso para a Dominik Publishing. Nossa equipe editorial entrará em contato com você através do seu e-mail: <span className="text-white font-mono font-bold">{email}</span>.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-4 border-t border-[#222222] space-y-3 max-w-md mx-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Conversar no WhatsApp A&R (+55 11 91532-9483)</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-3 px-4 bg-[#181818] border border-[#222222] hover:border-[#C5A059] text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Concluir e Voltar ao Catálogo
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* HEADER */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/40 bg-[#181818] mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                  Sistema Oficial de Licenciamento
                </span>
              </div>
              <h2 className="font-serif italic text-2xl sm:text-3xl font-normal text-white">
                Solicitar Licenciamento Musical
              </h2>
              <p className="text-xs sm:text-sm text-white/50 font-light mt-1 italic">
                Preencha os dados formais para início de análise de cessão de direitos autorais.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* SONG SELECTION */}
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                  Obra Escolhida do Catálogo
                </label>
                <select
                  value={songId}
                  onChange={(e) => setSongId(e.target.value)}
                  className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                >
                  {allSongs.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#111111] text-white">
                      {s.title} ({s.genre} • {s.bpm} BPM)
                    </option>
                  ))}
                </select>
              </div>

              {/* ENTITY TYPE & LICENSE SCOPE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    Tipo de Solicitante
                  </label>
                  <select
                    value={entityType}
                    onChange={(e) => setEntityType(e.target.value as LicensingRequest['entityType'])}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  >
                    <option value="Gravadora" className="bg-[#111111]">Gravadora / Selo</option>
                    <option value="Artista" className="bg-[#111111]">Artista Independente</option>
                    <option value="Empresário" className="bg-[#111111]">Empresário / Manager</option>
                    <option value="Produtor" className="bg-[#111111]">Produtor Musical</option>
                    <option value="Audiovisual" className="bg-[#111111]">Produtora Audiovisual / Cinema</option>
                    <option value="Publicidade" className="bg-[#111111]">Agência de Publicidade</option>
                    <option value="Outro" className="bg-[#111111]">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    Escopo do Licenciamento
                  </label>
                  <select
                    value={licenseScope}
                    onChange={(e) => setLicenseScope(e.target.value as LicensingRequest['licenseScope'])}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  >
                    <option value="Exclusiva" className="bg-[#111111]">Exclusiva (Cessão Total Patrimonial)</option>
                    <option value="Não Exclusiva" className="bg-[#111111]">Não Exclusiva</option>
                    <option value="Sincronização" className="bg-[#111111]">Sincronização (Filme / Série / Comercial)</option>
                    <option value="Sob Consulta" className="bg-[#111111]">Sob Consulta / Co-publishing</option>
                  </select>
                </div>
              </div>

              {/* APPLICANT NAME & COMPANY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    Nome da Gravadora ou Artista *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Universal Music / Artista X"
                    value={companyOrArtistName}
                    onChange={(e) => setCompanyOrArtistName(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>
              </div>

              {/* EMAIL & PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contato@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>
              </div>

              {/* INTENDED PROJECT & NOTES */}
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                  Descrição do Projeto e Previsão de Lançamento
                </label>
                <textarea
                  rows={2}
                  placeholder="Descreva o álbum, single, clipe ou projeto de destino para a música..."
                  value={intendedProject}
                  onChange={(e) => setIntendedProject(e.target.value)}
                  className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Enviar Solicitação de Licenciamento</span>
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};
