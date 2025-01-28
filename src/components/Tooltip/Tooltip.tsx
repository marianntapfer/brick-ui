import React from 'react';
import * as styles from './Tooltip.css';
import { Button } from '../Button/Button';
import './Tooltip-plain.css';

export interface TooltipProps {
  className?: string;
  children: React.ReactNode;
  position?: 'top-center' | 'bottom-center' | 'left-center' | 'right-center';
}

// popoverTarget and popover attributes need react 19 types

export const Tooltip = ({
  className,
  children,
  position = 'bottom-center',
}: TooltipProps) => {
  const classNames: string[] = [
    styles.tooltip,
    'tooltip',
    `position__${position}`,
  ];
  className && classNames.push(className);

  return (
    <>
      <Button
        variant='arquen'
        popoverTarget='tooltip-1'
        className='tooltip-anchor'
      >
        Open
      </Button>
      <div className={classNames.join(' ')} popover='auto' id='tooltip-1'>
        {children}
      </div>
    </>
  );
};

// advantages
// - not dependencies needed
// - tooltip is shown on the top layer - no z-index issues

// disadvantages
// - experimental feature, but there is a polyfill that makes it usable
// -

// target element needs to be button or input with type=buttom

// extra logic is needed to show the tooltip on hover
// --> this could be added only when hover is available, otherwise fallback to default popover behaviour

// something like this to show popover on hover
// const popover = document.querySelectorAll('[popovertarget]');
// popover.forEach((e) => {
//   const target = document.querySelector('#' + e.getAttribute('popovertarget'));
//   e.addEventListener('mouseover', () => {
//     target.showPopover();
//   });

//   e.addEventListener('mouseout', () => {
//     target.hidePopover();
//   });
// });

//another example: https://github.com/mdn/dom-examples/blob/main/popover-api/nested-popovers/index.js
