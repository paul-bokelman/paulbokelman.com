import React from "react";
import { useStore } from "../components";
import { ThemeToggleWrapper } from "../elements";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeToggle = () => {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  const dark = useStore((state) => state.dark);
  return (
    <ThemeToggleWrapper>
      {/* <img src={data.themeIcon.publicURL} alt="themeIcon" /> */}
      {!dark ? (
        <BiSun onClick={() => toggleDarkMode()} />
      ) : (
        <BiMoon onClick={() => toggleDarkMode()} />
      )}
    </ThemeToggleWrapper>
  );
};
