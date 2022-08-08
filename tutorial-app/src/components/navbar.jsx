import React, { Component } from "react";

const NavBar = props => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <span>{props.totalCounters}</span>
      </div>
    </nav>
  );
};

export default NavBar;
