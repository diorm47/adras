import React from "react";
import "./scroll-to-top.css";
import ScrollToTop from "react-scroll-to-top";

function ScrolToTop() {
  return (
    <div className="scroll_to_top">
      <ScrollToTop smooth color="#6f00ff" />
    </div>
  );
}

export default ScrolToTop;
