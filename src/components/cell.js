import React from "react";

export default ({ size, children }) => (
  <div className={"mdc-layout-grid__cell--span-" + (size || 2)}>{children}</div>
);
