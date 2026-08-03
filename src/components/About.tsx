import React from 'react';
import { Check, Compass, Users, Layers, Award } from 'lucide-react';

export default function About() {
  const expertiseList = [
    "Road Construction",
    "Bridge Construction",
    "Civil Construction",
    "Earthwork & Excavation",
    "Infrastructure Development",
    "Site Development",
    "Pipeline Works",
    "Land Development",
    "Concrete Structures",
    "Industrial Projects"
  ];

  return (
    <section id="about" className="relative bg-[#1E2127] py-24 md:py-32 overflow-hidden border-t border-b border-neutral-800">
      {/* Background visual accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5B400]/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (Images with premium layout and math-border radius alignment) */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden rounded-xl border border-neutral-800 bg-[#323742] p-2 shadow-2xl">
              <img 
                src="/src/assets/images/pmv_excavator_dusk_1785676375144.jpg" 
                alt="PMV Construction Engineering Site" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-lg aspect-[4/3] brightness-[0.9] contrast-[1.05]"
              />
              
              {/* Overlapping small badge for structural credibility */}
              <div className="absolute -bottom-6 -right-6 bg-[#323742] border border-neutral-800 p-6 rounded-xl shadow-2xl hidden sm:flex items-center gap-4 max-w-xs z-20">
                <div className="w-12 h-12 bg-[#F5B400]/10 rounded-lg flex items-center justify-center border border-[#F5B400]/30 shrink-0">
                  <Award className="w-6 h-6 text-[#F5B400]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Corporate Standard</h4>
                  <p className="text-neutral-400 text-xs mt-1 font-light leading-relaxed">
                    Licensed category class structural constructor.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative geometrical outlines representing survey lines */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#F5B400]/30 pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-neutral-800 pointer-events-none" />
          </div>

          {/* Profile Text */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#F5B400] mb-3 block">
              CORPORATE PROFILE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-6 leading-tight">
              COMMITTED TO INFRASTRUCTURE <span className="text-[#F5B400]">EXCELLENCE.</span>
            </h2>
            
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 font-sans">
              PMV Infra Group is a leading infrastructure and civil construction company focused on delivering reliable, safe and long-lasting projects. We combine experienced engineers, skilled manpower and modern machinery to deliver projects with quality and timely completion.
            </p>

            <div className="h-[1px] bg-neutral-800 my-8" />

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5B400] mb-4">
              Our Comprehensive Expertise
            </h3>

            {/* Structured responsive expertise list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {expertiseList.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-neutral-900/40 border border-neutral-800/60 p-3 rounded-lg hover:border-[#F5B400]/20 transition-all duration-300">
                  <div className="w-5 h-5 bg-[#F5B400]/10 rounded flex items-center justify-center border border-[#F5B400]/20 shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#F5B400]" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-200 tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            {/* Highlight banners */}
            <div className="grid grid-cols-3 gap-6 bg-neutral-900/40 p-5 rounded-xl border border-neutral-800/80">
              <div className="text-center">
                <div className="flex justify-center mb-1.5">
                  <Users className="w-5 h-5 text-[#F5B400]" />
                </div>
                <div className="font-bold text-white text-sm">Engineers</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">Top Tier Civil Spec</div>
              </div>
              <div className="text-center border-x border-neutral-800">
                <div className="flex justify-center mb-1.5">
                  <Layers className="w-5 h-5 text-[#F5B400]" />
                </div>
                <div className="font-bold text-white text-sm">Machinery</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">Heavy Owned Fleet</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-1.5">
                  <Compass className="w-5 h-5 text-[#F5B400]" />
                </div>
                <div className="font-bold text-white text-sm">Safety</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">Zero Accident Rate</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
