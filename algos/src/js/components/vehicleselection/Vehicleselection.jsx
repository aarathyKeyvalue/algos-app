import React from "react";
import Button from "../button/Button";
import "./styles.css";
const Vehicleselection=(props)=>{
    const { vehicleType, setVehicleType, setListedSuccess, setStep } = props;
    const vehicleTypes = ['Truck', 'Hyva', 'LCV', 'Container', 'Trailer'];
    return(
    <div className="vehicleSelectionWrapper">
        <div className="headerVehicleInfo">Vehicle Info</div>
            <div className="row">
                {vehicleTypes?.map((type) => (
                <div
                  className={`backgroundclass ${vehicleType === String(type)?.toLowerCase() && 'selectedVehicleType'}`}
                  onClick={() => setVehicleType(String(type)?.toLowerCase())}>
                    <div className={`${String(type)?.toLowerCase()}van`} />
                    <div className={`namediv ${vehicleType === String(type)?.toLowerCase() && 'selectedVehiclenameDiv'}`}>
                        {type}
                    </div>
                </div>
                ))}
            </div>
        <div className="vehicleSelectionSubmit">
            <Button
                type="fill"
                label="Submit"
                width="100%"
                handleClick={() => {
                    setListedSuccess(true);
                    setStep(1);
                }}
            />
        </div>
    </div>
    )
};
export default Vehicleselection;