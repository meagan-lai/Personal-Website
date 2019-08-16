import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import ProjectCard from "../components/ProjectCard";
import BottomBar from "../components/BottomBar";
import sustainify from "../images/newsustainify.png";
import readingbuddy from "../images/readingbuddy.png";
import duhighApp from "../images/duhighApp.png";

const styles = {
  actions: {
    display: "flex"
  }
};

function Projects(props) {
  const { classes } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        <ProjectCard
          projectImage={sustainify}
          projectName="Sustainify"
          projectDescription="Mobile application allowing you to scan your waste materials and
        provides users instructions on how and where to properly dispose it. Placed
        1st at HackNYU."
          devpostLink="https://devpost.com/software/sustainify"
          githubLink="https://github.com/meagan-lai/Sustainify"
        />
        <ProjectCard
          projectImage={readingbuddy}
          projectName="Reading Buddy"
          projectDescription="Web application to allow kids to learn to read and speak correctly through real-time speech recognition and natural language processing ."
          githubLink="https://github.com/meagan-lai/Reading-Buddy"
          siteLink="https://meagan-lai.github.io/Reading-Buddy/"
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
      </div>
      <BottomBar />
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
