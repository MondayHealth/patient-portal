import React from "react";
import Cell from "../components/cell";
import TextArea from "../components/textarea";
import CheckBox from "../components/checkbox";
import Grid from "../components/grid";

export default () => (
  <div>
    <h1 className={"mdc-typography--display3"}>
      Tell us what's bothering you.
    </h1>
    <Grid>
      <Cell size={8}>
        <CheckBox label={"Depression"} />
        <CheckBox label={"Anxiety"} />
        <CheckBox label={"Eating Disorders"} />
        <CheckBox label={"Trauma"} />
      </Cell>
      <Cell size={8}>
        <TextArea label={"Anything else you'd like to say"} />
      </Cell>
    </Grid>
  </div>
);
