import styled from "styled-components";

export const Progress = styled.div`
  height: ${(props) => props.height};
  transition: 0.5s ease;
  position: fixed;
  width: 5px;
  left: 30px;
  top: 38%;
  background-color: ${(props) => props.theme.colors.primary};
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;

export const ProgressBackground = styled.div`
  position: fixed;
  width: 5px;
  height: 20%;
  left: 30px;
  top: 38%;
  background-color: ${(props) => props.theme.colors.secondary};
  z-index: -5;
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;

export const ProgressText = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1rem;
  font-weight: 400;
  position: fixed;
  left: 45px;
  top: 47%;
  color: ${(props) => props.theme.colors.primary};
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;
