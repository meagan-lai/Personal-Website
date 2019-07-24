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
                  justifyContent: "center"
                }}
                className={this.state.activeBtn === "Home" ? "active" : null}
              >
                <img
                  src={home}
                  onMouseOver={e => (e.currentTarget.src = onHome)}
                  onMouseOut={e => (e.currentTarget.src = home)}
                />
              </Link>
              <img style={{ margin: 5 }} src={separator} />
              <Link
                to="/about"
                onClick={() => this.goTo("About")}
                style={{
                  height: 40,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
                className={this.state.activeBtn === "About" ? "active" : null}
              >
                <img
                  src={about}
                  onMouseOver={e => (e.currentTarget.src = onAbout)}
                  onMouseOut={e => (e.currentTarget.src = about)}
                />
              </Link>
              <img style={{ margin: 5 }} src={separator} />
              <Link
                to="/workplay"
                onClick={() => this.goTo("Projects")}
                style={{
                  height: 40,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
                className={
                  this.state.activeBtn === "Projects" ? "active" : null
                }
              >
                <img
                  src={workplay}
                  onMouseOver={e => (e.currentTarget.src = onWorkplay)}
                  onMouseOut={e => (e.currentTarget.src = workplay)}
                />
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