import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./style/navbarStyle.css";
import Sidebar from "./sidebar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const navbarLinks = () => {
    return (
      <>
        <div className="navbar-links">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            to="/schedule"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">Schedule</Button>
          </Link>
          <Link
            to="/courses"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">Courses</Button>
          </Link>
        </div>
        <div id="navbar-drawer">
          <input
            type="checkbox"
            className="sidebar-checkbox"
            id="navi-toggle"
          ></input>
          <Sidebar />
          <MenuIcon />
        </div>
      </>
    );
  };
  return (
    <div className={classes.root}>
      <AppBar
        style={{ backgroundColor: "#C60021" }}
        // position="static"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            IBA Scheduler
          </Typography>
          {navbarLinks()}
        </Toolbar>
      </AppBar>
    </div>
  );
}
