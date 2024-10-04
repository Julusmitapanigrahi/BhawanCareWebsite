import React from "react";
import AnimatedComponent from "./animation";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <AnimatedComponent animationType="scaleUp">
              <img src="img/about.jpg" className="img-responsive" alt="" />
            </AnimatedComponent>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <AnimatedComponent animationType="scaleUp">
                <h2>About Us</h2>
              </AnimatedComponent>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
