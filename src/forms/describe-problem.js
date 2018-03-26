import React, { Component } from "react";
import { connect } from "react-redux";
import Cell from "../components/cell";
import Grid from "../components/grid";
import Input from "../components/input";
import ToggleField from "../components/toggle-field";
import { Title } from "./title";
import { fieldValidity } from "../actions";

const options = [
  "Depression",
  "Anxiety",
  "Eating Disorders",
  "Trauma",
  "Relationship Issues",
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
  }

  updateFromToggleState(toggleState) {
    const inputVisible = toggleState && toggleState[toggleState.length - 1];

    const scroll = inputVisible && this.state.inputVisible !== inputVisible;

    this.setState({ inputVisible }, () => {
      if (scroll) {
        window.scrollTo(0, document.body.scrollHeight);
      }
    });

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
        <Input required label={"Tell us in your own words"} id={OTHER_ID} />
      </Cell>
    );

    return (
      <Grid>
        <Title text={"What's bothering you?"}>
          Select as many of the following things you'd like to talk to a
          therapist about:
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
  return { formFields: state.formFields };
};

const mapDispatchToProps = dispatch => {
  return {
    setValid: (valid, name) => dispatch(fieldValidity(valid, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DescribeProblem);
