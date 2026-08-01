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
  const mailBody = `Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`;
  const mailtoUrl = `mailto:contato@dominikpublishing.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/contato@dominikpublishing.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: mailSubject,
          Nome: name,
          Email: email,
          Assunto: subject,
          Mensagem: message
        })
      }).catch((err) => console.warn('FormSubmit AJAX warning:', err));

      window.open(mailtoUrl, '_blank');
    } catch (err) {
      console.warn('Mailto fallback:', err);
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
      link: 'mailto:contato@dominikpublishing.com',
      icon: Mail,
      subtext: 'Tempo médio de resposta: 4 horas'
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
                <div className="w-16 h-16 bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif italic text-3xl text-white mb-2">
                    Solicitação Encaminhada!
                  </h3>
                  <p className="text-sm text-white/70 font-light max-w-md mx-auto italic">
                    Sua mensagem foi direcionada para o e-mail oficial:
                  </p>
                  <a
                    href="mailto:contato@dominikpublishing.com"
                    className="text-[#C5A059] font-bold text-sm tracking-wide block mt-1 hover:underline"
                  >
                    contato@dominikpublishing.com
                  </a>
                </div>

                <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-[#C5A059] text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Abrir no Seu E-mail</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#181818] border border-[#C5A059]/60 hover:border-[#C5A059] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#C5A059]" />}
                    <span>{copiedEmail ? 'E-mail Copiado!' : 'Copiar E-mail'}</span>
                  </button>

                  <a
                    href={`https://wa.me/5511915329483?text=${encodeURIComponent(`Olá! Enviei uma mensagem no site sobre: ${subject || 'Contato'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#181818] border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Confirmar via WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => {
                      setSent(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="text-xs text-white/50 hover:text-white underline font-mono uppercase tracking-wider"
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
