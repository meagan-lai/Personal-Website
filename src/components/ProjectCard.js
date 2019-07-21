import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const styles = {
  card: {
    maxWidth: 400,
    margin: 20,
    borderRadius: 15
  },
  media: {
    height: 300
  }
};

export default class ProjectCard extends Component {
  render() {
    return (
      <Card style={styles.card}>
        <CardActionArea href={this.props.devpostLink} target="_blank">
          <CardMedia style={styles.media} image={this.props.projectImage} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.projectName}
            </Typography>
            <Typography component="p" color="textSecondary">
              {this.props.projectDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {this.props.devpostLink ? (
            <Tooltip title="Devpost" placement="bottom">
              <IconButton
                color="#CCCCCC"
                href={this.props.devpostLink}
                target="_blank"
              >
                <span class="mdi mdi-alpha-d-circle" />
              </IconButton>
            </Tooltip>
          ) : null}

          <Tooltip title="GitHub" placement="bottom">
            <IconButton
              color="secondary"
              href={this.props.githubLink}
              target="_blank"
            >
              <span class="mdi mdi-github-circle" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    );
  }
}
