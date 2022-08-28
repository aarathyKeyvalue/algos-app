import React, { useState } from "react";
import VehicleInfoPage from "../vehicleInfo-page/vehicleInfoPage";
import Vehicleselection from "../../components/vehicleselection";
import './styles.css';

const DriverInfo = (props) => {
  const { setStep, details, setDetails, setListedSuccess } = props;
  const [detailStep, setDetailStep] = useState(1);
  const [vehicleImg, setVehicleImg] = useState(false);
  const [licenceImg, setLicenceImg] = useState(false);
  const [vehicleType, setVehicleType] = useState();
  return (
    <div>
      <div className="infoDiv">
        <div
          className="backbuttonWrapper"
          onClick={() => setStep(1)}
        />
        <div className="addYourInfo">Add Your Info</div>
      </div>
      <div className="selectionDivs">
        <div
          className={`selectionSpan ${(detailStep >= 1 && 'activeSpan') || 'inactiveSpan'}`}
          onClick={() => setDetailStep(1)}
        />
        <div
          className={`selectionSpan ${(detailStep >= 2 && 'activeSpan') || 'inactiveSpan'}`}
          onClick={() => setDetailStep(2)}
        />
      </div>
      {(detailStep === 1 && (
        <VehicleInfoPage
          vehicleImg={vehicleImg}
          licenceImg={licenceImg}
          setVehicleImg={setVehicleImg}
          setLicenceImg={setLicenceImg}
          setDetailStep={setDetailStep}
          details={details}
          setDetails={setDetails}
        />
      )) || (
        <Vehicleselection
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
          setListedSuccess={setListedSuccess}
          setStep={setStep}
          details={details}
          setDetails={setDetails}
        />
      )}
    </div>
  )
};

export default DriverInfo;
