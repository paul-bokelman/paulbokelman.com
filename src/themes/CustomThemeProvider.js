import React from "react";
import { useUserStore } from "../components";
import { Light, Dark } from "./index";
import { ThemeProvider } from "styled-components";

export const CustomThemeProvider = (props) => {
  const { dark } = useUserStore();

  return (
    <ThemeProvider theme={dark ? Dark : Light}>{props.children}</ThemeProvider>
  );
};
