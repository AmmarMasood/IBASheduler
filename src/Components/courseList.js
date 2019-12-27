import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
// import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Button from "@material-ui/core/Button";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";

class CourseList extends Component {
  constructor() {
    super();
    this.state = {
      currentCourse: "",
      currentTeacher: "",
      teachers: ["Select Teachers"],
      selectedCourses: []
    };
  }

  render() {
    const removeCourseFromSeletedCourses = e => {
      console.log(e);

      this.setState({
        selectedCourses: this.state.selectedCourses.filter(function(item) {
          return item.key !== e.key;
        })
        // selectedCourses: this.state.selectedCourses.splice(e.key, e.key)
      });
    };
    const displaySelectedCourses = () => {
      return this.state.selectedCourses.map(course => {
        return (
          <div>
            <div style={formStyle}>
              <ListItem alignItems="flex-start">{course.name}</ListItem>
              <ListItem alignItems="flex-start">{course.teacher}</ListItem>
              <Button
                onClick={() => removeCourseFromSeletedCourses(course)}
                variant="contained"
                color="secondary"
              >
                Remove
              </Button>
            </div>
            <Divider variant="inset" component="li" />
          </div>
        );
      });
    };

    const formStyle = {
      display: "grid",
      color: "black",
      gridTemplateColumns: "1fr 1fr 0.5fr",
      gridGap: "5px",
      justifyContent: "center",
      alignItems: "center"
    };
    const button = {
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    };
    const buttonStyle = {
      margin: "10px",
      textAlign: "center"
    };
    const courseListHandle = s => {
      this.setState(
        {
          currentCourse: s.target.value
        },
        () => {
          axios
            .get(
              `https://scheduleriba.herokuapp.com/getcourses/teacher?CourseName=${this.state.currentCourse}`
            )
            .then(res =>
              res.data
                ? this.setState(
                    {
                      teachers: res.data
                      // currentTeacher: "Select a teacher"
                    },
                    () =>
                      this.setState({ currentTeacher: this.state.teachers[0] })
                  )
                : this.setState({ teachers: ["No teachers found"] })
            );
        }
      );
    };
    const teacherListHandle = s => {
      this.setState({ currentTeacher: s.target.value });
    };
    const handleAddCourse = s => {
      const course = {
        key: this.state.selectedCourses.length,
        name: this.state.currentCourse,
        teacher: this.state.currentTeacher
      };
      if (
        this.state.currentCourse.length > 0 &&
        this.state.currentTeacher.length > 0
      ) {
        this.setState({
          selectedCourses: this.state.selectedCourses.concat(course)
        });
      } else {
        console.log("Please select something");
      }
    };
    const courses = this.props;
    const teachers = this.state.teachers;
    if (!courses.courses[1]) {
      console.log(courses.courses);
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <CircularProgress color="secondary" />;
        </div>
      );
    } else {
      return (
        <div>
          {/* List item start */}
          <ListItem>
            {/*  Form start*/}
            <form noValidate autoComplete="off">
              <div style={formStyle}>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="Courses"
                  // defaultValue={this.state.currentCourse}
                  value={this.state.currentCourse}
                  onChange={courseListHandle}
                  SelectProps={{
                    native: true
                  }}
                  helperText=""
                  variant="outlined"
                >
                  {courses.courses.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="outlinedd-select-currency-native"
                  select
                  label="Teacher"
                  // defaultValue={this.state.currentTeacher}
                  value={this.state.currentTeacher}
                  onChange={teacherListHandle}
                  SelectProps={{
                    native: true
                  }}
                  helperText=""
                  variant="outlined"
                >
                  {teachers.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
                <div style={button}>
                  <Button
                    onClick={handleAddCourse}
                    variant="outlined"
                    color="secondary"
                  >
                    Add {"   "}
                    <AddCircleTwoToneIcon />
                  </Button>
                </div>
              </div>
            </form>

            {/* Form end */}
          </ListItem>
          <Divider />
          {/* List item end */}
          {displaySelectedCourses()}
          <div style={buttonStyle}>
            <Button variant="outlined" color="secondary">
              Schedule
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default CourseList;
