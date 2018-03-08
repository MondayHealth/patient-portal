import React from "react";
import MDCBase from "./base";
import { MDCLinearProgress } from "@material/linear-progress";

import "@material/linear-progress/dist/mdc.linear-progress.min.css";

export default class Progress extends MDCBase {
  getConstructor() {
    return MDCLinearProgress;
  }

  updateValue() {
    console.log(this.props.value, this.props.max);
    if (this.props.value <= 0 || this.props.max <= 0) {
      this.mdcObject.progress = 0;
    } else {
      this.mdcObject.progress = this.props.value / this.props.max;
    }
  }

  componentWillReceiveProps() {
    this.updateValue();
  }

  componentDidMount() {
    super.componentDidMount();
    this.updateValue();
  }

  render() {
    return (
      <div role="progressbar" className="mdc-linear-progress">
        <div className="mdc-linear-progress__buffering-dots" />
        <div className="mdc-linear-progress__buffer" />
        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span className="mdc-linear-progress__bar-inner" />
        </div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span className="mdc-linear-progress__bar-inner" />
        </div>
      </div>
    );
  }
}
