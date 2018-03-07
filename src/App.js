import React, { Component } from "react";
import Patient from "./forms/patient";
import ToolBar from "./components/toolbar";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ToolBar />
        <Patient />
      </div>
    );
  }
}

export default App;
