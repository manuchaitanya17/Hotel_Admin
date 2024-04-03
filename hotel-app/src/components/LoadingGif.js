import React from "react";
import loadGif from "../images/gif/loading-arrow.gif";

function LoadingGif() {
  return (
    <div className="loading">
      <h4>loading rooms....</h4>
      <img src={loadGif} alt="" />
    </div>
  );
}

export default LoadingGif;
