import React, { useState } from "react";
import { useUserStore } from "../components";
import { CodeWrapper, UpperCode } from "../elements";
import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";
import rangeParser from "parse-numeric-range";
import { Dark, Light } from "../syntax";
import { FiClipboard } from "react-icons/fi";
import { GoCheck } from "react-icons/go";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-solidity");
export const Code = ({ codeString, language, metastring, ...props }) => {
  const dark = useUserStore((state) => state.dark);

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
    const res = regex.exec(meta);
    return res !== null ? res[1] : null;
  };

  const getCopyable = (meta) => {
    if (meta !== undefined) {
      if (meta.includes("/copy/")) {
        return true;
      }
    }
  };

  const copyFunction = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
    <CodeWrapper>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={!dark ? Light : Dark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div
            className={`gatsby-highlight ${
              fileName !== null ? "fileName" : null
            }`}
            data-language={language}
          >
            {fileName !== null ? (
              <UpperCode
                bg={
                  !dark
                    ? Light.plain.backgroundColor
                    : Dark.plain.backgroundColor
                }
                current={!dark ? "light" : "dark"}
              >
                <div>{fileName}</div>
                {copyable ? (
                  <div>
                    {copied ? (
                      <span className="copied">
                        <GoCheck />
                      </span>
                    ) : (
                      <span
                        className="copy"
                        onClick={copyFunction}
                        onKeyDown={copyFunction}
                        role="presentation"
                      >
                        <FiClipboard />
                      </span>
                      // <MdContentCopy onClick={copyFunction} />
                    )}
                  </div>
                ) : null}
              </UpperCode>
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
    </CodeWrapper>
  );
};
