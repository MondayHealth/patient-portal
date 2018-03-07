import React from "react";
import MDCBase from "./base";
import { MDCToolbar } from "@material/toolbar";

import "@material/toolbar/dist/mdc.toolbar.min.css";

const ToolBarSecion = ({ children }) => (
  <section className="mdc-toolbar__section">{children}</section>
);

const StepperContainer = () => (
  <div className="stepper-container mdc-toolbar__row">
    <ToolBarSecion>What's wrong</ToolBarSecion>
    <ToolBarSecion>Who you'd like to see</ToolBarSecion>
    <ToolBarSecion>About you</ToolBarSecion>
  </div>
);

export default class ToolBar extends MDCBase {
  constructor(props) {
    super(props);

    this.state = {
      fixed: true
    };
  }

  getConstructor() {
    return MDCToolbar;
  }

  render() {
    const title = "Monday Health";

    let classes = "mdc-toolbar";

    if (this.state.fixed) {
      classes += " mdc-toolbar--fixed";
      classes += " mdc-toolbar--waterfall";
      classes += " mdc-toolbar--fixed-lastrow-only";
    }

    return (
      <header className={classes}>
        <div id="top-toolbar" className="mdc-toolbar__row">
          <ToolBarSecion>
            <span className="mdc-toolbar__title">{title}</span>
          </ToolBarSecion>
        </div>
        <StepperContainer />
      </header>
    );
  }
}
