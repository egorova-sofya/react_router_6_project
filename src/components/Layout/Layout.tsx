import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
// @ts-ignore
import CustomLink from "../CustomLink/CustomLink.tsx";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="headerWrapper">
          <CustomLink to={"/"}>Home</CustomLink>
          <CustomLink to={"/posts"}>Blog</CustomLink>
          <CustomLink to={"/about"}>About</CustomLink>

          {/* <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink HeaderLink" : "HeaderLink"
            }
            to="/about"
          >
            About
          </NavLink> */}
        </div>
      </header>
      <main className={s.container}>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
