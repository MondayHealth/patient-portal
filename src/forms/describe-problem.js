import React, { Component } from "react";
import { connect } from "react-redux";
import Cell from "../components/cell";
import Grid from "../components/grid";
import Input from "../components/input";
import ToggleField from "../components/toggle-field";
import { Title } from "./title";

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

class DescribeProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const toggleState = nextProps.formFields[TOGGLE_ID];
    this.setState({
      inputVisible: toggleState && toggleState[toggleState.length - 1]
    });
  }

  render() {
    const other = !this.state.inputVisible ? null : (
      <Cell size={12}>
        <Input label={"Tell us in your own words"} id={"other"} />
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

export default connect(mapStateToProps)(DescribeProblem);
