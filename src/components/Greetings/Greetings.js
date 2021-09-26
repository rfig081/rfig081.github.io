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
          <div className="about__welcome">Hello, Im Reynold</div>
          <div className="about__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            possimus tempora quasi nobis delectus amet explicabo, iure ad fugiat
            exercitationem. Harum odio deleniti sit, quis amet explicabo
            consequuntur a ab facere voluptas iure sed, libero, adipisci quae
            laudantium perspiciatis? Soluta ea sint voluptate aspernatur
            pariatur magnam enim provident consectetur vel.
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
