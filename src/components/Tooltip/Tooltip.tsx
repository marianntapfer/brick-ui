import React, { useState } from 'react';
import * as styles from './tooltip.css';
import {
  FloatingElement,
  Placement,
  ReferenceElement,
  arrow,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/react-dom';
import { useRef } from 'react';
import { style } from '@vanilla-extract/css';

export interface TooltipProps {
  children: React.ReactNode;
  referenceElement: ReferenceElement;
  placement?: Placement;
  visible: boolean;
}

type oppositeSideType = 'bottom' | 'top' | 'right' | 'left';

const setPosition = async ({
  floatingElement,
  referenceElement,
  arrowElement,
  placement,
}: {
  floatingElement: FloatingElement;
  referenceElement: ReferenceElement;
  arrowElement: HTMLDivElement;
  placement: Placement;
}) => {
  const { x, y, middlewareData } = await computePosition(
    referenceElement,
    floatingElement,
    {
      placement,
      middleware: [
        offset(15),
        flip(),
        shift({ padding: 5 }),
        arrow({ element: arrowElement }),
      ],
    }
  );

  Object.assign(floatingElement.style, {
    left: `${x}px`,
    top: `${y}px`,
  });

  const oppositeSide = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  }[placement.split('-')[0]] as oppositeSideType;
  const arrowX = middlewareData.arrow?.x;
  const arrowY = middlewareData.arrow?.y;

  console.log(middlewareData.arrow);
  console.log(oppositeSide);

  Object.assign(arrowElement.style, {
    left: arrowX != null ? `${arrowX}px` : '',
    top: arrowY != null ? `${arrowY}px` : '',
    bottom: '',
    right: '',
    [oppositeSide]: `-${styles.arrowSize / 2}px`,
  });
};

export const Tooltip = ({
  children,
  referenceElement,
  placement = 'bottom',
  visible = false,
}: TooltipProps) => {
  const floatingElement = useRef<HTMLDivElement>(null);
  const arrowElement = useRef<HTMLDivElement>(null);

  if (floatingElement.current && arrowElement.current) {
    setPosition({
      floatingElement: floatingElement.current,
      referenceElement,
      arrowElement: arrowElement.current,
      placement,
    });
  }

  return (
    <div
      className={visible ? styles.tooltip : styles.hidden}
      ref={floatingElement}
    >
      {children}
      <div className={styles.arrow} ref={arrowElement}></div>
    </div>
  );
};
