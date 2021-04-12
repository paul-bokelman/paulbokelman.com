import React, { createRef, useEffect } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Container,
  Post,
  FeatureImage,
  Seo,
  ReadingProgress,
  Contents,
} from "../components";

const SinglePost = ({ data }) => {
  const target = createRef();
  console.log(data);
  const featureImage =
    data.mdx.frontmatter.featureImage.childImageSharp !== null
      ? data.mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData
      : data.mdx.frontmatter.featureImage.publicURL;
  const seoImage = data.mdx.frontmatter.featureImage.publicURL;

  useEffect(() => {
    const anchors = document
      .getElementById("container")
      .getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
      anchors[i].setAttribute("target", "_blank");
    }
  }, []);

  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.frontmatter.excerpt}
      />
      <Post>
        <div ref={target}>
          <section>
            <h1 style={{ fontSize: "80px", marginBottom: "1vw" }}>
              {data.mdx.frontmatter.title}
            </h1>
          </section>
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
          <MDXRenderer images={data.mdx.frontmatter.images}>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </Post>
      <ReadingProgress target={target} />
      <Contents />
    </Container>
  );
};

export default SinglePost;

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
        images {
          publicURL
        }
      }
    }
  }
`;
