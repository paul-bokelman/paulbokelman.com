import React from "react";
import { ContainerWrapper } from "../elements";
import { Nav } from "../components"; // Footer
export const Container = ({ children }) => {
  return (
    <ContainerWrapper id="container">
      <Nav />
      {children}
      {/* <Footer /> */}
    </ContainerWrapper>
  );
};
