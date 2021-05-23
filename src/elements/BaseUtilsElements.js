import styled from "styled-components";

export const FunctionalButtonWrapper = styled.span`
  position: relative;
  z-index: 500;
  bottom: 4px;
  float: right;
  cursor: pointer;
  padding: 2px 8px;
  font-size: 0.8rem;
  border-radius: 4px;
  font-weight: 500;
  text-transform: uppercase;
  svg {
    position: relative;
    top: 2px;
    right: 2px;
    margin-right: 0.1rem;
  }
  ${(props) => {
    switch (props.type) {
      case "theme":
        return `color: ${
          props.theme.colors.utils.display.link[props.variant]
        }; background-color: ${
          props.theme.colors.utils.display.link[props.variant]
        }17;
        }`;
    }
  }}
`;
