import { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './Carousel';

import React from 'react';

const meta = {
  component: Carousel,
  tags: ['autodocs'],
  args: { children: 'Hello' },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
