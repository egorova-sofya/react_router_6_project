import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Aboutpage = () => {
  return (
    <>
      <div>Aboutpage</div>
      <ul>
        <li>
          <Link to="contacts">Contacts</Link>
        </li>
        <li>
          <Link to="team">Our team</Link>
        </li>
      </ul>
      <Outlet />
      {/* <Routes> */}
      {/* <Route path="contacts" element={<p>Contacts</p>}/>
        <Route path="team" element={<p>Our team</p>}/> */}
      {/* </Routes> */}
    </>
  );
};

export default Aboutpage;
