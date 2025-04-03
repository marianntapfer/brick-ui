import React from 'react';

// import * as styles from './Carousel.css';

import './Carousel.css';

export interface CarouselProps {
  className?: string;
  children: React.ReactNode;
}

export const Carousel = ({ className, children }: CarouselProps) => {
  const classes: string[] = ['brick-ui-carousel'];
  className && classes.push(className);

  const images = [237, 239, 76, 57, 42, 56, 78];

  return (
    <ul className={classes.join(' ')}>
      {images.map((img) => {
        return (
          <li>
            <img src={`https://picsum.photos/id/${img}/300/300`} alt="" />
          </li>
        );
      })}
    </ul>
  );
};
