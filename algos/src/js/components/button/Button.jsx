import React from "react";
import "./styles.css";

const Button = (props) => {
  const { label, type, handleClick, width, height, hasImage, imageClass } = props;
  return (
    <>
      <div style={{ width }}>
        <button
          className={type}
          onClick={()=>handleClick()}
          style={{
            width,
            height,
            display: hasImage && 'flex',
            justifyContent: hasImage && 'center',
            columnGap: hasImage && '6px',
            alignItems: hasImage && 'center'
          }}
        >
          {hasImage && <div className={imageClass} />}
          {label}
        </button>
      </div>
    </>
  );
};
export default Button;
