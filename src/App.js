import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import CardCourses from "./Components/cardCourses";
import CardShedule from "./Components/cardSheduler";
import Footer from "./Components/footer";
import Home from "./Components/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Route exact path="/" component={Home} />
          <Route exact path="/IBASheduler" component={Home} />
          <Route exact path="/courses" component={CardCourses} />
          <Route exact path="/schedule" component={CardShedule} />
          {/* <CardCourses /> */}
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
