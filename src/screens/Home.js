import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import separator from "../images/menu/separator.png";
import home from "../images/menu/homeOffHover.png";
import about from "../images/menu/aboutOffHover.png";
import skills from "../images/menu/skillsOffHover.png";
import workplay from "../images/menu/workplayOffHover.png";
import contact from "../images/menu/contactOffHover.png";
import a from "../images/title-letters/a.png";
import e from "../images/title-letters/e.png";
import g from "../images/title-letters/g.png";
import h from "../images/title-letters/h.png";
import i from "../images/title-letters/i.png";
import m from "../images/title-letters/m.png";
import n from "../images/title-letters/n.png";
import apostrophe from "../images/title-letters/comma.png";

export class Home extends React.Component {
  render() {
    return (
      <div>
        {/*used to hide letters when sliding*/}
        <div style={{ height: "20%" }} />
        {/*how to keep words together if browser is smaller*/}
        <div align="middle">
          <span className="image-word">
            <img src={h} />
            <img src={i} />
          </span>
          <span className="image-word">
            <img src={i} />
            <img className="apostrophe" src={apostrophe} />
            <img src={m} />
          </span>
          <span className="image-word">
            <img src={m} />
            <img src={e} />
            <img src={a} />
            <img src={g} />
            <img src={a} />
            <img src={n} />
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
