import React from "react";
import MDCBase from "./base";
import { MDCCheckbox } from "@material/checkbox";

import "@material/checkbox/dist/mdc.checkbox.min.css";

class CheckBox extends MDCBase {
  getConstructor() {
    return MDCCheckbox;
  }

  render() {
    const id = this.props.label.toLowerCase().replace(" ", "-");
    return (
      <div className={"mdc-form-field"}>
        <div className="mdc-checkbox">
          <input
            type="checkbox"
            id={id}
            className="mdc-checkbox__native-control"
          />
          <div className="mdc-checkbox__background">
            <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
              <path
                className="mdc-checkbox__checkmark-path"
                fill="none"
                stroke="white"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"
              />
            </svg>
            <div className="mdc-checkbox__mixedmark" />
          </div>
        </div>

        <label htmlFor={id}>{this.props.label}</label>
      </div>
    );
  }
}

export default CheckBox;
