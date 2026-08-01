import React from 'react';
import { ArrowDown, Disc, ChevronRight, Check } from 'lucide-react';
import heroBg from '../assets/images/hero_bg_1785521285813.jpg';

interface HeroProps {
  onOpenLicensing: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLicensing }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] border-b border-[#222222]">
      {/* BACKGROUND IMAGE WITH GEOMETRIC MATTE OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Dominik Publishing Studio"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-125 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-black/90" />
      </div>

      {/* GEOMETRIC CIRCULAR RINGS BACKGROUND */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none z-0">
        <div className="w-[580px] h-[580px] border border-[#C5A059] rounded-full flex items-center justify-center">
          <div className="w-[420px] h-[420px] border border-[#C5A059] rounded-full flex items-center justify-center">
            <div className="w-[260px] h-[260px] border border-[#C5A059]/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* GOLD AMBIENT GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#C5A059]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        {/* BRAND EMBLEM BADGE */}
        <span className="text-[#C5A059] text-xs tracking-[0.4em] uppercase mb-4 block font-semibold">
          Cinematographic Artistry & Publishing
        </span>

        {/* MAIN HEADING */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic leading-[1.08] mb-6 text-white max-w-4xl mx-auto">
          Músicas que contam <br />
          <span className="text-[#C5A059] not-italic font-cinzel">histórias</span> de impacto.
        </h1>

        {/* SUBTITLE */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/60 font-light italic leading-relaxed mb-10 tracking-wide">
          A Dominik Publishing desenvolve composições autorais originais para grandes artistas, gravadoras e projetos audiovisuais de alto padrão.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#catalogo"
            className="w-full sm:w-auto bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-3 group"
          >
            <Disc className="w-4 h-4 text-black group-hover:rotate-90 transition-transform duration-500" />
            <span>Explorar Catálogo</span>
          </a>

          <a
            href="#contato"
            className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group"
          >
            <span>Falar Agora</span>
            <ChevronRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* REGISTRO DA OBRA STRIP */}
        <div className="mt-16 pt-8 border-t border-[#222222] max-w-2xl mx-auto">
          <div className="bg-[#111111] p-6 border border-[#222222] border-l-4 border-l-[#C5A059] shadow-2xl">
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-4 text-center">
              Registro da Obra
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/90 font-light">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Biblioteca Nacional (EDA)</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Registro de autoria</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Licenciamento disponível</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-[#C5A059] transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Explorar</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C5A059]" />
      </a>
    </section>
  );
};
