import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#C60021" }} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            IBA Sheduler
          </Typography>
          <Button color="inherit">Home</Button>
          <Link
            to="/shedule"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">Shedule</Button>
          </Link>
          <Link
            to="/courses"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">Courses</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
