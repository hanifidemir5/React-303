import React from "react";

const ExampleButton = (props) => {
  return (
    <button {...props} style={{ padding: "1rem", fontSize: "1rem" }}>
      {props.text}
    </button>
  );
};

export default ExampleButton;
