import React from 'react';
import './styles.css';

const LocationDetails = (props) => {
  const { from, to, date, weight }= props;
  return (
    <div className='locationDetailsContainer'>
      <div className='fromToLocation'>
        <div className='locationVal'>{from}</div>
        <div className='toArrow' />
        <div className='locationVal'>{to}</div>
      </div>
      <div className='dateAndWeight'>
        <div className='calenderDiv' />
        <div className='dateOfDelivery locationVal'>{date}</div>
        <div className='boxWeight'/>
        <div className='dateOfDelivery locationVal'>{weight}</div>
      </div>
    </div>
  )
};

export default LocationDetails;