import React, { Component } from "react";

import Grid from "./grid";
import Cell from "./cell";
import Button from "./button";

import "./toggle-field.css";

const sizes = [
  { size: 3, device: "desktop" },
  { size: 3, device: "tablet" },
  { size: 2, device: "phone" }
];

export default class ToggleField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: new Array(0)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.options !== nextProps.options) {
      this.setState({ selected: new Array(nextProps.options.length) });
    }
  }

  toggle(idx) {
    const newArray = Array.from(this.state.selected);
    newArray[idx] = !newArray[idx];
    this.setState({ selected: newArray });
  }

  render() {
    const options = this.props.options;

    if (!options || !options.length) {
      return <div />;
    }

    const elts = options.map((elt, idx) => (
      <Cell sizes={sizes} key={idx}>
        <Button
          stroked
          alternate={!!this.state.selected[idx]}
          onClick={() => this.toggle(idx)}
        >
          {elt}
        </Button>
      </Cell>
    ));

    return (
      <div className={"toggle-field"}>
        <Grid>{elts}</Grid>
      </div>
    );
  }
}
