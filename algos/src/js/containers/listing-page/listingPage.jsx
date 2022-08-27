import React, { useState, useEffect } from "react";
import DetailsCard from "../../components/details-card";
import list from './list.js';
import './styles.css';
const ListingPage = (props) => {
  
  const vehicleTypes = ['Truck', 'Hyva', 'LCV', 'Container', 'Trailer'];
  const [selectedType, setSelectedType] = useState('all');
  const [displayList, setDisplayList] = useState(list);
  
  useEffect(() => {
    if (selectedType === 'all') setDisplayList(list);
    else {
      const listItems = [...list].filter((e) => e.type === selectedType);
      setDisplayList(listItems);
    }
  }, [selectedType]);
  return (
    <div>
      <div className="partnerHeader">
        <span className="headerText">Available Partners</span>
        <span className="partnerCount">{displayList?.length || 0}</span>
      </div>
      <div className="buttonGroup">
        <div
          className={`eachButton ${(selectedType === 'all' && 'buttonSelected') || 'buttonUnselected'}`}>
          All
        </div>
        {vehicleTypes?.map((vehicle) => (
          <div
            className={`eachButton ${(selectedType === vehicle && 'buttonSelected') || 'buttonUnselected'}`}>
            {vehicle}
          </div>
        ))}
      </div>
      <div className="listSection">
        {displayList?.map((item) => (
          <DetailsCard
           {...item}
          />
        ))}
      </div>
    </div>
  )
};

export default ListingPage;