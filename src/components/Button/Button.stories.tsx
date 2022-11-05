import { Button } from './Button';
import { StoryObj } from '@storybook/react';
// used to be ComponentStory and ComponentMeta

export default {
  title: 'components/Button',
  component: Button,
  args: { label: 'Action phrase', variant: 'default' },
  //   parameters: { layout: 'fullscreen' },
} as StoryObj<typeof Button>;
/** This story only shows the default variants defined in default.args. These will be applied to every story if nothing else is specified there. */
export const Default: StoryObj<typeof Button> = {};
export const Calm: StoryObj<typeof Button> = {
  args: { variant: 'calm' },
};

export const ActionVariant: StoryObj<typeof Button> = {
  args: { variant: 'action' },
};
export const ActionLabel: StoryObj<typeof Button> = {
  args: { label: 'The purpose' },
};

/** This story combines the two previous stories together */
export const ActionLabelVariant: StoryObj<typeof Button> = {
  args: { ...ActionLabel.args, ...ActionVariant.args },
};
export const ActionLabelVariantMobile: StoryObj<typeof Button> = {
  args: { ...ActionLabelVariant.args },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
