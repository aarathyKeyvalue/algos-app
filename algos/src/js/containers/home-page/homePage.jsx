import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import Button from "../../components/button/Button";
import Input from "../../components/input-field/input";
import ToggleButton from "../../components/toggle-button/toggleButton";
import DialogBox from "../../components/dialog-box";
import CalenderSection from '../../components/calender-section';

import './styles.css';
import ListedSuccess from "../../components/listed-success";

const HomePage = (props) => {
  const {
    setStep,
    setDetails,
    details,
    selectedOption,
    setSelectedOption,
    toggleOptions,
    listedSuccess,
    setListedSuccess } = props;
    const today = utils().getToday();
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
  };
  const formatDateString = (isoDateString) => {
    const date = new Date(isoDateString);
    const monthString = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)?.substring(0, 3);
		let newDateString = `${date.getDate()}/${monthString}/${date.getFullYear()} `;
		return newDateString;
  };
  return (
    <div class="homepageWrapper">
      <div class="mapContainer" />
      {!isCalenderOpen && !listedSuccess ? (
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
                val={formatDateString(details?.tripStartDate)}
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
          <>
          <DialogBox
              success={isCalenderOpen}
              Component={CalenderSection}
              componentProps={{
                setIsCalenderOpen,
                value: selectedDay,
                onChange: onSelectDay,
                onConfirmCalenderSelection
              }}
              height="502px"
              setSuccess={setIsCalenderOpen}
            />
          <DialogBox
              success={listedSuccess}
              Component={ListedSuccess}
              componentProps={{
                setSuccess: () => {
                  setDetails({});
                  setListedSuccess(false);
                }
              }}
              height="535px"
              setSuccess={() => {
                setDetails({});
                setListedSuccess(false);
              }}
            />
          </>
        )}
        
    </div>
  );
};

export default HomePage;