import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

const styles = theme => ({
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
    <div>
      <p className={classes.title}>Hey, I'm Meagan</p>
      <div className={classes.root}>
        <p>
          I'm a front-end developer currently based in Waterloo. I'm currently
          working for Information Systems and Technology (IST) at the University
          of Waterloo.
        </p>
        <p>
          I love meeting new people - contact me if you like to chat over coffee
          or bubble tea!
        </p>
      </div>
      <Button variant="contained" className={classes.button}>
        Resumé
      </Button>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
