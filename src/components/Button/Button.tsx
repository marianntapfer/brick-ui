import React from 'react';
import './Button.css';

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
  const className = `button ${variant}`;
  return href ? (
    <a href={href}>
      <a className={className}>{label}</a>
    </a>
  ) : (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
