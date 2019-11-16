import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not Found click to go home</h2>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
