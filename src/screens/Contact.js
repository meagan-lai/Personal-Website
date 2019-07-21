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
    bottom: 10,
    background: "transparent",
    boxShadow: "none",
    position: "absolute"
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "center"
  }
});

function Contact(props) {
  const { classes } = props;
  return (
    <div>
      <p> In Contact component</p>
      <AppBar className={classes.appBar}>
        <Toolbar
          className={classes.toolbar}
          style={{ margin: 10, paddingBottom: 50 }}
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
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contact);
