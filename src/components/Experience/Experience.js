import React, { Component } from "react";
import "./Experience.css";
import Timeline from "../Timeline/Timeline";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.events = [
      {
        time: "2019",
        position: "Mobile Developer",
        place: "isiNET",
        tags: [
          "HTML",
          "CSS",
          "JS",
          "VueJS",
          "Dart",
          "FLutter",
          "C#",
          ".NET",
          "SQL",
        ],
        description:
          "At isiNET, LLC my primary responsibility is to design, develop and maintain their mobile applications products. Besides that, I also work as a Full Stack Developer on their web based products creating new features and maintaining them in general. Working at this company has given me a lot of professional growth, from customer support to learning new technologies and refining my skills.",
      },
      {
        time: "2018",
        position: "...",
        place: "...",
        tags: [
          "HTML",
          "CSS",
          "JS",
          "VueJS",
          "Dart",
          "FLutter",
          "C#",
          ".NET",
          "SQL",
        ],
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, eaque! Ipsa possimus deleniti magnam enim dolores ipsam incidunt libero dolore debitis obcaecati veniam modi nisi sit mollitia voluptatem facilis unde maxime, cum beatae doloremque, consequuntur exercitationem officiis? Nesciunt saepe adipisci culpa et, debitis excepturi magni alias quo, quas quis vero?",
      },
      {
        time: "2017",
        position: "...",
        place: "...",
        tags: [
          "HTML",
          "CSS",
          "JS",
          "VueJS",
          "Dart",
          "FLutter",
          "C#",
          ".NET",
          "SQL",
        ],
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur ipsum eius et expedita cum aut, voluptatibus suscipit tempora maiores beatae non illum debitis neque voluptates ea, veritatis porro eaque.",
      },
      {
        time: "2016",
        position: "...",
        place: "...",
        tags: [
          "HTML",
          "CSS",
          "JS",
          "VueJS",
          "Dart",
          "FLutter",
          "C#",
          ".NET",
          "SQL",
        ],
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur ipsum eius et expedita cum aut, voluptatibus suscipit tempora maiores beatae non illum debitis neque voluptates ea, veritatis porro eaque.",
      },
    ];
  }

  render() {
    return (
      <section className="experience">
        <header>
          <h1>Experience</h1>
        </header>
        <Timeline events={this.events} />
      </section>
    );
  }
}

export default Experience;
