import React, { useState, useRef, useEffect } from "react";
import {
  Autocomplete
} from '@react-google-maps/api'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import Button from "../../components/button/Button";
import Input from "../../components/input-field/input";
import ToggleButton from "../../components/toggle-button/toggleButton";
import DialogBox from "../../components/dialog-box";
import CalenderSection from '../../components/calender-section';
import CargoTimerWrapper from '../cargo-timer-wrapper'
import GoogleMaps from '../../components/google-maps';

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
  const [isTimerOpen, setTimerOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 10.0114, lng: 76.3666 });
  const [directionsResponse, setDirectionsResponse] = useState(null)

  const originRef = useRef({ value : details?.startPoint})
  const destiantionRef = useRef({value : details?.destinationPoint})

  const calculateRoute = async () => {
    setDetails({ ...details, startPoint: originRef.current?.value, destinationPoint: destiantionRef.current?.value});
    if (originRef.current?.value === '' || destiantionRef.current?.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results)
  }

  useEffect(() => {
    if (!isCalenderOpen) {
      originRef.current.value = details?.startPoint || '';
      destiantionRef.current.value = details?.destinationPoint || '';
    }
  }, [isCalenderOpen]);

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
    if (isoDateString) {
      const date = new Date(isoDateString);
      const monthString = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date || new Date())?.substring(0, 3);
      let newDateString = `${date.getDate()}/${monthString}/${date.getFullYear()} `;
      return newDateString;
    }
    return '';
  };
  return (
    <div class="homepageWrapper">
      <div class="mapContainer">
        <GoogleMaps 
        directionsResponse={directionsResponse}
        />
      </div>
      {!isCalenderOpen && !listedSuccess && !isTimerOpen ? (
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
              <Autocomplete>
              <Input
                placeholder="Pick up Location"
                type="location"
                isRightLogo={true}
                // val={originRef?.current?.value}
                onChange={(startPoint) => setDetails({ ...details, startPoint })}
                valueRef={originRef}
                onBlur={calculateRoute}
              />
              </Autocomplete>
              <Autocomplete>
              <Input
                placeholder="Destination"
                type="location"
                isRightLogo={true}
                // val={destiantionRef?.current?.value}
                onChange={(destinationPoint) => setDetails({ ...details, destinationPoint })}
                valueRef={destiantionRef}
                onBlur={calculateRoute}
              />
              </Autocomplete>
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
              <div class="inputContainer" onClick={() => setTimerOpen(true)}>
                <div class="title">Select Start Time & Waiting Period</div>
                <div className="timeWaiting">
                  <div className="timeSelector">
                    <div className="clockGray" />
                    <div className="clockTime">{details?.time || '--:--'}</div>
                  </div>
                  <div className="dividerLine"/>
                  <div className="timeSelector">
                    <div className="sandClockGray" />
                    <div className="clockTime">
                      {details?.waitTime ? details?.waitTime + ' ' : '--'}Mins
                    </div>
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
                // setDetails({});
                setListedSuccess(false);
              }}
            />
            <DialogBox
              success={isTimerOpen}
              Component={CargoTimerWrapper}
              componentProps={{
                setSuccess: setTimerOpen,
                details,
                setDetails,
                selectedDate: new Date(details?.tripStartDate)
              }}
              height="502px"
              setSuccess={setTimerOpen}
            />
          </>
        )}
        
    </div>
  );
};

export default HomePage;