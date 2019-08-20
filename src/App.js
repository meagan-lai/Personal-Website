import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import separator from "./images/menu/separator.png";
import home from "./images/menu/homeOffHover.png";
import onHome from "./images/menu/homeOnHover.png";
import about from "./images/menu/aboutOffHover.png";
import onAbout from "./images/menu/aboutOnHover.png";
import workplay from "./images/menu/workplayOffHover.png";
import onWorkplay from "./images/menu/workplayOnHover.png";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Typography from "@material-ui/core/Typography";

const onMouseOver = event => {
  const el = event.target;
  let mouseOverOpacity = 0.5;
  el.style.opacity = mouseOverOpacity;
};
const onMouseOut = event => {
  const el = event.target;
  let mouseOutOpacity = 1;
  el.style.opacity = mouseOutOpacity;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeBtn: "Home"
    };
  }

  goTo(id) {
    this.setState({
      activeBtn: id
    });
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <AppBar
            position="static"
            style={{
              marginTop: 15,
              background: "#F9C333",
              boxShadow: "none",
              display: "flex",
              flexDirection: "row-reverse",
              marginBottom: 50
            }}
          >
            <Toolbar>
              <Link
                to="/"
                onClick={() => this.goTo("Home")}
                style={{
                  height: 40,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
                className={this.state.activeBtn === "Home" ? "active" : null}
              >
                <Typography
                  style={{
                    fontFamily: ["Oswald", "sans-serif"],
                    fontSize: 16,
                    color: "white",
                    fontWeight: 500
                  }}
                  onMouseOver={event => onMouseOver(event)}
                  onMouseOut={event => onMouseOut(event)}
                >
                  HOME
                </Typography>
              </Link>
              <img style={{ margin: 5 }} src={separator} />
              <Link
                to="/about"
                onClick={() => this.goTo("About")}
                style={{
                  height: 40,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
                className={this.state.activeBtn === "About" ? "active" : null}
              >
                <Typography
                  style={{
                    fontFamily: ["Oswald", "sans-serif"],
                    fontSize: 16,
                    color: "white",
                    fontWeight: 500
                  }}
                  onMouseOver={event => onMouseOver(event)}
                  onMouseOut={event => onMouseOut(event)}
                >
                  ABOUT
                </Typography>
              </Link>
              <img style={{ margin: 5 }} src={separator} />
              <Link
                to="/workplay"
                onClick={() => this.goTo("Projects")}
                style={{
                  height: 40,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
                className={
                  this.state.activeBtn === "Projects" ? "active" : null
                }
              >
                <Typography
                  style={{
                    fontFamily: ["Oswald", "sans-serif"],
                    fontSize: 16,
                    color: "white",
                    fontWeight: 500
                  }}
                  onMouseOver={event => onMouseOver(event)}
                  onMouseOut={event => onMouseOut(event)}
                >
                  WORK & PLAY
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />

          <Route path="/workplay" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
