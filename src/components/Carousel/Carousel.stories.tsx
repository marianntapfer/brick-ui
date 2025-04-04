import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './Carousel';

const items: React.ReactNode[] = [237, 239, 76, 57, 42, 56, 78].map((img) => (
  <img src={`https://picsum.photos/id/${img}/300/400`} alt="" />
));

const meta = {
  component: Carousel,
  tags: ['autodocs'],
  args: { children: items },
  parameters: {
    backgrounds: {
      values: [{ name: 'black', value: '#181818' }],
      default: 'black',
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Width: Story = {
  args: {
    width: '400px',
  },
};
export const Shadow: Story = {
  args: {
    showShadow: true,
  },
};
