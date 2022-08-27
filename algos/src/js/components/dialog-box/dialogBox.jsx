import React, { useRef } from "react";
import useOutsideClick from '../../utils/custom-hooks';
import './styles.css';

const DialogBox = (props) => {
  const { Component, success, setSuccess, height, details } = props

  const refVal = useRef();

  useOutsideClick(refVal, () => {
    setSuccess(false);
  })
  return (
    <>
      <div className={success && `overlay`} />
      <div
        className={success && "dialogWrapper showRegistrationSuccess"}
        style={{ height }}
      >
        <dialog
          className={success && (`dialog`)}
          open={success}
          style={{ height }}
          ref={refVal}
        >
          <Component
            success={success}
            details={details}
          />
        </dialog>
      </div>
    </>
  )
};

export default DialogBox;