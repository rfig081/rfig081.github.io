import React, { Component } from "react";
import animation from "../../assets/animation.svg";
import "./Greetings.css";

export class Greetings extends Component {
  render() {
    return (
      <section className="greetings">
        <div className="greetings__about">
          <div className="about__text">
            <div className="text__welcome">Welcome</div>
            <div className="text__about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              commodi excepturi vel est eum quis?
            </div>
          </div>
          <div className="about__tags">
            <div className="tag-pill">Pill 1</div>
            <div className="tag-pill">Pill 2</div>
            <div className="tag-pill">Pill 3</div>
          </div>
          <div className="about__cv">
            <button>CV</button>
          </div>
        </div>
        <div className="greetings__animation">
          <img src={animation} alt="" class="animation" />
        </div>
      </section>
    );
  }
}

export default Greetings;
