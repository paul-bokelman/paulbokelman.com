import React from "react";
import { PostPreviewWrapper, Card } from "../elements";
import { Link } from "gatsby";
import { GetTags } from "../functions";
export const PostPreview = ({ posts }) => {
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
              src={post.node.frontmatter.featureImage.publicURL}
              alt={post.node.frontmatter.featureImage.publicURL}
            />
            <h2>{post.node.frontmatter.excerpt}</h2>
          </Card>
        </Link>
      ))}
    </PostPreviewWrapper>
  );
};
