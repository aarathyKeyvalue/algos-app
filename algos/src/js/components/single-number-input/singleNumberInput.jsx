import React from "react";
import './styles.css';

const SingleNumberInput = (props) => {
  const { val, setVal, error } = props;

  return (
    <div className="wrapperVal">
      <input
        type="number"
        maxLength={1}
        value={val}
        onChange={(e) => setVal(e?.target?.value)}
        className={`singleInput ${error && 'error'}`} />
    </div>
  )
}

export default SingleNumberInput;