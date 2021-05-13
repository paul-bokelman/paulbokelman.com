import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { RiSpeedFill, RiCloseFill } from "react-icons/ri"; // RiPlayFill
import {
  BiDetail,
  BiDotsHorizontalRounded,
  BiInfoCircle,
} from "react-icons/bi";
import { FiSlash } from "react-icons/fi";
import { Tag, ExtraTags } from "../elements";
import { useUserStore } from "../components";

export const GetTags = (tags) => {
  const dark = useUserStore((state) => state.dark);

  const [showExtras, setShowExtras] = useState(false);
  const getIcon = (tag) => {
    if (tag === "react") {
      return <FaReact />;
    }
    if (tag === "fast") {
      return <RiSpeedFill />;
    }
    if (tag === "detailed") {
      return <BiDetail />;
    }
    if (tag === "informative") {
      return <BiInfoCircle />;
    }
    return <FiSlash />;
  };

  return (
    <div>
      {tags.map((tag, index) => {
        const icon = getIcon(tag);
        return (
          <React.Fragment key={tag}>
            <Tag
              key={tag}
              tag={tag}
              theme={dark ? "dark" : "light"}
              style={index >= 3 && !showExtras ? { display: "none" } : null}
            >
              {icon}
              {tag}
            </Tag>
            {index >= 3 && index === tags.length - 1 ? (
              <ExtraTags key={tag} onClick={() => setShowExtras(!showExtras)}>
                {!showExtras ? (
                  <BiDotsHorizontalRounded key={tag} />
                ) : (
                  <RiCloseFill key={tag} />
                )}
              </ExtraTags>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};
