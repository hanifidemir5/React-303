import "./index.css";
import { Link } from "react-router";
import React from "react";
import ExampleComponent from "../../components/SCONPMJSComponents/ExampleComponent";
import ExampleButton from "../../components/SCONPMJSComponents/ExampleButton";

const LibraryComponent = (props) => {
  return (
    <div>
      <Link to={"/"} className="main-page-button navigation-link">
        Main Page
      </Link>
      <ExampleComponent text={"Merhaba"} />
      <ExampleButton text="click" />
    </div>
  );
};

export default LibraryComponent;
