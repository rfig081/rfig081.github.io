import React, { Component } from "react";
import "./EducationCard.css";
import "../../../Animations.css";

class EducationCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      hover: false,
      institution: props.institution,
      from: props.from,
      to: props.to,
      degree: props.degree,
      highlights: props.highlights,
    };
  }

  hoverOn = () => {
    this.setState({ hover: true });
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };

  render() {
    const highlightsList = this.state.highlights?.map((highlight) => (
      <li key={highlight.key}>- {highlight.data}</li>
    ));

    return (
      <div
        className={
          this.state.hover
            ? "education-card slide-fwd-center"
            : "education-card"
        }
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      >
        <h3>{this.state.institution}</h3>
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
