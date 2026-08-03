import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean; // If true, PMV and INFRA text use white/light gray; if false, dark gray.
}

export default function Logo({ className = "h-12", light = false }: LogoProps) {
  // A highly detailed, clean, premium geometric corporate logo mark.
  // Replicates the logo in the uploaded photo precisely:
  // - A single central bridge pylon with stay cables on both sides.
  // - A dark curved highway sweep with white dashed lane markings.
  // - A golden yellow accent ribbon underneath the curved highway deck.
  // - Stylized, custom-drawn corporate letters: PMV (with the right leg of V colored gold/yellow #F5B400).
  // - Clean, uppercase spaced subtitle: — I N F R A — flanked by golden lines.

  const textPrimaryColor = light ? "#FFFFFF" : "#1F2937";
  const goldColor = "#F5B400";
  const grayColor = light ? "#E5E7EB" : "#4B5563";
  const darkGrayColor = light ? "#9CA3AF" : "#374151";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg 
        viewBox="0 0 240 110" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-full w-auto"
        id="pmv-infra-logo-svg"
      >
        {/* BRIDGE ICON */}
        <g id="bridge-icon">
          {/* Central tall vertical pylon */}
          <path 
            d="M 119 12 L 121 12 L 122.2 55 L 117.8 55 Z" 
            fill={textPrimaryColor} 
          />
          
          {/* Symmetrical Stay Cables (Left Side) */}
          <line x1="120" y1="18" x2="72" y2="52" stroke={grayColor} strokeWidth="0.85" strokeOpacity="0.75" />
          <line x1="120" y1="23" x2="82" y2="50" stroke={grayColor} strokeWidth="0.85" strokeOpacity="0.75" />
          <line x1="120" y1="28" x2="92" y2="48" stroke={grayColor} strokeWidth="0.85" strokeOpacity="0.75" />
          <line x1="120" y1="33" x2="102" y2="46" stroke={grayColor} strokeWidth="0.85" strokeOpacity="0.75" />
          <line x1="120" y1="38" x2="112" y2="44" stroke={grayColor} strokeWidth="0.85" strokeOpacity="0.75" />

          {/* Symmetrical Stay Cables (Right Side) */}
          <line x1="120" y1="18" x2="168" y2="52" stroke={grayColor} strokeWidth="0.85" strokeOpacity="0.75" />
          <line x1="120" y1="23" x2="158" y2="50" stroke={grayColor} strokeWidth="0.85" strokeOpacity="0.75" />
          <line x1="120" y1="28" x2="148" y2="48" stroke={grayColor} strokeWidth="0.85" strokeOpacity="0.75" />
          <line x1="120" y1="33" x2="138" y2="46" stroke={grayColor} strokeWidth="0.85" strokeOpacity="0.75" />
          <line x1="120" y1="38" x2="128" y2="44" stroke={grayColor} strokeWidth="0.85" strokeOpacity="0.75" />

          {/* Dark curved road deck sweeping across */}
          <path 
            d="M 55 54 Q 120 41 185 54" 
            stroke="#1F2937" 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          {/* Dashed white lane markings on road */}
          <path 
            d="M 58 53.7 Q 120 41 182 53.7" 
            stroke="#FFFFFF" 
            strokeWidth="0.8" 
            strokeDasharray="4 3" 
            strokeLinecap="round" 
          />

          {/* Gold sweep ribbon accent under the road deck */}
          <path 
            d="M 102 48.5 Q 120 44.5 138 48.5" 
            stroke={goldColor} 
            strokeWidth="3" 
            strokeLinecap="round" 
          />
        </g>

        {/* TYPOGRAPHY SECTION */}
        <g id="brand-text">
          {/* Custom Drawn Stylized Corporate Letters (PMV) */}
          
          {/* Letter P */}
          <path 
            d="M 72 65 L 86 65 C 91.5 65 94.5 67.5 94.5 71.5 C 94.5 75.5 91.5 78 86 78 L 78 78 L 78 87 L 72 87 Z M 78 71 L 78 73.5 L 85.5 73.5 C 87 73.5 88 73 88 72.2 C 88 71.5 87 71 L 85.5 71 Z" 
            fill={textPrimaryColor} 
          />
          
          {/* Letter M */}
          <path 
            d="M 100 87 L 100 65 L 105.5 65 L 112.5 76.5 L 119.5 65 L 125 65 L 125 87 L 119.5 87 L 119.5 71.5 L 113.5 82 L 111.5 82 L 105.5 71.5 L 105.5 87 Z" 
            fill={textPrimaryColor} 
          />
          
          {/* Letter V with Gold Accent on Right Leg */}
          {/* Left Leg of V */}
          <path 
            d="M 130 65 L 136 65 L 143.5 83 L 143.5 87 L 141 87 L 130 65 Z" 
            fill={textPrimaryColor} 
          />
          {/* Right Leg of V (Gold Highlight) */}
          <path 
            d="M 141 87 L 144.5 87 L 155.5 65 L 149.5 65 L 142.5 83 Z" 
            fill={goldColor} 
          />

          {/* Spaced Subtitle: — I N F R A — */}
          
          {/* Left golden horizontal line */}
          <line x1="72" y1="96" x2="90" y2="96" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Spaced text INFRA */}
          <text 
            x="120" 
            y="99" 
            fill={textPrimaryColor} 
            fontSize="9" 
            fontWeight="bold" 
            fontFamily="monospace, sans-serif" 
            letterSpacing="5" 
            textAnchor="middle"
          >
            INFRA
          </text>
          
          {/* Right golden horizontal line */}
          <line x1="150" y1="96" x2="168" y2="96" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
