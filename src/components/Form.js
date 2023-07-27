// creating the component that will store all info, container of all the steps

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

function Form() {
  // determing which step we are in by useState
  // creating state by name page(=step), setPage - to mutate this variable
  // 0 is starting from the 1st step
  const [page, setPage] = useState(0);
  // keep track of the titles of the steps by having an array
  const FormTitles = [
    "Personal Info",
    "Select Your Plan",
    "Pick Add-ons",
    "Finishing Up",
  ];
  // display title depending on which page we are in, I put it inside  Header
  const PageDisplay = () => {
    // it will track what page we're in and return a comp based on that
    if (page === 0) {
      return <StepOne />;
    } else if (page === 1) {
      return <StepTwo />;
    } else if (page === 2) {
      return <StepThree />;
    } else {
      return <StepFour />;
    }
  };
  return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form-container"></div>
      <div className="header">
        <h1>{FormTitles[page]}</h1>
      </div>
      <div className="body">{PageDisplay()}</div>
      <div className="footer">
        {/* for the Prev button it's same as Next button, but
instead of + I put - and disabled when it's on 0(starting page) */}
        <button
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Go Back
        </button>
        {/* change the p.state to be equal 
        to what was before plus one, moving forward to the right */}
        <button
          disabled={page == FormTitles.length - 1}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Form;

// PageDisplay is a functioning returning the correct step which I ut in the body
