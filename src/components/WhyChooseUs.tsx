import React from 'react';
import { ShieldCheck, HardHat, Hammer, Calendar, Headphones, ShieldAlert, Award, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Quality Assurance",
      desc: "Strict alignment with ISO 9001:2015 specifications, conducting on-site compression, density, and concrete audits.",
      icon: ShieldCheck
    },
    {
      title: "Experienced Team",
      desc: "Run by veteran structural and civil engineers with over decades of collective infrastructure delivery experience.",
      icon: HardHat
    },
    {
      title: "Modern Equipment",
      desc: "An owned fleet of modern hydraulic excavators, computerized concrete batching transit mixers, and vibrocompactors.",
      icon: Hammer
    },
    {
      title: "Timely Delivery",
      desc: "Strategic resource planning and multi-shift work coordination to execute projects ahead of the targeted critical path.",
      icon: Calendar
    },
    {
      title: "Reliable Support",
      desc: "Providing a direct operational desk for government departments and site partners, ensuring rapid updates.",
      icon: Headphones
    },
    {
      title: "Safety Standards",
      desc: "Zero-accident site environment mandate, enforced by mandatory PPE rules, safety netting, and daily tool-box briefs.",
      icon: ShieldAlert
    },
    {
      title: "Professional Management",
      desc: "Comprehensive material logistics tracking, real-time cost-auditing, and clear regulatory compliance reporting.",
      icon: Award
    },
    {
      title: "Customer Satisfaction",
      desc: "Committed to delivering projects that precisely fit our private and municipal partners' long-term development targets.",
      icon: Smile
    }
  ];

  const stats = [
    { value: "27+", label: "Completed Projects", detail: "Roads, Bridges, & Civil Complexes" },
    { value: "6+", label: "Years Experience", detail: "Active infrastructure delivery" },
    { value: "100%", label: "Client Satisfaction", detail: "Verified by public and private audits" },
    { value: "50+", label: "Professional Workers", detail: "Licensed operators and engineers" }
  ];

  return (
    <section id="why-choose" className="relative bg-[#272B33] py-24 md:py-32 overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B400]/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#F5B400] mb-3 block">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            WHY CHOOSE <span className="text-[#F5B400]">PMV INFRA?</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#F5B400] mx-auto mt-6" />
          <p className="text-neutral-400 text-sm mt-4 font-light leading-relaxed">
            We deliver reliable, durable structural assets across India, prioritizing structural integrity, cost efficiency, and worker safety above all.
          </p>
        </div>

        {/* 8 Core points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="group bg-[#323742] border border-neutral-800/80 hover:border-neutral-700/80 p-6 md:p-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#1E2127] group-hover:bg-[#F5B400]/10 rounded-lg flex items-center justify-center border border-neutral-800 group-hover:border-[#F5B400]/20 transition-all duration-300 mb-6 shrink-0">
                    <IconComponent className="w-5 h-5 text-[#F5B400]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-[#F5B400] transition-colors duration-300 tracking-wide uppercase">
                    {point.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed font-light font-sans">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Company Statistics Dashboard (Premium metrics grid) */}
        <div className="bg-[#1E2127] border border-neutral-800/85 rounded-xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-neutral-800">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center flex flex-col justify-center ${
                  index > 0 ? 'pt-6 sm:pt-0 lg:pl-6' : ''
                }`}
              >
                <div className="text-4xl md:text-5xl font-black text-[#F5B400] tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white uppercase mt-3 tracking-wider">
                  {stat.label}
                </div>
                <p className="text-neutral-500 text-[10px] mt-1 leading-relaxed font-sans font-light">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
