import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { useRef, useState } from 'react';
import { Button } from '../Button';
import React from 'react';

const meta = {
  component: Modal,
  args: {
    title: 'Title of the Modal',
    children: ['Contents of the modal'],
    visible: true,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <>
        <Button onClick={() => setModalVisible(!modalVisible)}>
          open modal
        </Button>
        <Button onClick={() => window.open()}>open window</Button>
        <Modal visible={modalVisible} {...args}>
          <Modal.Contents>
            <form method='dialog'>
              <Button>ok</Button>
            </form>
          </Modal.Contents>
          <Modal.Footer>
            <Button>ok</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const A11yTest: Story = {
  ...Default,

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const triggerBtn = canvas.getByRole('button', { name: /open modal/i });
    expect(triggerBtn).toBeInTheDocument();
    userEvent.click(triggerBtn);
  },
};
