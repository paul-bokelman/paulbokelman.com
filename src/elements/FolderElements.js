import styled from "styled-components";

export const FolderWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  z-index: 100;
  code {
    font-size: 1.2rem !important;
    color: #f5ea56 !important;
    background-color: #f5ea5617 !important;
    border-radius: 5px !important;
    padding: 2px 8px !important;
    white-space: nowrap !important;
    svg {
      width: 15px;
      height: 15px;
      position: relative;
      top: 2px;
      margin-right: 6px;
      fill: #f5ea56;
    }
  }
  div {
    display: inline-block;
    width: 300%;
    position: absolute;
    top: 2.3rem;
    background: #f5ea5617;
    padding: 0px 0px !important;
    border-radius: 5px;
    box-shadow: 0 8px 32px 0 #f5ea5617;
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    ul {
      color: #f5ea56;
      margin: 0.5rem;
      margin-left: 0px;
      li {
        font-family: monospace;
        padding-left: 0px;
        margin: 0rem 1rem;
        font-size: 1.1rem;
        margin-right: 30px;
      }
      li::marker {
        content: "";
      }
      svg {
        position: relative;
        width: 13px;
        height: 13px;
        top: 1px;
        margin-right: 6px;
      }
    }
  }
`;
