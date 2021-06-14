import React from "react";
import { PostPreviewWrapper, Card } from "../elements";
import { Link } from "gatsby";
import { GetTags } from ".";
import { useUserStore } from ".";
export const PostPreview = ({ posts }) => {
  const { dark } = useUserStore();
  return (
    <PostPreviewWrapper>
      {posts.map((post) => (
        <Link to={`/${post.node.frontmatter.slug}`}>
          <Card>
            <h1>{post.node.frontmatter.title}</h1>
            <div className="external-content">
              <p>
                {post.node.frontmatter.date} / {post.node.timeToRead} min read
              </p>
              {GetTags(post.node.frontmatter.tags)}
            </div>
            <img
              src={
                dark
                  ? post.node.frontmatter.featureImage[0].publicURL
                  : post.node.frontmatter.featureImage[1].publicURL
              }
              alt="feature image"
            />
            <h2>{post.node.frontmatter.excerpt}</h2>
          </Card>
        </Link>
      ))}
    </PostPreviewWrapper>
  );
};
