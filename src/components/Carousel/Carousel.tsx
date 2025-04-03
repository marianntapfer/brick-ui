import React from 'react';
import * as styles from './Carousel.css';

export interface CarouselProps {
  className?: string;
  children: React.ReactNode;
}

export const Carousel = ({ className, children }: CarouselProps) => {
  const classes: string[] = [styles.main];
  className && classes.push(className);

  return <div className={classes.join(' ')}>{children}</div>;
};
