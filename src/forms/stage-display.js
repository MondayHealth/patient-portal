import React from "react";
import Cell from "../components/cell";
import Grid from "../components/grid";
import Button from "../components/button";
import Progress from "../components/progress";

import "@material/elevation/dist/mdc.elevation.min.css";

export default ({ current, max, prev, next }) => (
  <footer className={"mdc-elevation--z8"}>
    <Grid>
      <Cell size={1}>
        <Button text={"Back"} onClick={prev} />
      </Cell>
      <Cell size={2} align={"middle"}>
        <Progress max={max} value={current + 1} />
      </Cell>
      <Cell size={1}>
        <Button text={"Next"} onClick={next} />
      </Cell>
    </Grid>
  </footer>
);
