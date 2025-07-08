import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

export default class BottomBar extends Component {
  render() {
    return (
      <div
        align="middle"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "2.5%",
          justifySelf: "center"
        }}
      >
        <Tooltip title="Meagan-Lai@outlook.com" placement="bottom">
          <IconButton href="mailto:meagan-lai@outlook.com">
            <span class="mdi mdi-email-outline" style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Linkedin" placement="bottom">
          <IconButton
            href="https://www.linkedin.com/in/meagan-lai-600822131/"
            target="_blank"
          >
            <span class="mdi mdi-linkedin" style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub" placement="bottom">
          <IconButton href="https://github.com/meagan-lai" target="_blank">
            <span class="mdi mdi-github-circle" style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Devpost" placement="bottom">
          <IconButton href="https://devpost.com/meaganlai" target="_blank">
            <span class="mdi mdi-alpha-d-circle" style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}
