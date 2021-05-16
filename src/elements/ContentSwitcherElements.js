import styled from "styled-components";

export const CSWrapper = styled.div`
  div {
    margin-top: 1.5rem;
    margin-bottom: -1.5rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    span {
      cursor: pointer;
      padding: 2px 8px;
      font-size: 0.8rem;
      border-radius: 4px;
      font-weight: 500;
      text-transform: uppercase;
      ${(props) => {
        switch (props.content) {
          case "fast":
            return "color: #fff373 !important; background: #fff37317;";
          default:
            return "color: #96ff73 !important; background: #96ff7317;";
        }
      }}
    }
  }
`;
