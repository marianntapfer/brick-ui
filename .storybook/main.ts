import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  //https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  docs: {
    defaultName: 'Guidelines',
    //👇 Use only one of the following options to auto-generate documentation
    // autodocs: true,
    autodocs: 'tag',
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger:true,
    buildStoriesJson:true
  },
};

export default config;
