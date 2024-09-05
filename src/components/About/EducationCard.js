import React from "react";

function EducationCard({ logo, date, school, degree, percentage, achievements }) {
  return (
    <div className="education-card">
      <div className="education-header">
        <img src={logo} alt={`${school} logo`} className="school-logo" />
        <div className="school-info">
          <h3>{school}</h3>
          <p className="date">{date}</p>
        </div>
      </div>
      <div className="education-body">
        <p className="school">{degree}</p>
        {percentage && <p className="percentage">{percentage}</p>}
        {achievements && <p className="achievements">{achievements}</p>}
      </div>
    </div>
  );
}

export default EducationCard;