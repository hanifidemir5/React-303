import React from "react";
import { Link } from "react-router";

const LandingPageButton = (props) => {
  return (
    <Link to={"/"} className="main-page-button navigation-link">
      Landing Page
    </Link>
  );
};

export default LandingPageButton;
