import React , { useState } from "react";
import HomePage from "../home-page";
import ListingPage from "../listing-page";
import DriverInfo from "../driver-info";

const HomePageWrapper = (props) => {
  const [step, setStep] = useState(1);
  const [listedSuccess, setListedSuccess] = useState(false);
  const [details, setDetails] = useState({
    tripStartDate: new Date().toISOString()
  });

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
    <>
    {(step === 1 && (
      <HomePage
        setStep={setStep}
        details={details}
        setDetails={setDetails}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        toggleOptions={toggleOptions}
        listedSuccess={listedSuccess}
        setListedSuccess={setListedSuccess}
      />
    )) || ((selectedOption === 'find' && (
      <ListingPage
        setStep={setStep}
        details={details}
      />
    )) || (
      <DriverInfo
        details={details}
        setStep={setStep}
        setDetails={setDetails}
        setListedSuccess={setListedSuccess}
      />
    ))}
    </>
  )
}

export default HomePageWrapper;