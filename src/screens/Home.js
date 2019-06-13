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

export class Home extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        {/*how to keep words together if browser is smaller*/}
        <div
          align="middle"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <span className="image-word">
            <img
              src={h}
              onMouseOver={e => (e.currentTarget.src = hDashed)}
              onMouseOut={e => (e.currentTarget.src = h)}
            />

            <img
              src={i}
              onMouseOver={e => (e.currentTarget.src = iDashed)}
              onMouseOut={e => (e.currentTarget.src = i)}
            />
          </span>
          <span className="image-word">
            <img
              src={i}
              onMouseOver={e => (e.currentTarget.src = iDashed)}
              onMouseOut={e => (e.currentTarget.src = i)}
            />
            <img
              className="apostrophe"
              src={apostrophe}
              onMouseOver={e => (e.currentTarget.src = apostropheDashed)}
              onMouseOut={e => (e.currentTarget.src = apostrophe)}
            />
            <img
              src={m}
              onMouseOver={e => (e.currentTarget.src = mDashed)}
              onMouseOut={e => (e.currentTarget.src = m)}
            />
          </span>

          <span className="image-word">
            <img
              src={m}
              onMouseOver={e => (e.currentTarget.src = mDashed)}
              onMouseOut={e => (e.currentTarget.src = m)}
            />
            <img
              src={e}
              onMouseOver={i => (i.currentTarget.src = eDashed)}
              onMouseOut={i => (i.currentTarget.src = e)}
            />
            <img
              src={a}
              onMouseOver={e => (e.currentTarget.src = aDashed)}
              onMouseOut={e => (e.currentTarget.src = a)}
            />
            <img
              src={g}
              onMouseOver={e => (e.currentTarget.src = gDashed)}
              onMouseOut={e => (e.currentTarget.src = g)}
            />
            <img
              src={a}
              onMouseOver={e => (e.currentTarget.src = aDashed)}
              onMouseOut={e => (e.currentTarget.src = a)}
            />
            <img
              src={n}
              onMouseOver={e => (e.currentTarget.src = nDashed)}
              onMouseOut={e => (e.currentTarget.src = n)}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
