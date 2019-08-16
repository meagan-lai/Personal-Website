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
    fontSize: 15,
    color: "#332f2f",
    textAlign: "left"
  },
  title: {
    position: "relative",
    fontSize: 30,
    color: "#332f2f",
    lineHeight: 1,
    paddingLeft: 4,
    textAlign: "left",
    marginTop: 20
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
          paddingLeft: "10%",
          paddingRight: "10%",
          flexWrap: "wrap",
          width: "80%"
        }}
      >
        <img
          src={profile}
          style={{
            paddingLeft: 17,
            paddingRight: 17,
            display: "flex",
            height: 482
          }}
        />
        <div
          style={{
            width: 450,
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap"
          }}
        >
          <Typography variant="h5" className={classes.title}>
            {" "}
            <img src={wave} style={{ height: 40, color: "white" }} />
            Hey, I'm Meagan
          </Typography>
          <p style={{ fontSize: 12 }} />
          <Typography className={classes.root}>
            I'm a front-end developer based in Waterloo and I'm currently
            working for Information Systems and Technology (IST) at the
            University of Waterloo.
          </Typography>
          <p style={{ fontSize: 10 }} />
          <Typography className={classes.root}>
            I love what I do, because software development combines my three
            biggest passions in life:{" "}
            <text style={{ fontWeight: "bold" }}>Problem Solving</text>,{" "}
            <text style={{ fontWeight: "bold" }}>Learning</text>, and{" "}
            <text style={{ fontWeight: "bold" }}>Creativity</text>
          </Typography>
          <p style={{ fontSize: 10 }} />
          <Typography className={classes.root}>
            When I'm not developing software, you can find me learning about new
            technologies, attending hacking competitions, weightlifting, and
            playing boardgames with my friends.
          </Typography>
          <p style={{ fontSize: 10 }} />
          <Typography className={classes.root}>
            I love meeting new people - contact me if you like to chat over
            coffee or bubble tea!
          </Typography>
          <div style={{ margin: 20, textAlign: "center" }}>
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
