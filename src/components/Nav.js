import React from "react";
import { Link } from "gatsby";
import { NavWrapper } from "../elements";
import { ThemeToggle } from "../components";
export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">Paul Bokelman</Link>
      <p>Blog</p>
      <ThemeToggle />
    </NavWrapper>
  );
};
