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
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

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
              background: "transparent",
              boxShadow: "none",
              display: "flex",
              flexDirection: "row-reverse"
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
          <AppBar
            style={{
              top: "auto",
              bottom: 10,
              background: "transparent",
              boxShadow: "none",
              position: "absolute"
            }}
          >
            <Toolbar
              style={{
                margin: 10,
                paddingBottom: 50,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Tooltip title="MeaganLai@hotmail.com" placement="bottom">
                <IconButton color="inherit" href="mailto:meaganlai@hotmail.com">
                  <span class="mdi mdi-email-outline" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Linkedin" placement="bottom">
                <IconButton
                  color="inherit"
                  href="https://www.linkedin.com/in/meagan-lai-600822131/"
                  target="_blank"
                >
                  <span class="mdi mdi-linkedin" />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub" placement="bottom">
                <IconButton
                  color="inherit"
                  href="https://github.com/meagan-lai"
                  target="_blank"
                >
                  <span class="mdi mdi-github-circle" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Devpost" placement="bottom">
                <IconButton
                  color="inherit"
                  href="https://devpost.com/meaganlai"
                  target="_blank"
                >
                  <span class="mdi mdi-alpha-d-circle" />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </div>
      </Router>
    );
  }
}

export default App;
