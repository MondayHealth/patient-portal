import React from "react";

import MDCBase from "./base";

import { MDCTextField } from "@material/textfield";

class Input extends MDCBase {
  getConstructor() {
    return MDCTextField;
  }

  render() {
    const id = this.props.label.toLowerCase().replace(" ", "-");
    return (
      <div className="mdc-text-field mdc-text-field--fullwidth">
        <input type="text" id={id} className="mdc-text-field__input" />
        <label className="mdc-text-field__label" htmlFor={id}>
          {this.props.label}
        </label>
        <div className="mdc-line-ripple" />
      </div>
    );
  }
}

export default Input;
