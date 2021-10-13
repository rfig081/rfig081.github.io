import React, { Component } from "react";

import "./Education.css";
import EducationCard from "./EducationCard/EducationCard";

class Education extends Component {
  constructor(props) {
    super(props);

    this.educationData = [
      {
        key: 1,
        institution:
          "Interamerican University of Puerto Rico, Ponce Campus (UIPRP)",
        from: "August 2013",
        to: "May 2018",
        location: "Ponce, PR",
        degree: "Bachelor Degree in Computer Science",
        minorDegree: "Minor Degree in Network & Telecommunications",
        gpa: 3.87,
        gpaDescription: "SUMMA CUM LAUDE",
      },
      {
        key: 2,
        institution: "Luis Llorens Torres / High School",
        from: "August 2011",
        to: "May 2013",
        location: "Juana Díaz, PR",
        degree: "Electronics",
        minorDegree: null,
        gpa: 4.0,
        gpaDescription: null,
      },
    ];
  }

  render() {
    const cards = this.educationData.map((data) => (
      <EducationCard
        key={data.key}
        institution={data.institution}
        from={data.from}
        to={data.to}
        location={data.location}
        degree={data.degree}
        minorDegree={data.minorDegree}
        gpa={data.gpa}
        gpaDescription={data.gpaDescription}
      />
    ));

    return (
      <section className="education">
        <header>
          <h1>Education</h1>
        </header>
        <div>{cards}</div>
      </section>
    );
  }
}

export default Education;
