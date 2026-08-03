import React from 'react';
import { Mail, Phone, Instagram, ArrowUp, Milestone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    }
  };

  return (
    <footer className="bg-[#1E2127] border-t border-neutral-800 text-neutral-400 relative z-10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-neutral-800/60">
          
          {/* Column 1: Brand pitch */}
          <div className="lg:col-span-4">
            <Logo className="h-12 md:h-14 mb-5" light={true} />
            <p className="text-xs text-neutral-400 leading-relaxed font-light font-sans max-w-sm mb-6">
              PMV Infra Group is a trusted civil construction and infrastructure company delivering high-quality road, bridge, industrial and development projects with commitment, safety and excellence.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-wider bg-neutral-900 border border-neutral-800 px-3 py-1 rounded text-[#F5B400] font-mono font-bold">
                ISO 9001:2015 Registered
              </span>
              <span className="text-[10px] uppercase tracking-wider bg-neutral-900 border border-neutral-800 px-3 py-1 rounded text-neutral-500 font-mono">
                Class A-I Licensed
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-[0.2em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 font-semibold text-xs uppercase tracking-wider">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#F5B400] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#F5B400] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-[#F5B400] transition">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#capabilities" onClick={(e) => handleNavClick(e, '#capabilities')} className="hover:text-[#F5B400] transition">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#machinery" onClick={(e) => handleNavClick(e, '#machinery')} className="hover:text-[#F5B400] transition">
                  Machinery Fleet
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-[#F5B400] transition">
                  Portfolio Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#F5B400] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div className="lg:col-span-5">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-[0.2em] mb-5">
              Contact Channels
            </h4>
            
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5B400] shrink-0" />
                <span className="text-neutral-300 font-bold">+91 9001797285</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5B400] shrink-0" />
                <span className="text-neutral-300">pmvinfra7@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-[#F5B400] shrink-0" />
                <a 
                  href="https://www.instagram.com/Surab_konra" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-neutral-300 hover:text-white transition"
                >
                  @Surab_konra
                </a>
              </div>
              <div className="flex items-start gap-3 border-t border-neutral-800/80 pt-3 font-sans">
                <MapPin className="w-4 h-4 text-[#F5B400] shrink-0 mt-0.5" />
                <div className="text-[11px] text-neutral-300 leading-normal">
                  <span className="font-bold text-white uppercase block mb-0.5 text-[10px] tracking-wider">PMV HQ & Regional Office</span>
                  Indra Colony Barmer, pin code 344001, Rajasthan, India
                </div>
              </div>
            </div>

            <div className="mt-6 bg-neutral-900 border border-neutral-800/80 p-4 rounded-lg flex items-center gap-3">
              <Milestone className="w-5 h-5 text-[#F5B400] shrink-0" />
              <div className="text-[10px] leading-normal font-sans text-neutral-400">
                <span className="font-bold text-white uppercase block mb-0.5">Government Liaison</span>
                For tender notices, direct bids, subcontracts, and general inquiries.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & top action */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-mono text-neutral-500">
          <div>
            Copyright © 2026 PMV Infra Group. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#F5B400] transition uppercase font-bold group"
              aria-label="Scroll back to top of the page"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
