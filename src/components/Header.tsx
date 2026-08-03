import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Calendar, ExternalLink } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Machinery', href: '#machinery' },
    { label: 'Timeline', href: '#process' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on section visibility
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const sectionId = item.href.slice(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const sectionId = href.slice(1);
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Top Banner (Contact info & credentials) */}
      <div className="bg-[#181818] border-b border-neutral-800 text-[11px] text-neutral-400 py-2.5 px-6 hidden lg:flex items-center justify-between font-mono relative z-40">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 hover:text-white transition">
            <Phone className="w-3 h-3 text-[#F5B400]" />
            +91 9001797285
          </span>
          <span className="flex items-center gap-1.5 hover:text-white transition">
            <Mail className="w-3.5 h-3.5 text-[#F5B400]" />
            pmvinfra7@gmail.com
          </span>
          <span className="flex items-center gap-1.5 text-[#F5B400]">
            <Calendar className="w-3.5 h-3.5" />
            Active ISO 9001:2015 Construction Standards
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-neutral-500">Regd No: PMV-IN-2026</span>
          <a href="#contact" className="hover:text-white text-xs font-semibold uppercase flex items-center gap-1 text-[#F5B400] transition">
            DIRECT CALL <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#272B33]/90 backdrop-blur-md shadow-lg border-b border-neutral-800 py-3'
            : 'bg-[#272B33] lg:bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center">
            <Logo className="h-11 md:h-14" light={true} />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1.5 border border-neutral-800 rounded-full backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 ${
                    isActive ? 'text-[#272B33]' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-[#F5B400] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Quote Button (Desktop) */}
          <div className="hidden lg:block">
            <button
              onClick={onOpenQuote}
              className="bg-[#F5B400] hover:bg-white text-[#272B33] font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full shadow-md shadow-[#F5B400]/5 hover:shadow-lg transition-all duration-300 flex items-center gap-1.5"
            >
              Get Bids / Quote
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="bg-[#F5B400] text-[#272B33] font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-md hover:bg-white transition"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 w-full bg-[#272B33] border-b border-neutral-800 shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-5 flex flex-col gap-2.5 bg-[#1E2127]">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block py-2.5 px-4 rounded-lg text-sm font-semibold tracking-wider uppercase transition ${
                        isActive
                          ? 'bg-[#F5B400] text-[#272B33]'
                          : 'text-neutral-300 hover:bg-neutral-800/60'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="h-[1px] bg-neutral-800 my-2" />
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-white hover:bg-[#F5B400] text-[#272B33] font-bold text-xs tracking-wider uppercase py-3 rounded-lg text-center transition"
                >
                  Generate Free Project Bid
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
