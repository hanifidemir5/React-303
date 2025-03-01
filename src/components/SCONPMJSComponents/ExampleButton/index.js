import React from "react";

const ExampleButton = (props) => {
  return <button {...props}>{props.text}</button>;
};

export default ExampleButton;
