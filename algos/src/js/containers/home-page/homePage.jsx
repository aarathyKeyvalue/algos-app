import React, { useState } from "react";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import Button from "../../components/button/Button";
import Input from "../../components/input-field/input";
import ToggleButton from "../../components/toggle-button/toggleButton";

import './styles.css';

const HomePage = () => {
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
  const [selectedOption, setSelectedOption] = useState(toggleOptions[0]?.id)
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);

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
              <div class="iconContainer">
                <div class="pickUpIcon" />
              </div>
              <div class="dotted-line" />
              <div class="iconContainer">
                <div class="locationPinIcon" />
              </div>
            </div>
            <div class="locationInputsWrapper">
              <Input
                placeholder="Pick up Location"
                type="location"
                isRightLogo={true}
              />
              <Input
                placeholder="Destination"
                type="location"
                isRightLogo={true}
              />
            </div>
          </div>
          <div className="otherInputs">
            <div class="inputContainer">
              <div class="title">Select Date</div>
              <Input
                onFocus={() => setIsCalenderOpen(true)}
                type="date"
              // onChange={onValueChange}
              />
            </div>
            <div class="inputContainer">
              <div class="title">Shipment weight</div>
              <Input
                placeholder="Enter your package weight"
                type="weight"
              // onChange={onValueChange}
              />
            </div>
          </div>
          <Button
            label="Next"
            type="fill"
            width="100%"
          // handleClick={() => navigate('/home')}
          />
        </div>
      )
        : (
          <div className="calenderAndButtonWrapper">
            <div classname="calenderWrapper">
              <Calendar
              // onDayPress={day => {console.log('selected day', day);}}
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
                handleClick={() => {}}
              />
    
            </div>
          </div>
        )}
    </div>
  );
};

export default HomePage;