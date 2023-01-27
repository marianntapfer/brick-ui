import { Button } from './Button';
import { Meta, StoryObj } from '@storybook/react';
// used to be ComponentStory and ComponentMeta

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  args: { label: 'Action phrase', variant: 'default' },
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

export default meta

type Story = StoryObj<typeof Button>;

/** This story only shows the default variants defined in default.args. These will be applied to every story if nothing else is specified there. */
export const Primary: Story = {};

export const CalmDark: Story = {
  render: (args, context) => {
    return <Button label='Calm'></Button>
  },
};

export const ActionVariant: Story = {
  args: { variant: 'action' },
};

export const BadVariant: Story = {
  args: { variant: 'bad' },
};

export const ActionLabel: Story = {
  args: { label: 'The purpose' },
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
