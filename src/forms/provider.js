import React from "react";
import Input from "../components/input";
import Cell from "../components/cell";
import Select from "../components/select";
import Grid from "../components/grid";
import CurrencyInput from "../components/currency-input";

export default () => (
  <Grid>
    <Cell size={12}>
      <h1 className={"mdc-typography--display3"}>Who would you like to see?</h1>
    </Cell>
    <Cell size={4}>
      <Select
        label={"Gender"}
        options={["No Preference", "Male", "Female", "Other"]}
      />
    </Cell>
    <Cell size={4}>
      <Input label={"Language"} id={"lang"} />
    </Cell>
    <Cell size={4}>
      <CurrencyInput
        label={"The most you can pay per appointment?"}
        id={"max-spend"}
      />
    </Cell>
  </Grid>
);
