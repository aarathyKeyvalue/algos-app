import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../button/Button";
import './styles.css';

const ListedSuccess = (props) => {

  const { setSuccess } = props;
  const navigate = useNavigate();
  return (
    <div className="wrapperListed">
      <div className="starter" />
      <div className="imageContainer">
        <div className="image" />
        <div className="imageText">
          <div className="mainText">Listed Successfully</div>
          <div className="subtext">
          Congratulation! Offer request has been created.
          </div>
        </div>
      </div>
      <div className="homepageButton">
        <Button
          label="Go to Homepage"
          type="fill"
          width="100%"
          handleClick={() => setSuccess()}
        />
      </div>
    </div>
  )
}

export default ListedSuccess;