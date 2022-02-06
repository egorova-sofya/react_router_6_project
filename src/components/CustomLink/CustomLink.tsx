import React from "react";
import { Link, useMatch } from "react-router-dom";
import s from "./CustomLink.module.css";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <>
      <Link
        className={s.HeaderLink}
        style={match ? { color: "#1985a1" } : { color: "#fff" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
