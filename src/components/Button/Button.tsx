import React from 'react';
import { buttonStyle } from './button.css.js';
import { RecipeVariants } from '@vanilla-extract/recipes';

export interface ButtonProps {
  variant?: 'default' | 'action' | 'calm' | 'bad';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  htmlProps?: React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
  forwardRef?: React.RefObject<HTMLButtonElement>;
}

export const Button = ({
  variant = 'default',
  children,
  href,
  onClick,
  forwardRef,
  htmlProps,
}: ButtonProps) => {
  return href ? (
    <a href={href} {...htmlProps}>
      <a className={buttonStyle({ variant })}>{children}</a>
    </a>
  ) : (
    <button
      className={buttonStyle({ variant })}
      onClick={onClick}
      ref={forwardRef}
      {...htmlProps}
    >
      {children}
    </button>
  );
};
