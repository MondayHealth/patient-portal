import React, { Component } from "react";
import Cell from "../components/cell";
import Grid from "../components/grid";
import Input from "../components/input";
import { ToggleField } from "../components/toggle-field";

const toggleOptions = [
  "Depression",
  "Anxiety",
  "Eating Disorders",
  "Trauma",
  "Relationship Issues",
  "Family Issues",
  "Career Counseling",
  "Other..."
];

export default class DescribeProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false
    };

    this.togglesChanged = this.togglesChanged.bind(this);
  }

  togglesChanged(newValues) {
    this.setState({ inputVisible: !!newValues[newValues.length - 1] });
  }

  render() {
    const other = !this.state.inputVisible ? null : (
      <Cell size={12}>
        <Input label={"What else is going on?"} id={"other"} />
      </Cell>
    );

    return (
      <Grid>
        <Cell size={12}>
          <h1 className={"mdc-typography--display3"}>What's bothering you?</h1>
        </Cell>
        <Cell size={12}>
          <ToggleField options={toggleOptions} onChange={this.togglesChanged} />
        </Cell>
        {other}
      </Grid>
    );
  }
}
