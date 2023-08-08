import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../tokens.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const buttonStyle = recipe({
  base: {
    borderRadius: 0,
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
    border: `solid 2px ${vars.color.black}`,
    background: vars.color.gray[0],
    color: vars.color.gray[156],
    display: 'flex',
  },
  variants: {
    variant: {
      primary: {
        color: vars.color.black,
        background: vars.color.white,
        ':hover': {
          background: vars.color.gray[16],
        },
        ':active': {
          background: vars.color.gray[32],
        },
      },
      inverted: {},
      ghost: {
        background: 'none',
        border: 'none',
        ':hover': {
          color: vars.color.gray[100],
        },
        ':active': {
          color: vars.color.gray[124],
        },
      },
    },
    type: {
      text: {
        padding: '0.5rem 1.2rem',
      },
      icon: {
        padding: '0.5em',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    type: 'text',
  },
});

export const svg = style({
  width: '1rem',
  height: '1rem',
  fill: vars.color.black,
});

// there must be a better way to do this
globalStyle(`${buttonStyle.classNames.variants.variant.ghost}:hover > ${svg}`, {
  fill: vars.color.gray[100],
});
globalStyle(
  `${buttonStyle.classNames.variants.variant.ghost}:active > ${svg}`,
  {
    fill: vars.color.gray[124],
  }
);
