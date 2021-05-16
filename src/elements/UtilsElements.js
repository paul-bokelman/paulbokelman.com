import styled from "styled-components";

/* -------------------------------------------------------------------------- */
/*                 CONTENT SWITCHER WRAPPER & DISPLAY WRAPPER                 */
/* -------------------------------------------------------------------------- */

export const CSWrapper = styled.div`
  div {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    h2 {
      text-align: left;
    }
    span {
      float: right;
      cursor: pointer;
      padding: 2px 8px;
      font-size: 0.8rem;
      border-radius: 4px;
      font-weight: 500;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.utils.tags.colors[props.content]};
      background-color: ${(props) =>
        props.theme.colors.utils.tags.background[props.content]};
    }
  }
  a {
    color: ${(props) => props.theme.colors.utils.display.link[props.link]};
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: none;
    p {
      margin-top: 0.4rem;
      margin-bottom: 0.4rem;
    }
  }
  ul {
    margin-top: -0.3rem;
    margin-bottom: -0.3rem;
  }
`;

export const DisplayWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-top: 2rem;
  margin-bottom: -1.4rem;
  border-radius: 0.6rem;
  background-color: ${(props) =>
    props.theme.colors.utils.display.background[props.i]};
  svg {
    font-size: 5.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.utils.display.colors[props.i]};
  }
`;

/* -------------------------------------------------------------------------- */
/*                                    TAGS                                    */
/* -------------------------------------------------------------------------- */

export const Tag = styled.span`
  position: relative;
  font-size: 0.7rem !important;
  font-weight: 500;
  margin-left: 0.4rem;
  border-radius: 15px;
  padding: 2px 8px;
  cursor: pointer;
  text-transform: uppercase;
  top: -1px;
  ${(props) => {
    console.log(props.tag);
  }}
  color: ${(props) =>
    props.theme.colors.utils.tags.colors[props.tag]} !important;
  background-color: ${(props) =>
    props.theme.colors.utils.tags.background[props.tag]} !important;
  svg {
    position: relative;
    top: 2px;
    right: 2px;
    margin-right: 0.1rem;
  }
`;

export const ExtraTags = styled.span`
  position: relative;
  font-size: 0.7rem !important;
  margin-left: 0.4rem;
  border-radius: 15px;
  padding: 2px 8px;
  cursor: pointer;
  top: -1px;
  color: #ff7373 !important;
  background: #ff737317;
  svg:first-child {
    position: relative;
    top: 1px;
  }
`;

/* -------------------------------------------------------------------------- */
/*                               FOLDER WRAPPER                               */
/* -------------------------------------------------------------------------- */

export const FolderWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  z-index: 100;
  code {
    font-size: 1.125rem !important;
    color: ${(props) => props.theme.colors.utils.folder.color} !important;
    background-color: ${(props) =>
      props.theme.colors.utils.folder.background} !important;
    border-radius: 5px !important;
    padding: 2px 8px !important;
    white-space: nowrap !important;
    svg {
      width: 15px;
      height: 15px;
      position: relative;
      top: 2px;
      margin-right: 6px;
      fill: ${(props) => props.theme.colors.utils.folder.color};
    }
  }
  div {
    max-height: 0;
    transition: max-height 0.15s ease-out;
    /* width: 200%; */
    overflow: hidden;
    position: absolute;
    top: 2.3rem;
    background: ${(props) => props.theme.colors.utils.folder.background};
    padding: 0px 0px !important;
    border-radius: 5px;
    box-shadow: 0 8px 32px 0
      ${(props) => props.theme.colors.utils.folder.background};
    backdrop-filter: blur(3px);
    /* border: 1px solid rgba(255, 255, 255, 0.18); */

    @media ${(props) => props.theme.breakpoints.tablet} {
      display: none;
    }

    a {
      white-space: nowrap;
      margin: 0.5rem;
      font-family: monospace;
      font-size: 1.1rem;
      color: ${(props) => props.theme.colors.utils.folder.color};
      text-decoration: none;
      svg {
        position: relative;
        width: 13px;
        height: 13px;
        top: 1px;
        margin-right: 6px;
      }
      .external {
        position: relative;
        top: 3px;
        left: 7px;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

/* -------------------------------------------------------------------------- */
/*                               CONSOLE WRAPPER                              */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                PEEK WRAPPER                                */
/* -------------------------------------------------------------------------- */

export const PeekWrapper = styled.code`
  cursor: pointer;
  svg {
    position: relative;
    top: 2px;
  }
`;
