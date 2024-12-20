import React from 'react';
import * as styles from './Tooltip.css';
import { Button } from '../Button/Button';
import './Tooltip-plain.css';

export interface TooltipProps {
  className?: string;
  children: React.ReactNode;
}

// popoverTarget and popover attributes need react 19 types

export const Tooltip = ({ className, children }: TooltipProps) => {
  const classes: string[] = [styles.main];
  className && classes.push(className);

  return (
    <div className={classes.join(' ')}>
      <Button
        variant='arquen'
        popoverTarget='tooltip-1'
        className='tooltip-anchor'
      >
        Open
      </Button>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nobis
        odit tenetur blanditiis ex temporibus, harum deserunt? Quam delectus
        cum, magni error officiis dolorem vel est! Totam pariatur voluptatibus
        incidunt.
      </div>
      {/* {children} */}
      <div
        className={`${styles.tooltip} tooltip`}
        popover='auto'
        id='tooltip-1'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at
        laudantium quos similique veniam officia, sit laborum, veritatis quidem
        libero sint nesciunt molestiae itaque ea. Incidunt tempora laudantium
        cumque dolorem!
      </div>
    </div>
  );
};
