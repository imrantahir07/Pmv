import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Compass, Play, Activity, SearchCheck, CheckSquare } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      title: "Planning & Feasibility",
      icon: ClipboardList,
      desc: "Architectural blueprint mapping, environmental clearances, material estimation, and scheduling optimization to form a solid execution foundation."
    },
    {
      num: "02",
      title: "Engineering Survey",
      icon: Compass,
      desc: "Conducting high-precision GPS boundary layouts, soil-bearing capacity assessments, elevation contour modeling, and alignment validations."
    },
    {
      num: "03",
      title: "Active Execution",
      icon: Play,
      desc: "Deploying our heavy equipment fleet, site managers, and certified civil workforce to execute earthwork, structural framing, and concrete pours."
    },
    {
      num: "04",
      title: "Continuous Monitoring",
      icon: Activity,
      desc: "Supervising daily progress logs, material usage audits, work-hour metrics, and real-time site survey alignments to eliminate timeline drift."
    },
    {
      num: "05",
      title: "Quality & Safety Inspection",
      icon: SearchCheck,
      desc: "Conducting compression testing of concrete, grade validation, safety audits, and road smoothness assessments for structural certification."
    },
    {
      num: "06",
      title: "Final Project Delivery",
      icon: CheckSquare,
      desc: "As-built drawing reviews, site cleanups, utility handovers, client walkthroughs, and ultimate operational sign-offs on successful commissioning."
    }
  ];

  return (
    <section id="process" className="relative bg-[#1E2127] py-24 md:py-32 overflow-hidden border-t border-b border-neutral-800">
      {/* Background decoration representing blueprint grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#F5B400] mb-3 block">
            OUR TIMELINE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            CRITICAL PATH <span className="text-[#F5B400]">PROCESS.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#F5B400] mx-auto mt-6" />
          <p className="text-neutral-400 text-sm mt-4 font-light leading-relaxed">
            We follow a strictly controlled 6-stage engineering roadmap to convert blueprint proposals into structural realities.
          </p>
        </div>

        {/* Process Timeline Grid Layout */}
        <div className="relative mt-12">
          
          {/* Central Connector Line (Desktop) */}
          <div className="absolute left-[30px] lg:left-1/2 top-4 bottom-4 w-[2px] bg-neutral-800 lg:-translate-x-1/2 hidden md:block" id="timeline-connector-line">
            {/* Pulsing indicator traveling along the path */}
            <div className="absolute top-0 left-0 w-full h-32 bg-[#F5B400] rounded-full blur-[2px] animate-bounce" />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = step.icon;
              
              return (
                <div 
                  key={step.num}
                  id={`process-step-${step.num}`}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-12 relative ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Text Side */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <motion.div 
                      className={`bg-[#323742]/80 border border-neutral-800/80 p-6 md:p-8 rounded-xl transition-all duration-300 relative shadow-md hover:shadow-xl ${
                        activeStep === index ? 'border-[#F5B400]/40 bg-[#3E4452]' : ''
                      }`}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono font-black text-2xl text-[#F5B400]/40">
                          {step.num}
                        </span>
                        <h3 className="text-lg font-bold text-white tracking-wide">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-neutral-400 text-xs leading-relaxed font-light font-sans">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Icon Node (Middle Point) */}
                  <div className="absolute left-[16px] md:left-[30px] lg:left-1/2 md:-translate-x-1/2 flex items-center justify-center shrink-0 z-10 self-center">
                    <div className={`w-8 h-8 rounded-full border-2 bg-[#1E2127] flex items-center justify-center transition-all duration-500 ${
                      activeStep === index 
                        ? 'border-[#F5B400] text-[#F5B400] scale-110 shadow-lg shadow-[#F5B400]/20' 
                        : 'border-neutral-800 text-neutral-500'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Visual Space Placeholder (Desktop) */}
                  <div className="w-full md:w-1/2 hidden md:flex items-center justify-center pointer-events-none opacity-40">
                    <div className="border border-neutral-800 border-dashed rounded-xl p-6 text-center text-xs font-mono tracking-widest text-neutral-600 select-none">
                      PMV INFRA ROADMAP STEP — {step.num}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
