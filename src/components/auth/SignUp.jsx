import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirebase, isLoaded } from "react-redux-firebase";

const SignUp = () => {
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);
  // const fire = useSelector(state => state.firebase);
  // console.log(fire);
  if (!isLoaded(auth)) {
    return <h2>Loading.....</h2>;
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
  const userProfile = {
    email: "",
    firstName: "",
    lastName: ""
  };

  const handleCredentialChange = e => {
    // console.log(e.target.id);
    const { id, value } = e.target;
    userCredential[id] = value;
  };
  const handleProfileChange = e => {
    // console.log(e.target.value);
    const { id, value } = e.target;
    userProfile[id] = value;
  };
  const handleChange = e => {
    handleCredentialChange(e);
    handleProfileChange(e);
  };
  const handleSubmit = e => {
    e.preventDefault();
    userProfile.initials = userProfile.firstName[0] + userProfile.lastName[0];
    // console.log(userProfile);
    // console.log(userCredential);
    firebase
      .createUser(userCredential, userProfile)
      .then(() => {
        console.log("successfully create a user");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <form action="" className="transbox" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            onChange={handleCredentialChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleProfileChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleProfileChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
