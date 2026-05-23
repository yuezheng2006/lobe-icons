'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

// Thunder/Lightning bolt icon with "雷石" (Leishi) text
// Simplified vector representation based on the brand logo
const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 200 200"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      {/* Lightning bolt shape */}
      <path
        d="M100 20 L120 80 L140 80 L90 140 L110 100 L80 100 Z"
        fill="#0066FF"
        fillRule="evenodd"
      />
      {/* Simplified representation - this is a placeholder */}
      {/* The actual logo requires proper vectorization of the PNG */}
      <text fill="#0066FF" fontSize="40" fontWeight="bold" textAnchor="middle" x="100" y="180">
        雷石
      </text>
    </svg>
  );
});

export default Icon;
