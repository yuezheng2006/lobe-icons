'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { COLOR_PRIMARY, TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill={COLOR_PRIMARY}
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M1 12Q12 1.5 23 12Q12 22.5 1 12ZM4.5 12Q12 4.5 19.5 12Q12 19.5 4.5 12ZM7.5 12Q12 7.5 16.5 12Q12 16.5 7.5 12ZM10 12Q12 10 14 12Q12 14 10 12Z"
        fillRule="evenodd"
      />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
});

export default Icon;
