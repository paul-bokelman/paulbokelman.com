import React, { useState } from "react";
import { FaFolder, FaEthereum, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillCaretRight, AiFillEye } from "react-icons/ai";
import { TiWarning } from "react-icons/ti";
import { VscError } from "react-icons/vsc";
import { FiSlash } from "react-icons/fi";
import { FaNode } from "react-icons/fa";
import { SiStyledComponents, SiNetlify, SiTailwindcss } from "react-icons/si";
import { RiSpeedFill, RiCloseFill } from "react-icons/ri"; // RiPlayFill
import {
  BiDetail,
  BiDotsHorizontalRounded,
  BiInfoCircle,
} from "react-icons/bi";
import { usePostStore, useUserStore, FunctionalButton } from "../components";
import {
  FolderWrapper,
  ConsoleWrapper,
  PeekWrapper,
  CSWrapper,
  DisplayWrapper,
  Tag,
  ExtraTags,
} from "../elements";
import Vite from "../static/svg/vite.inline.svg";
import Zustand from "../static/svg/zustand.inline.svg";
import Reactquery from "../static/svg/reactquery.inline.svg";

/* -------------------------------------------------------------------------- */
/*                  CONTENT SWITCHER (CS) & DISPLAY (Display)                 */
/* -------------------------------------------------------------------------- */

export const CS = ({ children, variant }) => {
  const [index, setIndex] = useState(0);
  const content = ["overview", "key features", "code"];

  const cycle = () => {
    console.log(index);
    if (index < 2) {
      console.log(content[index]);
      setIndex(index + 1);
    } else {
      setIndex(0);
      console.log(content[index]);
    }
  };
  const header = children[0];
  const display = children[1];
  const overview = children[2];
  const key = children[3];
  const code = children[4];
  let link = header.props.children.props.children;
  link = link.replace(/-/g, "").toLowerCase();
  return (
    <CSWrapper content={content[index]} link={link}>
      <div>
        {header}
        <FunctionalButton
          type="theme"
          variant={variant}
          numbers={[3, index + 1]}
          onClick={cycle}
        >
          {content[index]}
        </FunctionalButton>
      </div>
      {display}
      {content[index] === "overview"
        ? overview
        : content[index] === "key features"
        ? key
        : code}
    </CSWrapper>
  );
};

export const Display = ({ iconOf }) => {
  const icon = () => {
    switch (iconOf) {
      case "react":
        return <FaReact />;
      case "vite":
        return <Vite className="custom" />;
      case "styledcomponents":
        return <SiStyledComponents />;
      case "tailwind":
        return <SiTailwindcss />;
      case "zustand":
        return <Zustand />;
      case "reactquery":
        return <Reactquery />;
      case "node":
        return <FaNode />;
      case "firebase":
        return <IoLogoFirebase />;
      case "netlify":
        return <SiNetlify />;
      default:
        return <FaReact />;
    }
  };
  return <DisplayWrapper i={iconOf}>{icon()}</DisplayWrapper>;
};

/* -------------------------------------------------------------------------- */
/*                               TAGS (GetTags)                               */
/* -------------------------------------------------------------------------- */

export const GetTags = (tags) => {
  const [showExtras, setShowExtras] = useState(false);
  const getIcon = (tag) => {
    switch (tag) {
      case "react":
        return <FaReact />;
      case "fast":
        return <RiSpeedFill />;
      case "detailed":
        return <BiDetail />;
      case "informative":
        return <BiInfoCircle />;
      default:
        return <FiSlash />;
    }
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

/* -------------------------------------------------------------------------- */
/*                                 FOLDER (F)                                 */
/* -------------------------------------------------------------------------- */

export const F = ({ children, folder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { repo } = usePostStore();
  const { path } = folder;
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

/* -------------------------------------------------------------------------- */
/*                                 Console (C)                                */
/* -------------------------------------------------------------------------- */

export const C = ({ children, file, type }) => {
  const dark = useUserStore((state) => state.dark);
  console.log(type);
  console.log(dark);

  return (
    <ConsoleWrapper
      className="console"
      type={type === undefined ? "regular" : type === "warn" ? "warn" : "err"}
    >
      {type === "warn" ? (
        <TiWarning />
      ) : type === "err" ? (
        <VscError fillRule="nonzero" />
      ) : null}
      <span id="content" style={{ fontStyle: "italic" }}>
        <AiFillCaretRight />
        {children}
      </span>
      <span id="file">{file}</span>
    </ConsoleWrapper>
  );
};

/* -------------------------------------------------------------------------- */
/*                                    Peek                                    */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                    Bool                                    */
/* -------------------------------------------------------------------------- */

export const Bool = ({ children }) => {
  return <span style={{ color: "orange" }}>{children}</span>;
};
