import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProjectCard from "../components/ProjectCard";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import sustainifyApp from "../images/sustainifyApp.png";
import duhighApp from "../images/duhighApp.png";

const styles = {
  actions: {
    display: "flex"
  },
  appBar: {
    top: "auto",
    bottom: 60
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "center"
  }
};

function Projects(props) {
  const { classes } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      <ProjectCard
        projectImage={sustainifyApp}
        projectName="Sustainify"
        projectDescription="Mobile application allowing you to scan your waste materials and
        provides users instructions on how to properly dispose it. Placed
        1st at HackNYU."
        devpostLink="https://devpost.com/software/sustainify"
        githubLink="https://github.com/meagan-lai/Sustainify"
      />
      <ProjectCard
        projectImage={duhighApp}
        projectName="D.U.High"
        projectDescription="A law enforcement tool which uses AI combined with standard road
        side testing to predict whether the subject is intoxicated or
        sober."
        devpostLink="https://devpost.com/software/d-u-high"
        githubLink="https://github.com/meagan-lai/DUHigh"
      />
      <ProjectCard
        projectImage={sustainifyApp}
        projectName="SpeakRead"
        projectDescription="Web application to allow kids to learn to read and speak correctly through real-time speech recognition and natural language processing ."
        githubLink="https://github.com/meagan-lai/SpeakRead"
      />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar className={classes.toolbar}>
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
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
