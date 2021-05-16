import React from "react";
import { MetaInfoWrapper } from "../elements";
import { GetTags } from ".";

export const MetaInfo = ({ title, date, time, featureImage, tags }) => {
  return (
    <div>
      <MetaInfoWrapper>
        <h1 style={{ fontSize: "1.875rem", marginBottom: "1vw" }}>{title}</h1>
        <span>
          {date} / {time} min read
        </span>
        {GetTags(tags)}
      </MetaInfoWrapper>

      <img
        style={{
          width: "100%",
          height: "100%",
        }}
        src={featureImage}
        alt={featureImage}
      />
    </div>
  );
};
