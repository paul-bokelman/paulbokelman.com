import styled from "styled-components";

export const NavWrapper = styled.div`
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
  text-align: center;
  a {
    float: left;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
  }
  p {
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
  }
  /* grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  img {
    height: 30px;
  }
*/
  @media ${(props) => props.theme.breakpoints.tablet} {
    p {
      display: none;
    }
  }
`;
