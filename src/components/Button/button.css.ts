import { style } from '@vanilla-extract/css';

export const button = style({
  vars: {
    '--color-black': '#000000',
    '--color-white': '#e9e5e7',
  },
  fontFamily: 'Barriecito, sans-serif',
  fontSize: '1.5rem',
  borderRadius: 0,
  border: 0,
  background: 'var(--color-black)',
  color: 'var(--color-white)',
  textTransform: 'uppercase',
  padding: '10px 40px',

  selectors: {
    '&:hover': {
      color: 'var(--color-black)',
      background: 'var(--color-white)',
    },
  },
});

// .action {
//   background: var(--color-red);
// }

// .action:hover {
//   color: var(--color-red);
//   background: var(--color-white);
// }

// .action:active {
//   /* color: var(--color-yellow); */
// }

// .action:focus:not(focus-visible) {
//   outline: none;
// }

// .action:focus-visible {
//   border: solid 2px var(--color-white);
// }

// .calm {
//   background: var(--color-white);
//   color: var(--color-black);
// }
// .bad {
//   background: var(--color-white);
//   color: yellow;
// }
