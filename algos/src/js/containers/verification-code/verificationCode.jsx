import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import RegistrationSuccess from '../../components/registration-success'
import Button from '../../components/button/Button';
import SingleNumberInput from '../../components/single-number-input'
import './styles.css';

const VerificationCode = (props) => {
  // const { phoneNo = '8075797015' } = props;
  const [code, setCode] = useState(['','','','']);
  const [resentActive, setResentActive] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const url = window.location.hash;
  const phoneNo = url?.split('#')[1]?.split('/')[1]?.split('?')[1]?.split('=')[1];

  // const navigate = useNavigate();
  function countdown(minutes, seconds) {
    // set time for the particular countdown
    let time = minutes*60 + seconds;
    setInterval(function() {
      if (time >= 0) {
        let el = document.getElementById('timer');
        // if the time is 0 then end the counter
        if(time === 0) {
          setResentActive(true);
        }
        let minutes = Math.floor( time / 60 );
        if (minutes < 10) minutes = "0" + minutes;
        let seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds; 
        let text = minutes + ':' + seconds;
        el.innerHTML = text;
        time--;
      }
    }, 1000);
}
  useEffect(() => {
    countdown(1, 0);
  }, []);
  const assignCode = (v, index) => {
    const vals = [...code];
    vals.splice(index, 1, v);
    setCode(vals);
  }

  const checkCode = () => {
    let error = false;
    code.map((e) => {
      if (e === '') error = true;
    })
    if (!error) setSuccess(true);
  }
  return (
    <>
      <div className="verificationWrapper">
        <div
          className="backbutton"
          onClick={() =>navigate('/login')}
        />
        <div className="verification">Verification Code</div>
        <div className="subtextContainer">We have sent the code verification to your number {phoneNo}</div>
        <div className="inputFields">
          {code?.map((field, index) => (
            <SingleNumberInput
            val={field}
            setVal={(v) => assignCode(v, index)}
          />
          ))}
        </div>
        <div id="timer" className="timer" />
        <div className="submitButton">
          <Button
            label="Submit"
            type="fill"
            width="100%"
            handleClick={checkCode}
          />
        </div>
        <div className="resentWrapper">
          <span className="code">
            Didn’t receive the code?
            {' '}
            <span className={`resentText ${resentActive && 'resentActive'}`}>
              Resend
            </span>
          </span>
        </div>
      </div>
      <div className={`registrationSuccess`}>
        {success && (
        <>
          <div className={`overlay`} />
          <div className="dialogWrapper">
            <dialog className={`dialog showRegistrationSuccess`} open={success}>
            <RegistrationSuccess success={success}/>
            </dialog>
          </div>
        </>)}
      </div>
    </>
  )
}

export default VerificationCode;