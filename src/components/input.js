import React from "react";
import MDCBase from "./base";
import { Icon } from "./icon";
import { connect } from "react-redux";
import { fieldValidity, updateField } from "../actions";
// MDC doesn't come prebuilt
// noinspection ES6CheckImport
import { MDCTextField } from "@material/textfield/dist/mdc.textfield.min";

import "@material/textfield/dist/mdc.textfield.min.css";
import "@material/form-field/dist/mdc.form-field.min.css";

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
      leadingIcon: false,
      box: true
    };

    this.onChange = this.onChange.bind(this);
  }

  getConstructor() {
    return MDCTextField;
  }

  validate(dontUpdateMDCObject) {
    const value = this.mdcObject.value.trim();

    let valid = true;

    if (this.props.required && !value) {
      valid = false;
    } else if (this.props.validator) {
      valid = this.props.validator.call(this, value);
    }

    if (!dontUpdateMDCObject) {
      this.mdcObject.valid = valid;
    }

    this.props.setValid(valid, this.props.id);
  }

  onChange(evt) {
    this.validate();

    if (this.props.onChange) {
      this.props.onChange(evt);
    }

    if (this.mdcObject.valid) {
      this.props.update(evt);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      box: nextProps.box !== false,
      leadingIcon: nextProps.leadingIcon || false
    });

    this.mdcObject.required = !!nextProps.required;
  }

  componentDidMount() {
    super.componentDidMount();

    if (!this.props.id) {
      throw new Error("Must specify an ID for input components.");
    }

    const existingValue = this.props.formFields[this.props.id];
    if (existingValue) {
      this.mdcObject.value = existingValue;
    }

    this.mdcObject.required = this.props.required;

    this.validate(!existingValue);
  }

  generateParams() {
    const newParams = {
      id: this.props.id,
      type: this.props.type || "text",
      className: "mdc-text-field__input",
      onChange: this.onChange
    };

    if (this.props.min) {
      newParams.min = this.props.min;
    }

    if (this.props.onBlur) {
      newParams.onBlur = () => this.props.onBlur(this.mdcObject);
    }

    if (this.props.max) {
      newParams.max = this.props.max;
    }

    if (this.props.required) {
      newParams.required = true;
    }

    return newParams;
  }

  getHelper() {
    if (this.props.validationMessage) {
      return (
        <HelperText
          text={this.props.validationMessage}
          validation
          id={this.props.id}
        />
      );
    } else if (this.props.helperText) {
      return (
        <HelperText
          text={this.state.helperText}
          id={this.props.id}
          persistent={this.props.persistentHelperText}
        />
      );
    }

    return null;
  }

  render() {
    let classes = "mdc-text-field";
    let icon = null;
    if (this.state.box) {
      classes += " mdc-text-field--box";

      if (this.state.leadingIcon) {
        classes += " mdc-text-field--with-leading-icon";
        icon = <Icon name={this.state.leadingIcon} />;
      }
    }

    let ret = (
      <div className={classes}>
        {icon}
        <input {...this.generateParams()} />
        <label htmlFor={this.props.id} className="mdc-floating-label">
          {this.props.label}
        </label>
        <div className="mdc-line-ripple" />
      </div>
    );

    const helper = this.getHelper();

    return helper ? [ret, helper] : ret;
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

export default connect(mapStateToProps, mapDispatchToProps)(Input);
