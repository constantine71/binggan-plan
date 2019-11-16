import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { useSelector } from "react-redux";

const NavBar = () => {
  const auth = useSelector(state => state.firebase.auth);
  // console.log(auth);
  const showLinks = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Binggan Plan
        </Link>
        {showLinks}
      </div>
    </nav>
  );
};

export default NavBar;
