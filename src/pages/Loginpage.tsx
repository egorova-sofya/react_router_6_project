import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface locationState {
  from?: pathname;
}

interface pathname {
  pathname: string;
}

const Loginpage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const locationPath: locationState = location.state.from;

  const fromPage = locationPath?.pathname || "/";
  return (
    <>
      <div>
        <h1>Login page</h1>
        {fromPage}
      </div>
    </>
  );
};

export default Loginpage;
