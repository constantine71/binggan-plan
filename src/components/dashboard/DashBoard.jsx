import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
// import { connect } from "react-redux";
// import RedirectSignedOut from "../../utils/redirectSignedOut";

const DashBoard = () => {
  // const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);
  if (isLoaded(auth)) {
    if (!auth.uid) {
      console.log("uid is not exisssst");
      return <Redirect to="/signup" />;
    }
  }
  // console.log(this.props);
  // const { projects } = this.props;
  // console.log(projects);
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          {/* <SomeComponent /> */}
          <ProjectList />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};
// const mapStateToProps = state => {
//   // console.log(state);
//   return {
//     projects: state.project.projects
//   };
// };

// const mapDispatchToProps = {};
export default DashBoard;

// export default connect(mapStateToProps)(DashBoard);
