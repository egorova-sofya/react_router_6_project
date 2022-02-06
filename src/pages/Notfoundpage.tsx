import React from "react";
import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <>
      <h2>Page is not found</h2>
      <Link to="/">Go home</Link>
    </>
  );
};

export default Notfoundpage;
