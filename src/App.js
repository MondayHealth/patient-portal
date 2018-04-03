import React, { Component } from "react";
import { connect } from "react-redux";
import Patient from "./forms/patient";
import DescribeProblem from "./forms/describe-problem";
import Provider from "./forms/provider";
import ToolBar from "./components/toolbar/index";
import StageDisplay from "./components/stage-display";
import Submitted from "./forms/submitted";

import "./app.css";
import {
  decrementPage,
  fieldValidity,
  incrementPage,
  setPage,
  setPageMax,
  submit,
  updateLocation
} from "./actions";

import "@material/typography/dist/mdc.typography.min.css";
import { event } from "./gtag";

class App extends Component {
  constructor(props) {
    super(props);

    this.pages = [
      <DescribeProblem />,
      <Provider />,
      <Patient />,
      <Submitted />
    ];

    this.pageNamesForGA = ["problem", "provider", "patient", "submit"];

    this.props.setPageMax(this.pages.length);
    this.props.updateLocation(this.props.location);

    if (window.location.hostname !== "localhost") {
      window.onbeforeunload = this.beforeUnloadHandler.bind(this);
    }
  }

  beforeUnloadHandler() {
    if (
      Object.entries(this.props.formFields).length &&
      this.props.submissionState === "unsubmitted"
    ) {
      return "If you leave the page, you'll lose your changes! Is that ok?";
    }
  }

  sheetSubmit(data) {
    const cleaned = { ...data };
    cleaned.problem = data.problem.filter(val => !!val);
    event("submit", "form", "controller action", 0, true);
    this.props.submit(cleaned);
  }

  prevClick() {
    // We don't want to leave any fields valid when we go back, otherwise we
    // won't be able to go forward. All entered data should put the state back
    // correctly when the user goes forward again.
    Object.keys(this.props.invalidFields).forEach(name =>
      this.props.valid(name)
    );

    this.props.prevPage();
    event("prev", "navigation", "next", this.props.currentPage);
    setPage(this.pageNamesForGA[this.props.currentPage]);
  }

  nextClick() {
    this.props.nextPage();
    event("next", "navigation", "next", this.props.currentPage);
    setPage(this.pageNamesForGA[this.props.currentPage]);
    window.scrollTo(0, 0);

    if (this.props.currentPage === this.pages.length - 2) {
      this.sheetSubmit(this.props.formFields);
    }
  }

  componentDidMount() {
    event("mount", "load", "app", 1, true);
    setPage(this.pageNamesForGA[this.props.currentPage]);
  }

  componentWillUnmount() {
    window.onbeforeunload = null;
  }

  render() {
    return (
      <div className="app">
        <ToolBar />
        <main className="mdc-toolbar-fixed-adjust">
          {this.pages[this.props.currentPage]}
        </main>
        {this.props.currentPage < this.pages.length - 1 ? (
          <StageDisplay
            current={this.props.currentPage}
            max={this.pages.length}
            prev={this.prevClick.bind(this)}
            next={this.nextClick.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.page.index,
    formFields: state.formFields,
    invalidFields: state.invalidFields,
    submissionState: state.submission.state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPage: idx => dispatch(setPage(idx)),
    nextPage: () => dispatch(incrementPage()),
    prevPage: () => dispatch(decrementPage()),
    setPageMax: max => dispatch(setPageMax(max)),
    submit: submit(dispatch),
    valid: name => dispatch(fieldValidity(true, name)),
    updateLocation: location => dispatch(updateLocation(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
