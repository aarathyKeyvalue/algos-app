import React , { useState } from "react";
import HomePage from "../home-page";
import ListingPage from "../listing-page";

const HomePageWrapper = (props) => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({
    tripStartDate: new Date().toISOString()
  });

  return (
    <>
    {(step === 1 && (
      <HomePage
        setStep={setStep}
        details={details}
        setDetails={setDetails}
      />
    )) || (
      <ListingPage
        setStep={setStep}
        details={details}
      />
    )}
    </>
  )
}

export default HomePageWrapper;