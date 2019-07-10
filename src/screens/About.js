import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 60
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    position: "relative",
    paddingTop: 10,
    paddingLeft: 4,
    fontSize: 17,
    color: "white",
    textAlign: "center"
  },
  title: {
    position: "relative",
    fontSize: 30,
    color: "white",
    marginTop: -7,
    lineHeight: 1,
    paddingLeft: 4,
    textAlign: "center"
  }
});

function About(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <p className={classes.title}>Hey, I'm Meagan</p>
      <div className={classes.root}>
        <p>
          I'm a UX designer currently based in Waterloo. I'm currently working
          for Information Systems and Technology (IST) at the University of
          Waterloo.
        </p>
        <p>
          I love meeting new people - contact me if you like to chat over coffee
          or bubble tea!
        </p>
      </div>
      <Button variant="contained" className={classes.button}>
        Resumé
      </Button>
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
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
