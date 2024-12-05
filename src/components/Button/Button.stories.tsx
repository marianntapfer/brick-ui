import { expect } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import { Button } from './Button';
import React from 'react';
// used to be ComponentStory and ComponentMeta

const meta: Meta<typeof Button> = {
  // will be generated by file structure is not needed
  // title: 'components/Button',
  component: Button,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  args: { children: 'Action', variant: 'default' },
  parameters: {
    // { layout: 'fullscreen' },
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/** This story only shows the default variants defined in default.args. These will be applied to every story if nothing else is specified there. */
export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'default',
  },
  play: async ({ canvasElement, args }) => {
    let canvas = within(canvasElement);
    // get by role might not be the most performat way of getting the element
    // let primaryButton = canvas.getByRole('button', { name: /Primary/i });
    let button = canvas.getByText('Primary');
    expect(button.innerText).toBe('Primary'.toLocaleUpperCase());
    expect(button).toHaveStyle('background-color: #000000');
    // expect(button).toHaveClass(args.variant || '');
  },
};

/** This story uses custom render function. */
export const AllVariants: Story = {
  render: (args, context) => {
    return (
      <>
        <Button>Default</Button>
        <Button variant='action'>Primary</Button>
        <Button variant='calm'>Calm</Button>
      </>
    );
  },
};

export const BadVariant: Story = {
  args: { variant: 'bad' },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', selector: '' }],
      },
    },
  },
};

export const ActionVariant: Story = {
  args: { variant: 'action' },
};

export const ActionLabel: Story = {
  args: { children: 'The purpose of the button' },
  // parameters: {
  //   background: {
  //     name: 'red',
  //   },
  // },
};

/** This story combines the two previous stories together */
export const ActionLabelVariant: Story = {
  args: { ...ActionLabel.args, ...ActionVariant.args },
};

export const ActionLabelVariantMobile: Story = {
  args: { ...ActionLabelVariant.args },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
