import React, { Component } from "react";
import Patient from "./forms/patient";
import DescribeProblem from "./forms/describe-problem";
import Provider from "./forms/provider";
import ToolBar from "./components/toolbar/index";
import StageDisplay from "./components/stage-display";
import Submitted from "./forms/submitted";

import "./app.css";
import {
  decrementPage,
  incrementPage,
  setPage,
  setPageMax,
  submit
} from "./actions";
import { connect } from "react-redux";

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
  }

  sheetSubmit(data) {
    const cleaned = { ...data };
    cleaned.problem = data.problem.filter(val => !!val);
    this.props.submit(cleaned);
  }

  nextClick() {
    if (this.props.currentPage === this.pages.length - 2) {
      this.sheetSubmit(this.props.formFields);
    }

    this.props.nextPage();
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
            prev={this.props.prevPage}
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
    formFields: state.formFields
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPage: idx => dispatch(setPage(idx)),
    nextPage: () => dispatch(incrementPage()),
    prevPage: () => dispatch(decrementPage()),
    setPageMax: max => dispatch(setPageMax(max)),
    submit: submit(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
