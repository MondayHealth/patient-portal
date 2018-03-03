import React, { Component } from "react";
import Input from "./components/input";
import Cell from "./components/cell";
import Select from "./components/select";
import TextArea from "./components/textarea";
import CheckBox from "./components/checkbox";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className={"hero"}>
          <div className="mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
              <Cell size={12}>
                <h1 className={"mdc-typography--display3"}>
                  Getting to know you
                </h1>
              </Cell>
              <Cell size={4}>
                <Input label={"First Name"} />
              </Cell>
              <Cell size={4}>
                <Input label={"Last Name"} />
              </Cell>
              <Cell size={4}>
                <Input label={"Phone Number"} />
              </Cell>
              <Cell size={4}>
                <Input label={"E-Mail"} />
              </Cell>
              <Cell size={4}>
                <Input label={"Age"} />
              </Cell>
              <Cell size={4}>
                <Select
                  label={"Gender"}
                  options={["Male", "Female", "Other"]}
                />
              </Cell>
              <Cell size={8}>
                <Input label={"The full name of your insurance plan"} />
              </Cell>
              <Cell size={4}>
                <Input label={"The most you can pay per appointment?"} />
              </Cell>
              <Cell size={2}>
                <Input label={"Your zip code"} />
              </Cell>
              <Cell size={4}>
                <Select
                  label={"Prefered therapist gender"}
                  options={["No Preference", "Male", "Female", "Other"]}
                />
              </Cell>
              <Cell size={4}>
                <Input label={"Language"} />
              </Cell>
              <Cell size={8}>
                <TextArea label={"Anything else you'd like to say"} />
              </Cell>
              <Cell size={8}>
                <CheckBox label={"Depression"} />
                <CheckBox label={"Anxiety"} />
                <CheckBox label={"Eating Disorders"} />
                <CheckBox label={"Trauma"} />
              </Cell>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
