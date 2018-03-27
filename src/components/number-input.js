import React from "react";
import Input from "./input";

export function validate(value) {
  const raw = (value || "").trim();

  if (!raw) {
    return true;
  }

  const intVal = parseInt(raw, 10);

  if (isNaN(intVal) || intVal === null) {
    return false;
  }

  if (this.props.min && intVal < this.props.min) {
    return false;
  }

  return !(this.props.max && intVal > this.props.max);
}

export default params => (
  <Input {...params} type={"number"} validator={validate} />
);
