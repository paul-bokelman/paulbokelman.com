import styled from "styled-components";

export const ContentsWrapper = styled.div`
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: ${(props) => props.theme.weight.regular};
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
    font-weight: ${(props) => props.theme.weight.bold};

    color: ${(props) => props.theme.colors.primary};
  }
`;
