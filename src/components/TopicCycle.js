import React, { useState } from "react";
import {
  TopicCycleWrapper,
  Primary,
  Secondary,
  Desc,
  InnerWrapper,
} from "../elements";

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
      <InnerWrapper>
        <Secondary onClick={cycleUp}>
          {posts[index + 1] !== undefined
            ? posts[index + 1].node.frontmatter.title
            : posts[0].node.frontmatter.title}
        </Secondary>

        <br />

        <Primary to={posts[index].node.frontmatter.slug}>
          {posts[index].node.frontmatter.title}
          <p>
            {posts[index].node.frontmatter.date} / ~{" "}
            {posts[index].node.timeToRead} min read
          </p>
        </Primary>

        <br />

        <Secondary onClick={cycleDown}>
          {posts[index - 1] !== undefined
            ? posts[index - 1].node.frontmatter.title
            : posts[posts.length - 1].node.frontmatter.title}
        </Secondary>

        <Desc>{posts[index].node.frontmatter.excerpt}</Desc>
      </InnerWrapper>
    </TopicCycleWrapper>
  );
};
