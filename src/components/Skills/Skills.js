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
      { title: "AWS", icon: "amazon-aws" },
      { title: "Electron", icon: "electron" },
      { title: "Firebase", icon: "firebase" },
      { title: "Flutter", icon: "flutter" },
      { title: "Git", icon: "git" },
      { title: "Jenkins", icon: "jenkins" },
      { title: "MongoDB", icon: "mongodb" },
      { title: "NodeJS", icon: "node-js" },
      { title: "NPM", icon: "npm" },
      { title: "Python", icon: "python" },
      { title: "ReactJS", icon: "react" },
      { title: "SASS", icon: "sass" },
      { title: "SQL", icon: "sql" },
      { title: "TravisCI", icon: "travis" },
      { title: "VueJS", icon: "vuejs" },
      { title: "Yarn", icon: "yarn" },
    ];
  }

  render() {
    const icons = this.skillsToDisplay.map((skill) => (
      <Icon key={skill.title} iconText={skill.title} iconImage={skill.icon} />
    ));

    return <section className="skillsSection">{icons}</section>;
  }
}

export default Skills;
