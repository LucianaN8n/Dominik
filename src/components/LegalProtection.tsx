import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, FileCheck2, Scale, Download, FileText } from 'lucide-react';

export const LegalProtection: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const protectionItems = [
    'Registro Autoral',
    'Licenciamento Comercial',
    'Gravação por Artistas',
    'Sincronização Audiovisual',
    'Contratos de Cessão ou Licença',
    'Administração Editorial'
  ];

  const handleDownloadPdf = () => {
    setDownloaded(true);
    const content = `DOMINIK PUBLISHING
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

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Guia_de_Direitos_Biografia_e_Licenciamento_Luciana_Domingos.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="protecao-juridica" className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden border-t border-[#222222]">
      {/* BACKGROUND GEOMETRIC PATTERN */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-[#111111] border border-[#222222] mb-4">
            <Scale className="w-5 h-5 text-[#C5A059]" />
          </div>
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-2">
            Segurança & Conformidade
          </span>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white mb-4">
            Proteção Jurídica & Termos
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto" />
        </div>

        {/* MAIN CONTAINER */}
        <div className="bg-[#111111] p-8 sm:p-12 border border-[#222222] border-l-4 border-l-[#C5A059] shadow-2xl">
          <div className="mb-10 text-center sm:text-left space-y-4">
            <p className="text-xl sm:text-2xl font-serif text-white font-normal leading-relaxed">
              Cada composição da Dominik Publishing é protegida por direitos autorais.
            </p>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-3xl">
              As obras passam por um processo de registro e organização documental para garantir sua autoria, rastreabilidade e disponibilidade para licenciamento comercial.
            </p>
          </div>

          <div className="pt-8 border-t border-[#222222] mb-10">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-6 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-[#C5A059]" />
              <span>Nosso catálogo é preparado para:</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {protectionItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-4 bg-[#181818] border border-[#222222] hover:border-[#C5A059]/60 transition-colors group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <span className="text-sm sm:text-base text-white/90 font-medium tracking-wide group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PDF DOWNLOAD BOX FOR VISITORS */}
          <div className="p-6 bg-[#161616] border border-[#C5A059]/50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#C5A059]/10 border border-[#C5A059] flex items-center justify-center shrink-0 text-[#C5A059]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold text-[#C5A059] uppercase">PDF Oficial • 3.2 MB</span>
                </div>
                <h4 className="text-base font-serif italic text-white font-normal">
                  Guia de Direitos, Termos de Licenciamento & Biografia
                </h4>
                <p className="text-xs text-white/60 font-light mt-0.5">
                  Faça o download do documento oficial com termos de licença, fluxo de contratação e biografia da autora Luciana Domingos.
                </p>
              </div>
            </div>

            <button
              onClick={handleDownloadPdf}
              className={`px-6 py-3.5 border text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-all shrink-0 shadow-lg ${
                downloaded
                  ? 'bg-emerald-500 text-black border-emerald-500'
                  : 'bg-[#C5A059] hover:bg-white text-black border-[#C5A059]'
              }`}
            >
              {downloaded ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Download Concluído</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-black" />
                  <span>Baixar PDF Oficial</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

