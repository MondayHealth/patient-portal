import React, { Component } from "react";
import Cell from "../components/cell";
import Grid from "../components/grid";
import Input from "../components/input";
import { ToggleField } from "../components/toggle-field";
import { Title } from "./title";

const options = [
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
        <Input label={"Let us know in your own words"} id={"other"} />
      </Cell>
    );

    return (
      <Grid>
        <Title>What's bothering you?</Title>
        <Cell size={12}>
          <ToggleField options={options} onChange={this.togglesChanged} />
        </Cell>
        {other}
      </Grid>
    );
  }
}
