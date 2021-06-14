import React, { createRef, useEffect } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Container,
  Post,
  Seo,
  ReadingProgress,
  Contents,
  MetaInfo,
  usePostStore,
  useUserStore,
} from "../components";
const SinglePost = ({ data }) => {
  const { setRepo } = usePostStore();
  const { dark } = useUserStore();
  const target = createRef();
  const featureImage = dark
    ? data.mdx.frontmatter.featureImage[0].publicURL
    : data.mdx.frontmatter.featureImage[1].publicURL;
  const seoImage = dark
    ? data.mdx.frontmatter.featureImage[0].publicURL
    : data.mdx.frontmatter.featureImage[1].publicURL;
  useEffect(() => {
    const blockquotes = document
      .getElementById("container")
      .getElementsByTagName("blockquote");
    for (let i = 0; i < blockquotes.length; i++) {
      blockquotes[i].innerHTML = `<p>NOTE</p>${blockquotes[i].innerHTML}`;
    }
    const anchors = document
      .getElementById("container")
      .getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
      anchors[i].setAttribute("target", "_blank");
    }
  }, []);
  useEffect(() => {
    setRepo(data.mdx.frontmatter.currentRepo);
  }, [data.mdx.frontmatter.currentRepo, setRepo]);

  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.frontmatter.excerpt}
      />
      <Post>
        <div ref={target}>
          <MetaInfo
            title={data.mdx.frontmatter.title}
            date={data.mdx.frontmatter.date}
            time={data.mdx.timeToRead}
            featureImage={featureImage}
            tags={data.mdx.frontmatter.tags}
          />
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
        currentRepo
        tags
        featureImage {
          publicURL
        }
        images {
          publicURL
        }
      }
    }
  }
`;
