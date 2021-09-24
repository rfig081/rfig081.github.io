import React, { Component } from "react";
import animation from "../../assets/animation.svg";
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
            <div className="tag-pill">Pill 1</div>
            <div className="tag-pill">Pill 2</div>
            <div className="tag-pill">Pill 3</div>
            <div className="tag-pill">Pill 4</div>
            <div className="tag-pill">Pill 5</div>
            <div className="tag-pill">Pill 6</div>
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
