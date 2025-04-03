import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './Carousel';

const meta = {
  component: Carousel,
  tags: ['autodocs'],
  args: { children: 'Hello' },
  parameters: {
    backgrounds: {
      values: [{ name: 'black', value: '#181818' }],
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: 'black',
    },
  },
};
