import React from 'react';
import { PUBLISHING_SERVICES } from '../data/services';
import { PenTool, ShieldCheck, Crown, Disc, Building2, Sliders, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-[#C5A059]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#C5A059]" />;
      case 'Disc':
        return <Disc className="w-6 h-6 text-[#C5A059]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#C5A059]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#0a0a0a] relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-3">
            Soluções Editoriais
          </span>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white mb-4">
            Serviços Especializados
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-light italic">
            Atendemos artistas, gravadoras, produtoras e executivos da indústria com excelência artística e rigor contratual.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PUBLISHING_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`bg-[#111111] p-8 border border-[#222222] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group ${
                service.id === 'musicas-exclusivas' ? 'border-l-4 border-l-[#C5A059]' : 'border-l-2 border-l-[#222222] hover:border-l-[#C5A059]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#181818] border border-[#222222] flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                    {React.cloneElement(getIcon(service.iconName), {
                      className: 'w-6 h-6 text-[#C5A059]'
                    })}
                  </div>
                  <span className="font-serif text-sm font-light text-[#C5A059]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif italic text-2xl font-normal text-white group-hover:text-[#C5A059] transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                  {service.description}
                </p>

                <p className="text-[11px] text-white/40 font-light leading-relaxed pt-3 border-t border-[#222222] italic">
                  {service.details}
                </p>
              </div>

              <button
                onClick={() => onSelectService(service.title)}
                className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] hover:text-white transition-colors pt-2"
              >
                <span>Solicitar Serviço</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
