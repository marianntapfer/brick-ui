import { Meta, StoryObj } from '@storybook/react';

import { Example } from './Example';

import React from 'react';

const meta = {
  component: Example,
  tags: ['autodocs'],
  args: { children: 'Hello' },
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
