import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Createpost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    signout(() => navigate("/"), { replace: true });
  };
  return (
    <>
      <div>Createpost</div>
      <button onClick={handleClick} type="button">
        Log out
      </button>
    </>
  );
};

export default Createpost;
