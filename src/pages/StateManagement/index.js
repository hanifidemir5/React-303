import React from "react";
import { LangContextProvider } from "../../contexts/LangContext";
import { ThemeContextProvider } from "../../contexts/ThemeContext";
import Container from "../../Container";
import LandingPageButton from "../../components/LandingPageButton";

const StateManagement = (props) => {
  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <LandingPageButton />
        <Container />
      </ThemeContextProvider>
    </LangContextProvider>
  );
};

export default StateManagement;
