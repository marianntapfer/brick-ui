import { style, createGlobalTheme, keyframes } from '@vanilla-extract/css';
import { vars } from '../../tokens.css';
import { tokens } from '../../tokens';

//Small tip for declareing global CSS variables using :root{}. You cannot apply them to the backdrop because they are considered 'undefined' within the same module level as the :root{} and they're considered out of scope
const { transparentGray } = tokens.color;
export const backdropVars = createGlobalTheme('::backdrop', {
  transparentGray,
});

const overlayShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const contentShow = keyframes({
  from: { opacity: 0, transform: 'translateY(-100%)' },
  to: { opacity: 1, transform: 'translateY(0%)' },
});

export const modal = style({
  fontFamily: 'sans-serif',
  fontSize: 16,
  marginTop: 0,
  padding: 0,
  border: `solid ${vars.color.black} ${vars.size.border.s}`,
  borderTop: 'none',
  '::backdrop': {
    backgroundColor: backdropVars.transparentGray,
  },
  selectors: {
    '&[open]': {
      animation: `${contentShow} 350ms ease`,
    },
    '&[open]::backdrop': {
      animation: `${overlayShow} 350ms ease`,
    },
  },
});

const modalHide = keyframes({
  to: { opacity: 0, transform: 'translateY(-100%)' },
});

export const hide = style({
  // animation: `${modalHide} 350ms ease`,
  background: 'red',
});

export const header = style({
  borderBottom: `solid ${vars.color.black} ${vars.size.border.s}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '0.7em',
  height: '2.5em',
  padding: '0.6em',
  gap: '1em',
});

export const footer = style({
  borderTop: `solid ${vars.color.black} ${vars.size.border.s}`,
  display: 'flex',
  alignItems: 'center',
  height: '2em',
  gap: '1em',
  padding: '0.4em',
  justifyContent: 'flex-end',
});

export const contents = style({
  padding: '0.5em',
  height: '100%',
  display: 'flex',
  flex: '1',
});
