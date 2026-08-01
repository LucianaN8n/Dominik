import React, { useState, useEffect } from 'react';
import { X, Lock, KeyRound, Sparkles, UserCheck, ShieldAlert, ArrowRight, ArrowLeft } from 'lucide-react';

interface ProducerAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProducerAreaModal: React.FC<ProducerAreaModalProps> = ({ isOpen, onClose }) => {
  const [accessCode, setAccessCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

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

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim().toUpperCase() === 'VIP2026' || accessCode.trim().toUpperCase() === 'DOMINIK') {
      setAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Código VIP inválido. Solicite convite junto à diretoria de A&R.');
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

        {!authenticated ? (
          <div>
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-[#181818] border border-[#C5A059] flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-[#C5A059]" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C5A059] block mb-2">
                Portal Privado A&R
              </span>
              <h2 className="font-serif italic text-2xl sm:text-3xl font-normal text-white">
                Área VIP de Produtores & Artistas
              </h2>
              <p className="text-xs sm:text-sm text-white/50 font-light mt-2 max-w-md mx-auto italic">
                Ambiente exclusivo para audição antecipada de guias não lançadas, acervo sigiloso e reserva direta de composições.
              </p>
            </div>

            <form onSubmit={handleAccess} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                  Código de Acesso Exclusivo (NDA Code)
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    placeholder="Digite seu código ou use 'DOMINIK'"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm pl-10 pr-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>
                <p className="text-[10px] text-white/40 mt-1 italic">
                  * Dica de demonstração: Utilize o código <strong className="text-[#C5A059]">DOMINIK</strong> ou <strong className="text-[#C5A059]">VIP2026</strong>.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-950/50 border border-red-800 text-xs text-red-300 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2"
              >
                <span>Acessar Sala Privada</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#222222] text-center">
              <span className="text-xs text-white/40 block mb-2 italic">Ainda não possui credencial de acesso VIP?</span>
              <button
                onClick={onClose}
                className="text-xs text-[#C5A059] hover:underline font-bold uppercase tracking-wider"
              >
                Solicitar credencial com a diretoria comercial
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-2">
            <div className="flex items-center gap-3 border-b border-[#222222] pb-4">
              <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif italic text-xl text-white">Acesso VIP Concedido</h3>
                <span className="text-[10px] text-emerald-400 font-mono">Sessão Autenticada sob NDA Nível A&R</span>
              </div>
            </div>

            <div className="p-5 bg-[#181818] border border-[#222222] border-l-2 border-l-[#C5A059] space-y-3">
              <h4 className="font-serif italic text-base text-[#C5A059] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                Salas de Audição Exclusivas (Preview)
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-light italic">
                Você agora tem permissão para ouvir pré-guias vocais sem efeito, arranjos de beat em stems separados e efetuar opções de compra direta de obras.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-[#181818] border border-[#222222] flex items-center justify-between">
                <div>
                  <span className="text-xs font-serif italic text-white block">Faixa Secreta #01 - "Império Secreto" (Dark Trap)</span>
                  <span className="text-[10px] text-white/40">Guia vocal completa • BPM 138 • Chave F#m</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider border border-[#C5A059] text-[#C5A059] px-2.5 py-1">
                  Reservada para A&R
                </span>
              </div>

              <div className="p-4 bg-[#181818] border border-[#222222] flex items-center justify-between">
                <div>
                  <span className="text-xs font-serif italic text-white block">Faixa Secreta #02 - "Frequência de Ouro" (Trap Soul)</span>
                  <span className="text-[10px] text-white/40">Arranjo acústico + 808 • BPM 125 • Chave Cm</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-1">
                  Disponível para Escolha
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-[#181818] border border-[#222222] hover:border-[#C5A059] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all"
            >
              Fechar Sala Privada
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
