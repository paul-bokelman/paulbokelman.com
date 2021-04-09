import React from "react";
import { Link } from "gatsby";
import { NavWrapper } from "../elements";
import { ThemeToggle } from "../components";

export const Nav = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     logo: file(relativePath: { eq: "logo.svg" }) {
  //       publicURL
  //     }
  //   }
  // `);

  return (
    <NavWrapper>
      <Link to="/">
        Paul Bokelman
        {/* <img src={data.logo.publicURL} alt="logo" /> */}
      </Link>
      <p>Blog</p>
      <ThemeToggle />
    </NavWrapper>
  );
};
