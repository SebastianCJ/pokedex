import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navBar-container">
      <a href="/">Home</a>
      <a href="/pokemon">Pokemon</a>
    </nav>
  );
};

export default NavBar;
