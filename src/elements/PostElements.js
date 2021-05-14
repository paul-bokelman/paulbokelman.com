import styled from "styled-components";

export const PostWrapper = styled.main`
  margin: 6% 23%;
  z-index: 10;

  section {
    margin-top: 2rem;
  }

  p,
  h2,
  h3,
  h4,
  h5,
  h6,
  li {
    color: ${(props) => props.theme.colors.secondary};
  }

  h1:not(:first-child),
  p,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }
  h2 {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.6rem;
    line-height: 1.975rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 400;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
  }

  a {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: underline;
    transition: 0.2s ease-in-out;
    &:hover {
      filter: brightness(120%);
    }
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote {
    font-family: ${(props) => props.theme.fonts.secondary};
    margin: 0;
    padding-left: 1.4rem;
    position: relative;
    text-align: left;
    background-color: ${(props) => props.theme.colors.accentBG};
    border-radius: 0.6rem;
    p {
      color: ${(props) => props.theme.colors.accent};
      font-size: 1rem;
      line-height: 2.125rem;
      max-width: 98%;
      font-weight: 400;
      &:first-child {
        font-weight: bold;
        font-size: 1.3rem;
        padding-top: 0.8rem;
        margin-bottom: -1rem;
      }
      &:last-child {
        padding-bottom: 0.8rem;
      }
    }
    a {
      font-weight: bold;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 6px;
      height: 100%;
      background: ${(props) => props.theme.colors.accent};
    }
  }

  ul,
  ol {
    color: ${(props) => props.theme.colors.primary};
    margin: 1rem 0 1rem 2rem;
  }
  ul li::marker {
    content: "➜";
    padding: 10px;
    background-color: ${(props) => props.theme.colors.accentBG};
    color: ${(props) => props.theme.colors.accent};
  }

  ol li::marker {
    color: ${(props) => props.theme.colors.accent};
  }

  /* li ul li::marker {
    color: ${(props) => props.theme.colors.accent};
  } */
  li {
    padding-inline-start: 1ch;
    margin: 0.25rem 0;
    font-size: 1.125rem;
  }

  code {
    /* font-family: ${(props) => props.theme.fonts.code}; */
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.accent};
    background-color: ${(props) => props.theme.colors.accentBG};
    border-radius: 5px;
    padding: 2px 8px;
    white-space: nowrap; // Wrap
  }

  hr {
    border: 0;
    height: 1px;
    background: ${(props) => props.theme.colors.dark1};
    opacity: 0.1;
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  th {
    font-weight: 700;
  }

  table,
  th,
  td {
    border: 1px solid ${(props) => props.theme.colors.dark3};
  }
  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }

  pre {
    overflow: auto;
    word-wrap: normal;
    white-space: pre;
    margin-top: 2rem;
    font-size: 0.9rem;
    div:not(:first-child) div:not(.highlight-line) {
      margin-top: 0.3rem;
    }
  }

  img {
    margin-top: 1.5vw;
    border-radius: 0.6rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin: 22% 0%;
  }
`;
