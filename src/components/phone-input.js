import React, { Component } from "react";
// noinspection ES6CheckImport
import PhoneNumberFormat, { PhoneNumberUtil } from "google-libphonenumber";

import Input from "./input";

const FORMAT = PhoneNumberFormat.NATIONAL;

export default class PhoneInput extends Component {
  constructor(props) {
    super(props);
    this.phoneUtil = PhoneNumberUtil.getInstance();
    this.currentNumber = null;
    this.validate = this.validate.bind(this);
    this.format = this.format.bind(this);
  }

  validate(value) {
    const raw = (value || "").trim();

    if (!raw) {
      this.currentNumber = null;
      return true;
    }

    let number, valid;
    try {
      number = this.phoneUtil.parse(raw, "US");
      valid = this.phoneUtil.isValidNumberForRegion(number, "US");
    } catch (e) {
      valid = false;
    } finally {
      this.currentNumber = valid ? number : null;
    }

    return valid;
  }

  format(mdcObject) {
    if (this.currentNumber) {
      mdcObject.value = this.phoneUtil.format(this.currentNumber, FORMAT);
    }
  }

  render() {
    return (
      <Input {...this.props} onBlur={this.format} validator={this.validate} />
    );
  }
}
