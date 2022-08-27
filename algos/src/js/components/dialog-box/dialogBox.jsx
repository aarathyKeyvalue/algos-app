import React from "react";
import './styles.css';

const DialogBox = (props) => {
  const { Component, success, height, details } = props
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