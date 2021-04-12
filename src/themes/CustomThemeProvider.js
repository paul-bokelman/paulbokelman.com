import React, { useState, createContext, useEffect } from "react";
import { light, dark } from "./index";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
export const Theme = createContext();

export const CustomThemeProvider = (props) => {
  const [theme, setTheme] = useState(false);
  const [colorTheme, setColorTheme] = useState(false);
  const siteTheme = ["minimal", "code", "3d"];
  const [siteThemeIndex, setSiteThemeIndex] = useState(0);
  const Zero = 0;

  const switchSiteTheme = () => {
    if (siteThemeIndex >= siteTheme.length - 1) {
      setSiteThemeIndex(0);
      localStorage.setItem("siteThemeIndex", Zero);
    } else {
      localStorage.setItem("siteThemeIndex", siteThemeIndex + 1);
      setSiteThemeIndex(siteThemeIndex + 1);
    }
    console.log(`${siteTheme[siteThemeIndex]} = ${siteThemeIndex}`);
  };

  useEffect(() => {
    setSiteThemeIndex(parseInt(localStorage.siteThemeIndex));
    if (localStorage.siteThemeIndex === undefined) {
      localStorage.setItem("siteThemeIndex", Zero);
      setSiteThemeIndex(localStorage.siteThemeIndex);
    }
  });
  return (
    <Theme.Provider
      value={{
        theme,
        changeTheme: () => setTheme(!theme),
      }}
    >
      <ThemeProvider theme={theme ? light : dark}>
        <Helmet>
          <html data-theme={theme ? "light" : "dark"} />
        </Helmet>
        {props.children}
      </ThemeProvider>
    </Theme.Provider>
  );
};
