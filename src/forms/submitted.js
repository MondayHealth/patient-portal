import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "../components/grid";
import { Title } from "./title";
import Cell from "../components/cell";

class Submitted extends Component {
  static getError(text) {
    return (
      <Grid>
        <Title text={"Something went wrong"}>
          It seems like your info couldn't be submitted this time. We're really
          sorry for any inconvenience.
        </Title>
        <Cell size={12}>
          Please feel free to refresh and try again but note that because we
          value discretion you'll have to reenter your information. If you've
          already done that, or would rather not, please{" "}
          <a href={"mailto:chris@mondayhealth.com"}>email me</a> and let me know
          something is broken. If you don't know what to say, anything from a
          screen shot to an essay will do!
        </Cell>
        <Cell size={12} />
        <Cell className={"submit-error"} size={12}>
          <p className={"frame"}>
            The technical issue encountered has something to do with this:
          </p>
          <p className={"error"}>{text}</p>
        </Cell>
      </Grid>
    );
  }

  static getSuccess() {
    return (
      <Grid>
        <Title text={"We'll be in touch soon!"}>
          We're just starting out, so we review every match for quality. This
          makes the process take between 24 and 48 hours (a bit slower than we'd
          like) but rest assured we'll get in touch with you soon.
        </Title>
        <Cell size={12}>
          No personal information will be saved on this website as a result of
          filling out this form, so feel free to close this tab now{" "}
          <span role={"img"} aria-label="smiley face">
            😀
          </span>
        </Cell>
      </Grid>
    );
  }

  static getWaiting() {
    return (
      <Grid>
        <Title text={"Submitting..."}>This should only take a sec'.</Title>
      </Grid>
    );
  }

  render() {
    switch (this.props.submission.state) {
      case "success":
        return Submitted.getSuccess();
      case "error":
        return Submitted.getError(this.props.submission.error);
      default:
        break;
    }
    return Submitted.getWaiting();
  }
}

const mapStateToProps = state => {
  return {
    submission: state.submission
  };
};

export default connect(mapStateToProps)(Submitted);
