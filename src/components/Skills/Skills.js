import React, { Component } from "react";
import "./Skills.css";
import Icon from "../Icon/Icon";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skillsToDisplay = [
      { title: "HTML", icon: "html" },
      { title: "CSS", icon: "css3" },
      { title: "Javascript", icon: "javascript" },
      { title: "VueJS", icon: "vuejs" },
      { title: "ReactJS", icon: "react" },
      { title: "Electron", icon: "electron" },
      { title: "Dart", icon: "dart" },
      { title: "Flutter", icon: "flutter" },
      { title: "Python", icon: "python" },
      { title: "C#", icon: "csharp" },
      { title: "SQL", icon: "sql" },
      { title: "MongoDB", icon: "mongodb" },
      { title: "NodeJS", icon: "node-js" },
      // { title: "SASS", icon: "sass" },
      { title: "Git", icon: "git" },
      { title: "AWS", icon: "amazon-aws" },
      { title: "Firebase", icon: "firebase" },

      { title: "NPM", icon: "npm" },
      { title: "Yarn", icon: "yarn" },
      // { title: "TravisCI", icon: "travis" },
      // { title: "Jenkins", icon: "jenkins" },
    ];
  }

  render() {
    const icons = this.skillsToDisplay.map((skill, index) => (
      <Icon key={index} iconText={skill.title} iconImage={skill.icon} />
    ));

    return (
      <section className="skills">
        <header>
          <h1>Skills</h1>
        </header>
        <div>{icons}</div>
      </section>
    );
  }
}

export default Skills;
