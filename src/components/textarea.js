import React from "react";
import MDCBase from "./base";
import { connect } from "react-redux";
// MDC doesn't come prebuilt
// noinspection ES6CheckImport
import { MDCTextField } from "@material/textfield/dist/mdc.textfield.min";

import "@material/textfield/dist/mdc.textfield.min.css";
import "@material/form-field/dist/mdc.form-field.min.css";
import { fieldValidity, updateField } from "../actions";

const MAX_CHARS = 512;

class TextArea extends MDCBase {
  constructor(props) {
    super(props);

    if (!this.props.id) {
      throw new Error("Must specify an ID with textarea.");
    }

    this.state = { count: 0 };

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  getConstructor() {
    return MDCTextField;
  }

  onKeyUp(evt) {
    const len = this.mdcObject.value.length;
    const valid = len <= MAX_CHARS;
    this.mdcObject.valid = valid;
    this.props.setValid(valid, this.props.id);
    this.props.update(evt);

    this.setState({ count: len });
  }

  render() {
    return (
      <label className="mdc-text-field mdc-text-field--textarea">
        <textarea
          id={this.props.id}
          className="mdc-text-field__input"
          rows="8"
          cols="40"
          onKeyUp={this.onKeyUp}
        />
        <span className="mdc-floating-label mdc-text-field__label">
          {this.props.label}{" "}
          <span className={"counter"}>
            ({this.state.count}/{MAX_CHARS})
          </span>
        </span>
      </label>
    );
  }
}

const mapStateToProps = state => {
  return { formFields: state.formFields };
};

const mapDispatchToProps = dispatch => {
  return {
    update: evt => {
      const target = evt.target;
      dispatch(updateField(target.id, target.value));
    },
    setValid: (valid, name) => dispatch(fieldValidity(valid, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
