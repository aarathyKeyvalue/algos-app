import React, { useState } from "react";
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
  return (
    <div class="homepageWrapper">
      <div class="mapContainer" />
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
              // placeholder="Enter your name"
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
    </div>
  );
};

export default HomePage;