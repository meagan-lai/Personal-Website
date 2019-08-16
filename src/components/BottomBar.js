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
          position: "static",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "3.5%",
          bottom: 20,
          justifySelf: "center"
        }}
      >
        <Tooltip title="MeaganLai@hotmail.com" placement="bottom">
          <IconButton href="mailto:meaganlai@hotmail.com">
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
