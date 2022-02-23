import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    // <div className="footer-container">
    //   <div className="footer-parent">
    //     <div className="footer-img"></div>
    //     <img
    //       src={require("../../../assets/img/shape-bg.png")}
    //       default
    //       alt="No internet connection"
    //     />
    //   </div>
    // </div>

    <div className="footer-container">
       {/* Waves Container */}
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      {/* Waves end */}
    </div>
  );
}
