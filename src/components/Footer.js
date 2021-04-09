import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { FooterWrapper } from "../elements";

export const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     instagram: file(relativePath: { eq: "social/instagram.svg" }) {
  //       publicURL
  //     }
  //     github: file(relativePath: { eq: "social/github.svg" }) {
  //       publicURL
  //     }
  //     snapchat: file(relativePath: { eq: "social/snapchat.svg" }) {
  //       publicURL
  //     }
  //     twitter: file(relativePath: { eq: "social/twitter.svg" }) {
  //       publicURL
  //     }
  //   }
  // `);

  return (
    <FooterWrapper>
      <a href="https://instagram.com/paul.bokelman">instagram</a>
      <a href="https://github.com/Paul-Bokelman">github</a>
    </FooterWrapper>
  );
};
