import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from "@hassanmojab/react-modern-calendar-datepicker";
import Button from "../../components/button/Button";
import Input from "../../components/input-field/input";
import ToggleButton from "../../components/toggle-button/toggleButton";

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
                onChange={(startPoint) => setDetails({ ...details, startPoint })}
              />
              <Input
                placeholder="Destination"
                type="location"
                isRightLogo={true}
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
                onChange={(tripStartDate) => setDetails({ ...details, tripStartDate})}
              />
            </div>
            <div class="inputContainer">
              <div class="title">Shipment weight</div>
              <Input
                placeholder="Enter your package weight"
                type="weight"
                onChange={(shipmentWeight) => setDetails({ ...details, shipmentWeight})}
              />
            </div>
          </div>
          <Button
            label="Next"
            type="fill"
            width="100%"
            handleClick={() => setStep(2)}
          />
        </div>
      )
        : (
          <div className="calenderAndButtonWrapper">
            <div classname="calenderWrapper">
              <Calendar
                value={selectedDay}
                onChange={onSelectDay}
                minimumDate={utils().getToday()}
              />
            </div>
            <div className="calenderButtonWrapper">
            <Button
                label="Cancel"
                type="outline-secondary"
                width="158px"
                handleClick={() => setIsCalenderOpen(false)}
              />
              <Button
                label="Confirm"
                type="fill" 
                width="158px"
                handleClick={onConfirmCalenderSelection}
              />
    
            </div>
          </div>
        )}
    </div>
  );
};

export default HomePage;