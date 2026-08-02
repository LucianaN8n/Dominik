import React from 'react';
import { Sparkles, Award, Quote, Music } from 'lucide-react';

export const Composer: React.FC = () => {
  return (
    <section id="compositora" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-[#222222]">
      {/* GEOMETRIC BACKGROUND RINGS */}
      <div className="absolute top-1/3 right-[-50px] opacity-15 pointer-events-none">
        <div className="w-96 h-96 border border-[#C5A059] rounded-full flex items-center justify-center">
          <div className="w-64 h-64 border border-[#C5A059] rounded-full" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-8">
          
          {/* BIO & CREATIVE VISION TITLE */}
          <div className="text-center sm:text-left">
            <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-3">
              Direção Criativa & Fundadora
            </span>
            <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white leading-tight">
              Luciana Domingos
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] mt-2">
              Compositora | Diretora Criativa | Fundadora da Dominik Publishing
            </p>
          </div>

          {/* QUOTE BLOCK - OFFICIAL MANIFESTO */}
          <div className="relative bg-[#111111] p-8 sm:p-10 border border-[#222222] border-l-4 border-l-[#C5A059]">
            <Quote className="w-10 h-10 text-[#C5A059]/20 absolute top-4 right-4" />
            <div className="space-y-2 relative z-10 font-serif italic text-lg sm:text-2xl text-white/95 leading-relaxed">
              <p>Música é visão.</p>
              <p>Direitos são legado.</p>
              <p>Conexões são poder.</p>
              <p className="text-[#C5A059] not-italic font-medium">Criar hoje para inspirar sempre.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between">
              <div>
                <p className="font-serif italic text-xl text-[#C5A059]">Luciana Domingos</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mt-0.5">
                  Founder & CEO • Dominik Publishing
                </p>
              </div>
            </div>
          </div>

          {/* ARTISTIC PILLARS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-[#111111] border border-[#222222] flex items-start gap-3">
              <Music className="w-5 h-5 text-[#C5A059] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif italic text-lg text-white mb-1">Gêneros de Domínio</h4>
                <p className="text-xs text-white/50 font-light">
                  Trap, Trap Soul, Dark Trap, Hip-Hop Contemporâneo, R&B e Pop de Alta Performance.
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#111111] border border-[#222222] flex items-start gap-3">
              <Award className="w-5 h-5 text-[#C5A059] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif italic text-lg text-white mb-1">Assinatura Autoral</h4>
                <p className="text-xs text-white/50 font-light">
                  Refrões marcantes, arranjos vocais sofisticados, ganchos rítmicos inesquecíveis e métrica impecável.
                </p>
              </div>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="pt-2 text-center sm:text-left">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C5A059] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Ouvir Obras da Compositora</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
