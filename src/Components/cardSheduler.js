import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import CourseList from "./courseList.js";
import axios from "axios";

class cardSheduler extends Component {
  constructor() {
    super();
    this.state = {
      allCourses: ["Select Course"]
    };
  }
  componentDidMount() {
    axios
      .get("https://scheduleriba.herokuapp.com/getcourses/allcourse")
      .then(res =>
        this.setState({ allCourses: this.state.allCourses.concat(res.data) })
      );
  }
  render() {
    const style = {
      width: "90%",
      display: "grid",
      gridTemplateRows: "0.5fr 4fr"
    };
    const navStyle = {
      marginTop: "80px",
      backgroundColor: "#C60021",
      padding: "10px",
      textAlign: "center"
    };
    const listStyle = {};
    return (
      <div style={style}>
        {/* app bar start */}
        <div>
          <AppBar position="static" style={navStyle}>
            <Typography variant="h6">Shedule</Typography>
          </AppBar>
        </div>
        {/* app bar end */}
        {/* list starts */}
        <div>
          <List style={listStyle}>
            <CourseList courses={this.state.allCourses} />
          </List>
        </div>
        {/* list ends */}
      </div>
    );
  }
}

export default cardSheduler;
