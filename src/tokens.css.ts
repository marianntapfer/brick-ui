import { createGlobalTheme } from '@vanilla-extract/css';
import { tokens } from './tokens';

// this should be in a theme.css.ts file, but now when I move it there the build breaks
export const vars = createGlobalTheme(':root', tokens);
