import React, { Component } from "react";
import animation from "../../assets/animation.svg";
import "./About.css";

export class About extends Component {
  render() {
    return (
      <section className="about-section">
        <div className="about-text">
          <div className="text__welcome">Welcome</div>
          <div className="text__about">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            commodi excepturi vel est eum quis?
          </div>
        </div>
        <img src={animation} alt="" class="animation" />
      </section>
    );
  }
}

export default About;
