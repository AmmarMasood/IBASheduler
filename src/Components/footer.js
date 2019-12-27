import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 150,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end"
  }
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        style={{
          backgroundColor: "#C60021",
          textAlign: "center",
          zIndex: "0"
        }}
      >
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            © Developed by{" "}
            <Button
              style={{ color: "#F6F6F8", fontSize: "15px" }}
              href="#"
              target="_blank"
            >
              WILL ADD LATER
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
