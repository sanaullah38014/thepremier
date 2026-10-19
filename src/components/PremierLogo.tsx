import React from 'react';

interface PremierLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
  layout?: 'split' | 'horizontal' | 'stacked';
  showTagline?: boolean;
  isLight?: boolean;
}

export const PremierLogo: React.FC<PremierLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  layout = 'split',
  showTagline = true,
}) => {
  const sizeMap = {
    sm: {
      icon: 'h-9 w-9',
      textTitle: 'text-sm tracking-[0.14em]',
      textSub: 'text-[9px] tracking-[0.16em]',
      tagText: 'text-[8px]',
    },
    md: {
      icon: 'h-11 w-11 sm:h-12 sm:w-12',
      textTitle: 'text-base sm:text-lg tracking-[0.16em]',
      textSub: 'text-[10px] sm:text-[11px] tracking-[0.18em]',
      tagText: 'text-[9px]',
    },
    lg: {
      icon: 'h-16 w-16',
      textTitle: 'text-xl sm:text-2xl tracking-[0.18em]',
      textSub: 'text-xs tracking-[0.22em]',
      tagText: 'text-[10px]',
    },
    xl: {
      icon: 'h-24 w-24',
      textTitle: 'text-3xl sm:text-4xl tracking-[0.2em]',
      textSub: 'text-sm tracking-[0.26em]',
      tagText: 'text-xs',
    },
    '2xl': {
      icon: 'h-32 w-32 sm:h-40 sm:w-40',
      textTitle: 'text-4xl sm:text-5xl tracking-[0.22em]',
      textSub: 'text-base tracking-[0.3em]',
      tagText: 'text-sm',
    },
  };

  const current = sizeMap[size];

  return (
    <div className={`group inline-flex items-center gap-3.5 select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      {/* High-Quality Brand SVG Crest */}
      <div
        className={`relative flex-shrink-0 ${current.icon} transition-all duration-500 transform group-hover:scale-105 group-hover:drop-shadow-[0_0_22px_rgba(63,208,201,0.6)]`}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-md overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary Modern Bright Turquoise / Emerald Gradient */}
            <linearGradient id="premBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3FD0C9" />
              <stop offset="50%" stopColor="#2EAF7D" />
              <stop offset="100%" stopColor="#02353C" />
            </linearGradient>

            {/* Industrial Emerald & Forest Green Gradient */}
            <linearGradient id="premGreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C1F6ED" />
              <stop offset="40%" stopColor="#2EAF7D" />
              <stop offset="100%" stopColor="#449342" />
            </linearGradient>

            {/* Mint-Aqua & Turquoise Highlight Gradient */}
            <linearGradient id="premGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C1F6ED" />
              <stop offset="50%" stopColor="#3FD0C9" />
              <stop offset="100%" stopColor="#2EAF7D" />
            </linearGradient>

            {/* Silver Globe Grid Gradient */}
            <linearGradient id="premSilverGrid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Subtle Inner Glow Filter */}
            <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#3FD0C9" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* BACKGROUND WIREFRAME GLOBE (SILVER GRID MERIDIANS) */}
          <g stroke="url(#premSilverGrid)" strokeWidth="12" fill="none" opacity="0.9" strokeLinecap="round">
            <circle cx="260" cy="210" r="145" />
            <ellipse cx="260" cy="210" rx="88" ry="145" />
            <line x1="115" y1="210" x2="405" y2="210" />
            <line x1="135" y1="140" x2="385" y2="140" strokeDasharray="3 1" />
            <line x1="135" y1="280" x2="385" y2="280" strokeDasharray="3 1" />
          </g>

          {/* TOP-LEFT GREEN MECHANICAL GEAR COG */}
          <g fill="url(#premGreenGradient)" filter="url(#svgGlow)">
            <path d="M 120,70 L 140,88 A 170,170 0 0,0 95,145 L 68,140 L 58,175 L 88,185 A 170,170 0 0,0 80,240 L 52,250 L 55,275 H 125 A 150,150 0 0,1 125,220 L 145,215 A 150,150 0 0,1 155,180 L 138,162 A 150,150 0 0,1 170,125 L 180,140 A 150,150 0 0,1 210,120 L 205,95 L 165,75 L 145,95 Z" />
          </g>

          {/* BOTTOM GREEN MECHANICAL GEAR COG */}
          <g fill="url(#premGreenGradient)" filter="url(#svgGlow)">
            <path d="M 90,340 L 125,310 A 175,175 0 0,0 155,355 L 145,390 L 175,410 L 195,378 A 175,175 0 0,0 240,390 L 245,430 L 285,430 L 290,390 A 175,175 0 0,0 335,378 L 355,410 L 385,390 L 375,355 A 175,175 0 0,0 405,310 L 440,340 L 460,305 L 425,285 A 150,150 0 0,1 390,340 L 360,320 A 150,150 0 0,1 320,350 L 315,315 A 150,150 0 0,1 265,350 L 260,315 A 150,150 0 0,1 215,350 L 175,320 A 150,150 0 0,1 140,285 L 105,305 Z" />
          </g>

          {/* GREEN PINNACLE SPIRE TOWER */}
          <polygon points="250,5 335,65 250,240" fill="url(#premGreenGradient)" />

          {/* BLUE HIGH-RISE CORPORATE TOWER & ARCHITECTURAL GRID */}
          <g fill="url(#premBlueGradient)">
            <polygon points="275,115 345,72 345,260 275,260" />
            
            {/* White Architectural Floor Louvers */}
            <rect x="285" y="125" width="50" height="7" fill="#FFFFFF" rx="2" />
            <rect x="285" y="142" width="50" height="7" fill="#FFFFFF" rx="2" />
            <rect x="285" y="159" width="50" height="7" fill="#FFFFFF" rx="2" />
            <rect x="285" y="176" width="50" height="7" fill="#FFFFFF" rx="2" />
            <rect x="285" y="193" width="50" height="7" fill="#FFFFFF" rx="2" />
            <rect x="285" y="210" width="50" height="7" fill="#FFFFFF" rx="2" />
            <rect x="285" y="227" width="50" height="7" fill="#FFFFFF" rx="2" />
            <rect x="285" y="244" width="50" height="7" fill="#FFFFFF" rx="2" />

            {/* Structural Vertical Support Columns */}
            <path d="M 192,185 L 245,140 V 250 H 192 Z" fill="none" stroke="#3FD0C9" strokeWidth="4" />
            <line x1="200" y1="180" x2="200" y2="250" stroke="#3FD0C9" strokeWidth="4" />
            <line x1="214" y1="168" x2="214" y2="250" stroke="#3FD0C9" strokeWidth="4" />
            <line x1="228" y1="156" x2="228" y2="250" stroke="#3FD0C9" strokeWidth="4" />
            <line x1="242" y1="144" x2="242" y2="250" stroke="#3FD0C9" strokeWidth="4" />
          </g>

          {/* TURQUOISE / MINT RESIDENTIAL GABLES & ROOFS */}
          <g fill="none" stroke="url(#premGoldGradient)" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round">
            <polyline points="235,270 290,215 350,270" strokeWidth="12" />
            <polyline points="180,268 222,228 255,268" strokeWidth="10" />
            <rect x="278" y="258" width="12" height="12" fill="#3FD0C9" stroke="none" />
            <rect x="296" y="258" width="12" height="12" fill="#3FD0C9" stroke="none" />
          </g>
        </svg>
      </div>

      {/* Official Wordmark Typography matching The Premier Brand Identity */}
      {showText && (
        <div className={`flex ${layout === 'horizontal' ? 'flex-row items-baseline gap-2.5' : 'flex-col justify-center'}`}>
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black uppercase font-['Outfit'] ${current.textTitle} text-white tracking-widest transition-colors group-hover:text-[#3FD0C9] drop-shadow-sm`}
            >
              THE PREMIER
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`font-bold font-['Plus_Jakarta_Sans'] ${current.textSub} text-[#2EAF7D] tracking-wide transition-colors group-hover:text-[#3FD0C9]`}
            >
              Services &amp; Solutions (Pvt. Ltd.)
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
