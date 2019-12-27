import React from "react";
import "./style/navbarStyle.css";
import { Link } from "react-router-dom";

export default function sidebar() {
  const uncheckNav = e => {
    // console.log(e);
    document.getElementById("navi-toggle").checked = false;
  };
  return (
    <div className="sidebar" id="sidebar-nav">
      <ul className="sidebar-items">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={uncheckNav}
        >
          <li className="sidebar-item">Home</li>
        </Link>
        <Link
          to="/schedule"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={uncheckNav}
        >
          <li className="sidebar-item">Schedule</li>
        </Link>
        <Link
          to="/courses"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={uncheckNav}
        >
          <li className="sidebar-item">Courses</li>
        </Link>
      </ul>
    </div>
  );
}
