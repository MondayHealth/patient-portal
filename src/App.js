import React, { Component } from "react";
import Patient from "./forms/patient";
import DescribeProblem from "./forms/describe-problem";
import Provider from "./forms/provider";
import ToolBar from "./components/toolbar";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ToolBar />
        <main className="mdc-toolbar-fixed-adjust">
          <Patient />
          <DescribeProblem />
          <Provider />
        </main>
      </div>
    );
  }
}

export default App;
