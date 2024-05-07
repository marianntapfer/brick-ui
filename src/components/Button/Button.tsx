import React from 'react';
import { buttonStyle, svg } from './button.css.js';

export interface ButtonProps {
  variant?: 'primary' | 'inverted' | 'ghost';
  type?: 'text' | 'icon';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  href?: string;
  htmlProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button = ({
  variant = 'primary',
  type = 'text',
  children,
  href,
  onClick,
}: ButtonProps) => {
  return href ? (
    <a href={href}>
      <a className={buttonStyle({ variant, type })}>{children}</a>
    </a>
  ) : (
    <button className={buttonStyle({ variant, type })} onClick={onClick}>
      {children}
    </button>
  );
};
// preset buttons
export const CloseButton = ({ onClick }: Partial<ButtonProps>) => {
  return (
    <Button
      variant='ghost'
      type='icon'
      htmlProps={{ 'aria-label': 'Close' }}
      onClick={onClick}
    >
      <svg
        viewBox='0 0 50 50'
        xmlns='http://www.w3.org/2000/svg'
        className={svg}
      >
        <path d='m5.309 50-5-5 20-20-20-20 5-5 20 20 20-20 5 5-20 20 20 20-5 5-20-20-20 20Z' />
      </svg>
    </Button>
  );
};

Button.Close = CloseButton;
