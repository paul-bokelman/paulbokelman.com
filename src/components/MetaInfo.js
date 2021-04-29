import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { RiSpeedFill, RiCloseFill } from "react-icons/ri"; // RiPlayFill
import { BiDetail, BiDotsHorizontalRounded } from "react-icons/bi";
import { FiSlash } from "react-icons/fi";
import { ExtraTags, MetaInfoWrapper, Tag } from "../elements"; // ReaderSwitcher
import { useUserStore } from "."; // FeatureImage
// import ReactTooltip from "react-tooltip";

export const MetaInfo = ({ title, date, time, featureImage, tags }) => {
  const dark = useUserStore((state) => state.dark);
  // const [isFast, setLength] = useState(false);
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
    return <FiSlash />;
  };

  return (
    <div>
      <MetaInfoWrapper>
        <h1 style={{ fontSize: "80px", marginBottom: "1vw" }}>{title}</h1>
        <span>
          {date} /{time} min read
        </span>
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
                  <ExtraTags
                    key={tag}
                    onClick={() => setShowExtras(!showExtras)}
                  >
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
        {/* <ReaderSwitcher>
          {isFast ? (
            <span
              aria-hidden="true"
              data-tip="content type: fast"
              onClick={() => setLength(!isFast)}
            >
              <RiSpeedFill />
            </span>
          ) : (
            <span
              aria-hidden="true"
              data-tip="content type: all"
              onClick={() => setLength(!isFast)}
            >
              <RiPlayFill />
            </span>
          )}
          <ReactTooltip
            place="left"
            effect="solid"
            className="current"
            arrowColor="random"
          />
        </ReaderSwitcher> */}
      </MetaInfoWrapper>
      {/* {typeof featureImage !== "string" ? (
        <FeatureImage fixed={featureImage} />
      ) : ( */}
      <img
        style={{
          width: "100%",
          height: "100%",
        }}
        src={featureImage}
        alt={featureImage}
      />
      {/* )} */}
    </div>
  );
};
