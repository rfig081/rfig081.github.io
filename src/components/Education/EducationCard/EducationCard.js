import React from "react";
import "./EducationCard.css";

const EducationCard = ({
  institution,
  from,
  to,
  location,
  degree,
  minorDegree,
  gpa,
  gpaDescription,
}) => {
  return (
    <div className="education-card">
      <h1>{institution}</h1>
      <p>
        {from} - {to}
      </p>
      <p>{location}</p>
      <p>{degree}</p>
      <p>{minorDegree}</p>
      <p>{gpa}</p>
      <p>{gpaDescription}</p>
    </div>
  );
};

export default EducationCard;
