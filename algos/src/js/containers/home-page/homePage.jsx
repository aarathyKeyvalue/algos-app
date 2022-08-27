import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import Button from "../../components/button/Button";
import Input from "../../components/input-field/input";
import ToggleButton from "../../components/toggle-button/toggleButton";
import Input from "../../components/input-field/input";
import Button from "../../components/button/Button";

import './styles.css';

const HomePage = (props) => {
  const { setStep, setDetails, details } = props;
  const toggleOptions = [
    {
      id: 'find',
      name: 'Find Cargo Space',
    },
    {
      id: 'offer',
      name: 'Offer Cargo Space',
    }
  ];
  const today = utils().getToday();
  const [selectedOption, setSelectedOption] = useState(toggleOptions[0]?.id)
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(today);

  const onSelectDay = (newDay) => {
    setSelectedDay(newDay);
  };

  const onConfirmCalenderSelection = () => {
    setDetails({ ...details, tripStartDate: new Date(selectedDay.year, selectedDay.month - 1, selectedDay.day).toISOString() });
    setIsCalenderOpen(false);
  };

  const checkNext = () => {
    const detailVal = { ...details };
    let error = false;
    Object.keys(detailVal)?.map((key) => {
      if (detailVal[key] === '') error = true;
    })
    if (!error) setStep(2);
  }
  return (
    <div class="homepageWrapper">
      <div class="mapContainer" />
      {!isCalenderOpen ? (
        <div class="homeFormContainer">
          <div class="toggleButtonWrapper">
            <ToggleButton
              list={toggleOptions}
              selected={selectedOption}
              setSelected={setSelectedOption}
            />
          </div>
          <div class="locationsInputsContainer">
            <div class="iconsContainer">
              <div class="iconContainerVal">
                <div class="pickUpIcon" />
              </div>
              <div class="dotted-line" />
              <div class="iconContainerVal">
                <div class="locationPinIcon" />
              </div>
            </div>
            <div class="locationInputsWrapper">
              <Input
                placeholder="Pick up Location"
                type="location"
                isRightLogo={true}
                val={details?.startPoint}
                onChange={(startPoint) => setDetails({ ...details, startPoint })}
              />
              <Input
                placeholder="Destination"
                type="location"
                isRightLogo={true}
                val={details?.destinationPoint}
                onChange={(destinationPoint) => setDetails({ ...details, destinationPoint })}
              />
            </div>
          </div>
          <div className="otherInputs">
            <div class="inputContainer">
              <div class="title">Select Date</div>
              <Input
                onFocus={() => setIsCalenderOpen(true)}
                type="date"
                val={details?.tripStartDate}
                // onChange={(tripStartDate) => setDetails({ ...details, tripStartDate})}
              />
            </div>
            {(selectedOption === 'find' && (
            <div class="inputContainer">
              <div class="title">Shipment weight</div>
              <Input
                placeholder="Enter your package weight"
                type="weight"
                val={details?.shipmentWeight}
                onChange={(shipmentWeight) => setDetails({ ...details, shipmentWeight})}
              />
            </div>
            )) || (
              <div class="inputContainer">
                <div class="title">Select Start Time & Waiting Period</div>
                <div className="timeWaiting">
                  <div className="timeSelector">
                    <div className="clockGray" />
                    <div className="clockTime">05:00 AM</div>
                  </div>
                  <div className="dividerLine"/>
                  <div className="timeSelector">
                    <div className="sandClockGray" />
                    <div className="clockTime">30 Mins</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Button
            label="Next"
            type="fill"
            width="100%"
            handleClick={checkNext}
          />
        </div>
      )
        : (
          <DialogBox
              success={isCalenderOpen}
              Component={CalenderSection}
              componentProps={{
                setIsCalenderOpen,
                value: selectedDay,
                onChange: onSelectDay,
                minimumDate: utils().getToday()
              }}
              height="502px"
              setSuccess={setIsCalenderOpen}
            />
        )}
    </div>
  );
};

export default HomePage;