import React, { useState } from "react";
import { ThemeToggleWrapper } from "../elements";
import { BiMoon, BiSun } from "react-icons/bi";
export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeToggleWrapper>
      {isDark === false ? (
        <BiSun onClick={() => setIsDark(!isDark)} />
      ) : (
        <BiMoon onClick={() => setIsDark(!isDark)} />
      )}
    </ThemeToggleWrapper>
  );
};
