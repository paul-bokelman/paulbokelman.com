import React, { useState } from "react";
import { PeekWrapper } from "../elements";
import { AiFillEye } from "react-icons/ai";
export const Peek = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  console.log(children);
  return (
    <PeekWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? <AiFillEye /> : children}
    </PeekWrapper>
  );
};
