import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { useStaticQuery, graphql } from "gatsby";
import { FeatureImageWrapper } from "../elements";

export const FeatureImage = ({ fixed }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     imageSharp(fixed: { originalName: { eq: "office.jpg" } }) {
  //       # fixed {
  //       #   base64
  //       #   tracedSVG
  //       #   aspectRatio
  //       #   srcWebp
  //       #   srcSetWebp
  //       #   originalName
  //       # }
  //       gatsbyImageData
  //     }
  //   }
  // `);
  // console.log(getImage(data.imageSharp.gatsbyImageData));
  console.log(fixed);
  const image = getImage(fixed);

  return (
    <FeatureImageWrapper>
      <GatsbyImage
        image={image}
        style={{
          width: "100%",
          height: "100%",
        }}
        alt="office"
      />
    </FeatureImageWrapper>
  );
};
