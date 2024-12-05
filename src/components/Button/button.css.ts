import { recipe } from '@vanilla-extract/recipes';
import { createGlobalTheme } from '@vanilla-extract/css';
import { tokens } from '../../tokens';

// this should be in a theme.css.ts file, but now when I move it there the build breaks
export const vars = createGlobalTheme(':root', tokens);

export const buttonStyle = recipe({
  base: {
    fontFamily: 'Barriecito, sans-serif',
    fontSize: '1.5rem',
    borderRadius: 0,
    border: 0,
    textTransform: 'uppercase',
    padding: '10px 40px',
    boxSizing: 'border-box',
    ':focus-visible': {
      border: `solid 2px ${vars.color.blue}`,
    },
    selectors: {
      '&:focus:not(focus-visible)': {
        outline: 'none',
      },
    },
  },
  variants: {
    variant: {
      default: {
        color: vars.color.white,
        background: vars.color.black,
        ':hover': {
          color: vars.color.black,
          background: vars.color.white,
        },
      },
      action: {
        color: vars.color.white,
        background: vars.color.red,
        ':hover': {
          color: vars.color.red,
          background: vars.color.white,
        },
        ':active': {
          color: vars.color.yellow,
        },
      },
      calm: {
        color: vars.color.black,
        background: vars.color.white,
      },
      bad: {
        color: vars.color.yellow,
        background: vars.color.white,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
