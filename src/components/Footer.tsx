import React, { useState } from 'react';
import { Disc3, ArrowUp, ShieldCheck, FileText, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white/50 py-16 border-t border-[#222222] pb-28 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#222222]">
          
          {/* BRAND */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 border border-[#C5A059] flex items-center justify-center bg-[#111111]">
              <Disc3 className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <span className="font-serif italic text-xl font-normal tracking-wide text-white block">
                DOMINIK PUBLISHING
              </span>
              <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-bold mt-0.5">
                Composições Originais para Grandes Artistas
              </p>
            </div>
          </div>

          {/* BACK TO TOP BUTTON */}
          <button
            onClick={scrollToTop}
            className="p-3 border border-[#222222] bg-[#111111] hover:border-[#C5A059] text-white/70 hover:text-white transition-all group"
            title="Voltar ao Topo"
          >
            <ArrowUp className="w-5 h-5 text-[#C5A059] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* BOTTOM LEGAL & COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <p className="text-white/40">
            © {new Date().getFullYear()} Dominik Publishing. Todos os direitos reservados. Registro de Autoria • Biblioteca Nacional (EDA).
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="text-white/50 hover:text-[#C5A059] transition-colors"
            >
              Política de Privacidade
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="text-white/50 hover:text-[#C5A059] transition-colors"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>

      {/* MODAL LEGAL POLICY DRAWER */}
      {activeModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#111111] border border-[#222222] border-l-4 border-l-[#C5A059] p-8 my-8 space-y-6">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 bg-black border border-[#222222] text-white/60 flex items-center justify-center hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {activeModal === 'privacy' ? (
              <div className="space-y-4">
                <h3 className="font-serif italic text-2xl font-normal text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                  Política de Privacidade - Dominik Publishing
                </h3>
                <div className="text-xs text-white/70 font-light leading-relaxed space-y-3 max-h-96 overflow-y-auto pr-2">
                  <p>
                    A Dominik Publishing está comprometida com a proteção e confidencialidade dos dados de seus parceiros, artistas, gravadoras e usuários.
                  </p>
                  <p>
                    <strong>1. Coleta de Dados:</strong> Os dados fornecidos através dos formulários de solicitação de licenciamento e submissão de propostas são utilizados estritamente para avaliação autoral e emissão de minutas contratuais.
                  </p>
                  <p>
                    <strong>2. Confidencialidade e NDA:</strong> Músicas e áudios disponibilizados no catálogo são de propriedade autoral exclusiva da Dominik Publishing ou de suas compositoras representadas, protegidas por direitos autorais sob a lei nº 9.610/98.
                  </p>
                  <p>
                    <strong>3. Compartilhamento:</strong> Nenhum dado cadastral ou proposta comercial é vendido ou compartilhado com terceiros sem autorização prévia por escrito.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-serif italic text-2xl font-normal text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#C5A059]" />
                  Termos de Uso e Licenciamento
                </h3>
                <div className="text-xs text-white/70 font-light leading-relaxed space-y-3 max-h-96 overflow-y-auto pr-2">
                  <p>
                    Bem-vindo ao portal oficial da Dominik Publishing. Ao navegar neste site, você concorda com os termos legais abaixo.
                  </p>
                  <p>
                    <strong>1. Propriedade Intelectual:</strong> Todas as letras, áudios demonstrativos, títulos, arranjos e imagens de capa exibidos neste site são obras intelectuais protegidas. É estritamente proibida a reprodução, cópia, amostragem (sample) ou comercialização não autorizada.
                  </p>
                  <p>
                    <strong>2. Demos e Guias:</strong> O player de demonstração tem caráter estritamente promocional e informativo para audição de repertório por gravadoras, artistas e supervisores musicais.
                  </p>
                  <p>
                    <strong>3. Licenciamento:</strong> A utilização comercial das obras requer a assinatura prévia de instrumento contratual de cessão de direitos fonográficos/autorais.
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059]"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
