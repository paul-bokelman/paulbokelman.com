import styled from "styled-components";

export const ContentsWrapper = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.weight.bold};
  position: fixed;
  overflow-wrap: break-word;
  max-width: 12rem;
  left: 3rem;
  top: 38%;
  /* background-color: #000; */
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.9rem;
  text-transform: uppercase;
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
  ul {
    list-style-type: none;
  }
  li {
    transition: 0.2s ease-in-out;
  }
  li:not(:first-child) {
    margin-top: 0.5rem;
  }
  li:hover {
    filter: brightness(110%);
  }
  .current {
    color: ${(props) => props.theme.colors.primary};
  }
`;
