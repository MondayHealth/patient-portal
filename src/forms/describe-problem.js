import React from "react";
import Cell from "../components/cell";
import Grid from "../components/grid";
import Input from "../components/input";
import ToggleField from "../components/toggle-field";

const toggleOptions = [
  "Depression",
  "Anxiety",
  "Eating Disorders",
  "Trauma",
  "Relationship Issues",
  "Family Issues",
  "Career Counseling",
  "Other..."
];

export default () => (
  <div>
    <h1 className={"mdc-typography--display3"}>What's bothering you?</h1>
    <ToggleField options={toggleOptions} />
    <Grid>
      <Cell size={12}>
        <Input label={"Something else?"} id={"pther"} />
      </Cell>
    </Grid>
  </div>
);
