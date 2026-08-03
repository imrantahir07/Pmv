import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Route, Building, Braces, Waves, Pipette, Droplet, 
  Map, FileCheck, Hammer, HelpCircle, Truck, RefreshCw, 
  Settings, FolderKanban, Milestone, Layers3, Search, ChevronRight
} from 'lucide-react';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');

  // 16 requested services mapped with custom icons and descriptions
  const servicesList = [
    {
      title: "Road Construction",
      icon: Route,
      desc: "High-grade highway and asphalt road laying with meticulous compliance to gradient, grade, and safety regulations."
    },
    {
      title: "Civil Construction",
      icon: Building,
      desc: "Robust foundation works, structural framing, and general building layouts for public, civil, and private infrastructure."
    },
    {
      title: "Bridge Construction",
      icon: Milestone,
      desc: "Engineering heavy cable-stayed, girder, and reinforced concrete bridges and flyovers with strict seismic load tolerances."
    },
    {
      title: "Earthwork & Excavation",
      icon: Layers3,
      desc: "Large scale mechanical excavation, site clearing, cut-and-fill grading, and sub-base preparation using heavy machinery."
    },
    {
      title: "Pipeline Works",
      icon: Pipette,
      desc: "Laying cross-country high-pressure transport conduits, municipal lines, and strategic irrigation transmission pipelines."
    },
    {
      title: "Drainage Systems",
      icon: Waves,
      desc: "Designing and executing durable reinforced concrete drainage culverts, stormwater channels, and sewer containment channels."
    },
    {
      title: "Water Supply",
      icon: Droplet,
      desc: "Executing critical water purification linkages, local distribution pipelines, high-volume reservoir links, and municipal systems."
    },
    {
      title: "Land Development",
      icon: Map,
      desc: "Transforming raw plots into ready-to-build industrial, commercial, and residential subdivisions with structured master planning."
    },
    {
      title: "Concrete Structures",
      icon: Braces,
      desc: "Forming high-tolerance precast and cast-in-situ concrete systems, structural columns, beams, and foundational retaining walls."
    },
    {
      title: "Industrial Construction",
      icon: Hammer,
      desc: "Specialized building of industrial warehouses, factories, machinery assembly bases, and heavy manufacturing plant bays."
    },
    {
      title: "Infrastructure Development",
      icon: Settings,
      desc: "Broad-scale municipal developments including utility integration, road networks, safety frameworks, and structural systems."
    },
    {
      title: "Material Supply",
      icon: Truck,
      desc: "Bulk logistical dispatch of high-grade construction aggregate, clean structural sand, gravel, and reinforced cement materials."
    },
    {
      title: "Site Development",
      icon: FileCheck,
      desc: "Comprehensive site preparation works including land grading, layout mapping, structural soil test compliance, and utility access."
    },
    {
      title: "Road Maintenance",
      icon: RefreshCw,
      desc: "Preservation and repair of structural asphalt, sealing cracks, grade adjustments, bridge joint overlays, and safe pothole fixes."
    },
    {
      title: "Heavy Equipment Rental",
      icon: Truck,
      desc: "Sourcing modern excavators, tippers, rollers, loaders, and backhoes directly with licensed machine operators."
    },
    {
      title: "Project Management",
      icon: FolderKanban,
      desc: "End-to-end critical path coordination, quality audits, material compliance reports, and strict construction timelines."
    }
  ];

  const filteredServices = servicesList.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="services" className="relative bg-[#272B33] py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#F5B400]/[0.01] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#F5B400] mb-3 block">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              WORLD CLASS <span className="text-[#F5B400]">CIVIL SERVICES.</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-4 font-light leading-relaxed">
              We leverage an elite fleet of machinery and experienced site personnel to execute projects from raw earth excavation to final structural commissioning.
            </p>
          </div>

          {/* Interactive Search Filter */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Filter civil services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#F5B400] rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none placeholder-neutral-500 transition-all duration-300 shadow-md"
            />
          </div>
        </div>

        {/* Services Grid with animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  id={`service-card-${index}`}
                  className="group relative bg-[#1E2127]/80 hover:bg-[#323742] border border-neutral-800/80 hover:border-[#F5B400]/40 p-6 md:p-8 rounded-xl transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#F5B400]/[0.02]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index % 4 * 0.1 }}
                >
                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 bg-[#323742] group-hover:bg-[#F5B400]/10 rounded-lg flex items-center justify-center border border-neutral-800 group-hover:border-[#F5B400]/30 transition-colors duration-500 mb-6 shrink-0">
                      <IconComponent className="w-6 h-6 text-[#F5B400] transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#F5B400] tracking-wide transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-neutral-400 text-xs mt-3 leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-neutral-500 group-hover:text-[#F5B400] transition-colors duration-300">
                    <span className="text-[10px] tracking-widest font-mono font-bold">PMV SPECIFIED</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full py-16 text-center border border-dashed border-neutral-800 rounded-xl bg-neutral-900/40">
              <HelpCircle className="w-12 h-12 text-[#F5B400]/40 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-1">No services found</h4>
              <p className="text-neutral-400 text-xs">Try searching for other key terms like "road" or "bridge".</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
