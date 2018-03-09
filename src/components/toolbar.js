import React from "react";

import "@material/toolbar/dist/mdc.toolbar.min.css";
import { MDCToolbar } from "@material/toolbar";
import MDCBase from "./base";
import { connect } from "react-redux";

function indicatorForState(state) {
  switch (state) {
    case "active":
      return (
        <div className={"circle"}>
          <span>?</span>
        </div>
      );

    case "complete":
      return (
        <div className={"circle"}>
          <i className="material-icons">check</i>
        </div>
      );

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

  if (idx > activePage) {
    return "incomplete";
  }

  return "complete";
}

const StepperContainer = ({ activePage }) => {
  const elts = sections.map((val, idx) => (
    <ToolBarSection key={idx} state={getState(idx, activePage)}>
      {val}
    </ToolBarSection>
  ));
  return <div className="stepper-container mdc-toolbar__row">{elts}</div>;
};

class ToolBar extends MDCBase {
  getConstructor() {
    return MDCToolbar;
  }

  render() {
    const title = "Monday";

    let classes = "mdc-toolbar";
    classes += " mdc-toolbar--fixed";
    classes += " mdc-toolbar--waterfall";
    classes += " mdc-toolbar--fixed-lastrow-only";

    return (
      <header className={classes}>
        <div id="top-toolbar" className="mdc-toolbar__row">
          <section className="mdc-toolbar__section">
            <span className="mdc-toolbar__title">{title}</span>
          </section>
        </div>
        <StepperContainer activePage={this.props.currentPage} />
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.page.index
  };
};

export default connect(mapStateToProps)(ToolBar);
