import React from "react";
import { graphql } from "gatsby";
import { Container, FeatureImage, Seo, TopicCycle } from "../components";
// import { H1, P } from "../elements";

const allPosts = ({ data }) => {
  const posts = data.allMdx.edges;
  return (
    <Container>
      <TopicCycle posts={posts} />
      <Seo />
      {/* <FeatureImage /> */}
    </Container>
  );
};

export default allPosts;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          timeToRead
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
            featureImage {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
