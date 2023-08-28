import React, { useRef, useState } from 'react';
import { contents, footer, header, modal, hide } from './modal.css';
import { Button } from '../Button';

export interface ModalProps {
  visible?: boolean;
  /** Modal contents */
  children?: React.ReactNode;
  /** title of the modal */
  title?: string;
  onClose?: () => {};
  onTransitionEnd?: () => {};
}

// https://css-tricks.com/some-hands-on-with-the-html-dialog-element/

// Other way to handle click outside is to listen on click for dialog element and, add `e.stopPropogation` for dialog body. This can also handle the edge case when border is rounded.

export const Modal = ({
  visible,
  children,
  title,
  ...htmlProps
}: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [hideTransition, setHideTransition] = useState(false);

  const openModal = () => {
    if (dialog.current?.open) {
      // to avoid this error: "Failed to execute 'showModal' on 'HTMLDialogElement': The element already has an 'open' attribute, and therefore cannot be opened modally.""
      console.log('dialog is open??');

      dialog.current.close();
    }
    dialog.current?.showModal();
  };

  const closeModal = () => {
    // setHideTransition(true);
    dialog.current?.close();
  };

  const onTransitionEnd = () => {
    console.log('on transition end');
  };

  visible ? openModal() : closeModal();

  return (
    <dialog
      ref={dialog}
      className={`${modal}`}
      onTransitionEnd={() => {
        console.log('transition end');
      }}
      {...htmlProps}
    >
      <div className={header}>
        <h1>{title}</h1>
        <Button.Close
          onClick={() => closeModal()}
          htmlProps={{ 'aria-label': 'Close' }}
        />
      </div>
      {children}
    </dialog>
  );
};

const ModalContents = ({ children }: { children: React.ReactElement }) => {
  return <div className={contents}>{children}</div>;
};
const ModalFooter = ({ children }: { children: React.ReactElement }) => {
  return <div className={footer}>{children}</div>;
};

Modal.Footer = ModalFooter;
Modal.Contents = ModalContents;
