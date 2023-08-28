export const tokens = {
  color: {
    //whites
    offWhite: '#e9e5e7',
    white: '#FFFFFF',
    transparentWhite: 'rgba(229, 229, 229, 0.2)',
    // balcks and grays
    black: '#000000',
    transparentGray: 'rgba(233, 229, 231, 0.70)',
    gray: {
      0: '#FFFFFF',
      16: '#E4E5E5',
      32: '#C9CACB',
      80: '#797B7C',
      100: '#575A5B',
      124: '#424445',
      156: '#000000',
    },
    //yellows
    yellow: '#f4cb57',
    yellowHover: '#DAA920',
    transparentYellow: 'rgba(244, 203, 87, 0.5)',
    //reds
    pink: '#f5c0bd',
    red: '#e74a37',
    // blues
    lightblue: '#91d6da',
    blue: '#3571c9',
    // greens
    green: '#08A742',
    greenHover: '#198A42',
    greenish: '#b6c6d0',
    grayGreen: '#848283',
  },
  size: {
    headerHeight: '100px',
    spacing: {
      /** 8px */
      xs: '0.5rem',
      /** 16px */
      s: '1rem',
      /** 24px */
      m: '1.5rem',
      /** 32px */
      l: '2rem',
    },
    border: {
      /** 1.6px */
      // s: '0.1rem',
      s: '1.5px',
    },
  },
} as const;
