import React, { useState, useEffect } from "react";
import vehicleMap from "./vehicleMap";
import Button from "../button/Button";
import getDriverDetails from './saga';
import './styles.css';

const DriverDetails = (props) => {
  const { id } = props;
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (id) {
      getDriverDetails(id).then((e) => {
        setDetails(e?.data || {});
      })
    }
  }, [id]);

  const getTimeDiff = () => {
    const startHour = new Date(details?.driverAvailableStartTime)?.getHours();
    const startMin = new Date(details?.driverAvailableStartTime)?.getMinutes();
  }
  return (
    <div className="driverWrapper">
      <div className="driverDetailWrapper">
        <div className="starter" />
        <div className="profilePicContainer">
          <div className={`profilePicBig ${details?.user?.avatar}`} />
          <div className={`vehiclePicContainer ${String(details?.vehicle?.type)?.toLowerCase()}`} />
          <div className='shadow'/>
        </div>
        <div className="driverNameVal">
          {details?.user?.name}
        </div>
        <div className="vehicleDetails">
          <span className="eachDetail">
            {details?.vehicle?.registrationNumber}
          </span>
          <span className="eachDetail">
            {details?.vehicle?.type}
          </span>
          <span className="eachDetail">
            {details?.vehicle?.brand}
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
        <div className="phoneWithWeight">
          <div className="phoneDiv">
            <div className="phoneImageIcon"/>
            {details?.user?.phoneNumber}
          </div>
          <div className="weightDiv">
            <div className='boxWeightDiv'/>
            {details?.availableCapacity} Kg Capacity
          </div>
        </div>
      </div>
      <div>
        <div className="vehiclePicContainerDiv">
        {vehicleMap[details?.user?.avatar]?.map((vehiclePic) => (
          <div className={`eachVehicleImage ${vehiclePic}`} />
        )) }
        </div>
      </div>
      <div className="dialButton">
        <Button
          label="Dial"
          type="fill"
          width="100%"
          hasImage={true}
          imageClass="dialButtonImage"
        />
      </div>
      <div className="backButton">
        <Button
          label="Back"
          type="blackOutline"
          width="100%"
        />
      </div>
    </div>
  )
}

export default DriverDetails;