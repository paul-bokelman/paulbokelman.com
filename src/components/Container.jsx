import React from 'react';
import { ContainerWrapper } from '../elements';
import { Nav, Footer } from '.';

export const Container = ({ children }) => (
  <ContainerWrapper id="container">
    <Nav />
    {children}
    <Footer />
  </ContainerWrapper>
);
