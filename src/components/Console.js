import React from "react";
import { useUserStore } from ".";
import { ConsoleWrapper } from "../elements";
import { AiFillCaretRight } from "react-icons/ai";
import { TiWarning } from "react-icons/ti";
import { VscError } from "react-icons/vsc";
export const C = ({ children, file, type }) => {
  const dark = useUserStore((state) => state.dark);
  console.log(type);
  console.log(dark);

  // var codeHTML = document.getElementsByClassName("console");
  // for (var i = 0; i < codeHTML.length; i += 1) {
  //   var str = codeHTML[i].textContent;
  //   var HTMLattr = str.match(/".+"/g);

  //   if (HTMLattr) {
  //     let newSpan = document.createElement("SPAN");
  //     let splitStr = str.split(HTMLattr[0]);
  //     newSpan.innerText = HTMLattr[0];
  //     newSpan.style.cssText = "color:red;";
  //     codeHTML[i].innerHTML = "";
  //     codeHTML[i].append(splitStr[0]);
  //     codeHTML[i].appendChild(newSpan);
  //     codeHTML[i].append(splitStr[1]);
  //   }
  // }

  return (
    <ConsoleWrapper
      className="console"
      theme={dark ? "dark" : "light"}
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
