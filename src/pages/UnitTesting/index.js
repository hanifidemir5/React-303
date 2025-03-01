import React from "react";
import LandingPageButton from "../../components/LandingPageButton";
import TestCounter from "../../components/UnitTestingComponents/TestCounter";
import "./index.css";

const UnitTesting = (props) => {
  return (
    <div className="test-main">
      <LandingPageButton />
      <TestCounter />
    </div>
  );
};

export default UnitTesting;
