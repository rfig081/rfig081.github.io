import React, { Component } from "react";
import "./EducationCard.css";

class EducationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institution: props.institution,
      from: props.from,
      to: props.to,
      degree: props.degree,
      highlights: props.highlights,
    };
  }

  render() {
    const highlightsList = this.state.highlights?.map((highlight) => (
      <li key={highlight.key}>- {highlight.data}</li>
    ));

    return (
      <div className={"education-card"}>
        <h2>{this.state.institution}</h2>
        <p>{this.state.degree}</p>
        <div className="education-card__time">
          {this.state.from} - {this.state.to}
        </div>
        <ul>{highlightsList}</ul>
      </div>
    );
  }
}

export default EducationCard;
