import styled from "styled-components";
import React from "react";
import { Link } from "gatsby";

export const TopicCycleWrapper = styled.div`
  height: 80vh;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  /* 
  flex-direction: column; */
  /* align-items: left; */
  justify-content: center;

  /* display: inline-block;
  margin-top: 13%; */

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const InnerWrapper = styled.div`
  display: inline-block;
`;

export const Primary = styled((props) => <Link {...props} />)`
  font-weight: ${(props) => props.theme.weight.regular};
  font-size: 5rem;
  color: ${(props) => props.theme.colors.primary};
  transition: 0.3s ease;
  text-decoration: none;
  &:hover,
  &:focus {
    /* color: ${(props) => props.theme.colors.secondary}; */
    filter: brightness(80%);
  }
  p {
    font-size: 1.2rem;
    margin-top: -1.5%;
    margin-bottom: -5.9rem;
  }
`;

export const Secondary = styled.span`
  font-size: 3.7rem;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
`;

export const Desc = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.2rem;
`;
