import React, { Fragment, ReactNode } from 'react';

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <div className='modal__backdrop'></div>
      <div className='modal__overlay'>{children}</div>
    </Fragment>
  );
};

export default Modal;
