import React from "react";
import './styles.css';

const DetailsCard = (props) => {
  const { name,
  type,
  vehicleNo,
  phoneNo,
  pic } = props;

  return (
    <div className="detailsCard">
      <div className="topContainer">
        <div className="basicDetails">
          <div
            className={`profilePic ${pic}`}
          />
        </div>
        <div className={`vehiclePic ${String(type)?.toLowerCase()}`}/>
      </div>
    </div>
  )
}

export default DetailsCard;