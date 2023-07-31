import React from 'react';
import { buttonStyle } from './button.css.js';
import { RecipeVariants } from '@vanilla-extract/recipes';

export interface ButtonProps {
  variant?: 'default' | 'action' | 'calm' | 'bad';
  children: React.ReactNode;
  onClick?: () => {};
  href?: string;
}

export const Button = ({
  variant = 'default',
  children,
  href,
  onClick,
}: ButtonProps) => {
  return href ? (
    <a href={href}>
      <a className={buttonStyle({ variant })}>{children}</a>
    </a>
  ) : (
    <button className={buttonStyle({ variant })} onClick={onClick}>
      {children}
    </button>
  );
};
