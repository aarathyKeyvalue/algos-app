import React, { useState } from "react";
import "./styles.css";
import Button from "../../components/button/Button";
const VehicleInfoPage = (props) => {
  const { details, setDetails, setDetailStep, vehicleImg, licenceImg, setVehicleImg, setLicenceImg } = props;
  return (
    <div className="vehicleInfoWrapper">
      <div className="headerVehicleInfo">Vehicle Info</div>
      <div className="rowimg">
        {!details?.registrationNumber && (
        <div className="withoutVehicleNo">
          <div className="searchIcon" />
          <span className="vehicleNoPlaceholder">Enter your vehicle number</span>
        </div>)}
        <input
          className="vehicleinfo"
          value={details?.registrationNumber}
          onChange={(e) => setDetails({ ...details, registrationNumber: e?.target?.value })}
        />
        {details?.registrationNumber && (<div className="crossimg" />)}
      </div>
      <div className="rowimg">
        {!details?.weight && (
          <div className="capacityPlaceholder">Capacity (Kg)</div>
        )}
        <input
          className="weightInput"
          value={details?.weight}
          onChange={(e) => setDetails({ ...details, weight: e?.target?.value })}
        />
        {details?.weight && (<div className="crossimg" />)}
      </div>
      {(!vehicleImg && (
        <div>
          <div
            className="vehicleImage"
            onClick={() => setVehicleImg(true)}>
              Upload Vehicle Image
          </div>
          <div className="vehicleInfoPic" />
        </div>
      )) || (
        <div className="infovehicle" />
      )}
      {(!licenceImg && (
        <div>
          <div
            className="vehicleImage"
            onClick={() => setLicenceImg(true)}
          >Upload Drivers License</div>
        </div>
      )) || (
        <div className="infovehicle1" />
      )}
      <div className="vehicleInfoContinue">
        <Button  
          type="fill"
          label="Continue"
          width="100%"
          handleClick={() => setDetailStep(2)}
        />
      </div>
    </div>
  );
};
export default VehicleInfoPage;
