import React, { useState } from "react";
import { CSWrapper } from "../elements";
export const CS = ({ children }) => {
  const [isFast, setFast] = useState(false);
  const header = children[0];
  const fast = children[1];
  const slow = children[2];
  return (
    <CSWrapper content={isFast ? "fast" : "slow"}>
      {header}

      <div onClick={() => setFast(!isFast)}>
        <span>{isFast ? "Quick" : "Detailed"}</span>
      </div>

      {isFast ? fast : slow}
    </CSWrapper>
  );
};
