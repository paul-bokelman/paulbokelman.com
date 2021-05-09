import styled from "styled-components";

const handleColors = (theme, type) => {
  switch (theme) {
    case "light":
      switch (type) {
        case "warn":
          return "background-color: #fffbe5; color: #664711; border: #664711 1.5px solid;";
        case "err":
          return "color: #FF0000; background: #FFEFF0; border: #FF0000 1.5px solid;";
        default:
          return `background-color: transparent; border: #25265eb3 1.5px solid;`;
      }

    default:
      switch (type) {
        case "warn":
          return "background-color: #312900; color: #fada9b; border: #fada9b 1.5px solid;";
        case "err":
          return "color: #FE8082; background: #2A0001; border: #FE8082 1.5px solid;";
        default:
          return `background-color: transparent; border: #ffffffb3 1.5px solid;`;
      }
  }
};

export const ConsoleWrapper = styled.div`
  font-size: 0.7rem;
  width: 100%;
  ${({ theme, type }) => handleColors(theme, type)};
  padding: 1px 8px 1px 8px;
  margin: 0.4rem 0 0.4rem 0;
  font-family: monospace;
  display: inline-block;
  svg {
    position: relative;
    font-size: 0.8rem;
    margin-right: 0.3rem;
    top: 2.3px;
  }
  span#content {
    float: left;
  }
  span#file {
    float: right;
    text-decoration: underline;
  }
`;
