import React from "react";

// MDC doesn't come prebuilt
// noinspection ES6CheckImport
import { MDCGridList } from "@material/grid-list/dist/mdc.gridList.min";

import MDCBase from "./base";

import "@material/grid-list/dist/mdc.grid-list.min.css";

const Tile = ({ children, secondary }) => {
  const mod = secondary ? "secondary" : "primary";
  return (
    <li className={"mdc-grid-tile"}>
      <div className={`mdc-grid-tile__${mod}`}>
        <div className={`mdc-grid-tile__${mod}-content`}>{children}</div>
      </div>
    </li>
  );
};

export default class GridList extends MDCBase {
  getConstructor() {
    return MDCGridList;
  }

  render() {
    const tiles = React.Children.map(
      this.props.children,
      elt => <Tile>{elt}</Tile>,
      this
    );

    return (
      <div className="mdc-grid-list mdc-grid-list--tile-aspect-16x9">
        <ul className="mdc-grid-list__tiles">{tiles}</ul>
      </div>
    );
  }
}
