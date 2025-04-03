import { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

import React from 'react';

const meta = {
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at laudantium quos similique veniam officia, sit laborum, veritatis quidem libero sint nesciunt molestiae itaque ea. Incidunt tempora laudantium cumque dolorem!',
  },
  parameters: { decorator: 'vertical' },
  decorators: [
    (Story, { parameters }) => {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: parameters.decorator === 'vertical' ? '180vh' : '50vh',
            width: parameters.decorator === 'horizontal' ? '180vw' : 'unset',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TopCenter: Story = {
  args: { ...Default.args, position: 'top-center' },
};
export const LeftCenter: Story = {
  args: { ...Default.args, position: 'left-center' },
  parameters: { decorator: 'horizontal' },
};
export const RightCenter: Story = {
  args: { ...Default.args, position: 'right-center' },
  parameters: { decorator: 'horizontal' },
};
