import React, { createRef } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Container,
  Post,
  FeatureImage,
  Seo,
  ReadingProgress,
} from "../components";

const singlePost = ({ data }) => {
  const target = createRef();
  const featureImage =
    data.mdx.frontmatter.featureImage.childImageSharp !== null
      ? data.mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData
      : data.mdx.frontmatter.featureImage.publicURL;

  const seoImage = data.mdx.frontmatter.featureImage.publicURL;
  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.frontmatter.excerpt}
      />
      <Post>
        <div ref={target}>
          <h1 style={{ fontSize: "80px", marginBottom: "1vw" }}>
            {data.mdx.frontmatter.title}
          </h1>
          <p style={{ fontSize: "20px", marginTop: "1vw" }}>
            {data.mdx.frontmatter.date} / ~ {data.mdx.timeToRead} min read
          </p>
          {typeof featureImage !== "string" ? (
            <FeatureImage fixed={featureImage} />
          ) : (
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={featureImage}
              alt={featureImage}
            />
          )}
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </Post>
      <ReadingProgress target={target} />
    </Container>
  );
};

export default singlePost;

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        excerpt
        slug
        title
        featureImage {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
