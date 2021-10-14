import React, { Component } from "react";

import "./Education.css";
import EducationCard from "./EducationCard/EducationCard";

class Education extends Component {
  constructor(props) {
    super(props);

    this.educationData = [
      {
        key: 1,
        institution: "Interamerican University of Puerto Rico",
        from: "August 2013",
        to: "May 2018",
        degree: "Bachelor Degree in Computer Science",
        highlights: [
          {
            key: 1,
            data: "Founder & President of Asociación de Investigación Informática",
          },
          { key: 2, data: "Vice President of ABACUS" },
        ],
      },
      {
        key: 2,
        institution: "Interamerican University of Puerto Rico",
        from: "August 2013",
        to: "May 2018",
        degree: "Minor Degree in Network & Telecommunications",
        highlights: [
          {
            key: 1,
            data: "Founder & President of Asociación de Investigación Informática",
          },
          { key: 2, data: "Vice President of ABACUS" },
        ],
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
        degree={data.degree}
        highlights={data.highlights}
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
