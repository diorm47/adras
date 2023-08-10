import React from "react";
import "./loading.css";

function Loading() {
  return (
    <div className="loader_wrapper">
      <div className="loading_nim">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
