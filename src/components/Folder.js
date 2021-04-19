import React, { useState } from "react";
import { FolderWrapper } from "../elements";
import { FaFolder, FaEthereum } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export const F = ({ children, files }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(files);
  const getExtensionIcon = (extension) => {
    if (extension === "js") {
      return <IoLogoJavascript />;
    }
    if (extension === "sol") {
      return <FaEthereum />;
    }
  };
  return (
    <FolderWrapper onClick={() => setIsOpen(!isOpen)}>
      <div style={isOpen ? null : { display: "none" }}>
        <ul>
          {files.map((file, index) => {
            const extension = file.split(".")[1];
            const icon = getExtensionIcon(extension);
            return (
              <li key={index}>
                {icon}
                {file}
              </li>
            );
          })}
        </ul>
      </div>
      <code>
        <FaFolder />
        {children}
      </code>
    </FolderWrapper>
  );
};
