import React from "react";
import "./Page404.css";
import robotImge from "../images/broken-robot(404image).png";
function Page404() {
  return (
    <div>
      <div className="page404">
        <div className="left-box">
          <div className="text-box">
            <h1 className="primary-heading">
              <span className="g">G</span>
              <span className="d">D</span>
              <span className="s">S</span>
              <span className="c">C</span>
            </h1>
            <p className="para-text">
              <strong className="strong">404</strong> That's an error
              <hr className="horizontal-rule" />
            </p>
            <p className="para-text">
              {" "}
              The requested URL was not found on this server.{" "}
              <span className="light-text">This is all we know</span>
            </p>
          </div>
        </div>
        <div className="right-box">
          <img src={robotImge} alt="Image of broken image" className="robot-img" />
        </div>
      </div>
    </div>
  );
}

export default Page404;
