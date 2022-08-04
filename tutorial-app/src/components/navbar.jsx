import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <span>{this.props.totalCounters}</span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
