import "./index.css";
import React from "react";
import ExampleComponent from "../../components/SCONPMJSComponents/ExampleComponent";
import ExampleButton from "../../components/SCONPMJSComponents/ExampleButton";
import LandingPageButton from "../../components/LandingPageButton";

const LibraryComponent = (props) => {
  return (
    <div>
      <LandingPageButton />
      <ExampleComponent text={"Merhaba"} />
      <ExampleButton text="click" onClick={() => alert("alert")} />
    </div>
  );
};

export default LibraryComponent;
