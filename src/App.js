import React, { Component } from "react";
import Patient from "./forms/patient";
import DescribeProblem from "./forms/describe-problem";
import Provider from "./forms/provider";
import ToolBar from "./components/toolbar";
import StageDisplay from "./forms/stage-display";

import "./app.css";
import { decrementPage, incrementPage, setPage, setPageMax } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.pages = [<DescribeProblem />, <Provider />, <Patient />];
    this.props.setPageMax(this.pages.length);
  }

  render() {
    return (
      <div className="app">
        <ToolBar />
        <main className="mdc-toolbar-fixed-adjust">
          {this.pages[this.props.currentPage]}
        </main>
        <StageDisplay
          current={this.props.currentPage}
          max={this.pages.length}
          prev={this.props.prevPage}
          next={this.props.nextPage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.page.index
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPage: idx => dispatch(setPage(idx)),
    nextPage: () => dispatch(incrementPage()),
    prevPage: () => dispatch(decrementPage()),
    setPageMax: max => dispatch(setPageMax(max))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
