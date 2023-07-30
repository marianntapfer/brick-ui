import { style } from '@vanilla-extract/css';
import { vars } from '../../global.css';

export const button = style({
  fontFamily: 'Barriecito, sans-serif',
  fontSize: '1.5rem',
  borderRadius: 0,
  border: 0,
  background: vars.color.black,
  color: vars.color.white,
  textTransform: 'uppercase',
  padding: '10px 40px',

  selectors: {
    '&:hover': {
      color: vars.color.black,
      background: vars.color.white,
    },
  },
});

export const action = style({
  background: vars.color.red,
  ':hover': {
    color: vars.color.red,
    background: vars.color.white,
  },
  ':active': {
    color: vars.color.yellow,
  },
  ':focus-visible': {
    border: `solid 2px ${vars.color.yellow}`,
  },
  selectors: {
    '&:focus:not(focus-visible)': {
      outline: 'none',
    },
  },
});

export const calm = style({
  background: vars.color.white,
  color: vars.color.black,
});

export const bad = style({
  background: vars.color.white,
  color: vars.color.yellow,
});
