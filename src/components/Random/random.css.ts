import { style } from '@vanilla-extract/css';

export const underlined = style({
  fontFamily: 'sans-serif',
  color: 'green',
  fontSize: '4rem',
  textDecorationColor: 'pink',
  textDecorationSkipInk: 'none',
  textDecorationThickness: '2rem',
  textUnderlineOffset: '1rem',
  ':after': {
    content: '\u2197',
  },
});

export const arrow = style({
  fontSize: '5rem',
});
