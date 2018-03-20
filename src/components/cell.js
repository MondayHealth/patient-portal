import React from "react";

import "@material/layout-grid/dist/mdc.layout-grid.min.css";

const SPAN_PREFIX = " mdc-layout-grid__cell--span-";

export default ({ size, children, align, sizes, className }) => {
  let classes = "mdc-layout-grid__cell";

  if (size) {
    classes += SPAN_PREFIX + size;
  }

  if (sizes && sizes.length) {
    // device can be the strings, {desktop, tablet, phone}
    sizes.forEach(
      ({ size, device }) =>
        (classes += SPAN_PREFIX + (device ? size + "-" + device : size))
    );
  }

  if (align) {
    classes += " mdc-layout-grid__cell--align-" + align;
  }

  if (className) {
    const c = className.trim();
    if (c) {
      classes += " " + className.trim();
    }
  }

  return <div className={classes}>{children}</div>;
};
