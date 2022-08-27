import React from "react";
import Button from "../button/Button";
import './styles.css';

const DetailsCard = (props) => {
  const { name,
  type,
  vehicleNo,
  phoneNo,
  pic,
  onDetailsClick } = props;

  return (
    <div className="detailsCard">
      <div className="topContainer">
        <div className="basicDetails">
          <div
            className={`profilePic ${pic}`}
          />
          <div className="detailsContainer">
            <div className="nameText">{name}</div>
            <div className="phoneDetails">
              <div className="phoneImg" />
              <div className="phoneNumber">{phoneNo}</div>
            </div>
          </div>
        </div>
        <div className={`vehiclePic ${String(type)?.toLowerCase()}`}/>
      </div>
      <div className="bottomContainer">
        <div>
          <div className="phoneNumber">{vehicleNo}</div>
          <div className="phoneNumber">{type}</div>
        </div>
        <div className="detailsButton">
          <Button
            type="outline"
            handleClick={onDetailsClick}
            label="View Details" height="40px" width="100%" />
        </div>
      </div>
    </div>
  )
}

export default DetailsCard;