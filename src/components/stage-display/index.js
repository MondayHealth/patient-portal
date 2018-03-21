import React from "react";
import Button from "../button";
import Progress from "../progress";
import "./stagedisplay.css";

import "@material/elevation/dist/mdc.elevation.min.css";

export default ({ current, max, prev, next }) => (
  <footer>
    <div id={"sd-container"}>
      <Button disabled={current === 0} id="back" onClick={prev}>
        Back
      </Button>
      <Progress max={max} value={current + 1} />
      <Button id="next" onClick={next}>
        {current === max - 1 ? "Submit" : "Next"}
      </Button>
    </div>
  </footer>
);
