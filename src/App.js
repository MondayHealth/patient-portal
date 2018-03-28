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
  submit, updateLocation
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

    this.props.setPageMax(this.pages.length);
    this.props.updateLocation(this.props.location);
  }

  sheetSubmit(data) {
    const cleaned = { ...data };
    cleaned.problem = data.problem.filter(val => !!val);
    event("submit");
    this.props.submit(cleaned);
  }

  prevClick() {
    // We don't want to leave any fields valid when we go back, otherwise we
    // won't be able to go forward. All entered data should put the state back
    // correctly when the user goes forward again.
    Object.keys(this.props.invalidFields).forEach(name =>
      this.props.valid(name)
    );

    event("prev", { from: this.props.currentPage });
    this.props.prevPage();
  }

  nextClick() {
    if (this.props.currentPage === this.pages.length - 2) {
      this.sheetSubmit(this.props.formFields);
    }

    event("next", { from: this.props.currentPage });
    this.props.nextPage();
  }

  componentDidMount() {
    event("mount");
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
    invalidFields: state.invalidFields
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
    updateLocation: (location) => dispatch(updateLocation(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
