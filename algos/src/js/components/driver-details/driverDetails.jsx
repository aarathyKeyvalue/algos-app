import React from "react";
import './styles.css';

const DriverDetails = (props) => {
  const { details } = props;
  return (
    <div className="driverWrapper">
      <div className="starter" />
      <div className="profilePicContainer">
        <div className={`profilePic ${details?.pic}`} />
        <div className={`vehiclePicContainer ${String(details?.type)?.toLowerCase()}`} />
        <div className='shadow'/>
      </div>
      <div className="driverNameVal">
        {details?.name}
      </div>
      <div className="vehicleDetails">
        <span className="eachDetail">
          {details?.vehicleNo}
        </span>
        <span className="eachDetail">
          {details?.type}
        </span>
        <span className="eachDetail">
          {details?.brand}
        </span>
      </div>
      <div className="timeAndDate">
        <div className="timeDateVal">
          <div className="clock" />
          <div className="timeDiffOrDate">09:00 AM - 05:00PM</div>
        </div>
        <div className="timeDateVal">
          <div className="calenderFilled" />
          <div className="timeDiffOrDate">27 August 2022</div>
        </div>
      </div>
      <div className="phoneDiv">
        {details?.phoneNo}
      </div>
    </div>
  )
}

export default DriverDetails;