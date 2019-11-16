import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  const { authorLastName, authroFirstName, createdAt } = project;
  return (
    <div className="card z-depth-0 project-summary transbox">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          posted by {authorLastName} {authroFirstName}
        </p>
        <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
