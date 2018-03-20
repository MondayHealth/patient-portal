import React from "react";
import MDCBase from "./base";

// MDC doesn't come prebuilt
// noinspection ES6CheckImport
import { MDCTextField } from "@material/textfield/dist/mdc.textfield.min";

import "@material/textfield/dist/mdc.textfield.min.css";
import "@material/form-field/dist/mdc.form-field.min.css";

class TextArea extends MDCBase {
  getConstructor() {
    return MDCTextField;
  }

  render() {
    const id = this.props.label.toLowerCase().replace(" ", "-");
    return (
      <label className="mdc-text-field mdc-text-field--textarea">
        <textarea
          id={id}
          className="mdc-text-field__input"
          rows="8"
          cols="40"
        />
        <span className="mdc-floating-label mdc-text-field__label">
          {this.props.label}
        </span>
      </label>
    );
  }
}

export default TextArea;
