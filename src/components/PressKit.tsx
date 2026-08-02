import React, { useState } from 'react';
import { PRESS_KIT_ITEMS } from '../data/presskit';
import { Download, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export const PressKit: React.FC = () => {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const handleDownload = (item: typeof PRESS_KIT_ITEMS[0]) => {
    setDownloadedId(item.id);

    const officialDocumentContent = `DOMINIK PUBLISHING
Guia de Direitos, Biografia Oficial e Termos de Licenciamento

Apresentação
Este guia apresenta as modalidades de licenciamento do catálogo da Dominik Publishing, o fluxo de contratação e a biografia institucional da compositora e fundadora Luciana da Silva Domingos.

Modalidades de Licenciamento

Licença Exclusiva
Concede direitos exclusivos de exploração da composição conforme contrato.

Licença Não Exclusiva
Autoriza o uso da obra sem impedir novos licenciamentos.

Licença de Sincronização
Uso em filmes, séries, publicidade, games, trailers e conteúdos audiovisuais.

Licença para Exibição Publicitária
Uso em campanhas publicitárias e comunicação institucional.

Coedição Editorial
Parcerias para administração editorial e exploração do catálogo.

Fluxo de Solicitação
1. Contato comercial.
2. Identificação da obra.
3. Informações do projeto.
4. Análise artística e jurídica.
5. Proposta comercial.
6. Assinatura do contrato.
7. Liberação da licença.

Direitos Autorais
As obras permanecem protegidas pela legislação de direitos autorais. O licenciamento concede apenas os direitos expressamente previstos em contrato.

Biografia Oficial
Luciana da Silva Domingos é compositora, publisher musical e empresária da área da educação. É fundadora da Dominik Publishing e da Dominik Records, onde desenvolve projetos voltados à criação de obras musicais originais, inteligência artificial aplicada à música e gestão de propriedade intelectual. Seu catálogo reúne composições como 'A Mulher em Mim', 'Código Supremo', 'Modo Imperador', 'Minha Aura Pesa', 'Código Magnético' e 'Frequência da Manifestação', destinadas ao mercado fonográfico, editorial e de sincronização audiovisual.

Contato
Dominik Publishing
Licenciamento • Sincronização • Gravações • Parcerias Editoriais
www.dominikpublishing.com
`;

    const blob = new Blob([officialDocumentContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Guia_de_Direitos_e_Licenciamento_Dominik_Publishing.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadedId(null), 3000);
  };

  return (
    <section id="presskit" className="py-24 bg-[#0a0a0a] relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-3">
            Central de Imprensa & A&R
          </span>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white mb-4">
            Press Kit Oficial
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-light italic">
            Baixe materiais institucionais, ficha técnica do catálogo e especificações para imprensa e licenciamento.
          </p>
        </div>

        {/* PRESS KIT ITEMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRESS_KIT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#111111] p-6 border border-[#222222] border-l-2 border-l-[#C5A059] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#181818] border border-[#222222] flex items-center justify-center shrink-0 group-hover:border-[#C5A059] transition-colors">
                  <FileText className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-[#C5A059] uppercase font-semibold">
                      {item.fileType}
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">• {item.fileSize}</span>
                  </div>
                  <h3 className="font-serif italic text-2xl font-normal text-white group-hover:text-[#C5A059] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleDownload(item)}
                className={`w-full py-3 border text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all ${
                  downloadedId === item.id
                    ? 'bg-emerald-500 text-black border-emerald-500'
                    : 'bg-[#181818] hover:bg-[#C5A059] text-white hover:text-black border-[#222222] hover:border-[#C5A059]'
                }`}
              >
                {downloadedId === item.id ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Download Concluído</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#C5A059] group-hover:text-black" />
                    <span>Baixar Arquivo</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
