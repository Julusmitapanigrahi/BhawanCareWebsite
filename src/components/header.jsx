import React from "react";
import AnimatedComponent from "./animation";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
              <AnimatedComponent animationType="scaleUp" >
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                </AnimatedComponent>
                {/* <AnimatedComponent animationType="slideIn" direction="left"> */}
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* </AnimatedComponent> */}
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Get A Demo
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
