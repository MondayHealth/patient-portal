import React from "react";
import MDCBase from "./base";
import { MDCTextField } from "@material/textfield";

class TextArea extends MDCBase {
  getConstructor() {
    return MDCTextField;
  }

  render() {
    const id = this.props.label.toLowerCase().replace(" ", "-");
    return (
      <div className="mdc-text-field mdc-text-field--textarea">
        <textarea
          id={id}
          className="mdc-text-field__input"
          rows="8"
          cols="40"
        />
        <label htmlFor={id} className="mdc-text-field__label">
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default TextArea;
