import React from "react";
import PropTypes from 'prop-types';
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

Button.propTypes = {
  label: PropTypes.string,
  type:  PropTypes.string,
  handleClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string
};

Button.defaultProps = {
  label: '',
  type: '',
  handleClick: () => {},
  width: '100%',
  height: '54px'
};
export default Button;
