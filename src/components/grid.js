import React from "react";

export default ({ children, className }) => (
  <div className={"mdc-layout-grid " + (className || "")}>
    <div className="mdc-layout-grid__inner">{children}</div>
  </div>
);
