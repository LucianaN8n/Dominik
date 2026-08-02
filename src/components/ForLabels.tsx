import React from 'react';
import { Building2, Calendar, Disc, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ForLabelsProps {
  onOpenLicensing: () => void;
  onOpenProposal: () => void;
}

export const ForLabels: React.FC<ForLabelsProps> = ({ onOpenLicensing, onOpenProposal }) => {
  const catalogAvailability = [
    'Gravação por artistas',
    'Sincronização audiovisual',
    'Licenciamento comercial e ambiental',
    'Publicidade e conteúdo digital',
  ];

  const obraIncludes = [
    'Registro documental',
    'Contrato de cessão ou licença',
    'Administração editorial',
  ];

  return (
    <section id="parceiros" className="py-24 bg-[#0a0a0a] relative border-t border-[#222222] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#111111] p-8 sm:p-14 border border-[#222222] border-l-4 border-l-[#C5A059] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-2">
                A&R Direct Hub
              </span>

              <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white leading-tight">
                Procurando sua próxima música?
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-light italic leading-relaxed">
                A Dominik Publishing simplifica a busca por repertórios inéditos de alto desempenho. Nosso acervo autoral está catalogado e pronto para audições privadas e acordos de cessão célere.
              </p>

              <div className="pt-2 space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-2.5">
                    Nosso catálogo está disponível para:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {catalogAvailability.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#181818] border border-[#222222] px-3.5 py-2 text-xs text-white/90 font-medium flex items-center gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-2.5">
                    Cada obra acompanha:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {obraIncludes.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#181818] border border-[#222222] px-3.5 py-2 text-xs text-white/90 font-medium flex items-center gap-2.5"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#catalogo"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Disc className="w-4 h-4 text-black" />
                  <span>Conhecer Catálogo</span>
                </a>

                <button
                  onClick={onOpenLicensing}
                  className="w-full sm:w-auto px-8 py-4 border border-[#222222] hover:border-[#C5A059] text-white font-semibold text-xs uppercase tracking-[0.2em] bg-[#181818] transition-all text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>Solicitar audição do catálogo</span>
                </button>
              </div>
            </div>

            {/* RIGHT STATS / GUARANTEE CARD */}
            <div className="lg:col-span-5 bg-[#0d0d0d] p-8 border border-[#222222] space-y-6">
              <h3 className="font-serif italic text-2xl font-normal text-white border-b border-[#222222] pb-4">
                Padrões Editoriais Dominik
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-white/70 font-light">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Registro documental:</strong> Obras registradas junto ao EDA/Biblioteca Nacional, com comprovação de data e rastreabilidade de origem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Agilidade de cessão:</strong> Contratos padronizados, prontos para assinatura imediata.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Transparência de processo:</strong> Nossas composições são produzidas com apoio de ferramentas de inteligência artificial licenciadas para uso comercial, com curadoria, edição e direção criativa humanas. Todos os contratos declaram essa informação de forma expressa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Confidencialidade:</strong> Audições protegidas por termo de confidencialidade (NDA).</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#222222] text-center">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
                  Atendimento Executivo
                </span>
                <span className="text-xs text-white/40 italic">
                  Respostas em até 24h para departamentos de A&R
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
