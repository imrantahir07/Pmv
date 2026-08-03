import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, PhoneCall } from 'lucide-react';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  // Direct WhatsApp contact details
  const whatsappUrl = "https://wa.me/919001797285?text=Hello%20PMV%20Infra%20Group,%20I%20am%20interested%20in%20a%20construction%20quote.";

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="whatsapp-panel"
            className="absolute bottom-16 right-0 w-80 bg-[#1c1c1c] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            {/* Header with green support banner */}
            <div className="bg-emerald-600 p-4 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-emerald-100 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <PhoneCall className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wide">PMV Construction Desk</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-100 mt-0.5 font-medium">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-ping" />
                    Active Online • Quick Response
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#222222] text-xs">
              <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-lg text-neutral-300 mb-4 leading-relaxed font-light">
                Hello there! 👋 We specialize in high-quality civil infrastructure. Let us know what project you are bidding or planning, and we'll calculate a custom quote!
              </div>

              {/* Action Link button */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide uppercase py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-300 text-center"
              >
                <Send className="w-3.5 h-3.5" />
                Start Chat (WhatsApp)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        id="whatsapp-float-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-500 transition-colors focus:outline-none border border-emerald-500/20"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact PMV Infra on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 animate-spin-once" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
