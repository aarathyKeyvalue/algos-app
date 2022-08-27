import React from "react";
import './styles.css';

const SingleNumberInput = (props) => {
  const { val, setVal } = props;

  return (
    <div>
      <input
        type="number"
        maxLength={1}
        value={val}
        onChange={(e) => setVal(e?.target?.value)}
        className="singleInput" />
    </div>
  )
}

export default SingleNumberInput;