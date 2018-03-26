import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../button";
import Progress from "../progress";
import "./stagedisplay.css";

import "@material/elevation/dist/mdc.elevation.min.css";

class StageDisplay extends Component {
  forwardButtonText() {
    return this.props.current === this.props.max - 2 ? "Submit" : "Next";
  }

  render() {
    const buttonProps = { id: "next", onClick: this.props.next };

    if (Object.keys(this.props.invalidFields).length) {
      buttonProps.disabled = true;
    }

    return (
      <footer>
        <div id={"sd-container"}>
          <Button
            disabled={this.props.current === 0}
            id="back"
            onClick={this.props.prev}
          >
            Back
          </Button>
          <Progress max={this.props.max} value={this.props.current + 1} />
          <Button {...buttonProps}>{this.forwardButtonText()}</Button>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => {
  return { invalidFields: state.invalidFields };
};

export default connect(mapStateToProps)(StageDisplay);
