import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

interface locationState {
  from?: pathname;
}
interface pathname {
  pathname: string;
}

const Loginpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const locationPath: locationState = location.state?.from;
  const fromPage = locationPath?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.userName.value;

    signin(user, () => navigate(fromPage, { replace: true }));
  };
  return (
    <>
      <div>
        <h1>Login page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="userName" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Loginpage;
