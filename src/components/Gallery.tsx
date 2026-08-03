import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Grid, Eye, Maximize2, Compass, X, Calendar } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState<any | null>(null);

  const categories = ['All', 'Roads', 'Workforce & Labor', 'Machinery'];

  const items = [
    {
      title: "PMV Heavy Tipper Truck Fleet",
      category: "Roads",
      image: "/src/assets/images/pmv_trucks_fleet_1785676326831.jpg",
      location: "Rajasthan Project Site, IN",
      date: "June 2026",
      desc: "Our high-performance heavy tipper and dumper trucks lined up at an active highway soil transit bypass route."
    },
    {
      title: "Subgrade Soil Compaction Work",
      category: "Roads",
      image: "/src/assets/images/pmv_road_roller_1785676342693.jpg",
      location: "Rajasthan Bypass Expressway, IN",
      date: "July 2026",
      desc: "A yellow heavy road compactor machinery consolidating and compacting high-quality sand subgrade bedlayers."
    },
    {
      title: "PMV Infrastructure Site Team",
      category: "Workforce & Labor",
      image: "/src/assets/images/pmv_site_workers_1785676358094.jpg",
      location: "PMV Construction Camp, IN",
      date: "June 2026",
      desc: "Dedicated and skilled workforce wearing standard yellow hard helmets and orange high-visibility safety jackets."
    },
    {
      title: "Excavation & Earthwork loading",
      category: "Machinery",
      image: "/src/assets/images/pmv_excavator_dusk_1785676375144.jpg",
      location: "Rajasthan Highway Site, IN",
      date: "July 2026",
      desc: "Heavy hydraulic crawler excavator loading site earth material into our heavy tipper trucks during evening operation shifts."
    }
  ];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative bg-[#1E2127] py-24 md:py-32 overflow-hidden border-t border-b border-neutral-800">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5B400]/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#F5B400] mb-3 block">
              PROJECT PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              PORTFOLIO <span className="text-[#F5B400]">GALLERY.</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-4 font-light leading-relaxed font-sans">
              Real high-end construction photos showing active road, bridge, concrete structure, and heavy equipment operations across our regional projects.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-1.5 bg-neutral-900/60 p-1.5 border border-neutral-800 rounded-xl shrink-0 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#F5B400] text-[#1E2127]'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveImage(item)}
                className="group relative aspect-[4/3] bg-neutral-950 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl border border-neutral-800 hover:border-[#F5B400]/40 transition-all duration-300"
                id={`gallery-item-${index}`}
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.75] group-hover:brightness-[0.85]"
                />

                {/* Grid Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5 md:p-6 opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#F5B400] uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wide group-hover:text-[#F5B400] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-3 text-[10px] text-neutral-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Compass className="w-3 h-3 text-[#F5B400]" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Centered Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] transition-all duration-300">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-[#F5B400] scale-90 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Luxury Full-Screen Image Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              id="lightbox-backdrop"
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
            />

            {/* Lightbox container */}
            <motion.div 
              id="lightbox-content"
              className="relative w-full max-w-4xl bg-[#1c1c1c] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              {/* Image box */}
              <div className="relative aspect-[16/9] bg-neutral-950">
                <img 
                  src={activeImage.image} 
                  alt={activeImage.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {/* Close Button */}
                <button 
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-lg border border-neutral-800 hover:border-[#F5B400] transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text specifications box */}
              <div className="p-6 md:p-8 bg-[#222222]">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#F5B400] uppercase block mb-1">
                      {activeImage.category} • CERTIFIED PROJECT
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide">
                      {activeImage.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
                    <span className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#F5B400]" />
                      {activeImage.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#F5B400]" />
                      {activeImage.date}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed font-light mt-4">
                  {activeImage.desc}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
