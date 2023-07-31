import React from 'react';
import { buttonStyle } from './button.css.js';
import { RecipeVariants } from '@vanilla-extract/recipes';

export interface ButtonProps {
  variant?: 'default' | 'action' | 'calm' | 'bad';
  label: string;
  onClick?: () => {};
  href?: string;
}

export const Button = ({
  variant = 'default',
  label,
  href,
  onClick,
}: ButtonProps) => {
  return href ? (
    <a href={href}>
      <a className={buttonStyle({ variant })}>{label}</a>
    </a>
  ) : (
    <button className={buttonStyle({ variant })} onClick={onClick}>
      {label}
    </button>
  );
};
