import React, { useState, useEffect } from 'react';
import { ProposalSubmission } from '../types';
import { X, Send, CheckCircle2, Music2, FileCode, Link as LinkIcon, ArrowLeft, Mail, Phone, ExternalLink, Copy, Check } from 'lucide-react';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [proposalType, setProposalType] = useState<ProposalSubmission['proposalType']>('Composição sob encomenda');
  const [targetArtists, setTargetArtists] = useState('');
  const [projectSummary, setProjectSummary] = useState('');
  const [demoLink, setDemoLink] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const mailSubject = `[Proposta Comercial] ${proposalType} - ${applicantName}`;
  const whatsappUrl = `https://wa.me/5511915329483?text=${encodeURIComponent(`Olá! Enviei uma proposta comercial no site (${proposalType}).\nNome: ${applicantName}\nE-mail: ${email}`)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/Lucianadomingosterapeuta@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: mailSubject,
          _cc: 'contato@dominikpublishing.com',
          Tipo_Proposta: proposalType,
          Nome: applicantName,
          Email: email,
          Telefone_WhatsApp: phone,
          Artistas_Alvo: targetArtists,
          Link_Demo: demoLink,
          Resumo_Proposta: projectSummary
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
      <div className="relative w-full max-w-xl bg-[#111111] border border-[#222222] border-l-4 border-l-[#C5A059] shadow-2xl my-8 p-6 sm:p-10">
        
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
                Proposta Enviada com Sucesso!
              </h3>
              <p className="text-sm text-white/80 font-light max-w-md mx-auto italic leading-relaxed">
                Sua proposta de <strong className="text-[#C5A059]">{proposalType}</strong> foi transmitida para a equipe de A&R da Dominik Publishing. Retornaremos em breve no seu e-mail: <span className="text-white font-mono">{email}</span>.
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
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/40 bg-[#181818] mb-3">
                <Music2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                  Submissão de Proposta Autoral
                </span>
              </div>
              <h2 className="font-serif italic text-2xl sm:text-3xl font-normal text-white">
                Envio de Proposta Comercial
              </h2>
              <p className="text-xs sm:text-sm text-white/50 font-light mt-1 italic">
                Apresente projetos para encomendas, co-publishing ou pitches de artistas.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                  Tipo de Proposta
                </label>
                <select
                  value={proposalType}
                  onChange={(e) => setProposalType(e.target.value as ProposalSubmission['proposalType'])}
                  className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                >
                  <option value="Composição sob encomenda" className="bg-[#111111]">Composição sob encomenda (Custom Songwriting)</option>
                  <option value="Parceria de Co-publishing" className="bg-[#111111]">Parceria de Co-publishing / Co-escrita</option>
                  <option value="Pitch de Artista" className="bg-[#111111]">Pitch de Artista para Recomendação</option>
                  <option value="Produção Musical" className="bg-[#111111]">Produção Musical / Arranjo e Guia</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nome completo"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    E-mail de Contato *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@dominio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    Telefone / WhatsApp *
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

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    Artistas ou Projeto Alvo
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Novo Álbum do Artista Y"
                    value={targetArtists}
                    onChange={(e) => setTargetArtists(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                  Link de Referência / Guia (Drive / Soundcloud / Dropbox)
                </label>
                <div className="relative">
                  <LinkIcon className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="url"
                    placeholder="https://soundcloud.com/sua-demo"
                    value={demoLink}
                    onChange={(e) => setDemoLink(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm pl-10 pr-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                  Resumo da Proposta e Expectativas *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Detalhe os termos propostos, escopo artístico e prazos desejados..."
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Submeter Proposta Oficial</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
