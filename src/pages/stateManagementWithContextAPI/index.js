import React from "react";
import { LangContextProvider } from "../../contexts/LangContext";
import { ThemeContextProvider } from "../../contexts/ThemeContext";
import Container from "../../Container";

const StateManagementWithContextAPI = (props) => {
  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </LangContextProvider>
  );
};

export default StateManagementWithContextAPI;
