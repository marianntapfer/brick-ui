import React from 'react';
import './Button.css';

export interface ButtonProps {
  variant?: 'default' | 'action' | 'calm' | 'bad';
  children: string;
  onClick?: React.MouseEventHandler;
  href?: string;
}

export const Button = ({
  variant = 'default',
  children,
  href,
  onClick,
}: ButtonProps) => {
  const className = `button ${variant}`;
  return href ? (
    <a href={href}>
      <a className={className}>{children}</a>
    </a>
  ) : (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
