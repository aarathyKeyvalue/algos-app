import React, { useState, useEffect } from "react";
import DetailsCard from "../../components/details-card";
import LocationDetails from "../../components/location-details";
import DriverDetails from "../../components/driver-details";
import DialogBox from '../../components/dialog-box';
import list from './list.js';
import './styles.css';
const ListingPage = (props) => {
  const { setStep, details } = props;
  const vehicleTypes = ['Truck', 'Hyva', 'LCV', 'Container', 'Trailer'];
  const [selectedType, setSelectedType] = useState('all');
  const [displayList, setDisplayList] = useState(list);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [personDetails, setPersonDetails] = useState({});
  useEffect(() => {
    if (selectedType === 'all') setDisplayList(list);
    else {
      const listItems = [...list].filter((e) => e.type === selectedType);
      setDisplayList(listItems);
    }
  }, [selectedType]);
  return (
    <div style={{ height: '100%' }}>
      <div className="locationDiv">
        <div
          className="backbuttonDiv"
          onClick={() => setStep(1)}
        />
        <LocationDetails {...details} onClickDiv={() => setStep(1)}/>
      </div>
      <div className="partnerHeader">
        <span className="headerText">Available Partners</span>
        <span className="partnerCount">{displayList?.length || 0}</span>
      </div>
      <div className="buttonGroup">
        <div
          className={`eachButton ${(selectedType === 'all' && 'buttonSelected') || 'buttonUnselected'}`}
          onClick={() => setSelectedType('all')}
        >
          All
        </div>
        {vehicleTypes?.map((vehicle) => (
          <div
            className={`eachButton ${(selectedType === vehicle && 'buttonSelected') || 'buttonUnselected'}`}
            onClick={() => setSelectedType(vehicle)}
        >
            {vehicle}
          </div>
        ))}
      </div>
      <div className="listSection">
        {displayList?.map((item) => (
          <DetailsCard
           {...item}
           onDetailsClick={() => {
             setPersonDetails({...item});
             setDetailsOpen(true);
           }}
          />
        ))}
      </div>
      <div className={`registrationSuccess`}>
        <DialogBox
          success={detailsOpen}
          Component={DriverDetails}
          details={personDetails}
          height="700px"
          setSuccess={setDetailsOpen}
        />
      </div>
    </div>
  )
};

export default ListingPage;