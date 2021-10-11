import React, { Component } from "react";
import "../../Animations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import animation from "../../assets/animation.svg";
import pdf from "../../assets/cv.pdf";
import "./Greetings.css";

export class Greetings extends Component {
  render() {
    return (
      <section className="greetings">
        <div className="greetings__about">
          <div className="about__welcome">Hello, I'm Reynold</div>
          <div className="about__text">
            A Full Stack Developer and Mobile App Developer having experience in
            building Web applications with JavaScript | VueJS | ReactJS | Flask
            | .NET and other frameworks, Cross Platform Desktop Applications
            with Electron and Cross Platform Mobile Applications with Flutter.
          </div>
          <div className="about__tags">
            <ul>
              <li>Full Stack Developer</li>
              <li>Mobile Developer</li>
              <li>Open Source Contributor</li>
            </ul>
          </div>
          <div className="about__cv pulse-animation">
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFilePdf} size="sm" />
              <span>See my CV</span>
            </a>
          </div>
        </div>
        <div className="greetings__animation">
          <img src={animation} alt="" className="animation" />
        </div>
      </section>
    );
  }
}

export default Greetings;
