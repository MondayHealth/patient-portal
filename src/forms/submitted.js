import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "../components/grid";
import { Title } from "./title";
import Cell from "../components/cell";
import Input from "../components/input";

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
        <Title text={"Thanks for letting us know how you feel."}>
          In the next 48-72 hours we'll email you a curated list of compatible
          providers who take your insurance. We think they'll be great, and we
          hope that this will help make a difficult process a little easier.
        </Title>
        <Cell size={12}>
          <h3>Want help scheduling your appointment?</h3>
          <p>
            We partner with employers to give you concierge services, such as
            therapist introductions and scheduling, to further reduce the
            complexities of finding the right person to talk to. If we're not
            already working with your company feel free to refer us below to
            whomever makes the benefits decisions where you work and we'll take
            it from there (without mentioning you, of course.)
          </p>
        </Cell>
        <Cell size={12}>
          <Input
            label={"E-Mail Address"}
            id={"manager-email"}
            leadingIcon={"email"}
          />
        </Cell>
        <Cell size={12}>
          <p>
            No personal information will be saved on this website as a result of
            filling out this form, so feel free to close this tab now{" "}
            <span role={"img"} aria-label="smiley face">
              😀
            </span>
          </p>
        </Cell>
      </Grid>
    );
  }

  static getWaiting() {
    return (
      <Grid>
        <Cell className={"submission-container"} size={12}>
          <div className={"submission-spinner"} />
          <span>(This should only take a sec'.)</span>
        </Cell>
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
