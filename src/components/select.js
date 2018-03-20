import React from "react";

// MDC doesn't come prebuilt
// noinspection ES6CheckImport
import { MDCSelect } from "@material/select/dist/mdc.select.min";

// This ordering is _very important_ for the menu to show up right.
import "@material/list/dist/mdc.list.min.css";
import "@material/menu/dist/mdc.menu.min.css";
import "@material/select/dist/mdc.select.min.css";

import MDCBase from "./base";

export default class Select extends MDCBase {
  constructor(props) {
    super(props);

    this.state = {
      box: true
    };
  }

  getConstructor() {
    return MDCSelect;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ box: nextProps.box !== false });
  }

  render() {
    if (!this.props.options || this.props.options.length < 1) {
      return (
        <div className="mdc-select" role="listbox" aria-disabled="true">
          <div className="mdc-select__surface" tabIndex="-1">
            <div className="mdc-select__label">{this.props.label}</div>
            <div className="mdc-select__selected-text" />
            <div className="mdc-select__bottom-line" />
          </div>
          <div className="mdc-menu mdc-select__menu">
            <ul className="mdc-list mdc-menu__items" />
            <li
              className="mdc-list-item"
              aria-selected="false"
              role="option"
              tabIndex="0"
            >
              Example text, not visible.
            </li>
          </div>
        </div>
      );
    }

    const params = {
      className: "mdc-list-item",
      role: "option",
      tabIndex: "0"
    };

    const options = this.props.options.map((name, idx) => (
      <li {...params} key={idx}>
        {name}
      </li>
    ));

    let classes = "mdc-select";

    if (this.state.box) {
      classes += " mdc-select--box";
    }

    return (
      <div className={classes} role="listbox">
        <div className="mdc-select__surface" tabIndex="0">
          <div className="mdc-select__label">{this.props.label}</div>
          <div className="mdc-select__selected-text" />
          <div className="mdc-select__bottom-line" />
        </div>
        <div className="mdc-menu mdc-select__menu">
          <ul className="mdc-list mdc-menu__items">{options}</ul>
        </div>
      </div>
    );
  }
}
