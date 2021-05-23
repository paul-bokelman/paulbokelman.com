import styled from "styled-components";

export const NavWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 2rem 1rem;
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
  text-align: center;
  a {
    float: left;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
  }
`;
