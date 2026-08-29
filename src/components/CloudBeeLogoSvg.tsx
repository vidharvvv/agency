import React from 'react';

interface CloudBeeLogoSvgProps {
  variant?: 'mark' | 'full' | 'background';
  className?: string;
  colorTheme?: 'light' | 'dark' | 'orange';
}

export const CloudBeeLogoSvg: React.FC<CloudBeeLogoSvgProps> = ({
  variant = 'mark',
  className = 'w-10 h-10',
  colorTheme = 'dark',
}) => {
  const cloudStroke = colorTheme === 'dark' ? '#F8F9FA' : colorTheme === 'light' ? '#090A0F' : '#6366F1';
  const beeColor = '#00F5D4';




  if (variant === 'background') {
    return (
      <svg
        viewBox="0 0 500 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g opacity="0.45" stroke={cloudStroke} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Base Horizontal Lines */}
          <path d="M 50 200 L 210 200" />
          <path d="M 80 185 L 290 185 C 340 185 380 210 395 240 L 420 240" />
          <path d="M 230 210 L 370 210" />

          {/* Cloud Arcs */}
          {/* Left arc */}
          <path d="M 155 185 A 48 48 0 0 1 250 185" />
          {/* Main top central cloud arc */}
          <path d="M 205 185 A 72 72 0 0 1 345 185" />
          {/* Inner top arc */}
          <path d="M 245 165 A 42 42 0 0 1 325 165" />
          {/* Bottom right arc */}
          <path d="M 320 200 A 30 30 0 0 1 380 200" />
        </g>

        {/* The Bee on Top Right */}
        <g transform="translate(320, 75) rotate(-12)" opacity="0.65">
          {/* Wings */}
          <ellipse cx="40" cy="18" rx="16" ry="24" transform="rotate(-25 40 18)" fill={beeColor} opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
          <ellipse cx="60" cy="22" rx="14" ry="20" transform="rotate(15 60 22)" fill={beeColor} opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
          {/* Body */}
          <ellipse cx="48" cy="48" rx="28" ry="22" fill={beeColor} stroke={cloudStroke} strokeWidth="2.5" />
          {/* Stripes */}
          <path d="M 38 30 C 38 40, 38 56, 38 66" stroke="#151817" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M 50 28 C 50 42, 50 56, 50 68" stroke="#151817" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M 62 32 C 62 42, 62 54, 62 62" stroke="#151817" strokeWidth="5.5" strokeLinecap="round" />
          {/* Head */}
          <circle cx="24" cy="48" r="12" fill={beeColor} stroke={cloudStroke} strokeWidth="2.5" />
          <circle cx="20" cy="45" r="2.5" fill="#151817" />
          {/* Antennas */}
          <path d="M 20 38 C 15 28, 10 26, 8 28" stroke={cloudStroke} strokeWidth="3" strokeLinecap="round" />
          <path d="M 26 36 C 24 24, 20 22, 18 24" stroke={cloudStroke} strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    );
  }


  return (
    <svg
      viewBox="0 0 450 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={cloudStroke} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        {/* Base Lines */}
        <path d="M 40 190 L 170 190" />
        <path d="M 75 175 L 260 175 C 300 175 340 195 360 220 L 385 220" />
        <path d="M 205 198 L 340 198" />

        {/* Cloud Arcs */}
        <path d="M 135 175 A 42 42 0 0 1 220 175" />
        <path d="M 180 175 A 64 64 0 0 1 308 175" />
        <path d="M 215 155 A 36 36 0 0 1 288 155" />
        <path d="M 290 190 A 26 26 0 0 1 342 190" />
      </g>

      {/* Stylized Golden-Orange Bee */}
      <g transform="translate(285, 70) rotate(-10)">
        {/* Wings */}
        <ellipse cx="36" cy="16" rx="14" ry="22" transform="rotate(-25 36 16)" fill={beeColor} opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
        <ellipse cx="54" cy="20" rx="12" ry="18" transform="rotate(15 54 20)" fill={beeColor} opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
        
        {/* Body */}
        <ellipse cx="44" cy="42" rx="24" ry="18" fill={beeColor} stroke={cloudStroke} strokeWidth="2" />
        {/* Black Body Stripes */}
        <path d="M 35 26 C 35 36, 35 48, 35 58" stroke="#151817" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 46 25 C 46 37, 46 49, 46 60" stroke="#151817" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 57 28 C 57 37, 57 47, 57 55" stroke="#151817" strokeWidth="4.5" strokeLinecap="round" />
        
        {/* Head */}
        <circle cx="22" cy="42" r="10" fill={beeColor} stroke={cloudStroke} strokeWidth="2" />
        <circle cx="19" cy="40" r="2.5" fill="#151817" />
        
        {/* Antennas */}
        <path d="M 18 33 C 14 24, 10 22, 8 24" stroke={cloudStroke} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 23 31 C 21 21, 18 19, 16 21" stroke={cloudStroke} strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Typography for full logo variant */}
      {variant === 'full' && (
        <g transform="translate(160, 245)">
          <text x="0" y="20" fill={cloudStroke} fontFamily="Space Grotesk, sans-serif" fontSize="32" fontWeight="700">
            Cloud<tspan fill={beeColor}>Bee</tspan>
          </text>
          <text x="-40" y="44" fill={cloudStroke} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="16" letterSpacing="4" opacity="0.8">
            Creating the Real Buzz
          </text>
        </g>
      )}
    </svg>
  );
};
