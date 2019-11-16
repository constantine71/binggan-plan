import React from "react";
import { useFirebase, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const SignIn = ({ history }) => {
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);

  if (!isLoaded(auth)) {
    return <h2>Loading....</h2>;
  }
  // if (isLoaded(auth)) {
  if (auth.uid) {
    console.log("uid is not exisssst");
    return <Redirect to="/" />;
  }
  // }

  const userCredential = {
    email: "",
    password: ""
  };
  const handleChange = e => {
    userCredential[e.target.id] = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(userCredential);
    firebase
      .login(userCredential)
      .then(() => {
        console.log("log success");
        history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form action="" className="transbox" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
