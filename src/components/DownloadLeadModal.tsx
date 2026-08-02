import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle2, ShieldCheck, Mail, User, Phone, Briefcase, FileText, Send, Lock } from 'lucide-react';

interface DownloadLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentTitle?: string;
  fileType?: string;
  fileSize?: string;
  onConfirmDownload: () => void;
}

export const DownloadLeadModal: React.FC<DownloadLeadModalProps> = ({
  isOpen,
  onClose,
  documentTitle = 'Guia de Direitos, Termos de Licenciamento & Biografia',
  fileType = 'PDF',
  fileSize = '3.2 MB',
  onConfirmDownload,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Artista / Intérprete');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Load saved lead if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dominik_lead_info');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name) setName(parsed.name);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.phone) setPhone(parsed.phone);
        if (parsed.role) setRole(parsed.role);
      }
    } catch {
      // Ignore
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    const leadData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      role: role,
      date: new Date().toISOString(),
      documentDownloaded: documentTitle,
    };

    // Save locally
    try {
      localStorage.setItem('dominik_lead_info', JSON.stringify(leadData));
    } catch {
      // Ignore
    }

    // Send notification to FormSubmit
    try {
      await fetch('https://formsubmit.co/ajax/lucsdomingos@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[NOVO LEAD - DOWNLOAD PDF] ${name.trim()} - ${documentTitle}`,
          _captcha: 'false',
          _cc: 'contato@dominikpublishing.com',
          Documento_Baixado: documentTitle,
          Nome_Cliente: name.trim(),
          Email_Contato: email.trim(),
          WhatsApp_Telefone: phone.trim() || 'Não informado',
          Perfil_Atuacao: role,
          Origem: 'Isca Lead Magnet - Download Guia PDF',
        }),
      });
    } catch (err) {
      console.warn('Network submission error, proceeding with local download:', err);
    }

    setIsSubmitting(false);
    setSubmittedSuccess(true);

    // Execute download callback
    onConfirmDownload();

    // Auto close after brief display
    setTimeout(() => {
      setSubmittedSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#111111] border border-[#222222] border-t-4 border-t-[#C5A059] w-full max-w-md p-6 sm:p-8 relative shadow-2xl">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#C5A059]/40 mb-3 text-[#C5A059] text-[10px] font-mono font-bold uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>Documento Oficial • {fileType} ({fileSize})</span>
          </div>
          <h3 className="font-serif italic text-2xl font-normal text-white">
            Baixar Material Exclusivo
          </h3>
          <p className="text-xs text-white/60 font-light mt-1.5 leading-relaxed">
            Informe seu nome e e-mail para receber acesso ao <strong className="text-white font-medium">{documentTitle}</strong> e novidades do catálogo.
          </p>
        </div>

        {submittedSuccess ? (
          <div className="py-8 text-center space-y-4 bg-[#181818] border border-emerald-500/40 p-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif italic text-white">Download Liberado!</h4>
            <p className="text-xs text-white/80 font-light leading-relaxed">
              O seu download foi iniciado. A equipe de A&R da Dominik Publishing recebeu sua solicitação.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 font-medium mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Seu Nome / Nome do Projeto *</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Luciana Domingos ou Nome da Produtora"
                className="w-full bg-[#181818] border border-[#222222] focus:border-[#C5A059] text-white px-4 py-3 text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 font-medium mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>E-mail Corporativo ou Pessoal *</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="w-full bg-[#181818] border border-[#222222] focus:border-[#C5A059] text-white px-4 py-3 text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 font-medium mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>WhatsApp / Telefone (Opcional)</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(11) 99999-9999"
                className="w-full bg-[#181818] border border-[#222222] focus:border-[#C5A059] text-white px-4 py-3 text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 font-medium mb-1.5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Seu Perfil / Atuação</span>
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-[#181818] border border-[#222222] focus:border-[#C5A059] text-white px-4 py-3 text-xs outline-none transition-colors"
              >
                <option value="Artista / Intérprete">Artista / Intérprete</option>
                <option value="Produtor Musical">Produtor Musical</option>
                <option value="Selo / Produtora">Selo / Produtora</option>
                <option value="Supervisor Musical / Audiovisual">Supervisor Musical / Audiovisual</option>
                <option value="Publicidade / Agência">Publicidade / Agência</option>
                <option value="Criador de Conteúdo / Podcaster">Criador de Conteúdo / Podcaster</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#C5A059] hover:bg-white text-black font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Registrando e Gerando Download...</span>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-black" />
                    <span>Confirmar & Baixar PDF Agora</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 pt-2 text-[10px] text-white/40">
              <Lock className="w-3 h-3 text-[#C5A059]" />
              <span>Seus dados estão protegidos sob confidencialidade editorial.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
