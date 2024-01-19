import { style } from '@vanilla-extract/css';
import { vars } from '../Button/button.css';

export const tooltip = style({
  backgroundColor: vars.color.greenish,
  //   border: 'solid 2px black',
  padding: 10,
  position: 'absolute',
  left: 0,
  top: 0,
});
export const hidden = style({
  visibility: 'hidden',
});

export const arrowSize = 20;

export const arrow = style({
  backgroundColor: vars.color.greenish,
  height: arrowSize,
  width: arrowSize,
  rotate: '45deg',
  position: 'absolute',
});
