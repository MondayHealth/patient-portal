import React, { Component } from "react";
import Input from "./components/input";
import PhoneInput from "./components/phone-input";
import NumberInput from "./components/number-input";
import CurrencyInput from "./components/currency-input";
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
                <Input label={"First Name"} id={"first"} />
              </Cell>
              <Cell size={4}>
                <Input label={"Last Name"} id={"last"} />
              </Cell>
              <Cell size={4}>
                <PhoneInput label={"Phone Number"} id={"phone"} />
              </Cell>
              <Cell size={4}>
                <Input type={"email"} label={"E-Mail"} id={"email"} />
              </Cell>
              <Cell size={4}>
                <NumberInput min={1} max={100} label={"Age"} id={"age"} />
              </Cell>
              <Cell size={4}>
                <Select
                  label={"Gender"}
                  options={["Male", "Female", "Other"]}
                />
              </Cell>
              <Cell size={8}>
                <Input
                  label={"The full name of your insurance plan"}
                  id={"insurance"}
                />
              </Cell>
              <Cell size={4}>
                <CurrencyInput
                  label={"The most you can pay per appointment?"}
                  id={"max-spend"}
                />
              </Cell>
              <Cell size={2}>
                <Input label={"Your Zip Code"} id={"zip"} />
              </Cell>
              <Cell size={4}>
                <Select
                  label={"Prefered Therapist Gender"}
                  options={["No Preference", "Male", "Female", "Other"]}
                />
              </Cell>
              <Cell size={4}>
                <Input label={"Language"} id={"lang"} />
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
