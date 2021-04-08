import React, { useState, useEffect } from "react";
import { Progress, ProgressBackground, ProgressText } from "../elements";
export const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(20);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });
  return (
    <div>
      <Progress height={`${readingProgress}%`} />
      <ProgressBackground />
      <center>
        <ProgressText>{Math.round(readingProgress * 5)}</ProgressText>
      </center>
    </div>
  );
};
