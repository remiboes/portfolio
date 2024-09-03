import React from "react";

function EducationCard({ logo, date, school, degree, percentage, achievements }) {
  return (
    <div className="education-card">
      <img src={logo} alt={`${degree} logo`} className="school-logo" />
      <div className="education-details">
        <h3>{school}</h3>
        <p className="date">{date}</p>
        <p className="school">{degree}</p>
        {percentage && <p className="percentage">{percentage}</p>}
        {achievements && <p className="achievements">{achievements}</p>}
      </div>
    </div>
  );
}

export default EducationCard;