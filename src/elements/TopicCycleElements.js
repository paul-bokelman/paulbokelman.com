import styled from "styled-components";
import React from "react";
import { Link } from "gatsby";

export const TopicCycleWrapper = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr minmax(2rem 1fr);
  grid-template-rows: 1fr auto 1fr;
  column-gap: 2.5rem;
  row-gap: 5rem;
  div:not(:nth-child(1)) {
    color: #26292e;
  }
`;

export const Date = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-column: 1 / 2;
  grid-row: 2;
  color: ${(props) => props.theme.colors.accent};
  text-transform: uppercase;
  span {
    font-weight: ${(props) => props.theme.weight.semiBold};
  }
  span:first-child {
    font-size: 70px;
  }
  span:last-child {
    font-size: 25px;
    padding: 4px 16px;
    border: 4px ${(props) => props.theme.colors.accent} solid;
    border-radius: 16px;
  }
`;

export const PostBrief = styled.div`
  grid-row: 2;
  overflow: scroll;
  div:not(:first-child) {
    margin-top: 5rem;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-column: 2 / 2;
  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / 3;
  }
  color: ${(props) => props.theme.colors.accent};
  font-weight: ${(props) => props.theme.weight.bold};
  span:first-child {
    margin-top: 1rem;
    font-size: 15px;
    text-transform: uppercase;
  }
  span:last-child {
    font-size: 2rem;
  }
`;

export const PostInfo = styled.div`
  grid-column: 3 / 3;
  grid-row: 2;
  img {
    width: 100%;
  }
  color: red;
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
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
