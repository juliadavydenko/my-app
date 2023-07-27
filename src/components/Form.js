// creating the component that will store all info, container of all the steps

import React from "react";

function Form() {
  return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form-container"></div>
      <div className="header"></div>
      <div className="body"></div>
      <div className="footer">
        <button>Go Back</button>
        <button>Next Step</button>
      </div>
    </div>
  );
}

export default Form;
