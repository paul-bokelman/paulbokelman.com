import React, { useState } from "react";
import { FolderWrapper } from "../elements";
import { usePostStore } from "../components";
import { FaFolder, FaEthereum } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
export const F = ({ children, folder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { repo } = usePostStore();
  const path = folder.path;
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
      <div
        style={
          isOpen
            ? { maxHeight: "500px", transition: " max-height 0.5s ease-in" }
            : null
        }
      >
        {folder.name.map((file, index) => {
          const extension = file.split(".")[1];
          const icon = getExtensionIcon(extension);
          return (
            <a
              key={index}
              href={`https://github.com/Paul-Bokelman/${repo}/blob/main/${path}/${file}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {icon}
              {file}
              <BsArrowRightShort key={index} className="external" />
            </a>
          );
        })}
      </div>
      <code>
        <FaFolder />
        {children}
      </code>
    </FolderWrapper>
  );
};
