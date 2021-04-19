import React, { useState } from "react";
import { FeatureImage } from "../components";
import { MetaInfoWrapper, ReaderSwitcher } from "../elements";
import { RiSpeedFill, RiPlayFill } from "react-icons/ri";
import ReactTooltip from "react-tooltip";

export const MetaInfo = ({ title, date, time, featureImage }) => {
  // const [isFast, setLength] = useState(false);
  return (
    <div>
      <MetaInfoWrapper>
        <h1 style={{ fontSize: "80px", marginBottom: "1vw" }}>{title}</h1>
        <span>
          {date} / ~ {time} min read
        </span>
        {/* <ReaderSwitcher>
          {isFast ? (
            <span
              data-tip="content type: fast"
              onClick={() => setLength(!isFast)}
            >
              <RiSpeedFill />
            </span>
          ) : (
            <span
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
    </div>
  );
};
