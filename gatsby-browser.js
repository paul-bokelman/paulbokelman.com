import React from "react";
import { createGlobalStyle } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { CustomThemeProvider } from "./src/themes";
import { preToCodeBlock } from "mdx-utils";
import { Table, Code, F, C, Peek, Bool, CS } from "./src/components";
import "./src/fonts/fonts.css";
// import "./language-tabs.css";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
}

body, html {
    font-family: ${(props) => props.theme.fonts.main};
    height: 100%;
    background-color: ${(props) => props.theme.colors.background};
    transition: 0.2s ease-in-out;
    textarea {
    display: none;
    }
}

`;

const components = {
  table: Table,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    }
    return <pre {...preProps} />;
  },
  wrapper: ({ children }) => <>{children}</>,
  F,
  Peek,
  Bool,
  C,
  CS,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <CustomThemeProvider>
      <GlobalStyles />
      {element}
    </CustomThemeProvider>
  </MDXProvider>
);
