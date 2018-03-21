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

  return !(this.props.min && intVal < this.props.min);
}

export default params => (
  <Input {...params} type={"number"} validator={validate} />
);
