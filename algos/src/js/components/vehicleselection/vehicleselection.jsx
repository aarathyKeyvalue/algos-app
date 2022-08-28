import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import { getTypes, createRide, enterRiderDetails } from "./saga";
import "./styles.css";
const Vehicleselection=(props)=>{
    const { vehicleType, setVehicleType, setListedSuccess, setStep, details, setDetails } = props;
    // const vehicleTypes = ['Truck', 'Hyva', 'LCV', 'Container', 'Trailer'];
    const [vehicleTypes, setTypes] = useState([]);

    useEffect(() => {
        getTypes().then((e) => {
            setTypes(e?.data);
        })
    }, []);
    
    const onSubmit = () => {
        const {
            startPoint,
            destinationPoint,
            tripStartDate,
            weight,
            userId = "c810b47e-ab0a-4670-b204-fad15295d83a",
            driverAvailableStartTime,
            driverAvailableEndTime,
            type,
            registrationNumber,
            avatar
        } = details;
        enterRiderDetails({
            type: vehicleType,
            registrationNumber,
            avatar,
            userId
        }).then((e) => {
            createRide({
                startPoint,
                destinationPoint,
                tripStartDate,
                weight,
                userId,
                vehicleId: e?.data?.id,
                driverAvailableStartTime,
                driverAvailableEndTime
            }).then(() =>{
                setListedSuccess(true);
                setStep(1);
            })
        })
    }
    return(
    <div className="vehicleSelectionWrapper">
        <div className="headerVehicleInfo">Vehicle Type</div>
            <div className="row">
                {vehicleTypes?.map((type) => type && (
                <div
                  className={`backgroundclass ${vehicleType === String(type)?.toLowerCase() && 'selectedVehicleType'}`}
                  onClick={() => {
                      setVehicleType(String(type)?.toLowerCase());
                      setDetails({ ...details, type: String(type)?.toLowerCase() });
                    }}>
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
                handleClick={onSubmit}
            />
        </div>
    </div>
    )
};
export default Vehicleselection;
