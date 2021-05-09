import styled from "styled-components";

export const CodeWrapper = styled.div`
  .gatsby-highlight {
    /* overflow: hidden; */
    position: relative;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
  }
  .gatsby-highlight pre[class*="language-"] {
    -webkit-overflow-scrolling: touch;
    padding: 1rem 0.75rem;
    border-radius: 0.6rem;
  }
  .gatsby-highlight pre[class*="language-"]::before {
    background: black;
    border-radius: 0 0 0.25rem 0.25rem;
    color: white;
    font-size: 12px;
    letter-spacing: 0.025rem;
    padding: 0.1rem 0.5rem;
    position: absolute;
    right: 1rem;
    text-align: right;
    text-transform: uppercase;
    top: 0;
  }
  .gatsby-highlight pre[class~="language-javascript"]::before {
    content: "js";
    background: #f7df1e;
    color: black;
  }
  .gatsby-highlight pre[class~="language-js"]::before {
    content: "js";
    background: #f7df1e;
    color: black;
  }

  .gatsby-highlight pre[class~="language-jsx"]::before {
    content: "jsx";
    background: #5ed3f3;
    color: rgb(0, 0, 0);
  }

  .gatsby-highlight pre[class~="language-html"]::before {
    content: "html";
    background: #005a9c;
    color: white;
  }

  .gatsby-highlight pre[class~="language-css"]::before {
    content: "css";
    background: #ff9800;
    color: white;
  }

  .gatsby-highlight pre[class~="language-bash"]::before {
    content: "bash";
    background: #000000;
    color: white;
  }

  .gatsby-highlight pre[class~="language-cmd"]::before {
    content: "cmd";
    background: #000000;
    color: white;
  }

  .gatsby-highlight pre[class~="language-python"]::before {
    content: "py";
    background: #3453b9;
    color: white;
  }

  .gatsby-highlight pre[class~="language-json"]::before {
    content: "json";
    background: #d4d4d4;
    color: rgb(0, 0, 0);
  }

  .gatsby-highlight pre[class~="language-sol"]::before {
    content: "sol";
    background: #627eea;
    color: rgb(255, 255, 255);
  }

  .highlight-line {
    background-color: ${(props) => props.theme.colors.accentBG};
    display: block;
    margin-right: -0.85em;
    margin-left: -0.85em;
    padding: 0.15rem 1em 0.15rem 0.35em; /* 0.75 */
    border-left: 0.5em solid ${(props) => props.theme.colors.accent};
  }

  .highlight-line .line-number {
    opacity: 0.5;
  }

  .line-number {
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
  }
  .fileName {
    margin-top: 4.3rem;
  }

  pre::-webkit-scrollbar {
    height: 0.7em;
  }
  pre::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: ${(props) => props.theme.colors.accent};
  }

  span::selection {
    /* color: ${(props) => props.theme.colors.accent}; */
    background: ${(props) => props.theme.colors.accentBG};
  }
`;

export const UpperCode = styled.div`
  position: absolute;
  top: -38px;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.secondary};
  background-color: ${(props) => props.bg}e6;
  color: ${(props) => (props.current === "light" ? "black" : "white")};
  padding: 0.5rem 0.9rem 1.6rem 0.9rem;
  font-size: 0.9rem;
  border-radius: 0.6rem;
  z-index: 0;

  div:first-child {
    float: left;
  }

  div:last-child {
    float: right;
    span {
      cursor: pointer;
      padding: 2px 8px;
      border-radius: 5px;
      font-size: 0.8rem;
      transition: 0.2s ease-in-out;
    }
    .copy {
      color: ${(props) => props.theme.colors.accent};
      background-color: ${(props) => props.theme.colors.accentBG};
      &:hover {
        filter: brightness(130%);
      }
    }
    .copied {
      color: #7dff7d;
      background-color: #7dff7d17;
    }
  }
`;
