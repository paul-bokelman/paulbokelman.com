import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import rangeParser from "parse-numeric-range";
import theme from "prism-react-renderer/themes/dracula"; //CHANGE THEME
import { MdContentCopy } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
export const Code = ({ codeString, language, metastring, ...props }) => {
  const [copied, setCopied] = useState(false);
  const calculateLinesToHighlight = (meta) => {
    const RE = /{([\d,-]+)}/;
    if (RE.test(meta)) {
      const strlineNumbers = RE.exec(meta)[1];
      const lineNumbers = rangeParser(strlineNumbers);
      return (index) => lineNumbers.includes(index + 1);
    } else {
      return () => false;
    }
  };

  const getFileName = (meta) => {
    const regex = /\[(.*)\]+/g;
    if (meta !== undefined) {
      return regex.exec(meta)[1];
    }
  };

  const getCopyable = (meta) => {
    if (meta !== undefined) {
      if (meta.includes("/copy/")) {
        return true;
      }
    }
  };

  const copyFunction = () => {
    // const copyText = document.getElementById("myInput").textContent;
    const textArea = document.createElement("textarea");
    textArea.textContent = codeString;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    setCopied(true);
  };

  const getRenderLineNumbers = (meta) => {
    if (meta !== undefined) {
      if (meta.includes("-r-")) {
        return true;
      }
    }
  };

  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const fileName = getFileName(metastring);
  const copyable = getCopyable(metastring);
  const renderLineNumber = getRenderLineNumbers(metastring);

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div
          className={`gatsby-highlight ${
            fileName !== undefined ? "fileName" : null
          }`}
          data-language={language}
        >
          {fileName !== undefined ? (
            <div className="upper">
              <div className="displayFile">{fileName}</div>
              {copyable ? (
                <>
                  {copied ? (
                    <>
                      <IoIosCheckmark className="checkIcon" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <MdContentCopy
                      className="copyIcon"
                      onClick={copyFunction}
                    />
                  )}
                </>
              ) : null}
            </div>
          ) : null}
          <pre className={className} style={{ ...style }}>
            {tokens.map((line, index) => {
              const lineProps = getLineProps({ line, key: index });
              if (shouldHighlightLine(index)) {
                lineProps.className = `${lineProps.className} highlight-line`;
              }
              return (
                <div key={index} {...lineProps}>
                  {renderLineNumber ? (
                    <span className="line-number">{index + 1}</span>
                  ) : null}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
