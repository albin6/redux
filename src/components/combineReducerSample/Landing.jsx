import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h3>Landing</h3>
      <Link to={"/counterOne"}>Counter One</Link>&nbsp;&nbsp;&nbsp;
      <Link to={"/counterTwo"}>Counter Two</Link>
    </div>
  );
}

export default Landing;
