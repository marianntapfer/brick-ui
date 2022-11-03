import React from 'react';

export interface ButtonProps {
  variant?: 'default' | 'action' | 'calm';
  label: string;
}

export const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};
