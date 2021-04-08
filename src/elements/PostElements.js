import styled from "styled-components";

export const PostWrapper = styled.main`
  margin: 6% 23%;
  z-index: 10;

  //mdx themes

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.dark1};
  }

  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    /* line-height: 2.5rem; */
    font-weight: 400;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  h5 {
    font: ${(props) => props.theme.fonts.code};
    color: ${(props) => props.theme.colors.secondary};
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
    color: ${(props) => props.theme.colors.dark2};
    margin-top: 2rem;
  }

  a {
    color: ${(props) => props.theme.colors.link};
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
    background-color: ${(props) => props.theme.colors.codeBG};
  }
  blockquote::before {
    content: "";
    position: absolute;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${(props) => props.theme.colors.code};
    /* border-radius: 1px / 2px; */
  }

  blockquote p {
    color: ${(props) => props.theme.colors.code};
    font-size: 1rem;
    line-height: 2.125rem;
    max-width: 38rem;
    font-weight: 400;
    /* margin: 0rem auto; */
  }

  /* blockquote strong {
    color: ${(props) => props.theme.colors.code};
    top: -5rem;
    font-size: 1.6rem;
    max-width: 38rem;
    font-weight: 600;
  } */

  blockquote a {
    font-weight: bold;
  }

  ul,
  ol {
    color: ${(props) => props.theme.colors.primary};
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
    font-size: 1.3rem;
  }

  code {
    font-family: ${(props) => props.theme.fonts.code};
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.code};
    background-color: ${(props) => props.theme.colors.codeBG};
    border-radius: 5px;
    padding: 2px 8px;
    white-space: pre-line;
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
    font-size: 1.1rem;
    div:not(:first-child) {
      margin-top: 0.3rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin: 22% 0%;
  }
`;
