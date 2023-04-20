import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import './Modal.css';
import { Button } from '../Button';

export interface ModalProps {
  open?: boolean;
  /** Modal description */
  children?: React.ReactNode[];
  /** title of the modal */
  title?: string;
}

export const Modal = ({ open, children, title }: ModalProps) => {
  const className = `modal`;

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant='action' label='open Modal'></Button>
        </Dialog.Trigger>
        {/* <Dialog.Portal container={container && container}> */}
        <Dialog.Overlay className='DialogOverlay' />
        <Dialog.Content className='DialogContent'>
          <Dialog.Title className='DialogTitle'>{title}</Dialog.Title>
          <Dialog.Description className='DialogDescription'>
            {children}
          </Dialog.Description>

          <div
            style={{
              display: 'flex',
              marginTop: 25,
              justifyContent: 'flex-end',
            }}
          >
            <Dialog.Close asChild>
              <Button variant='bad' label='Save changes'></Button>
            </Dialog.Close>
          </div>
          {/* <Dialog.Close asChild>
            <Button variant='action' label='x'></Button>
          </Dialog.Close> */}
        </Dialog.Content>
        {/* </Dialog.Portal> */}
      </Dialog.Root>
    </>
  );
};
