import styled from "styled-components";

export const FolderWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  z-index: 100;
  code {
    font-size: 1.2rem !important;
    color: ${(props) => props.theme.colors.folder.color} !important;
    background-color: ${(props) =>
      props.theme.colors.folder.background} !important;
    border-radius: 5px !important;
    padding: 2px 8px !important;
    white-space: nowrap !important;
    svg {
      width: 15px;
      height: 15px;
      position: relative;
      top: 2px;
      margin-right: 6px;
      fill: ${(props) => props.theme.colors.folder.color};
    }
  }
  div {
    max-height: 0;
    transition: max-height 0.15s ease-out;
    /* width: 200%; */
    overflow: hidden;
    position: absolute;
    top: 2.3rem;
    background: ${(props) => props.theme.colors.folder.background};
    padding: 0px 0px !important;
    border-radius: 5px;
    box-shadow: 0 8px 32px 0 ${(props) => props.theme.colors.folder.background};
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
      color: ${(props) => props.theme.colors.folder.color};
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
