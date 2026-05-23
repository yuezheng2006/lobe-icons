'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 1000 189"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M0 0h189v189H94.5V94.5H0V0z" fill="currentColor" />
      <path d="M283.5 0h94.5v189h-94.5V0z" fill="currentColor" />
      <path d="M472.5 0h94.5v94.5h94.5V0h94.5v189h-189V94.5h-94.5V0z" fill="currentColor" />
      <path d="M850.5 0H945v189h-94.5V0z" fill="currentColor" />
      <path d="M661.5 94.5h94.5V189h-94.5V94.5z" fill="currentColor" />
    </svg>
  );
});

export default Icon;
