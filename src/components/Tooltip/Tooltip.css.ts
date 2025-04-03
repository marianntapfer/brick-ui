import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '180vh',
  width: '250vw',
});

export const tooltip = style({
  backgroundColor: '#fff',
  color: '#2D2C44',
  borderStyle: 'solid',
  borderWidth: '2px 2px 2px 2px',
  borderColor: '#D9B08C',
  borderRadius: '0px 10px 10px 10px',
  padding: '10px 20px 10px 20px',
  fontFamily: 'sans-serif',
  width: '200px',
  // selectors: {
  //   '&:popover-open': {
  //     display: 'flex',
  //     margin: 0,
  //     inset: 'auto',
  //     position: 'absolute',
  //   },
  // },
});

// export const anchor = style({
//   anchor-name: 'tooltip-1-anchor'
// })
