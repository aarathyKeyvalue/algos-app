import React from "react";
import Button from "../button/Button";
import './styles.css';

const DetailsCard = (props) => {
  const { name,
  type,
  phoneNumber,
  avatar,
  availableCapacity,
  onDetailsClick } = props;

  return (
    <div className="detailsCard">
      <div className="topContainer">
        <div className="basicDetails">
          <div
            className={`profilePic ${avatar}`}
          />
          <div className="detailsContainer">
            <div className="nameText">{name}</div>
            <div className="phoneDetails">
              <div className="phoneImg" />
              <div className="phoneNumber">{phoneNumber}</div>
            </div>
          </div>
        </div>
        <div className={`vehiclePic ${String(type)?.toLowerCase()}`}/>
      </div>
      <div className="bottomContainer">
        <div>
          <div className="phoneNumber">{availableCapacity} Kg Capacity</div>
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