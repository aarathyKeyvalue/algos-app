import React from "react";
import "./styles.css";
import cross from "../../../assets/vehicles/Vector.svg";
import img1 from "../../../assets/vehicles/infoimg1.svg";
import img2 from "../../../assets/vehicles/infoimg2.svg";
import Button from "../../components/button/Button";
const vehicleInfoPage = () => {
  return (
    <div>
      <div className="rowimg">
        <input className="vehicleinfo" />
        <div className="crossimg">
          <img src={cross} />
        </div>
      </div>
      <div>
        <input className="weight"></input>

      </div>
      <div className="infovehicle">
      <img src={img1} />
      </div>
      <div className="infovehicle1">
      <img src={img2} />
      </div>
      {/* <Button  
      type="fill"
      label="Continue"
      width="100%"/> */}
    </div>
  );
};
export default vehicleInfoPage;
