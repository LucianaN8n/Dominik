import React, { useState, useEffect } from 'react';
import { Disc3, Search, FileText, UserCheck, Menu, X, ArrowUpRight, Music2, Lock, ShieldCheck, KeyRound, FolderCheck } from 'lucide-react';
import { DOMINIK_DRIVE_FOLDER_URL } from '../utils/googleDrive';

interface HeaderProps {
  onOpenLicensing: () => void;
  onOpenProposal: () => void;
  onOpenProducerArea: () => void;
  onOpenPressKit?: () => void;
  onOpenTechnicalSheet?: () => void;
  isAuthorMode?: boolean;
  onOpenAuthorAuth?: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onCloseAllModals?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLicensing,
  onOpenProposal,
  onOpenProducerArea,
  onOpenPressKit,
  onOpenTechnicalSheet,
  isAuthorMode,
  onOpenAuthorAuth,
  searchTerm,
  setSearchTerm,
  onCloseAllModals
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Compositora', href: '#compositora' },
    { label: 'Contato', href: '#contato' },
  ];

  const secondaryNavLinks = [
    { label: 'Para Artistas & Produtoras', href: '#parceiros' },
    { label: 'Proteção Jurídica', href: '#protecao-juridica' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222222] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-black/95 via-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          onClick={() => onCloseAllModals?.()}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full border border-[#C5A059]/60 flex items-center justify-center bg-[#111111] group-hover:border-[#C5A059] transition-all duration-300">
            <Disc3 className="w-5 h-5 text-[#C5A059] group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <div className="flex flex-col">
            <span className="font-light tracking-[0.3em] text-[#C5A059] text-xl leading-none group-hover:text-white transition-colors">
              DOMINIK
            </span>
            <span className="text-[10px] tracking-[0.5em] opacity-70 uppercase text-white/80 -mt-0.5">
              Publishing
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] uppercase text-white/70">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => onCloseAllModals?.()}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          {/* SEARCH BAR TOGGLE */}
          <div className="relative">
            {showSearchInput ? (
              <div className="flex items-center bg-[#151515] border border-[#C5A059]/50 rounded-none px-3 py-1.5 text-xs">
                <Search className="w-3.5 h-3.5 text-[#C5A059] mr-2" />
                <input
                  type="text"
                  placeholder="Buscar música, gênero..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent text-white text-xs focus:outline-none w-36 tracking-wide"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setShowSearchInput(false);
                    setSearchTerm('');
                  }}
                  className="text-white/40 hover:text-white ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearchInput(true)}
                className="p-2 text-white/60 hover:text-[#C5A059] transition-colors hover:bg-white/5"
                title="Buscar no catálogo"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* GOOGLE DRIVE LINK */}
          <a
            href={DOMINIK_DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 border border-[#C5A059]/50 hover:border-[#C5A059] bg-[#181818] hover:bg-[#C5A059] text-[#C5A059] hover:text-black text-[10px] tracking-[0.15em] font-bold uppercase transition-all shadow-md"
            title="Abrir Pasta Oficial do Google Drive com Áudios Demos HD"
          >
            <FolderCheck className="w-3.5 h-3.5 shrink-0 text-[#C5A059] group-hover:text-black" />
            <span>Google Drive</span>
          </a>

          {/* AUTHOR MODE BUTTON */}
          <button
            onClick={() => onOpenAuthorAuth?.()}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-[10px] tracking-[0.15em] font-bold uppercase transition-all shadow-md ${
              isAuthorMode
                ? 'bg-[#C5A059] text-black border border-[#C5A059] hover:bg-white'
                : 'bg-[#181818] text-[#C5A059] border border-[#C5A059]/40 hover:border-[#C5A059] hover:text-white'
            }`}
            title={isAuthorMode ? "Modo Autora Ativo (Upload & Edição Liberados)" : "Área Restrita da Compositora (Ativar Edição & Upload)"}
          >
            {isAuthorMode ? (
              <>
                <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-black" />
                <span>Modo Autora (Ativo)</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 shrink-0 text-[#C5A059]" />
                <span>Acesso Autora</span>
              </>
            )}
          </button>

          {/* PROPOSAL BUTTON */}
          <button
            onClick={onOpenProposal}
            className="flex items-center gap-1.5 px-3.5 py-2 border border-[#C5A059]/40 hover:border-[#C5A059] text-[10px] tracking-[0.15em] font-medium uppercase text-[#C5A059] hover:text-white transition-all bg-[#C5A059]/10"
          >
            <Music2 className="w-3.5 h-3.5" />
            <span>Proposta</span>
          </button>

          {/* LICENSING CTA */}
          <button
            onClick={onOpenLicensing}
            className="border border-[#C5A059] text-[#C5A059] px-6 py-2 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#C5A059] hover:text-black transition-colors"
          >
            Licenciamento
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenLicensing}
            className="px-3 py-1 rounded-full bg-gold-gradient text-black font-bold text-[10px] uppercase tracking-wider"
          >
            Licenciar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-[#D4AF37] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-neutral-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar no catálogo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 text-white text-sm rounded-lg px-3 py-2 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCloseAllModals?.();
                }}
                className="text-sm font-medium uppercase tracking-wider text-white hover:text-[#C5A059] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-neutral-800 my-2 pt-2 space-y-2">
              {secondaryNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onCloseAllModals?.();
                  }}
                  className="text-xs uppercase tracking-wider text-white/60 hover:text-[#C5A059] transition-colors py-1 block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href={DOMINIK_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider bg-[#181818] border border-[#C5A059] text-[#C5A059] flex items-center justify-center gap-2"
            >
              <FolderCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Abrir Pasta do Google Drive</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuthorAuth?.();
              }}
              className={`w-full py-2.5 text-center text-xs font-bold uppercase flex items-center justify-center gap-2 ${
                isAuthorMode
                  ? 'bg-[#C5A059] text-black border border-[#C5A059]'
                  : 'bg-[#181818] border border-[#C5A059]/50 text-[#C5A059]'
              }`}
            >
              {isAuthorMode ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-black" />
                  <span>Modo Autora (Ativo)</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-[#C5A059]" />
                  <span>Acesso Restrito Autora</span>
                </>
              )}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-2.5 rounded-lg border border-[#D4AF37]/50 text-center text-xs font-semibold uppercase text-[#E5C158] bg-[#D4AF37]/10 flex items-center justify-center gap-2"
            >
              <Music2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Enviar Proposta</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
