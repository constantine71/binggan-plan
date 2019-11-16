import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const RedirectSignedOut = () => {
  console.log("redirect called");
  const auth = useSelector(state => state.firebase.auth);
  if (!auth.uid) {
    console.log("uid is not exist");
    return <Redirect to="/signup" />;
  }
};

export default RedirectSignedOut;
