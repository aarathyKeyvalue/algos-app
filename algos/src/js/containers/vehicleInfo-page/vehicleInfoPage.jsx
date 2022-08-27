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
        <input className="weightInput"></input>

      </div>
      <div className="infovehicle">
      <img src={img1} />
      </div>
      <div className="infovehicle1">
      <img src={img2} />
      </div>

    </div>
  );
};
export default vehicleInfoPage;
