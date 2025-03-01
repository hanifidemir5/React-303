import React from "react";
import LandingPageButton from "../../components/LandingPageButton";
import TestCounter from "../../components/UnitTestingComponents/TestCounter";
import "./index.css";
import TestTodo from "../../components/TestToDoComponents";

const UnitTesting = (props) => {
  return (
    <div className="test-main">
      <LandingPageButton />
      <TestCounter />
      <TestTodo />
    </div>
  );
};

export default UnitTesting;
