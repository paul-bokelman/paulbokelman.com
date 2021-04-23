import React, { useEffect, useState } from "react";
import { ContentsWrapper } from "../elements";
import scrollTo from "gatsby-plugin-smoothscroll";
import Scrollspy from "react-scrollspy";
// import "../static/main.css";
export const Contents = () => {
  const [headers, setHeaders] = useState();
  const [scrollItems, setScrollItems] = useState();
  useEffect(() => {
    const headerText = [];
    const scrollItems = [];
    const headers = document
      .getElementById("container")
      .getElementsByTagName("h1");
    const sections = document
      .getElementById("container")
      .getElementsByTagName("section");
    console.log(sections);
    console.log(headers);
    for (let i = 0; i < sections.length; i++) {
      if (headers[i + 1].outerText.includes("&")) {
        const current = headers[i + 1].outerText.split(" & ").join("");
        scrollItems.push(current);
        sections[i].id = current;
      } else {
        const current = headers[i + 1].outerText.split(" ").join("");
        scrollItems.push(current);

        sections[i].id = current;
      }
      headerText.push(headers[i + 1].outerText);
    }
    setHeaders(headerText);
    setScrollItems(scrollItems);
  }, []);

  return (
    <ContentsWrapper>
      {headers !== undefined ? (
        <Scrollspy
          // style={{ position: "fixed", left: "200px" }}
          items={scrollItems}
          currentClassName="current"
        >
          {headers.map((text, index) => (
            <li key={index}>
              <p
                role="presentation"
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  scrollTo(
                    `#${
                      text.includes("&")
                        ? text.split(" & ").join("")
                        : text.split(" ").join("")
                    }`
                  );
                }}
                onKeyDown={() => {
                  scrollTo(
                    `#${
                      text.includes("&")
                        ? text.split(" & ").join("")
                        : text.split(" ").join("")
                    }`
                  );
                }}
              >
                {text}
              </p>
            </li>
          ))}
        </Scrollspy>
      ) : null}
    </ContentsWrapper>
  );
};
