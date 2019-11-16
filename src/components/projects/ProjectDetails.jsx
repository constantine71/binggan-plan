import React from "react";
import {
  useFirestoreConnect,
  isLoaded,
  useFirestore
} from "react-redux-firebase";
import { useSelector } from "react-redux";
import { isEmpty } from "@firebase/util";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  useFirestoreConnect([{ collection: "projects" }]);
  const firestore = useFirestore();
  const projects = useSelector(state => state.firestore.ordered.projects);
  const auth = useSelector(state => state.firebase.auth);

  if (!isLoaded(auth)) {
    return <h2>Project Details are Loading....</h2>;
  } else {
    if (!auth.uid) {
      console.log("uid is not exist");
      return <Redirect to="/signup" />;
    }
  }

  if (!isLoaded(projects)) {
    return <div>Loading...</div>;
  }
  if (isEmpty(projects)) {
    return <div>some thing went wrong</div>;
  }
  // console.log(projects);
  // console.log(props);
  const id = props.match.params.id;
  // console.log(id);
  const project = projects.find(p => p.id === id);
  // console.log(project);
  const {
    title,
    content,
    authorFirstName,
    authorLastName,
    createdAt
  } = project;

  console.log(createdAt.toDate().toString());
  const handleDelete = id => {
    console.log("want to delete:" + id);
    firestore
      .delete("projects/" + id)
      .then(() => {
        console.log("delete complete");
      })
      .catch(err => {
        console.log(err);
        return <Redirect to="/failed" />;
      });
  };

  return (
    <div className="container section project-details">
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div>{content}</div>
      </div>
      <div className="card-action lighten-4 grey-text">
        <div>
          create by {authorFirstName} {authorLastName}
        </div>
        <div>{moment(createdAt.toDate()).calendar()}</div>
      </div>
      <Link to="/">
        <button onClick={() => handleDelete(id)}>Delete</button>
      </Link>
    </div>
  );
};

export default ProjectDetails;
