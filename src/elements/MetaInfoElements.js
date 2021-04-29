import styled from "styled-components";

export const MetaInfoWrapper = styled.div`
  span {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1rem;
    text-transform: uppercase;
  }
  div:last-child {
    float: right;
    white-space: nowrap;
    text-align: right;
    width: 16rem;
    height: auto;
    overflow-x: scroll;
  }
  div:last-child::-webkit-scrollbar {
    display: none;
  }
`;

const handleTagType = (theme, tag) => {
  switch (theme) {
    case "light":
      switch (tag) {
        case "react":
          return `color: #28b6da !important; background: #34d0f728;`;
        case "fast":
          return "color: #e3d10b !important; background: #fbe92b28;";
        case "detailed":
          return "color: #43d113 !important; background: #4efe1428;";
        default:
          return "  color: #ff7373 !important; background: #ff737328;";
      }
    case "dark":
      switch (tag) {
        case "react":
          return `color: #61DBFB !important; background: #61DBFB17;`;
        case "fast":
          return "color: #fff373 !important; background: #fff37317;";
        case "detailed":
          return "color: #96ff73 !important; background: #96ff7317;";
        default:
          return "  color: #ff7373 !important; background: #ff737317;";
      }
  }
};

export const Tag = styled.span`
  font-weight: 500;
  position: relative;
  font-size: 0.7rem !important;
  margin-left: 0.4rem;
  border-radius: 15px;
  padding: 2px 8px;
  cursor: pointer;
  text-transform: uppercase;
  top: -1px;
  ${({ tag, theme }) => handleTagType(theme, tag)};
  svg {
    position: relative;
    top: 1px;
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

export const ReaderSwitcher = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};

  span {
    border-radius: 5px;
    padding: 2px 8px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.accentBG};
    color: ${(props) => props.theme.colors.accent};
    svg {
      position: relative;
      top: 2px;
    }
  }
  .current {
    font-family: ${(props) => props.theme.fonts.secondary};
    background-color: ${(props) => props.theme.colors.accentBG};
    color: ${(props) => props.theme.colors.accent};
    border-radius: 5px !important;
    padding: 0.3rem 1rem !important; //# what the shit
  }
  /* span:first-child,
  span:last-child {
    &:hover {
      background-color: ${(props) => props.theme.colors.accentBG};
      color: ${(props) => props.theme.colors.accent};
    }
  } */
`;
