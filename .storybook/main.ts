import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: resolve(__dirname, 'vite.config.ts'),
      },
    },
  },
  //https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  docs: {
    defaultName: 'Guidelines',
    autodocs: 'tag',
  },
};

export default config;
