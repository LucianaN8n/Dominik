import React from 'react';
import { Sparkles, Award, Quote, Music, ShieldCheck } from 'lucide-react';
import lucianaImg from '../assets/images/luciana_domingos_1785521298312.jpg';

export const Composer: React.FC = () => {
  return (
    <section id="compositora" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-[#222222]">
      {/* GEOMETRIC BACKGROUND RINGS */}
      <div className="absolute top-1/3 right-[-50px] opacity-15 pointer-events-none">
        <div className="w-96 h-96 border border-[#C5A059] rounded-full flex items-center justify-center">
          <div className="w-64 h-64 border border-[#C5A059] rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ELEGANT PORTRAIT */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#222222] border-l-4 border-l-[#C5A059] bg-[#111111] shadow-2xl">
              <img
                src={lucianaImg}
                alt="Luciana Domingos - Compositora e Diretora Criativa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* FLOATING TITLE BADGE */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/95 border border-[#222222]">
                <h3 className="font-serif italic text-2xl font-normal text-white">Luciana Domingos</h3>
                <p className="text-[10px] text-[#C5A059] font-bold tracking-[0.2em] uppercase mt-1">
                  Compositora • Diretora Criativa
                </p>
                <p className="text-[9px] text-white/40 uppercase tracking-[0.3em] mt-1">
                  Fundadora da Dominik Publishing
                </p>
              </div>
            </div>
          </div>

          {/* BIO & CREATIVE VISION */}
          <div className="lg:col-span-7 space-y-8">
            <div>
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

            {/* QUOTE BLOCK */}
            <div className="relative bg-[#111111] p-8 border border-[#222222] border-l-4 border-l-[#C5A059]">
              <Quote className="w-10 h-10 text-[#C5A059]/20 absolute top-4 right-4" />
              <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed mb-4 relative z-10">
                Luciana Domingos desenvolve músicas autorais voltadas ao Trap, Hip-Hop, Dark Pop e Pop Contemporâneo, criando obras que unem emoção, identidade e forte potencial comercial.
              </p>
              <p className="text-base sm:text-lg text-white/60 font-light italic leading-relaxed relative z-10">
                Seu catálogo busca conectar artistas e público através de letras marcantes, refrões memoráveis e narrativas cinematográficas.
              </p>
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
            <div className="pt-4">
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
      </div>
    </section>
  );
};
