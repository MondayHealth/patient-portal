import React from "react";

import "@material/button/dist/mdc.button.min.css";

function icon(name) {
  return name ? (
    <i className="material-icons mdc-button__icon">{name}</i>
  ) : null;
}

export default ({ text, leftIcon, rightIcon, onClick }) => {
  return (
    <button className="mdc-button" onClick={onClick}>
      {icon(leftIcon)}
      {text}
      {icon(rightIcon)}
    </button>
  );
};
