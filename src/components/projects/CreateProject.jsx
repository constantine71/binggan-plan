import React from "react";
import { useFirestore, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import RedirectSignedOut from "../../utils/redirectSignedOut";

const CreateProject = ({ history }) => {
  const firestore = useFirestore();
  const auth = useSelector(state => state.firebase.auth);
  const { firstName, lastName } = useSelector(state => state.firebase.profile);
  // console.log(firstName, lastName);
  if (isLoaded(auth)) {
    if (!auth.uid) {
      console.log("uid is not exisssst");
      return <Redirect to="/signup" />;
    }
  } else {
    return <h2>Loading....</h2>;
  }

  const project = {
    title: "",
    content: "",
    authorFirstName: firstName,
    authorLastName: lastName,
    authorId: auth.uid,
    createdAt: null
  };
  // console.log(project.authorLastName, project.authorFirstName);
  const handleChange = e => {
    // this.setState({ [e.target.id]: e.target.value });
    project[e.target.id] = e.target.value;
  };
  const handleSubmit = e => {
    e.preventDefault();
    // console.log("passing this.state to createProject in mTop", this.state);
    // console.log(this.props);
    // this.props.createp(this.state);
    project.createdAt = new Date();
    firestore
      .collection("projects")
      .add(project)
      .then(() => {
        console.log("succefully created");
        history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      {/* {RedirectSignedOut()} */}
      <form className="transbox" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            className="materialize-textarea"
            id="content"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch => {
//   // console.log("mapdispatchtoprops called");
//   return {
//     createp: project => {
//       dispatch(createProject(project));
//     }
//   };
// };

// export default connect(null, mapDispatchToProps)(CreateProject);
export default CreateProject;
