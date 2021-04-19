import styled from "styled-components";

export const MetaInfoWrapper = styled.div`
  span {
    color: ${(props) => props.theme.colors.primary};
    font-size: 19px;
  }
  div:last-child {
    float: right;
    /* margin-top: 2px; */
  }
`;

export const ReaderSwitcher = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};

  span {
    border-radius: 5px;
    padding: 2px 8px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.codeBG};
    color: ${(props) => props.theme.colors.code};
    svg {
      position: relative;
      top: 2px;
    }
  }
  .current {
    font-family: ${(props) => props.theme.fonts.secondary};
    background-color: ${(props) => props.theme.colors.codeBG};
    color: ${(props) => props.theme.colors.code};
    border-radius: 5px !important;
    padding: 0.3rem 1rem !important; //# what the shit
  }
  /* span:first-child,
  span:last-child {
    &:hover {
      background-color: ${(props) => props.theme.colors.codeBG};
      color: ${(props) => props.theme.colors.code};
    }
  } */
`;
