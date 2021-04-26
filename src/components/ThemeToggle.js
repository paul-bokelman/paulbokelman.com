import React, { useState } from "react";
import { useUserStore } from "../components";
import { ThemeToggleWrapper } from "../elements";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeToggle = () => {
  const [animating, setAnimate] = useState(false);
  const { dark, toggleDarkMode } = useUserStore();
  console.log(dark);
  const animate = () => {
    setAnimate(true);
    toggleDarkMode();
    setAnimate(false);
  };
  return (
    <ThemeToggleWrapper>
      {/* <img src={data.themeIcon.publicURL} alt="themeIcon" /> */}
      {!dark ? (
        <BiSun
          className={animating ? "animate" : "animateback"}
          onClick={() => animate()}
        />
      ) : (
        <BiMoon
          className={animating ? "animate" : "animateback"}
          onClick={() => animate()}
        />
      )}
    </ThemeToggleWrapper>
  );
};
