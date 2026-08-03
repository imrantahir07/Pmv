import React from 'react';
import { motion } from 'motion/react';
import { 
  Home, Building2, Factory, Route, Milestone, Pipette, 
  Landmark, Map, Layers3, Braces, Compass, ShieldAlert 
} from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      title: "Residential Projects",
      icon: Home,
      stats: "Subdivisions & Housing",
      desc: "Earthmoving, foundation grading, site leveling, and internal drainage channels for mega residential townships."
    },
    {
      title: "Commercial Projects",
      icon: Building2,
      stats: "Corporate Hubs",
      desc: "Heavy concrete footings, structural framing, multi-level basements, and site grading for business hubs."
    },
    {
      title: "Industrial Projects",
      icon: Factory,
      stats: "Factories & Warehouses",
      desc: "Laying high-load flooring, massive structural columns, gantry crane beams, and specialized machinery pits."
    },
    {
      title: "Road Projects",
      icon: Route,
      stats: "Highways & Tollways",
      desc: "Multi-layered sub-base prep, asphalt paving, road shoulders, storm drains, and safety sign compliance."
    },
    {
      title: "Bridge Projects",
      icon: Milestone,
      stats: "Viaducts & Flyovers",
      desc: "Bored pile foundations, abutments, high-tensile stays, precast girders, and seismic safety buffers."
    },
    {
      title: "Pipeline Projects",
      icon: Pipette,
      stats: "Water & High-Conduits",
      desc: "Cross-country trenching, pipe alignment, welding inspections, and hydrostatic pressure testing."
    },
    {
      title: "Government Projects",
      icon: Landmark,
      stats: "Municipal Infrastructure",
      desc: "Tender-backed public works, highway bypass networks, sewage collection plants, and community plazas."
    },
    {
      title: "Site Development",
      icon: Map,
      stats: "Plot Readiness",
      desc: "Surveying, soil stabilization, clearing dense forests, and routing key electrical/water utilities."
    },
    {
      title: "Earthwork",
      icon: Layers3,
      stats: "Massive Soil Excavation",
      desc: "Cutting, filling, deep trenching, stockpile storage, and transport logistics for massive soils volumes."
    },
    {
      title: "Concrete Work",
      icon: Braces,
      stats: "Reinforced Systems",
      desc: "Steel rebars binding, shuttering designs, high-strength concrete pours, and wet curing protocols."
    },
    {
      title: "Infrastructure Planning",
      icon: Compass,
      stats: "CAD & Survey Designs",
      desc: "Precise engineering surveys, layout mapping, structural drawings compliance, and cost audits."
    },
    {
      title: "Execution",
      icon: ShieldAlert,
      stats: "24/7 Site Management",
      desc: "Safe operations, shift supervisor oversight, strict adherence to deadline logs, and material tracking."
    }
  ];

  return (
    <section id="capabilities" className="relative bg-[#1E2127] py-24 md:py-32 overflow-hidden border-t border-b border-neutral-800">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B400]/[0.01] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-900/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#F5B400] mb-3 block">
            OUR DOMAINS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            INFRASTRUCTURE <span className="text-[#F5B400]">CAPABILITIES.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#F5B400] mx-auto mt-6" />
          <p className="text-neutral-400 text-sm mt-4 font-light leading-relaxed">
            From municipal civil works to large private industrial complexes, we execute civil infrastructure across multiple specialized domains.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-[#323742]/80 hover:bg-[#3E4452] border border-neutral-800/80 hover:border-neutral-700/80 p-6 md:p-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
              >
                {/* Accent Gold Corner Tag */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-xl">
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#F5B400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex gap-4">
                  {/* Icon Container */}
                  <div className="w-10 h-10 bg-[#1E2127] group-hover:bg-[#F5B400] rounded-lg flex items-center justify-center border border-neutral-800 group-hover:border-transparent transition-all duration-300 shrink-0">
                    <IconComponent className="w-5 h-5 text-[#F5B400] group-hover:text-[#222222] transition-colors duration-300" />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5B400]">
                      {item.stats}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed font-light font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
