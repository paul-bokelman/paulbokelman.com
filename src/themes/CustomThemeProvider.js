import React from "react";
import { useStore } from "../components";
import { Light, Dark } from "./index";
import { ThemeProvider } from "styled-components";

export const CustomThemeProvider = (props) => {
  const dark = useStore((state) => state.dark);

  return (
    <ThemeProvider theme={dark ? Dark : Light}>{props.children}</ThemeProvider>
  );
};
