import React, { useEffect, useRef, useState } from 'react';
import { Tooltip } from './Tooltip';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { tallExample } from '../../../.storybook/storyStyles.css';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: ({ children, placement }) => {
    const referenceEl = useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = useState(false);

    return (
      <>
        <div className={tallExample}>
          <Button
            onClick={() => {
              // setVisible(!visible);
            }}
            forwardRef={referenceEl}
            htmlProps={{
              onMouseEnter: () => setVisible(true),
              onMouseLeave: () => setVisible(false),
              onFocus: () => setVisible(true),
              onBlur: () => setVisible(false),
            }}
          >
            Show
          </Button>
        </div>
        {referenceEl.current && (
          <Tooltip
            referenceElement={referenceEl.current}
            placement={placement}
            visible={visible}
          >
            {children}
          </Tooltip>
        )}
      </>
    );
  },
};
