import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-[#222222]">
      {/* GEOMETRIC CIRCLE OVERLAY */}
      <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 opacity-15 pointer-events-none">
        <div className="w-96 h-96 border border-[#C5A059] rounded-full flex items-center justify-center">
          <div className="w-64 h-64 border border-[#C5A059] rounded-full" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-3">
            Manifesto Institucional
          </span>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white mb-4">
            Sobre a Dominik Publishing
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mb-6" />
        </div>

        {/* MAIN TEXT CARD WITH GEOMETRIC LEFT BORDER */}
        <div className="bg-[#111111] p-8 sm:p-12 border border-[#222222] border-l-4 border-l-[#C5A059] mb-12">
          <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed mb-6">
            A <strong className="text-[#C5A059] font-medium">Dominik Publishing</strong> é uma editora musical independente especializada na criação de composições autorais com forte potencial artístico e comercial.
          </p>
          <p className="text-base sm:text-lg text-white/60 font-light italic leading-relaxed mb-6">
            Nosso catálogo reúne músicas inéditas desenvolvidas para artistas, produtoras musicais e projetos audiovisuais.
          </p>
          <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed">
            Cada composição nasce de um processo criativo que combina direção artística, composição humana e tecnologia como ferramenta de apoio, preservando autenticidade, originalidade e identidade artística.
          </p>

          {/* FOUNDER HIGHLIGHT BOX (OFFICIAL MANIFESTO) */}
          <div className="mt-8 p-6 sm:p-8 bg-[#141414] border border-[#222222] border-l-4 border-l-[#C5A059] shadow-2xl">
            {/* TEXT & MANIFESTO QUOTE */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
                Fundadora & Diretora Criativa
              </span>
              <div className="space-y-1 mb-4 font-serif italic text-base sm:text-lg font-normal text-white/95 leading-relaxed">
                <p>“Música é visão. Direitos são legado.”</p>
                <p>“Conexões são poder. Criar hoje para inspirar sempre.”</p>
              </div>
              <div className="pt-2 border-t border-[#222222]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif italic text-lg font-normal text-[#C5A059]">
                    Luciana Domingos
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/50 font-semibold">
                    Founder & CEO • Dominik Publishing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
