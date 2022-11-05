import React from 'react';
import './Button.css';

export interface ButtonProps {
  variant?: 'default' | 'action' | 'calm';
  label: string;
}

export const Button = ({ variant, label }: ButtonProps) => {
  return <button>{`${label} is ${variant}`}</button>;
};
