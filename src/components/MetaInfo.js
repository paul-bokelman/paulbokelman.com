import React, { useState } from "react";
import { MetaInfoWrapper } from "../elements";
import { GetTags } from "../functions";
// import ReactTooltip from "react-tooltip";

export const MetaInfo = ({ title, date, time, featureImage, tags }) => {
  // const [isFast, setLength] = useState(false);

  return (
    <div>
      <MetaInfoWrapper>
        <h1 style={{ fontSize: "1.875rem", marginBottom: "1vw" }}>{title}</h1>
        <span>
          {date} / {time} min read
        </span>
        {GetTags(tags)}
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
