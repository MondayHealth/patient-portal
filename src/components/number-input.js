import Input from "./input";

export default class NumberInput extends Input {
  validate() {
    const raw = (this.mdcObject.value || "").trim();

    if (!raw) {
      this.mdcObject.valid = true;
      return;
    }

    const intVal = parseInt(raw, 10);

    if (isNaN(intVal) || intVal === null) {
      this.mdcObject.valid = false;
      return;
    }

    if (this.props.min && intVal < this.props.min) {
      this.mdcObject.valid = false;
      return;
    }
  }

  getInputAttributes() {
    const ret = {
      type: "number",
      onChange: this.validate.bind(this)
    };

    if (this.props.min) {
      ret.min = this.props.min;
    }

    if (this.props.max) {
      ret.max = this.props.max;
    }
    return ret;
  }
}
