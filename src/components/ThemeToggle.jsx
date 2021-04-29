import React, { useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { useUserStore } from '.';
import { ThemeToggleWrapper } from '../elements';

export const ThemeToggle = () => {
  const [animating, setAnimate] = useState(false);
  const { dark, toggleDarkMode } = useUserStore();
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
          className={animating ? 'animate' : 'animateback'}
          onClick={() => animate()}
        />
      ) : (
        <BiMoon
          className={animating ? 'animate' : 'animateback'}
          onClick={() => animate()}
        />
      )}
    </ThemeToggleWrapper>
  );
};
