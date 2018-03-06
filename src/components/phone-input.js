// noinspection ES6CheckImport
import PhoneNumberFormat, { PhoneNumberUtil } from "google-libphonenumber";

import Input from "./input";

export default class PhoneInput extends Input {
  constructor(props) {
    super(props);
    this.phoneUtil = PhoneNumberUtil.getInstance();
    this.currentNumber = null;
  }

  validate() {
    const raw = (this.mdcObject.value || "").trim();

    if (!raw) {
      this.mdcObject.valid = true;
      this.currentNumber = null;
      return;
    }

    let number, valid;
    try {
      number = this.phoneUtil.parse(raw, "US");
      valid = this.phoneUtil.isValidNumberForRegion(number, "US");
    } catch (e) {
      valid = false;
    } finally {
      this.currentNumber = valid ? number : null;
      this.mdcObject.valid = valid;
    }
  }

  format() {
    if (this.currentNumber) {
      this.mdcObject.value = this.phoneUtil.format(
        this.currentNumber,
        PhoneNumberFormat.NATIONAL
      );
    }
  }

  getNationalNumber() {
    return this.currentNumber ? this.currentNumber.getNationalNumber() : null;
  }

  getInputAttributes() {
    return {
      type: "tel",
      onChange: this.validate.bind(this),
      onBlur: this.format.bind(this)
    };
  }
}
