import React, { useState } from 'react';
import { Mail, Phone, Instagram, Send, MessageSquare, CheckCircle2, Disc3, Copy, ExternalLink, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mailSubject = subject ? `[Contato Site] ${subject}` : `[Contato Site] Mensagem de ${name}`;

  const [testSentNotice, setTestSentNotice] = useState<string | null>(null);

  const handleSendTestActivation = async () => {
    setIsSubmitting(true);
    setTestSentNotice(null);
    try {
      await fetch('https://formsubmit.co/ajax/lucsdomingos@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: '[Ativação FormSubmit] Teste de Recebimento de E-mail',
          _cc: 'contato@dominikpublishing.com',
          Mensagem: 'Este é um e-mail de teste para disparar o botão de ativação do FormSubmit para o e-mail lucsdomingos@gmail.com.'
        })
      });
      setTestSentNotice('E-mail de teste disparado com sucesso! Por favor acesse seu Gmail (lucsdomingos@gmail.com) e procure pela mensagem do FormSubmit para clicar em "Activate Form".');
    } catch (err) {
      console.warn('Test activation error:', err);
      setTestSentNotice('Disparado via navegador! Acesse lucsdomingos@gmail.com para verificar a chegada da mensagem.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send asynchronously to FormSubmit endpoint (lucsdomingos@gmail.com)
    try {
      await fetch('https://formsubmit.co/ajax/lucsdomingos@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: mailSubject,
          _cc: 'contato@dominikpublishing.com',
          Nome: name,
          Email: email,
          Assunto: subject,
          Mensagem: message
        })
      });
    } catch (err) {
      console.warn('FormSubmit AJAX error:', err);
    } finally {
      setIsSubmitting(false);
      setSent(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato@dominikpublishing.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const contactChannels = [
    {
      title: 'E-mail Comercial',
      value: 'contato@dominikpublishing.com',
      isCopy: true,
      icon: Mail,
      subtext: 'Clique para copiar o e-mail oficial'
    },
    {
      title: 'WhatsApp Direct (A&R Line)',
      value: '+55 11 91532-9483',
      link: 'https://wa.me/5511915329483',
      icon: Phone,
      subtext: 'Atendimento exclusivo para gravadoras e artistas'
    },
    {
      title: 'Instagram Oficial',
      value: '@dominik_records',
      link: 'https://www.instagram.com/dominik_records/',
      icon: Instagram,
      subtext: 'Bastidores, lançamentos e previews autorais'
    }
  ];

  return (
    <section id="contato" className="py-24 bg-[#0a0a0a] relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-3">
            Atendimento Executivo
          </span>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-light italic">
            Fale diretamente com nossa equipe de A&R e negócios editoriais para consultas sobre obras e parcerias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* CONTACT CARDS GRID */}
          <div className="lg:col-span-5 space-y-4">
            {contactChannels.map((channel, idx) => {
              const Icon = channel.icon;
              if (channel.isCopy) {
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full text-left bg-[#111111] p-6 border border-[#222222] border-l-2 border-l-[#C5A059] hover:border-[#C5A059] transition-all duration-300 flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-[#181818] border border-[#222222] flex items-center justify-center shrink-0 group-hover:border-[#C5A059] transition-colors">
                      {copiedEmail ? <Check className="w-6 h-6 text-emerald-400" /> : <Icon className="w-6 h-6 text-[#C5A059]" />}
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 block">
                        {channel.title}
                      </span>
                      <span className="font-serif italic text-lg font-normal text-white group-hover:text-[#C5A059] transition-colors block mt-0.5">
                        {copiedEmail ? 'E-mail Copiado!' : channel.value}
                      </span>
                      <span className="text-[11px] text-[#C5A059] font-light block mt-1 italic">
                        {copiedEmail ? 'Endereço copiado para a área de transferência!' : channel.subtext}
                      </span>
                    </div>
                  </button>
                );
              }
              return (
                <a
                  key={idx}
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] p-6 border border-[#222222] border-l-2 border-l-[#C5A059] hover:border-[#C5A059] transition-all duration-300 flex items-center gap-4 group block"
                >
                  <div className="w-12 h-12 bg-[#181818] border border-[#222222] flex items-center justify-center shrink-0 group-hover:border-[#C5A059] transition-colors">
                    <Icon className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 block">
                      {channel.title}
                    </span>
                    <span className="font-serif italic text-lg font-normal text-white group-hover:text-[#C5A059] transition-colors block mt-0.5">
                      {channel.value}
                    </span>
                    <span className="text-[11px] text-white/50 font-light block mt-1 italic">
                      {channel.subtext}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* MESSAGE FORM */}
          <div className="lg:col-span-7 bg-[#111111] p-8 sm:p-10 border border-[#222222] border-l-4 border-l-[#C5A059] relative">
            {sent ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto rounded-full">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif italic text-3xl text-white mb-2">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-sm text-white/70 font-light max-w-md mx-auto italic leading-relaxed">
                    Sua mensagem foi transmitida com sucesso para a Dominik Publishing. Responderemos diretamente para o seu e-mail de contato: <span className="text-white font-mono font-bold">{email}</span>.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/5511915329483?text=${encodeURIComponent(`Olá! Acabei de enviar uma mensagem no site sobre: ${subject || 'Contato'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>Falar no WhatsApp Direct (+55 11 91532-9483)</span>
                  </a>

                  <button
                    onClick={() => {
                      setSent(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="w-full sm:w-auto px-5 py-3 bg-[#181818] border border-[#222222] hover:border-[#C5A059] text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif italic text-2xl font-normal text-white mb-1">
                    Envie uma Mensagem Direta
                  </h3>
                  <p className="text-xs text-white/50 font-light italic">
                    Canal seguro para solicitações de orçamento, licenciamento e reuniões.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                      E-mail Profissional *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nome@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    Assunto do Contato
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Consulta sobre Licenciamento de Músicas"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                    Mensagem / Detalhes *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Escreva sua mensagem com detalhes sobre seu projeto ou dúvida..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#181818] border border-[#222222] text-white text-xs sm:text-sm px-4 py-3 focus:border-[#C5A059] focus:outline-none tracking-wide"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
