import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../button/Button";
import './styles.css';

const RegistrationSuccess = () => {

  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="starter" />
      <div className="imageContainer">
        <div className="image" />
        <div className="imageText">
          <div className="mainText">Registered Successfully</div>
          <div className="subtext">
          Congratulation! your account has been created. Please login to get amazing experience.
          </div>
        </div>
      </div>
      <div className="homepageButton">
        <Button
          label="Go to Homepage"
          type="fill"
          width="100%"
          handleClick={() => navigate('/home')}
        />
      </div>
    </div>
  )
}

export default RegistrationSuccess;