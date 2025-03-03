import "./index.css";
import React from "react";
import ExampleComponent from "../../components/SCONPMJSComponents/ExampleComponent";
import ExampleButton from "../../components/SCONPMJSComponents/ExampleButton";
import LandingPageButton from "../../components/LandingPageButton";

const LibraryComponent = (props) => {
  return (
    <>
      <LandingPageButton />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          fontSize: "2rem",
        }}
      >
        <ExampleComponent text={"Merhaba"} />
        <ExampleButton text="Click" onClick={() => alert("alert")} />
      </div>
    </>
  );
};

export default LibraryComponent;
