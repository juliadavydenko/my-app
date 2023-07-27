// creating the component that will store all info, container of all the steps

import React, { useState } from "react";

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

  return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form-container"></div>
      <div className="header">
        <h1>{FormTitles[page]}</h1>
      </div>
      <div className="body"></div>
      <div className="footer">
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
