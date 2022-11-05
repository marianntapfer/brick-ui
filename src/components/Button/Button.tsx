import React from 'react';
import './Button.css';

export interface ButtonProps {
  variant?: 'default' | 'action' | 'calm';
  label: string;
}

export const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};
