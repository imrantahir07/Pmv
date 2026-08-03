import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, CalendarRange, Clock, Award, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

const slides = [
  {
    image: "/src/assets/images/pmv_trucks_fleet_1785676326831.jpg",
    title: "HEAVY HIGHWAY LOGISTICS.",
    subtitle: "UNMATCHED TRUCK FLEET.",
    category: "EXPRESSWAY ROAD FLEET"
  },
  {
    image: "/src/assets/images/pmv_road_roller_1785676342693.jpg",
    title: "HIGHWAYS & HIGH SPEED ROADS.",
    subtitle: "CONNECTING COMMERCE.",
    category: "SUBGRADE SOIL COMPACTION"
  },
  {
    image: "/src/assets/images/pmv_excavator_dusk_1785676375144.jpg",
    title: "EXCAVATION & EARTHMOVING.",
    subtitle: "PRECISION AND CAPACITY.",
    category: "HEAVY EXCAVATOR OPERATIONS"
  },
  {
    image: "/src/assets/images/pmv_site_workers_1785676358094.jpg",
    title: "ENGINEERING SITE LEADERSHIP.",
    subtitle: "COMMITTED WORKFORCE.",
    category: "SKILLED INFRASTRUCTURE TEAM"
  }
];

export default function Hero({ onOpenQuote }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section id="home" className="relative h-screen min-h-[650px] w-full bg-[#181818] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Construction Site Background" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center brightness-[0.38] contrast-[1.05]"
            />
            {/* Multi-layered luxury gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#222222]/85 via-[#222222]/30 to-transparent" />
            
            {/* Subtle warm tint overlay */}
            <div className="absolute inset-0 bg-[#F5B400]/[0.02] mix-blend-color-burn" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Grid Pattern overlay for tech construction look */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#F5B400_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Hero Central Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 text-left z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-block bg-[#F5B400]/10 border border-[#F5B400]/30 text-[#F5B400] text-[10px] uppercase font-bold tracking-[0.3em] px-3.5 py-1 rounded mb-6 backdrop-blur-sm">
                  {slides[currentSlide].category}
                </span>

                <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08] uppercase">
                  {slides[currentSlide].title}
                  <span className="block text-[#F5B400] mt-1">{slides[currentSlide].subtitle}</span>
                </h1>

                <p className="text-sm md:text-base text-neutral-300 max-w-xl leading-relaxed mb-10 font-light font-sans">
                  PMV Infra Group is a trusted civil construction and infrastructure company delivering high-quality road, bridge, industrial and development projects with commitment, safety and excellence.
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <button 
                onClick={onOpenQuote}
                className="bg-[#F5B400] hover:bg-white text-[#222222] font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-lg shadow-lg shadow-[#F5B400]/10 hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-transparent hover:bg-white/5 text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-lg border border-neutral-700 hover:border-white transition-all duration-300"
              >
                Contact Us
              </button>

              <button 
                onClick={() => scrollToSection('gallery')}
                className="bg-neutral-900/40 hover:bg-neutral-900/60 text-[#F5B400] font-semibold text-xs tracking-widest uppercase px-6 py-4 rounded-lg border border-[#F5B400]/20 hover:border-[#F5B400]/50 transition-all duration-300 backdrop-blur-sm"
              >
                Our Projects
              </button>
            </motion.div>
          </div>

          {/* Slide Indicator Overlay (Sidebar vertical layout) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4 justify-end items-end h-full py-12 text-right select-none z-10">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group flex items-center gap-4 text-left"
              >
                <div className="flex flex-col items-end">
                  <span className={`text-[10px] font-mono tracking-widest font-semibold ${index === currentSlide ? 'text-[#F5B400]' : 'text-neutral-500'}`}>
                    0{index + 1}
                  </span>
                  <span className={`text-xs font-medium tracking-wide ${index === currentSlide ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'} transition`}>
                    {slide.category.split(' ')[0]}
                  </span>
                </div>
                <div className={`h-8 w-[2px] transition ${index === currentSlide ? 'bg-[#F5B400]' : 'bg-neutral-800'}`} />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Carousel navigation controls (Absolute overlay) */}
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-3 z-20">
        <button 
          onClick={handlePrev}
          className="p-3 rounded-lg border border-neutral-800 bg-[#181818]/60 backdrop-blur-sm text-neutral-400 hover:text-white hover:border-[#F5B400]/50 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={handleNext}
          className="p-3 rounded-lg border border-neutral-800 bg-[#181818]/60 backdrop-blur-sm text-neutral-400 hover:text-white hover:border-[#F5B400]/50 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* STATS STRIP OVERLAY (Floating glassmorphism bottom center/right) */}
      <div className="absolute bottom-0 right-0 left-0 lg:left-auto lg:right-12 z-20 translate-y-1/2 lg:translate-y-0 lg:-bottom-6 lg:max-w-4xl px-4 lg:px-0">
        <div className="bg-[#222222]/90 backdrop-blur-md border border-neutral-800 p-6 md:p-8 rounded-xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y-0 divide-x-0 md:divide-x divide-neutral-800 max-w-5xl mx-auto">
          {/* Stat 1 */}
          <div className="flex items-center gap-4 md:px-4">
            <div className="w-10 h-10 bg-[#F5B400]/10 rounded-lg flex items-center justify-center border border-[#F5B400]/20 shrink-0">
              <Award className="w-5 h-5 text-[#F5B400]" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white leading-none tracking-tight">27+</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mt-1">Completed Projects</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 md:px-4 pt-4 md:pt-0">
            <div className="w-10 h-10 bg-[#F5B400]/10 rounded-lg flex items-center justify-center border border-[#F5B400]/20 shrink-0">
              <CalendarRange className="w-5 h-5 text-[#F5B400]" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white leading-none tracking-tight">6+</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mt-1">Years Experience</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 md:px-4 pt-4 md:pt-0">
            <div className="w-10 h-10 bg-[#F5B400]/10 rounded-lg flex items-center justify-center border border-[#F5B400]/20 shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#F5B400]" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white leading-none tracking-tight">100%</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mt-1">Quality Commitment</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 md:px-4 pt-4 md:pt-0">
            <div className="w-10 h-10 bg-[#F5B400]/10 rounded-lg flex items-center justify-center border border-[#F5B400]/20 shrink-0">
              <Clock className="w-5 h-5 text-[#F5B400]" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white leading-none tracking-tight">24×7</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mt-1">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
