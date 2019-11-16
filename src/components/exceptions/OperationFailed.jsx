import React from "react";
import { Link } from "react-router-dom";

const OperationFailed = () => {
  return (
    <div>
      <h2>Some thing went wrong click button to go home</h2>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default OperationFailed;
