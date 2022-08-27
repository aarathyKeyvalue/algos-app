import React from "react";
import Button from "../button/Button";
import './styles.css';

const RegistrationSuccess = () => {
  const navigateTo = () => {};
  return (
    <div className="wrapper">
      <div className="starter" />
      <div className="imageContainer">
        <div className="image">
          <div className="imageText">
            <div className="mainText">Registered Successfully</div>
            <div className="subtext">
            Congratulation! your account has been created. Please login to get amazing experience.
            </div>
          </div>
        </div>
      </div>
      <div className="homepageButton">
        <Button label="Go to Homepage" type="fill" width="100%" />
      </div>
    </div>
  )
}

export default RegistrationSuccess;