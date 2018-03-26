import React, { Component } from "react";
import { connect } from "react-redux";

import GridList from "../grid-list";
import Button from "../button";

import "./toggle-field.css";
import { fieldValidity, updateField } from "../../actions";

class ToggleField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: new Array(this.props.options ? this.props.options.length : 0)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.options !== nextProps.options) {
      this.setState({ selected: new Array(nextProps.options.length) });
    }
  }

  updateSelectionState(newSelection, fxn) {
    let anythingSelected = false;
    const ret = newSelection.map((val, idx) => {
      const ret = fxn(val, idx);
      if (ret) {
        anythingSelected = true;
      }
      return ret;
    });
    this.setState({ selected: ret });

    this.props.setValid(anythingSelected, this.props.id);

    return ret;
  }

  componentWillMount() {
    const id = this.props.id;

    if (!id) {
      throw new Error("ToggleField must have an ID");
    }

    const existing = this.props.formFields[id];
    if (existing) {
      this.updateSelectionState(existing, val => !!val);
    } else {
      this.props.setValid(false, this.props.id);
    }
  }

  toggle(idx) {
    const newArray = Array.from(this.state.selected);
    newArray[idx] = !newArray[idx];

    const ret = this.updateSelectionState(
      newArray,
      (val, idx) => (val ? this.props.options[idx] : false)
    );

    // Elevate state
    this.props.update(this.props.id, ret);
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

const mapStateToProps = state => {
  return { formFields: state.formFields };
};

const mapDispatchToProps = dispatch => {
  return {
    update: (key, value) => dispatch(updateField(key, value)),
    setValid: (valid, name) => dispatch(fieldValidity(valid, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleField);
