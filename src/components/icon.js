import React from "react";

export const Icon = ({ name, selectable }) => {
  const params = {
    className: "material-icons mdc-text-field__icon"
  };

  if (!selectable) {
    params.tabIndex = 0;
  }

  return <i {...params}>{name}</i>;
};
