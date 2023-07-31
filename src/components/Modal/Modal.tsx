import React, { useEffect, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import './Modal.css';
import { Button } from '../Button';

export interface ModalProps {
  visible?: boolean;
  /** Modal description */
  children?: React.ReactElement;
  /** title of the modal */
  title?: string;
}

export const Modal = ({ visible, children, title }: ModalProps) => {
  const className = `modal`;
  const dialog = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialog.current?.showModal();
  };

  const closeModal = () => {
    dialog.current?.close();
  };

  visible ? openModal() : closeModal();

  return (
    <dialog ref={dialog}>
      <p>{title}</p>
      {children}
    </dialog>
  );
};
