import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { useRef, useState } from 'react';

const meta = {
  component: Modal,
  args: {
    title: 'Title of the Modal',
    children: ['Contents of the modal'],
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const A11yTest: Story = {
  ...Default,

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const triggerBtn = canvas.getByRole('button', { name: /open modal/i });
    expect(triggerBtn).toBeInTheDocument();
    userEvent.click(triggerBtn);
  },
};
