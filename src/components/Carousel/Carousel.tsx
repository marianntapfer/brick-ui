import React, { useEffect, useRef } from 'react';

// import * as styles from './Carousel.css';

import './Carousel.css';

export interface CarouselProps {
  className?: string;
  children: React.ReactNode[];
  width?: string;
  showShadow?: boolean;
}

export const Carousel = ({
  className,
  children,
  width,
  showShadow,
}: CarouselProps) => {
  const classes: string[] = ['brick-ui-carousel'];
  className && classes.push(className);
  showShadow && classes.push('brick-ui-carousel__shadow');

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current && width) {
      listRef.current.style.setProperty('--carousel-width', width);
    }
  }, []);

  return (
    <ul className={classes.join(' ')} ref={listRef}>
      {children.map((child) => (
        <li className="brick-ui-carousel-item">{child}</li>
      ))}
    </ul>
  );
};
