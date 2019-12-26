import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -30%)",
  width: "80%"
};
const currencies = [
  {
    name: "Course"
  },
  {
    name: "Computer Architecture & Assembly Language"
  },
  {
    name: "Theory of Automata"
  },
  {
    name: "Computer Communication & Networking"
  },
  {
    name: "Introduction to Artificial Intelligence"
  },
  {
    name: "Socioeconomic Philosophy of Islam"
  }
];
export default function CenteredGrid() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.root} style={style}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div>
              <AppBar
                style={{ backgroundColor: "#C60021", alignItems: "center" }}
                position="static"
              >
                <Toolbar>
                  <Typography variant="h6">Courses</Typography>
                </Toolbar>
              </AppBar>
              <Grid container spacing={3} style={{ marginTop: "2rem" }}>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Select Courses"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                      native: true
                    }}
                    helperText="Please select your course"
                    variant="outlined"
                  >
                    {currencies.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </TextField>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{
                      margin: "8px 8px 8px 8px",
                      backgroundColor: "#C60021"
                    }}
                  >
                    Get Details
                  </Button>
                </form>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
