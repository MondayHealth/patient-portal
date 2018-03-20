import React from "react";
import Cell from "../cell";
import Grid from "../grid";
import Button from "../button";
import Progress from "../progress";
import "./stagedisplay.css";

import "@material/elevation/dist/mdc.elevation.min.css";

export default ({ current, max, prev, next }) => (
  <footer className={"mdc-elevation--z8"}>
    <Grid>
      <Cell size={1} className={"button-container"}>
        <Button onClick={prev}>Back</Button>
      </Cell>
      <Cell size={2} align={"middle"}>
        <Progress max={max} value={current + 1} />
      </Cell>
      <Cell size={1} className={"button-container"}>
        <Button onClick={next}>Next</Button>
      </Cell>
    </Grid>
  </footer>
);
