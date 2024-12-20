import { recipe } from '@vanilla-extract/recipes';
import { createGlobalTheme, createVar } from '@vanilla-extract/css';
import { tokens } from '../../tokens';
import { ButtonVariants } from './Button';

// this should be in a theme.css.ts file, but now when I move it there the build breaks
export const vars = createGlobalTheme(':root', tokens);

const accentColor = createVar();

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
    ':hover': {
      cursor: 'pointer',
    },
    selectors: {
      '&:focus:not(focus-visible)': {
        outline: 'none',
      },
    },
  },
  variants: {
    variant: {
      [ButtonVariants.default]: {
        color: vars.color.white,
        background: vars.color.black,
        ':hover': {
          color: vars.color.black,
          background: vars.color.white,
        },
      },
      [ButtonVariants.action]: {
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
      [ButtonVariants.calm]: {
        color: vars.color.black,
        background: vars.color.white,
      },
      [ButtonVariants.bad]: {
        color: vars.color.yellow,
        background: vars.color.white,
      },
      [ButtonVariants.arquen]: {
        backgroundColor: '#fff',
        fontSize: '16px',
        fontWeight: 500,
        color: '#2D2C44',
        borderStyle: 'solid',
        borderWidth: '2px 2px 2px 2px',
        borderColor: '#D9B08C',
        borderRadius: '10px 10px 10px 0px',
        boxShadow: '0px 5px 0px 0px #D9B08C',
        padding: '10px 20px 10px 20px',
        marginBottom: '5px',
        textTransform: 'unset',
        ':hover': {
          background: '#FBF5EE',
        },
      },
      //    transition: background-color .2s ease-in-out;
      //    background-color: #4947ca;
      [ButtonVariants.juna]: {
        vars: {
          [accentColor]: '#fffdf6',
        },
        textTransform: 'unset',
        padding: '.5em 1em',
        borderWidth: '2px',
        borderColor: accentColor,
        color: accentColor,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderRadius: '2em',
        transition: 'background-color .2s ease-in-out',
        ':hover': {
          backgroundColor: '#4947ca',
        },
      },
    },
  },
  defaultVariants: {
    variant: ButtonVariants.default,
  },
});
