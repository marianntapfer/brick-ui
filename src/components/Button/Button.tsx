import React from 'react';
import { button, action, calm, bad } from './button.css';

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
  const classNames = [button];
  variant === 'action' && classNames.push(action);
  variant === 'calm' && classNames.push(calm);
  variant === 'bad' && classNames.push(bad);
  return href ? (
    <a href={href}>
      <a className={classNames.join(' ')}>{label}</a>
    </a>
  ) : (
    <button className={classNames.join(' ')} onClick={onClick}>
      {label}
    </button>
  );
};
