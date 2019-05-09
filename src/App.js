import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import separator from "./images/menu/separator.png";
import home from "./images/menu/homeOffHover.png";
import about from "./images/menu/aboutOffHover.png";
import skills from "./images/menu/skillsOffHover.png";
import workplay from "./images/menu/workplayOffHover.png";
import contact from "./images/menu/contactOffHover.png";
import Home from "./screens/Home";
import About from "./screens/About";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <AppBar
            position="static"
            style={{
              background: "transparent",
              boxShadow: "none",
              display: "flex",
              flexDirection: "row-reverse"
            }}
          >
            <Toolbar>
              <Link to="/">
                <img src={home} />
              </Link>
              <img style={{ margin: 5 }} src={separator} />
              <Link to="/about">
                <img src={about} />
              </Link>
              <img style={{ margin: 5 }} src={separator} />
              <Link to="/skills">
                <img src={skills} />
              </Link>
              <img style={{ margin: 5 }} src={separator} />
              <Link to="/workplay">
                <img src={workplay} />
              </Link>
              <img style={{ margin: 5 }} src={separator} />
              <Link to="/contact">
                <img src={contact} />
              </Link>
            </Toolbar>
          </AppBar>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/workplay" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
