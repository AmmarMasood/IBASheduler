import React from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const home = () => {
  const homeButton = {
    margin: "10px",
    padding: "10px 25px 10px 25px",
    backgroundColor: "#C60021"
  };
  return (
    <div className="home">
      <h1 className="home-text">Schedule your courses now</h1>
      <div className="home-buttons">
        <Link
          to="/schedule"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button style={homeButton} variant="contained" color="secondary">
            Schedule
          </Button>
        </Link>
        <Link
          to="/courses"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button style={homeButton} variant="contained" color="secondary">
            Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default home;
