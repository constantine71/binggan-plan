import React from "react";
import ProjectSummary from "./ProjectSummary";
import { useFirestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProjectList = () => {
  useFirestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] }
  ]);
  const projects = useSelector(state => state.firestore.ordered.projects);
  if (!isLoaded(projects)) {
    return <div>loading....</div>;
  }
  if (isEmpty(projects)) {
    return <div>Now projects available</div>;
  }
  // console.log(projects);
  const projectList = projects.map(p => (
    <Link to={"/project/" + p.id} key={p.id}>
      <ProjectSummary project={p} />
    </Link>
  ));
  return <div className="project-list section">{projectList}</div>;
};

export default ProjectList;
