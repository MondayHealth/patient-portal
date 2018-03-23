import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "../components/grid";
import { Title } from "./title";

class Submitted extends Component {
  constructor(props) {
    super(props);
    this.success = (
      <Grid>
        <Title text={"We'll be in touch soon!"}>
          We're just starting out, so a human reviews every match for quality.
          This makes the process take between 24 and 48 hours, which is a bit
          slower than we'd like, but rest assured we'll get in touch with you
          soon.
        </Title>
      </Grid>
    );
  }

  render() {
    switch (this.props.submission.state) {
      case "success":
        return this.success;
      case "error":
        return <p>{this.props.submission.error}</p>;
      default:
        break;
    }
    return <p>Waiting...</p>;
  }
}

const mapStateToProps = state => {
  return {
    submission: state.submission
  };
};

export default connect(mapStateToProps)(Submitted);
