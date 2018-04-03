import React from "react";

import { MDCToolbar } from "@material/toolbar/dist/mdc.toolbar.min";
import MDCBase from "../base";
import { connect } from "react-redux";

import "@material/toolbar/dist/mdc.toolbar.min.css";
import "./toolbar.css";

function indicatorForState(state) {
  switch (state) {
    case "active":
      return (
        <div className={"circle"}>
          <div className={"circle center"} />
        </div>
      );

    case "complete":
      return (
        <div className={"circle"}>
          <i className="material-icons">check</i>
        </div>
      );

    case "submitted":
      return null;

    default:
      return <div className={"circle"} />;
  }
}

const ToolBarSection = ({ children, state }) => {
  const classes = "mdc-toolbar__section _mdc-toolbar__sub-section " + state;
  return (
    <section className={classes}>
      {indicatorForState(state)}
      <span>{children}</span>
    </section>
  );
};

const sections = ["What's wrong", "Who you'd like to see", "About you"];

function getState(idx, activePage) {
  if (idx === activePage) {
    return "active";
  }
  return idx < activePage ? "complete" : "incomplete";
}

const StepperContainer = ({ activePage }) => {
  let classes = "stepper-container mdc-toolbar__row";

  if (activePage === sections.length) {
    return (
      <div className={classes}>
        <ToolBarSection state={"submitted"}>Thank you</ToolBarSection>
      </div>
    );
  }

  const elts = sections.map((val, idx) => (
    <ToolBarSection key={idx} state={getState(idx, activePage)}>
      {val}
    </ToolBarSection>
  ));

  return <div className={classes}>{elts}</div>;
};

const TOOLBAR_CLASSES = [
  "mdc-toolbar",
  "mdc-toolbar--fixed",
  "mdc-toolbar--waterfall",
  "mdc-toolbar--fixed-lastrow-only",
  "mdc-toolbar--flexible",
  "mdc-toolbar--flexible-default-behavior",
  "mdc-toolbar--flexible-space-minimized",
  "mdc-toolbar--fixed-at-last-row"
].join(" ");

export const Bar = ({ children }) => (
  <header className={TOOLBAR_CLASSES}>
    <div id="top-toolbar" className="mdc-toolbar__row">
      <section className="mdc-toolbar__section">
        <span className="mdc-toolbar__title">
          <a href={"https://monday.health/"}>
            <img alt={"logo"} src={"/white-logo.png"} />
          </a>
        </span>
      </section>
    </div>
    {children}
  </header>
);

class ToolBar extends MDCBase {
  getConstructor() {
    return MDCToolbar;
  }

  render() {
    return (
      <Bar>
        <StepperContainer activePage={this.props.currentPage} />
      </Bar>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.page.index
  };
};

export default connect(mapStateToProps)(ToolBar);
