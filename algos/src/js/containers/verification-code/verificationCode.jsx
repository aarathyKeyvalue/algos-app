import React, { useState } from "react";
import SingleNumberInput from '../../components/single-number-input'
import './styles.css';

const VerificationCode = (props) => {
  const { phoneNo = '8075797015' } = props;
  const [code, setCode] = useState(new Array(4));

  const assignCode = (v, index) => {
    const vals = [...code];
    vals.splice(index, 1, v);
    setCode(vals);
  }
  return (
    <div>
      <div className="backbutton" />
      <div className="verification">Verification Code</div>
      <div className="subtext">We have sent the code verification to your number {phoneNo}</div>
      <div className="inputFields">
        {code?.map((field, index) => (
          <SingleNumberInput
          val={field}
          setVal={(v) => assignCode(v, index)}
        />
        ))}
      </div>
    </div>
  )
}

export default VerificationCode;