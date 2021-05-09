import React, { useState } from "react";
import {
  TopicCycleWrapper,
  Date,
  PostInfo,
  Item,
  Primary,
  Secondary,
  Desc,
  InnerWrapper,
  PostBrief,
} from "../elements";
import { Link } from "gatsby";
export const TopicCycle = ({ posts }) => {
  console.log(posts);
  const [index, setIndex] = useState(0);
  console.log(index);

  const cycleUp = () => {
    if (posts[index + 1] !== undefined) {
      console.log(posts[index]);
      return setIndex(index + 1);
    }
    return setIndex(0);
  };

  const cycleDown = () => {
    if (posts[index - 1] !== undefined) {
      console.log(posts[index]);
      return setIndex(index - 1);
    }
    return setIndex(posts.length - 1);
  };

  return (
    <TopicCycleWrapper>
      <Date>
        <span>2021</span>
        <span>April 07</span>
      </Date>
      <PostBrief key={index}>
        {posts.map((post) => (
          <Item>
            <Link to={`/${post.node.frontmatter.slug}`}>
              <span>{post.node.timeToRead} min read</span>
              <span>{post.node.frontmatter.title}</span>
            </Link>
          </Item>
        ))}
      </PostBrief>

      <PostInfo>
        <img
          src={posts[1].node.frontmatter.featureImage.publicURL}
          alt={posts[1].node.frontmatter.featureImage.publicURL}
        />
      </PostInfo>
    </TopicCycleWrapper>
    // <TopicCycleWrapper>
    //   <InnerWrapper>
    //     <Secondary onClick={cycleUp}>
    //       {posts[index + 1] !== undefined
    //         ? posts[index + 1].node.frontmatter.title
    //         : posts[0].node.frontmatter.title}
    //     </Secondary>

    //     <br />

    //     <Primary to={posts[index].node.frontmatter.slug}>
    //       {posts[index].node.frontmatter.title}
    //       <p>
    //         {posts[index].node.frontmatter.date} / ~{" "}
    //         {posts[index].node.timeToRead} min read
    //       </p>
    //     </Primary>

    //     <br />

    //     <Secondary onClick={cycleDown}>
    //       {posts[index - 1] !== undefined
    //         ? posts[index - 1].node.frontmatter.title
    //         : posts[posts.length - 1].node.frontmatter.title}
    //     </Secondary>

    //     <Desc>{posts[index].node.frontmatter.excerpt}</Desc>
    //   </InnerWrapper>
    // </TopicCycleWrapper>
  );
};
