import styled from "styled-components";

export const ThemeToggleWrapper = styled.div`
  position: relative;
  margin-left: 10.5vw;
  top: 3px;
  cursor: pointer;
  float: right;
  font-size: 25px;
  @keyframes animateIn {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-75deg);
    }
  }

  @keyframes animateBack {
    from {
      transform: rotate(75deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  .animate {
    animation-name: animateIn;
    animation-duration: 0.2s;
    animation-timing-function: ease-out;
  }
  .animateback {
    animation-name: animateBack;
    animation-duration: 0.2s;
    animation-timing-function: ease-in;
  }
  img {
    width: 38%;
  }
`;
