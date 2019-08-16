import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import profile from "../images/profile.jpg";
import BottomBar from "../components/BottomBar";
import Button from "@material-ui/core/Button";
import pdf from "../images/Resume.pdf";
import Typography from "@material-ui/core/Typography";
import wave from "../images/wave.png";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#55C6C6"
    }
  }
});

const styles = theme => ({
  root: {
    position: "relative",
    paddingTop: 10,
    paddingLeft: 4,
    fontSize: 17,
    color: "#332f2f",
    textAlign: "left",
    fontFamily: ["Karla", "sans-serif"]
  },
  title: {
    position: "relative",
    fontSize: 30,
    color: "#332f2f",
    marginTop: 10,
    lineHeight: 1,
    paddingLeft: 4,
    textAlign: "left",
    fontFamily: ["Open Sans", "sans-serif"]
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 34,
    paddingRight: 34,
    borderRadius: 300,
    margin: 30
  }
});

function About(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
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
        <div style={{ paddingLeft: 17, paddingRight: 17, width: "40%" }}>
          <text className={classes.title}>
            {" "}
            <img src={wave} style={{ height: 40, color: "white" }} />
            Hey, I'm Meagan
          </text>
          <p className={classes.root}>
            I'm a front-end developer based in Waterloo and I'm currently
            working for Information Systems and Technology (IST) at the
            University of Waterloo.
          </p>
          <p className={classes.root}>
            I love what I do, because software development combines my three
            biggest passions in life:{" "}
            <text style={{ fontWeight: "bold" }}>Problem Solving</text>,{" "}
            <text style={{ fontWeight: "bold" }}>Learning</text>, and{" "}
            <text style={{ fontWeight: "bold" }}>Creativity</text>
          </p>

          <p className={classes.root}>
            When I'm not developing software, you can find me learning about new
            technologies, attending hacking competitions, weightlifting, and
            playing boardgames with my friends.
          </p>
          <p className={classes.root}>
            I love meeting new people - contact me if you like to chat over
            coffee or bubble tea!
          </p>
          <div style={{ padding: 17, textAlign: "center" }}>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              href={pdf}
              target="_blank"
            >
              <Typography
                style={{
                  color: "white",
                  fontFamily: ["Open Sans", "sans-serif"],
                  fontWeight: 800,
                  fontSize: 13
                }}
              >
                R é s u m é
              </Typography>
            </Button>
          </div>
        </div>
      </div>

      <BottomBar />
    </MuiThemeProvider>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
