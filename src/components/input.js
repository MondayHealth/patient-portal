import React from "react";

import MDCBase from "./base";

import { MDCTextField } from "@material/textfield";

const HelperText = ({ id, text, validation, persistent }) => {
  let classes = "mdc-text-field-helper-text";

  if (validation) {
    classes += " mdc-text-field-helper-text--validation-msg";
  }

  if (persistent) {
    classes += " mdc-text-field-helper-text--persistent";
  }

  return (
    <p id={id + "-helper-text"} className={classes} aria-hidden="true">
      {text}
    </p>
  );
};

class Input extends MDCBase {
  constructor(props) {
    super(props);

    this.state = {
      validationMessage: null
    };

    this.box = false;
    this.leadingIcon = false;
  }

  getConstructor() {
    return MDCTextField;
  }

  getInputAttributes() {
    return {
      type: this.props.type || "text"
    };
  }

  render() {
    const id = this.props.id;
    const params = this.getInputAttributes();
    params.id = id;
    params.className = "mdc-text-field__input";

    if (this.props.onChange) {
      params.onChange = this.props.onChange;
    }

    let classes = "mdc-text-field";
    let icon = "";
    if (this.box || this.props.box) {
      classes += " mdc-text-field--box";

      const iconName = this.props.leadingIcon || this.leadingIcon;
      if (iconName) {
        classes += " mdc-text-field--with-leading-icon";
        icon = (
          <i className="material-icons mdc-text-field__icon" tabIndex="0">
            {iconName}
          </i>
        );
      }
    }

    let helper = null;

    if (this.state.validationMessage) {
      helper = (
        <HelperText text={this.state.validationMessage} validation id={id} />
      );
    } else if (this.props.helperText) {
      helper = (
        <HelperText
          text={this.state.helperText}
          id={id}
          persistent={this.props.persistentHelperText}
        />
      );
    }

    let ret = (
      <label className={classes}>
        {icon}
        <span className="mdc-text-field__label">{this.props.label}</span>
        <input {...params} />
        <div className="mdc-line-ripple" />
      </label>
    );

    return helper ? [ret, helper] : ret;
  }
}

export default Input;
