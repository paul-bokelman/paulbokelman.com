import React, { useState, useContext } from "react";
import { ThemeToggleWrapper } from "../elements";
import { BiMoon, BiSun } from "react-icons/bi";
import { Theme } from "../themes";
import { graphql, useStaticQuery } from "gatsby";

export const ThemeToggle = () => {
  const { theme, changeTheme } = useContext(Theme);
  // const data = useStaticQuery(graphql`
  //   query {
  //     themeIcon: file(relativePath: { eq: "themeIcon.svg" }) {
  //       publicURL
  //     }
  //   }
  // `);
  console.log(theme);
  return (
    <ThemeToggleWrapper>
      {/* <img src={data.themeIcon.publicURL} alt="themeIcon" /> */}
      {!theme === false ? (
        <BiSun onClick={() => changeTheme()} />
      ) : (
        <BiMoon onClick={() => changeTheme()} />
      )}
    </ThemeToggleWrapper>
  );
};
