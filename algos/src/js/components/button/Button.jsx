import React from "react";
import "./styles.css";

const Button = (props) => {
  const { label, type, handleClick, width } = props;
  return (
    <>
      <div style={{ width }}>
        <button
          className={type}
          onClick={()=>handleClick()}
          style={{ width }}
        >
          {label}
        </button>
      </div>
    </>
  );
};
export default Button;
