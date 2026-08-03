import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Truck, Cpu, Shield, Search, Info, Check, Eye } from 'lucide-react';

export default function Machinery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Machinery fleet with spec data and premium high-resolution images
  const fleet = [
    {
      name: "Heavy-Duty Crawler Excavators",
      type: "Excavator",
      image: "/src/assets/images/pmv_excavator_dusk_1785676375144.jpg",
      brand: "Hyundai / Tata Hitachi",
      capacity: "2.1 m³ Bucket Capacity",
      power: "148 HP @ 2000 RPM",
      use: "Deep trenching, massive earth cutting, and load staging."
    },
    {
      name: "JCB Backhoe Loaders (3DX Super)",
      type: "JCB / Loader",
      image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=800",
      brand: "JCB India",
      capacity: "1.1 m³ Loader / 0.26 m³ Backhoe",
      power: "92 HP Turbocharged Engine",
      use: "Multi-purpose site excavation, trench backfilling, and light clearing."
    },
    {
      name: "Heavy Tipper Trucks (Dumper Fleet)",
      type: "Truck",
      image: "/src/assets/images/pmv_trucks_fleet_1785676326831.jpg",
      brand: "Tata Prima / BharatBenz",
      capacity: "19 m³ Box Body Capacity",
      power: "280 HP Heavy-Duty Transmission",
      use: "Bulk logistics dispatch, aggregate transport, and soil relocation."
    },
    {
      name: "Vibratory Road Soil Rollers",
      type: "Compactor",
      image: "/src/assets/images/pmv_road_roller_1785676342693.jpg",
      brand: "HAMM / CASE India",
      capacity: "11-Ton Operating Weight",
      power: "110 HP Eco-Mode System",
      use: "Sub-base and base asphalt compaction with dynamic vibratory force."
    },
    {
      name: "Hydraulic Motor Graders",
      type: "Grader",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
      brand: "Caterpillar / CAT",
      capacity: "12 ft Moldboard Blade Width",
      power: "145 HP Auto-Shift Technology",
      use: "Ultra-precise road levelling, subgrade preparation, and banking slopes."
    },
    {
      name: "Heavy Duty Loader Shovels",
      type: "JCB / Loader",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
      brand: "Volvo / CAT",
      capacity: "3.5 m³ Rehandling Bucket",
      power: "220 HP High Torque System",
      use: "Aggregates stockpile rehandling, high-speed conveyor feeding."
    },
    {
      name: "High Volume Water Sprinkler Tankers",
      type: "Truck",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800",
      brand: "Ashok Leyland",
      capacity: "12,000 Litre Corrosive-Safe Tank",
      power: "180 HP Dual Spray Pump",
      use: "Moisture-optimization for soil sub-bases and site dust control."
    },
    {
      name: "Mobile Transit Concrete Mixers",
      type: "Concrete",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800",
      brand: "Schwing Stetter",
      capacity: "7 m³ Heavy-Duty Mixing Drum",
      power: "Hydraulic transit rotation system",
      use: "Continuous homogeneous mixing and rapid transit of ready-mix concrete."
    }
  ];

  const categories = ['All', 'Excavator', 'JCB / Loader', 'Truck', 'Compactor', 'Concrete'];

  const filteredFleet = selectedCategory === 'All'
    ? fleet
    : fleet.filter(item => item.type.includes(selectedCategory));

  return (
    <section id="machinery" className="relative bg-[#272B33] py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#F5B400]/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#F5B400] mb-3 block">
              OUR MACHINERY FLEET
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              HEAVY MACHINERY <span className="text-[#F5B400]">FLEET.</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-4 font-light leading-relaxed">
              We own and operate a premium fleet of modern, highly-maintained heavy machines, including excavators, JCBs, and high-volume dumper tippers to guarantee zero timeline delay.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#F5B400] text-[#272B33]'
                    : 'bg-neutral-900/60 border border-neutral-800 text-neutral-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-[#323742] border border-neutral-800/80 hover:border-[#F5B400]/40 rounded-xl overflow-hidden transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-[#F5B400]/[0.01]"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-950 shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.9] group-hover:brightness-[0.95]"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md text-[9px] font-bold tracking-widest text-[#F5B400] uppercase border border-neutral-800">
                    {item.type}
                  </div>

                  {/* Operator verified shield */}
                  <div className="absolute top-4 right-4 w-7 h-7 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800 text-green-400">
                    <Shield className="w-3.5 h-3.5" />
                  </div>

                  {/* Dark gradient fade-in overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info Content Section */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-white tracking-wide uppercase line-clamp-1 group-hover:text-[#F5B400] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase mt-1">
                      MFR: {item.brand}
                    </div>

                    <p className="text-neutral-400 text-xs font-light leading-relaxed mt-3 mb-4">
                      {item.use}
                    </p>
                  </div>

                  {/* Technical Spec List */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-800/60 font-mono text-[10px] text-neutral-400">
                    <div className="flex justify-between">
                      <span className="text-neutral-500 uppercase">CAPACITY:</span>
                      <span className="font-bold text-white tracking-wide">{item.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 uppercase">POWER SPECS:</span>
                      <span className="font-bold text-[#F5B400] tracking-wide">{item.power}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500 uppercase">OPERATIONAL STATUS:</span>
                      <span className="flex items-center gap-1 font-bold text-green-400 text-[9px]">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        ACTIVE DEPLOYED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-Card hover border trigger */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#F5B400] w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
