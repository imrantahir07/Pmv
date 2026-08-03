import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Phone, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Road Construction',
    scopeSize: 'Medium',
    location: '',
    message: '',
    urgency: 'Medium (1-3 months)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Road Construction',
          scopeSize: 'Medium',
          location: '',
          message: '',
          urgency: 'Medium (1-3 months)'
        });
      }, 3000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            id="modal-backdrop"
            className="fixed inset-0 bg-[#181818]/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div 
            id="quote-modal-content"
            className="relative w-full max-w-2xl bg-[#222222] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl z-10"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Header branding row */}
            <div className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 p-6 border-b border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#F5B400] flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3 h-3 text-[#F5B400]" /> PMV CORPORATE PORTAL
                </span>
                <h3 className="text-xl font-bold text-white tracking-wide">Request Civil Construction Quote</h3>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content / Form body */}
            <div className="p-6">
              {submitted ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-[#F5B400]/10 rounded-full flex items-center justify-center mb-6 border border-[#F5B400]/20">
                    <CheckCircle2 className="w-10 h-10 text-[#F5B400]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Estimate Proposal Generated!</h4>
                  <p className="text-neutral-400 max-w-md text-sm leading-relaxed mb-6">
                    Thank you, <span className="text-[#F5B400] font-semibold">{formData.name}</span>. Our Lead Estimation Engineer will review your <span className="text-white underline decoration-[#F5B400] underline-offset-4">{formData.projectType}</span> project and contact you within 24 hours.
                  </p>
                  <div className="bg-neutral-900/60 p-4 rounded-lg border border-neutral-800 w-full max-w-sm flex items-center justify-center gap-3">
                    <Phone className="w-4 h-4 text-[#F5B400] shrink-0" />
                    <span className="text-xs font-mono text-neutral-300">Fast track: +91 9001797285</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1.5">Full Name *</label>
                      <input 
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#F5B400] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1.5">Email Address *</label>
                      <input 
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#F5B400] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1.5">Contact Phone *</label>
                      <input 
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#F5B400] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1.5">Project Location *</label>
                      <input 
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#F5B400] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1.5">Project Domain</label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#F5B400] transition appearance-none cursor-pointer"
                      >
                        <option value="Road Construction">Road Construction & Highways</option>
                        <option value="Bridge Construction">Bridge / Flyover Construction</option>
                        <option value="Civil Construction">General Civil Work & Development</option>
                        <option value="Earthwork">Earthwork & Heavy Excavation</option>
                        <option value="Pipeline Works">Pipeline Works & Water Supply</option>
                        <option value="Concrete Structures">Concrete & Reinforced Structures</option>
                        <option value="Industrial Projects">Industrial & Factory Construction</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1.5">Estimated Scope</label>
                      <select 
                        name="scopeSize"
                        value={formData.scopeSize}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#F5B400] transition appearance-none cursor-pointer"
                      >
                        <option value="Small">Small (&lt; ₹10L)</option>
                        <option value="Medium">Medium (₹10L - ₹50L)</option>
                        <option value="Large">Large (₹50L - ₹2Cr)</option>
                        <option value="Mega">Mega Infrastructure (&gt; ₹2Cr)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1.5">Work Timeline / Urgency</label>
                    <select 
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#F5B400] transition appearance-none cursor-pointer"
                    >
                      <option value="Immediate">Immediate (Within 30 days)</option>
                      <option value="Medium (1-3 months)">Medium (1 - 3 months)</option>
                      <option value="Long Term">Long Term / Strategic (3+ months)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1.5">Project Description & Specifications</label>
                    <textarea 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please write core layout specs, quantity of materials needed, heavy equipment requirements, or structural drawings notes..."
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#F5B400] transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F5B400] hover:bg-[#D9A000] text-[#222222] font-bold text-sm tracking-wider uppercase py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-[#F5B400]/10 transition duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#222222] border-t-transparent rounded-full animate-spin" />
                        Calculating Estimate Proposal...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Generate Free Quote
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
