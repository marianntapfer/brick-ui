import React from 'react';
import * as styles from './example.css';

export interface ExampleProps {
  className?: string;
  children: React.ReactNode;
}

export const Example = ({ className, children }: ExampleProps) => {
  const classes: string[] = [styles.main];
  className && classes.push(className);

  return <div className={classes.join(' ')}>{children}</div>;
};
