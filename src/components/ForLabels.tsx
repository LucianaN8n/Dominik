import React from 'react';
import { Building2, Calendar, Disc, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ForLabelsProps {
  onOpenLicensing: () => void;
  onOpenProposal: () => void;
}

export const ForLabels: React.FC<ForLabelsProps> = ({ onOpenLicensing, onOpenProposal }) => {
  const targetAudience = [
    'Gravadoras',
    'Artistas',
    'Empresários',
    'Produtores',
    'Editoras Musicais',
    'Supervisores Musicais',
    'Cinema',
    'Publicidade',
    'Streaming'
  ];

  return (
    <section id="gravadoras" className="py-24 bg-[#0a0a0a] relative border-t border-[#222222] overflow-hidden">
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

              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-3">
                  Nosso catálogo está disponível para:
                </span>
                <div className="flex flex-wrap gap-2">
                  {targetAudience.map((target, idx) => (
                    <div
                      key={idx}
                      className="bg-[#181818] border border-[#222222] px-3.5 py-1.5 text-xs text-white/80 font-medium flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{target}</span>
                    </div>
                  ))}
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
                  <span>Agendar Reunião A&R</span>
                </button>
              </div>
            </div>

            {/* RIGHT STATS / GUARANTEE CARD */}
            <div className="lg:col-span-5 bg-[#0d0d0d] p-8 border border-[#222222] space-y-6">
              <h3 className="font-serif italic text-2xl font-normal text-white border-b border-[#222222] pb-4">
                Garantias Editoriais Dominik
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-white/70 font-light">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Registro da Obra:</strong> Protegido por registro na Biblioteca Nacional (EDA), Registro de Autoria e Licenciamento Disponível.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Agilidade de Cessão:</strong> Contratos minutados pré-aprovados para liberação relâmpago de gravação.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Sigilo Absoluto:</strong> Audições exclusivas protegidas sob termo de confidencialidade (NDA).</span>
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
