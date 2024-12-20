import { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

import React from 'react';

const meta = {
  component: Tooltip,
  tags: ['autodocs'],
  args: { children: 'Hello' },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
