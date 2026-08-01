import React, { useState, useEffect } from 'react';
import { X, Lock, KeyRound, Sparkles, ShieldCheck, CheckCircle2, UserCheck, Unlock } from 'lucide-react';

interface AuthorAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthorMode: boolean;
  onToggleAuthorMode: (enable: boolean) => void;
}

export const AuthorAuthModal: React.FC<AuthorAuthModalProps> = ({
  isOpen,
  onClose,
  isAuthorMode,
  onToggleAuthorMode,
}) => {
  const [accessCode, setAccessCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const code = accessCode.trim();
    if (code === 'Emly0812') {
      onToggleAuthorMode(true);
      setSuccessMsg('Modo Autora ativado com sucesso! Botões de upload e edição liberados.');
      setErrorMsg('');
      setTimeout(() => {
        onClose();
        setSuccessMsg('');
        setAccessCode('');
      }, 1200);
    } else {
      setErrorMsg('Senha incorreta. Insira a senha autorizada do Modo Autora.');
    }
  };

  const handleLogout = () => {
    onToggleAuthorMode(false);
    setSuccessMsg('Modo Autora desativado. Você agora está no Modo Visitante.');
    setTimeout(() => {
      onClose();
      setSuccessMsg('');
    }, 1000);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-lg bg-[#111111] border border-[#222222] border-l-4 border-l-[#C5A059] shadow-2xl my-8 p-6 sm:p-8">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 bg-black border border-[#222222] text-white/70 hover:text-white hover:border-[#C5A059] flex items-center justify-center transition-all"
          title="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {isAuthorMode ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-[#C5A059]/20 border border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C5A059]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C5A059] block mb-1">
              Modo Autora Ativo
            </span>
            <h3 className="font-serif italic text-2xl font-normal text-white">
              Bem-vinda, Luciana Domingos!
            </h3>
            <p className="text-xs text-white/60 mt-2 max-w-sm mx-auto leading-relaxed">
              Você tem permissão total para anexar arquivos de áudio e editar as Fichas Técnicas das obras. Visitantes comuns não possuem acesso a essas ferramentas de gestão.
            </p>

            <div className="mt-8 pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleLogout}
                className="w-full sm:w-auto px-6 py-3 bg-[#181818] hover:bg-red-950/80 border border-[#333333] hover:border-red-500/50 text-white hover:text-red-300 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Sair do Modo Autora (Voltar a Visitante)
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all"
              >
                Continuar Editando
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-[#181818] border border-[#C5A059] flex items-center justify-center mx-auto mb-3">
                <Lock className="w-5 h-5 text-[#C5A059]" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C5A059] block mb-1">
                Área Restrita da Compositora
              </span>
              <h3 className="font-serif italic text-2xl font-normal text-white">
                Acesso Exclusivo - Luciana Domingos
              </h3>
              <p className="text-xs text-white/50 font-light mt-1.5 max-w-sm mx-auto">
                Ative o Modo Autora para liberar o upload de áudios e a edição das Fichas Técnicas do catálogo.
              </p>
            </div>

            {successMsg ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{successMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    Senha / Código da Autora
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      placeholder="Digite a senha de acesso"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      className="w-full bg-[#181818] border border-[#222222] text-white text-xs pl-10 pr-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                    />
                  </div>
                  {errorMsg && (
                    <p className="text-xs text-red-400 mt-1.5 font-mono">{errorMsg}</p>
                  )}
                  <p className="text-[10px] text-white/40 mt-2 italic">
                    * Digite a senha de acesso autorizada para ativar os recursos de gestão.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C5A059] hover:bg-white text-black font-extrabold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-xl"
                  >
                    <Unlock className="w-4 h-4" />
                    <span>Ativar Modo Autora (Libera Edição & Upload)</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full py-2.5 bg-transparent hover:bg-white/5 text-white/50 hover:text-white text-[10px] uppercase font-bold tracking-wider transition-all"
                  >
                    Permanecer como Visitante (Apenas Leitura)
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
