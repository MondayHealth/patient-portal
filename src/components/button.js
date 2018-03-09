import React, { Component } from "react";

import { MDCRipple } from "@material/ripple";

import "@material/button/dist/mdc.button.min.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.ripple = null;
    this.ref = this.ref.bind(this);
  }

  static icon(name) {
    return name ? (
      <i className="material-icons mdc-button__icon">{name}</i>
    ) : null;
  }

  ref(elt) {
    if (elt) {
      this.ripple = MDCRipple.attachTo(elt);
    } else {
      this.ripple.destroy();
      this.ripple = null;
    }
  }

  render() {
    let classes = "mdc-button";

    if (this.props.raised) {
      classes += " mdc-button--raised";
    }

    if (this.props.stroked) {
      classes += " mdc-button--stroked";
    }

    if (this.props.alternate) {
      classes += " _mdc-button-alternate";
    }

    return (
      <button className={classes} onClick={this.props.onClick} ref={this.ref}>
        {Button.icon(this.props.leftIcon)}
        {this.props.children}
        {Button.icon(this.props.rightIcon)}
      </button>
    );
  }
}
