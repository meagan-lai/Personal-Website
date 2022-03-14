import React from "react";
import a from "../images/title-letters/a.png";
import e from "../images/title-letters/e.png";
import g from "../images/title-letters/g.png";
import h from "../images/title-letters/h.png";
import i from "../images/title-letters/i.png";
import m from "../images/title-letters/m.png";
import n from "../images/title-letters/n.png";
import apostrophe from "../images/title-letters/comma.png";
import aDashed from "../images/title-letters/aDashed.png";
import eDashed from "../images/title-letters/eDashed.png";
import gDashed from "../images/title-letters/gDashed.png";
import hDashed from "../images/title-letters/hDashed.png";
import iDashed from "../images/title-letters/iDashed.png";
import mDashed from "../images/title-letters/mDashed.png";
import nDashed from "../images/title-letters/nDashed.png";
import apostropheDashed from "../images/title-letters/commaDashed.png";
import Icon from "@material-ui/core/Icon";
import { setInterval } from "timers";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    };
  }

  componentDidMount() {
    setInterval(() => this.changeLetter(), 1500);
  }
  changeLetter() {
    let newArray = this.state.letter;
    let count = Math.floor(Math.random() * 8);
    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * 11);
      newArray[index] = !newArray[index];
    }

    this.setState({ letter: newArray });
  }

  render() {
    return (
      <div
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "9.15%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <span className="image-word" style={{ marginRight: 35 }}>
            <img src={this.state.letter[0] ? hDashed : h} />

            <img src={this.state.letter[1] ? iDashed : i} />
          </span>
          <span className="image-word" style={{ marginRight: 35 }}>
            <img src={this.state.letter[2] ? iDashed : i} />
            <img
              className="apostrophe"
              src={this.state.letter[3] ? apostropheDashed : apostrophe}
            />
            <img src={this.state.letter[4] ? mDashed : m} />
          </span>

          <span className="image-word">
            <img src={this.state.letter[5] ? mDashed : m} />
            <img src={this.state.letter[6] ? eDashed : e} />
            <img src={this.state.letter[7] ? aDashed : a} />
            <img src={this.state.letter[8] ? gDashed : g} />
            <img src={this.state.letter[9] ? aDashed : a} />
            <img src={this.state.letter[10] ? nDashed : n} />
          </span>
        </div>

        <div
          style={{
            fontFamily: ["Saira Extra Condensed", "sans-serif"],
            fontSize: 30,
            color: "#605f5f",
            textAlign: "center"
          }}
        >
          Computing Consultant | Front-End Developer
        </div>

        <div
          align="middle"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "2.5%"
          }}
        >
          <Icon style={{ color: "white", margin: 10, fontSize: 40 }}>
            <span class="mdi mdi-language-javascript" />
          </Icon>
          <Icon style={{ color: "white", margin: 10, fontSize: 40 }}>
            <span class="mdi mdi-react" />
          </Icon>
          <Icon style={{ color: "white", margin: 10, fontSize: 40 }}>
            <span class="mdi mdi-language-python" />
          </Icon>
          <Icon style={{ color: "white", margin: 10, fontSize: 40 }}>
            <span class="mdi mdi-language-html5" />
          </Icon>
          <Icon style={{ color: "white", margin: 10, fontSize: 40 }}>
            <span class="mdi mdi-language-css3" />
          </Icon>
          <Icon style={{ color: "white", margin: 10, fontSize: 40 }}>
            <span class="mdi mdi-wordpress" />
          </Icon>
        </div>
      </div>
    );
  }
}

export default Home;
