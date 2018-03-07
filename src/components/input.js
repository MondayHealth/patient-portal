import React from "react";
import MDCBase from "./base";
import { Icon } from "./icon";
import { MDCTextField } from "@material/textfield";

import "@material/form-field/dist/mdc.form-field.min.css";
import "@material/textfield/dist/mdc.textfield.min.css";

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
      validationMessage: null,
      leadingIcon: false,
      box: true
    };
  }

  getConstructor() {
    return MDCTextField;
  }

  getInputAttributes() {
    return {
      type: this.props.type || "text"
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      box: nextProps.box !== false,
      leadingIcon: nextProps.leadingIcon || false
    });
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
    if (this.state.box) {
      classes += " mdc-text-field--box";

      if (this.state.leadingIcon) {
        classes += " mdc-text-field--with-leading-icon";
        icon = <Icon name={this.state.leadingIcon} />;
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
