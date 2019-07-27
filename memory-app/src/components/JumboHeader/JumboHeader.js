import React from "react";
import "./JumboHeader.css";

const JumboHeader = () => {
  return (
    <div className="JumboHeader-container">
      <h1 className="body-text1">Clicky Game!</h1>
      <h2 className="body-text2">
        Click on an image to earn points, but don't click on any more than once!
      </h2>
    </div>
  );
};

export default JumboHeader;