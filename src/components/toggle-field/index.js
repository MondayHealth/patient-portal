import React, { Component } from "react";

import GridList from "../grid-list";
import Button from "../button";

import "./toggle-field.css";

export class ToggleField extends Component {
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
    if (this.props.onChange) {
      this.props.onChange(newArray);
    }
  }

  render() {
    const options = this.props.options;

    if (!options || !options.length) {
      return <div />;
    }

    const elts = options.map((elt, idx) => (
      <Button
        stroked
        key={idx}
        alternate={!!this.state.selected[idx]}
        onClick={() => this.toggle(idx)}
      >
        {elt}
      </Button>
    ));

    return (
      <div className={"toggle-field"}>
        <GridList>{elts}</GridList>
      </div>
    );
  }
}
