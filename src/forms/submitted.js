import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "../components/grid";
import { Title } from "./title";
import Cell from "../components/cell";
import { Icon } from "../components/icon";
import EmailCollector from "../components/email-collector";

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
        <Title text={"Thank you!"}>
          In the next 48-72 hours we'll email you a curated list of compatible
          providers who take your insurance. We think they'll be great and we
          hope that it makes a difficult process a little easier.
        </Title>
        <Title text={"Want help scheduling your appointment?"}>
          We partner with employers to give you concierge services, such as
          therapist introductions and scheduling, further reducing the
          complexities of finding the right provider. If we're not already
          working with your company consider giving us the email address of the
          person who makes the benefits decisions where you work and we'll
          introduce ourselves.
        </Title>
        <Cell size={12}>
          Check out{" "}
          <a
            className={"out-link"}
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.monday.health/employers/"}
          >
            our Employee Assistance website
            <Icon name={"open_in_new"} />
          </a>{" "}
          for more specifics about the services we provide.{" "}
          <i>
            Giving us their email wont sign them up for anything and, of course,
            we'll never mention you specifically.
          </i>
        </Cell>
        <EmailCollector />
        <Cell size={12} />
        <Cell id={"submission-end-notice"} size={12}>
          <p>
            No personal information will be saved on your computer as a result
            of filling out this form. Further, the information you've submitted
            will never be used for any purpose other than to match you with a
            mental health provider{" "}
            <span role={"img"} aria-label="smiley face emoji">
              🙂
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
