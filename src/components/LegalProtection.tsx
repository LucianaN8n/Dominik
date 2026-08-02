import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, FileCheck2, Scale, Download, FileText } from 'lucide-react';
import { DownloadLeadModal } from './DownloadLeadModal';

export const LegalProtection: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [pendingDocTitle, setPendingDocTitle] = useState('Guia de Licenciamento — Modalidades, Entregas, Investimento & Fluxo');

  const protectionItems = [
    'Gravação por artistas',
    'Sincronização audiovisual',
    'Licenciamento comercial e ambiental',
    'Publicidade e conteúdo digital',
    'Registro documental',
    'Contrato de cessão ou licença',
    'Administração editorial',
  ];

  const triggerActualDownload = () => {
    setDownloaded(true);
    const content = `DOMINIK PUBLISHING
Guia de Licenciamento — Modalidades, entregas, investimento e fluxo de contratação
www.dominikpublishing.com — Versão 1 (Agosto de 2026)

==================================================
1. APRESENTAÇÃO
Repertório inédito, pronto para gravar
==================================================
A Dominik Publishing mantém um catálogo autoral de composições inéditas disponíveis para licenciamento. Cada obra é entregue com os arquivos de produção necessários para que artistas, produtores e realizadores trabalhem imediatamente — e acompanhada de contrato padronizado, pronto para assinatura.

Este guia reúne o que você precisa para decidir: as modalidades disponíveis, o que acompanha cada licença, os valores de referência e o fluxo de contratação.

Padrões Editoriais Dominik:
— Registro documental: obras registradas junto ao EDA / Biblioteca Nacional, com comprovação de data e rastreabilidade de origem.
— Agilidade de cessão: contratos padronizados, prontos para assinatura imediata.
— Transparência de processo: as composições são produzidas com apoio de ferramentas de inteligência artificial licenciadas para uso comercial, sob curadoria, edição e direção criativa humanas. Todos os contratos declaram essa informação de forma expressa.
— Confidencialidade: audições de catálogo protegidas por termo de confidencialidade (NDA).

==================================================
2. MODALIDADES
Três formas de licenciar
==================================================
• Licença não exclusiva:
  Autoriza gravar, reproduzir e distribuir a obra, com o direito de gravar voz e letra próprias sobre a base musical. A mesma obra permanece disponível para outros licenciados. Concedida por prazo determinado e com limite de reproduções.
  Indicada para: artistas independentes lançando single, EP ou projeto próprio.

• Licença exclusiva:
  Concede os mesmos direitos em caráter exclusivo e por prazo indeterminado, sem limite de reproduções. A obra é retirada do catálogo de licenciamento e não é oferecida a mais ninguém. Inclui o direito de sincronização em material audiovisual do próprio licenciado.
  Indicada para: artistas e produtores que desejam identidade exclusiva sobre a obra.

• Licença de sincronização e uso comercial:
  Autoriza o uso da obra já gravada em conteúdo audiovisual, sonoro ou multimídia, bem como sua execução em ambiente comercial — sem regravação. Definida por projeto, território e prazo.
  Indicada para: produtoras, canais, podcasts, cursos online, campanhas publicitárias, clínicas e estabelecimentos.

==================================================
3. ENTREGAS
O que acompanha cada licença
==================================================
Diferentemente de catálogos que entregam apenas o áudio final, o repertório Dominik é disponibilizado com os arquivos de produção — o que permite ao licenciado adaptar, remixar e reproduzir a obra com liberdade técnica real.

• Master WAV: A obra completa, em qualidade de estúdio, pronta para distribuição ou sincronização.
• Instrumental: A base musical sem a voz principal, pronta para receber nova interpretação vocal.
• Stems (faixas separadas): Cada camada da produção em arquivo próprio — baixo, bateria, percussão, sintetizadores, efeitos e vocais de apoio — todas alinhadas no tempo, prontas para importação em qualquer estação de trabalho de áudio.
• Arquivos MIDI: A estrutura musical em dados editáveis, por instrumento. Permite alterar tonalidade, andamento, arranjo e timbres, oferecendo ao produtor controle criativo integral sobre a obra. É o item que distingue o catálogo Dominik da oferta usual de mercado.

==================================================
4. INVESTIMENTO
Valores de referência
==================================================
Os valores abaixo são referências por obra. A proposta final considera o alcance pretendido, o prazo e o território de exploração.

[LICENÇAS DE GRAVAÇÃO]
- Básico | Instrumental em WAV | R$ 400 a R$ 700
- Completo | Instrumental + stems em WAV | R$ 800 a R$ 1.500
- Produtor | Instrumental + stems + arquivos MIDI | R$ 1.500 a R$ 2.500

[LICENÇA EXCLUSIVA]
- Exclusiva | Obra retirada do catálogo, sem limite de uso | R$ 1.200 a R$ 3.000

[SINCRONIZAÇÃO E USO COMERCIAL]
- Projeto individual | Vídeo, podcast, curso, conteúdo digital | R$ 200 a R$ 350
- Uso corporativo | Campanha, rede, ambiente comercial, por prazo | Sob consulta

* Observação sobre Direitos: Direitos autorais de execução pública sobre a composição permanecem com a Dominik Publishing, salvo divisão expressamente prevista em contrato. Os direitos sobre o fonograma resultante de nova gravação pertencem ao licenciado.

==================================================
5. CONTRATAÇÃO
Fluxo em quatro etapas
==================================================
1. Contato e projeto: Você descreve o uso pretendido, o alcance e o prazo desejados.
2. Audição do catálogo: Acesso ao repertório disponível, sob termo de confidencialidade quando aplicável.
3. Proposta e contrato: Envio da proposta comercial e do contrato correspondente à modalidade escolhida.
4. Pagamento e liberação: Confirmado o pagamento, os arquivos são disponibilizados em até três dias úteis.

Direitos e transparência:
As obras do catálogo Dominik Publishing são produzidas com apoio de ferramentas de inteligência artificial licenciadas para uso comercial, sob curadoria, edição e direção criativa humanas. Cada obra passa por registro documental junto ao EDA / Biblioteca Nacional, com comprovação de data e rastreabilidade de origem.
O licenciamento concede exclusivamente os direitos expressamente previstos em contrato. Todos os instrumentos declaram de forma expressa o processo de criação da obra, assegurando ao licenciado informação completa antes da contratação. Comprovantes de licença das ferramentas utilizadas são fornecidos mediante solicitação.

==================================================
6. SOBRE
Luciana da Silva Domingos
==================================================
Compositora e publisher musical, é fundadora da Dominik Publishing e da Dominik Records. Seu trabalho reúne criação de obras originais, aplicação de inteligência artificial à produção musical e gestão de propriedade intelectual.
O catálogo autoral inclui as composições A Mulher em Mim, Código Supremo, Modo Imperador, Minha Aura Pesa, Código Magnético, Efeito Magneto e Frequência da Manifestação, destinadas ao mercado fonográfico, editorial e de sincronização audiovisual.

DOMINIK PUBLISHING
Licenciamento • Sincronização • Gravações • Parcerias Editoriais
www.dominikpublishing.com
E-mail: contato@dominikpublishing.com | Instagram: @dominik_records
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Guia_de_Licenciamento_Dominik_Publishing.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 5000);
  };

  const handleOpenDownloadLead = () => {
    setPendingDocTitle('Guia de Licenciamento — Modalidades, Entregas, Investimento & Fluxo');
    setIsLeadModalOpen(true);
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
              Cada composição do catálogo Dominik Publishing passa por registro documental e organização de cadastro, garantindo rastreabilidade de origem, transparência quanto ao processo de criação e disponibilidade imediata para licenciamento comercial.
            </p>

            <div className="pt-4 text-left">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Padrões Editoriais Dominik:</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-[#161616] border border-[#222222] border-l-2 border-l-[#C5A059]">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Registro documental</span>
                  </h4>
                  <p className="text-xs text-white/80 font-light leading-relaxed">
                    Obras registradas junto ao EDA / Biblioteca Nacional, com comprovação de data e rastreabilidade de origem.
                  </p>
                </div>

                <div className="p-5 bg-[#161616] border border-[#222222] border-l-2 border-l-[#C5A059]">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Agilidade de cessão</span>
                  </h4>
                  <p className="text-xs text-white/80 font-light leading-relaxed">
                    Contratos padronizados, prontos para assinatura imediata.
                  </p>
                </div>

                <div className="p-5 bg-[#161616] border border-[#222222] border-l-2 border-l-[#C5A059]">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Transparência de processo</span>
                  </h4>
                  <p className="text-xs text-white/80 font-light leading-relaxed">
                    Nossas composições são produzidas com apoio de ferramentas de inteligência artificial licenciadas para uso comercial, sob curadoria, edição e direção criativa humanas. Todos os contratos declaram essa informação de forma expressa.
                  </p>
                </div>

                <div className="p-5 bg-[#161616] border border-[#222222] border-l-2 border-l-[#C5A059]">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Confidencialidade</span>
                  </h4>
                  <p className="text-xs text-white/80 font-light leading-relaxed">
                    Audições protegidas por termo de confidencialidade (NDA).
                  </p>
                </div>
              </div>
            </div>
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
                  <span className="text-[10px] font-mono font-bold text-[#C5A059] uppercase">Documento Oficial • Guia Completo</span>
                </div>
                <h4 className="text-base font-serif italic text-white font-normal">
                  Guia de Licenciamento (Modalidades, Entregas, Tabela de Investimento & Fluxo)
                </h4>
                <p className="text-xs text-white/60 font-light mt-0.5">
                  Faça o download do documento oficial com modalidades, tabela de preços, entregas (WAV, Stems, MIDI), fluxo de contratação e biografia oficial.
                </p>
              </div>
            </div>

            <button
              onClick={handleOpenDownloadLead}
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
                  <span>Baixar Guia Oficial (PDF)</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* LEAD CAPTURE MODAL */}
      <DownloadLeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        documentTitle={pendingDocTitle}
        fileType="PDF"
        fileSize="3.2 MB"
        onConfirmDownload={triggerActualDownload}
      />
    </section>
  );
};



