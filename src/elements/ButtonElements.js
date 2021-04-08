import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const ButtonWrapper = styled((props) => <Link {...props} />)`
  padding: 0.5rem 1.5rem;
  background-color: ${(props) => props.theme.colors.cardButton};
  border-radius: 0.6rem;
  color: ${(props) => props.theme.colors.cardButtonText};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 16px; //0.875rem
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
  &:hover,
  &:focus {
    filter: brightness(103%);
  }
`;
