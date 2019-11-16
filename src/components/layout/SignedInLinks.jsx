import React from "react";
import { NavLink } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";

const SignedInLinks = () => {
  const firebase = useFirebase();
  const { initials } = useSelector(state => state.firebase.profile);

  // console.log(userProfile);
  const handleLogOut = () => {
    firebase
      .logout()
      .then(() => {
        console.log("successfully loged out");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New project</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={handleLogOut}>
          log out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {initials}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
