import React, { Component } from "react";
import "./Experience.css";
import Timeline from "../Timeline/Timeline";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.events = [
      {
        time: "2019",
        position: "Mobile & Full Stack Developer ",
        place: "isiNET, LLC",
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
        description: "",
      },
      {
        time: "2018",
        position: "Software Developer",
        place: "Freelance",
        tags: ["HTML", "CSS", "JS", "VueJS", "Electron", "Python", "MongoDB"],
        description: "",
      },
      {
        time: "2017",
        position: "Educator / Speaker",
        place: "Centro de Oportunidades Educativas UIPRP (COE)",
        tags: ["Arduino", "C++", "STEAM"],
        description: "",
      },
      {
        time: "2016",
        position: "Web Developer",
        place: "ABACUS",
        tags: ["HTML", "CSS", "JS", "PHP", "SQL"],
        description: "",
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
