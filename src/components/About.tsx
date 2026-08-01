import React from 'react';
import { Compass, Cpu, UserCheck, ShieldCheck, Award } from 'lucide-react';

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
            Nosso catálogo reúne músicas inéditas desenvolvidas para artistas, gravadoras, produtoras musicais e projetos audiovisuais.
          </p>
          <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed">
            Cada composição nasce de um processo criativo que combina direção artística, composição humana e tecnologia como ferramenta de apoio, preservando autenticidade, originalidade e identidade artística.
          </p>

          {/* FOUNDER HIGHLIGHT BOX (GEOMETRIC BALANCE PATTERN) */}
          <div className="mt-8 p-6 bg-[#C5A059] text-black">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-black/80">
              Fundadora & Diretora Criativa
            </h4>
            <p className="font-serif text-xl sm:text-2xl italic leading-tight font-normal text-black">
              Luciana Domingos desenvolve obras autorais que unem emoção profunda e identidade comercial de mercado.
            </p>
          </div>
        </div>

        {/* CREATIVE PROCESS PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#111111] p-8 border border-[#222222] hover:border-[#C5A059] transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#181818] border border-[#222222] flex items-center justify-center mb-6 group-hover:border-[#C5A059] transition-colors">
              <Compass className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-serif italic text-2xl text-white mb-3">Direção Artística</h3>
            <p className="text-xs text-white/50 font-light leading-relaxed">
              Pesquisa contínua de tendências sonoras globais, métrica cirúrgica e alinhamento do tom narrativo com o mercado de grande consumo.
            </p>
          </div>

          <div className="bg-[#111111] p-8 border border-[#222222] hover:border-[#C5A059] transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#181818] border border-[#222222] flex items-center justify-center mb-6 group-hover:border-[#C5A059] transition-colors">
              <UserCheck className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-serif italic text-2xl text-white mb-3">Composição Humana</h3>
            <p className="text-xs text-white/50 font-light leading-relaxed">
              Essência lírica profunda sob o comando da fundadora e compositora Luciana Domingos, garantindo verdade e conexão emocional.
            </p>
          </div>

          <div className="bg-[#111111] p-8 border border-[#222222] hover:border-[#C5A059] transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#181818] border border-[#222222] flex items-center justify-center mb-6 group-hover:border-[#C5A059] transition-colors">
              <Cpu className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-serif italic text-2xl text-white mb-3">Tecnologia de Apoio</h3>
            <p className="text-xs text-white/50 font-light leading-relaxed">
              Ferramentas de análise acústica, design sonoro avançado e inteligência analítica para otimizar arranjos e direcionamento de pitch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
