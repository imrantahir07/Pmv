import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Phone, Send, MapPin, Instagram, CheckCircle, 
  MessageSquare, ShieldAlert, CheckCircle2, Building2 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Construction Query',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database write / email trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Construction Query',
          message: ''
        });
      }, 4000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative bg-[#272B33] py-24 md:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5B400]/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Information & Direct Anchors */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#F5B400] mb-3 block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-6 leading-none">
              CONTACT <span className="text-[#F5B400]">US.</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed font-light mb-10 font-sans">
              Connect with our corporate office or reach our estimation engineers directly via phone, WhatsApp, email, or Instagram. We are active 24/7 to address project tenders and bids.
            </p>

            {/* Direct Connect Anchors */}
            <div className="space-y-4 mb-10">
              
              {/* Phone Line */}
              <a 
                href="tel:+919001797285" 
                className="flex items-center gap-4 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-[#F5B400]/30 p-4 rounded-xl transition duration-300 group"
              >
                <div className="w-10 h-10 bg-[#F5B400]/10 rounded-lg flex items-center justify-center border border-[#F5B400]/20 text-[#F5B400] shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Direct Hotline (Call)</span>
                  <div className="text-sm font-bold text-white tracking-wide mt-0.5 group-hover:text-[#F5B400] transition-colors">+91 9001797285</div>
                </div>
              </a>

              {/* WhatsApp Business Link */}
              <a 
                href="https://wa.me/919001797285?text=Hello%20PMV%20Infra%20Group,%20I%20am%20interested%20in%20a%20construction%20quote." 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-green-500/30 p-4 rounded-xl transition duration-300 group"
              >
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20 text-green-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">WhatsApp chat</span>
                  <div className="text-sm font-bold text-white tracking-wide mt-0.5 group-hover:text-green-400 transition-colors">+91 9001797285</div>
                </div>
              </a>

              {/* Corporate Email Address */}
              <a 
                href="mailto:pmvinfra7@gmail.com" 
                className="flex items-center gap-4 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-[#F5B400]/30 p-4 rounded-xl transition duration-300 group"
              >
                <div className="w-10 h-10 bg-[#F5B400]/10 rounded-lg flex items-center justify-center border border-[#F5B400]/20 text-[#F5B400] shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Corporate Mail</span>
                  <div className="text-sm font-bold text-white tracking-wide mt-0.5 group-hover:text-[#F5B400] transition-colors">pmvinfra7@gmail.com</div>
                </div>
              </a>

              {/* Instagram Handle */}
              <a 
                href="https://www.instagram.com/Surab_konra" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-pink-500/30 p-4 rounded-xl transition duration-300 group"
              >
                <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center border border-pink-500/20 text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Instagram handle</span>
                  <div className="text-sm font-bold text-white tracking-wide mt-0.5 group-hover:text-pink-400 transition-colors">@Surab_konra</div>
                </div>
              </a>

            </div>

            {/* Head Office Location & Address Details */}
            <div className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-xl space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F5B400]" /> PMV INFRA CORPORATE HEADQUARTERS
              </h3>
              
              {/* Map Visual / Location Marker Container */}
              <div className="relative aspect-[16/7] rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center text-center px-4" id="office-map-container">
                {/* Tech drawing representing geographical grid */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <div className="relative z-10">
                  <Building2 className="w-8 h-8 text-[#F5B400] mx-auto mb-2 animate-bounce" />
                  <div className="text-xs font-extrabold text-[#F5B400] tracking-wider uppercase">REGIONAL OFFICE MARKER</div>
                  <div className="text-[10px] font-bold text-white mt-1 max-w-xs font-mono uppercase tracking-wide">
                    Indra Colony, Barmer
                  </div>
                  <p className="text-[9px] text-neutral-400 mt-0.5 max-w-xs font-light">
                    Pin Code 344001, Rajasthan, India
                  </p>
                </div>
              </div>

              {/* Exact Address Text Block */}
              <div className="bg-neutral-950/50 border border-neutral-800/80 p-4 rounded-lg space-y-2">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block font-sans">Official Postal Address</span>
                <p className="text-xs text-neutral-200 font-medium leading-relaxed font-sans">
                  <strong className="text-white block mb-1 font-bold">PMV Infra Group Office</strong>
                  Indra Colony Barmer, pin code 344001, Rajasthan, India
                </p>
                <div className="pt-1.5 border-t border-neutral-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] text-neutral-400 font-mono tracking-wider uppercase">Active Regional Hub</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Bid / Query form */}
          <div className="lg:col-span-7 bg-[#1c1c1c] border border-neutral-800 rounded-xl p-8 shadow-xl w-full">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">
              Submit Project Query
            </h3>

            {isSubmitted ? (
              <motion.div 
                className="flex flex-col items-center justify-center py-16 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-14 h-14 bg-[#F5B400]/10 rounded-full flex items-center justify-center mb-6 border border-[#F5B400]/30">
                  <CheckCircle2 className="w-8 h-8 text-[#F5B400]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Dispatched Successfully</h4>
                <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your query has been logged under PMV tracking ID: <span className="text-[#F5B400] font-mono">#PMV-{Math.floor(1000 + Math.random() * 9000)}</span>. We will follow up shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-1.5">Your Name *</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#F5B400] rounded-lg px-4 py-2.5 text-white text-xs focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-1.5">Email Address *</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@domain.com"
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#F5B400] rounded-lg px-4 py-2.5 text-white text-xs focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-1.5">Phone Contact *</label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Include country code"
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#F5B400] rounded-lg px-4 py-2.5 text-white text-xs focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-1.5">Query Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#F5B400] rounded-lg px-4 py-2.5 text-white text-xs focus:outline-none transition appearance-none cursor-pointer"
                    >
                      <option value="General Construction Query">General Construction Query</option>
                      <option value="Project Tenders & Bidding">Project Tenders & Bidding</option>
                      <option value="Subcontracting & Supply Linkage">Subcontracting & Supply Linkage</option>
                      <option value="Career & Job Openings">Career & Job Openings</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-1.5">Detailed Message / Specifications *</label>
                  <textarea 
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe layout scope, heavy equipment needs, soil conditions, or general inquiries..."
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#F5B400] rounded-lg px-4 py-2.5 text-white text-xs focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F5B400] hover:bg-[#D9A000] text-[#222222] font-bold text-xs tracking-widest uppercase py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-lg transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#222222] border-t-transparent rounded-full animate-spin" />
                      Logging Query Details...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Dispatch Message
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
