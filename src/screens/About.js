import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import profile from "../images/profile.jpg";
import BottomBar from "../components/BottomBar";
import Button from "@material-ui/core/Button";
import pdf from "../images/Resume.pdf";

const styles = theme => ({
  root: {
    position: "relative",
    paddingTop: 10,
    paddingLeft: 4,
    fontSize: 17,
    color: "white",
    textAlign: "left"
  },
  title: {
    position: "relative",
    fontSize: 30,
    color: "white",
    marginTop: 10,
    lineHeight: 1,
    paddingLeft: 4,
    textAlign: "left"
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 34,
    paddingRight: 34,
    borderRadius: 300
  }
});

function About(props) {
  const { classes } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingLeft: "10vw",
          paddingRight: "10vw"
        }}
      >
        <img
          src={profile}
          style={{ height: 482, paddingLeft: 17, paddingRight: 17 }}
        />
        <div style={{ paddingLeft: 17, paddingRight: 17 }}>
          <text className={classes.title}>Hey, I'm Meagan</text>
          <p className={classes.root}>
            I'm a front-end developer currently based in Waterloo. I'm currently
            working for Information Systems and Technology (IST) at the
            University of Waterloo.
          </p>
          <p className={classes.root}>
            I love meeting new people - contact me if you like to chat over
            coffee or bubble tea!
          </p>
          <div style={{ padding: 17, textAlign: "center" }}>
            <Button
              variant="contained"
              className={classes.button}
              href={pdf}
              target="_blank"
            >
              Resumé
            </Button>
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
