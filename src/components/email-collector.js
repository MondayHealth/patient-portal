import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Cell from "../components/cell";
import Input from "../components/input";
import Button from "../components/button";
import { submitReferral } from "../actions";

class EmailCollector extends Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const email = (this.props.referral || "").trim();
    if (!email) {
      return;
    }
    this.props.submit({ content: { email } });
    this.setState({ submitted: true });
  }

  render() {
    if (this.state.submitted) {
      return (
        <Cell id={"referral-thanks"} size={12}>
          <h3>
            Thanks for referring us!{" "}
            <span role={"img"} aria-label={"celebration emoji"}>
              🎉
            </span>
          </h3>
          <p>
            It means a lot. One of the founders of Monday will get in touch
            personally to let them know how great we are!
          </p>
        </Cell>
      );
    }

    return (
      <Fragment>
        <Cell size={12}>
          <Input
            required
            label={"Benefits Lead E-Mail Address"}
            id={"referral"}
            type={"email"}
            leadingIcon={"email"}
          />
        </Cell>
        <Cell id={"ref-sub-container"} size={12}>
          <Button raised id={"ref-sub-button"} onClick={this.onClick}>
            Submit
          </Button>
        </Cell>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    referral: state.formFields.referral
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: submitReferral(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailCollector);
