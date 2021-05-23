import React from "react";
import { Link } from "gatsby";
import { NavWrapper } from "../elements";
import { ThemeToggle } from "../components";
import { BiHome } from "react-icons/bi";
export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <BiHome />
      </Link>
      <ThemeToggle />
    </NavWrapper>
  );
};
