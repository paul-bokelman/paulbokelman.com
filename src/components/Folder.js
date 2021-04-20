import React, { useState } from "react";
import { FolderWrapper } from "../elements";
import { FaFolder, FaEthereum } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export const F = ({ children, files, cr }) => {
  console.log(files);
  const path = "test";
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
            console.log(file);
            const extension = file.name.split(".")[1];
            const icon = getExtensionIcon(extension);
            return (
              <li key={index}>
                <a
                  href={`https://github.com/Paul-Bokelman/${cr}/blob/main/${file.path}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {icon}
                  {file.name}
                </a>
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
