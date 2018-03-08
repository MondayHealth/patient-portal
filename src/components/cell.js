import React from "react";

import "@material/layout-grid/dist/mdc.layout-grid.min.css";

export default ({ size, children, align }) => {
  let classes = "mdc-layout-grid__cell--span-" + (size || 2);

  if (align) {
    classes += " mdc-layout-grid__cell--align-" + align;
  }

  return <div className={classes}>{children}</div>;
};
