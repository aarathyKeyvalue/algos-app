import React from 'react';
import './styles.css';

const LocationDetails = (props) => {
  const {
    startPoint,
    destinationPoint,
    tripStartDate,
    shipmentWeight,
    onClickDiv
  }= props;
  return (
    <div className='locationDetailsContainer' onClick={onClickDiv}>
      <div className='fromToLocation'>
        <div className='locationVal'>{startPoint}</div>
        <div className='toArrow' />
        <div className='locationVal'>{destinationPoint}</div>
      </div>
      <div className='dateAndWeight'>
        <div className='calenderDiv' />
        <div className='dateOfDelivery locationVal'>{tripStartDate}</div>
        <div className='boxWeight'/>
        <div className='dateOfDelivery locationVal'>{shipmentWeight}</div>
      </div>
    </div>
  )
};

export default LocationDetails;