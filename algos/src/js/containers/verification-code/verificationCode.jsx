import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import RegistrationSuccess from '../../components/registration-success'
import DialogBox from '../../components/dialog-box';
import Button from '../../components/button/Button';
import SingleNumberInput from '../../components/single-number-input';
import validateOtp from './saga';
import './styles.css';

const VerificationCode = (props) => {
  // const { phoneNo = '8075797015' } = props;
  const [code, setCode] = useState(['','','','']);
  const [resentActive, setResentActive] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorVal, setErrorVal] = useState(false);

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
          clearInterval();
        }
        let minutes = Math.floor( time / 60 );
        if (minutes < 10) minutes = "0" + minutes;
        let seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds; 
        let text = minutes + ':' + seconds;
        if (el) {
          el.innerHTML = text;
        }
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
    if (!error) {
      const otp = code.reduce((a,b) => String(a)+String(b));
      validateOtp(Number(otp)).then((e) => {
        if (e) {
        setSuccess(true)
      } else {
        setErrorVal(true);
        setCode(['', '', '', ''])
      }})
    };
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
            error={errorVal}
            setVal={(v) => {
              assignCode(v, index);
              setErrorVal(false);
            }}
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
            Didn???t receive the code?
            {' '}
            <span className={`resentText ${resentActive && 'resentActive'}`}>
              Resend
            </span>
          </span>
        </div>
      </div>
      <div className={`registrationSuccess`}>
        <DialogBox
          success={success}
          Component={RegistrationSuccess}
          height="535px"
          setSuccess={setSuccess}
        />
      </div>
    </>
  )
}

export default VerificationCode;