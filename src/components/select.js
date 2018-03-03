import React from "react";
import { MDCSelect } from "@material/select";

import MDCBase from "./base";

export default class Select extends MDCBase {
  getConstructor() {
    return MDCSelect;
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
            <li className="mdc-list-item" role="option" tabIndex="0">
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

    return (
      <div className="mdc-select" role="listbox">
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
