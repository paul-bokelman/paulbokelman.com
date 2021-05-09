import React from "react";
import { ContainerWrapper } from "../elements";
import { Nav, Footer } from "../components";
export const Container = ({ children }) => {
  return (
    <ContainerWrapper id="container">
      {/* <Nav /> */}
      {children}
      {/* <Footer /> */}
    </ContainerWrapper>
  );
};
