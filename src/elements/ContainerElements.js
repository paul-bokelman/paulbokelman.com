import styled from "styled-components";

export const ContainerWrapper = styled.div`
  //# what the fuck #//
  background-color: ${(props) => props.theme.colors.background};
  transition: 0.2s ease-in-out;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  height: 100%;
  padding: 3.5% 6.5%;
`;
