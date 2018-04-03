import React, { Component } from "react";
import { connect } from "react-redux";
import Cell from "../components/cell";
import Grid from "../components/grid";
import Input from "../components/input";
import ToggleField from "../components/toggle-field";
import { Title } from "./title";
import { fieldValidity, updateField } from "../actions";

const options = [
  "Depression",
  "Anxiety",
  "Eating Disorders",
  "Trauma",
  "Relationships",
  "Family Issues",
  "Career Counseling",
  "Something else ..."
];

const TOGGLE_ID = "problem";
const OTHER_ID = "other";

class DescribeProblem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVisible: false
    };

    const idx = this.getPreFillIndex();

    if (!this.props.formFields[TOGGLE_ID] && idx > -1) {
      const initialValue = new Array(options.length);
      initialValue[idx] = options[idx];
      this.props.setDefaults(initialValue);
    }
  }

  getPreFillIndex() {
    const param = this.props.params.prefill;
    return param === "other" ? options.length - 1 : options.indexOf(param);
  }

  updateFromToggleState(toggleState) {
    const inputVisible = toggleState && toggleState[toggleState.length - 1];

    this.setState({ inputVisible });

    if (!inputVisible) {
      this.props.setValid(true, OTHER_ID);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updateFromToggleState(nextProps.formFields[TOGGLE_ID]);
  }

  componentDidMount() {
    this.updateFromToggleState(this.props.formFields[TOGGLE_ID]);
  }

  render() {
    const other = !this.state.inputVisible ? null : (
      <Cell size={12}>
        <Input
          required
          scrollWhenMounted
          label={"Tell us what's wrong"}
          id={OTHER_ID}
        />
      </Cell>
    );

    return (
      <Grid>
        <Title text={"What's bothering you?"}>
          Select one or more of the following issues, or click "Something
          Else..." to describe how you're feeling in your own words.
        </Title>
        <Cell size={12}>
          <ToggleField id={TOGGLE_ID} options={options} />
        </Cell>
        {other}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { formFields: state.formFields, params: state.location.params };
};

const mapDispatchToProps = dispatch => {
  return {
    setValid: (valid, name) => dispatch(fieldValidity(valid, name)),
    setDefaults: value => dispatch(updateField(TOGGLE_ID, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DescribeProblem);
