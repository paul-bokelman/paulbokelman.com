import styled from "styled-components";

export const MetaInfoWrapper = styled.div`
  span {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1rem;
    text-transform: uppercase;
  }
  div:last-child {
    float: right;
    text-align: right;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
