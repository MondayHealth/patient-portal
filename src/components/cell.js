import React from "react";

import "@material/layout-grid/dist/mdc.layout-grid.min.css";

export default ({ size, children }) => (
  <div className={"mdc-layout-grid__cell--span-" + (size || 2)}>{children}</div>
);
