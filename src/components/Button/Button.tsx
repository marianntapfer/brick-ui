import React from 'react';
import { buttonStyle } from './button.css.js';
import { RecipeVariants } from '@vanilla-extract/recipes';

export const ButtonVariants = {
  default: 'default',
  action: 'action',
  calm: 'calm',
  bad: 'bad',
  arquen: 'arquen',
  juna: 'juna',
};

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: keyof typeof ButtonVariants;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  forwardRef?: React.RefObject<HTMLButtonElement>;
}

export const Button = ({
  variant = 'default',
  children,
  href,
  onClick,
  forwardRef,
  className,
  ...rest
}: ButtonProps) => {
  return href ? (
    <a href={href} {...rest}>
      <a className={`${buttonStyle({ variant })} ${className}`}>{children}</a>
    </a>
  ) : (
    <button
      className={`${buttonStyle({ variant })} ${className}`}
      onClick={onClick}
      ref={forwardRef}
      {...rest}
    >
      {children}
    </button>
  );
};
