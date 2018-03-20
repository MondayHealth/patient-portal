import React from "react";
import Input from "../components/input";
import Cell from "../components/cell";
import Select from "../components/select";
import Grid from "../components/grid";
import CurrencyInput from "../components/currency-input";
import { Title } from "./title";

export default () => (
  <Grid>
    <Title>Who would you like to see?</Title>
    <Cell size={12}>
      <Input label={"Language other than English?"} id={"lang"} />
    </Cell>
    <Cell size={12}>
      <Select
        label={"Gender"}
        options={["No Preference", "Male", "Female", "Other"]}
      />
    </Cell>
    <Cell size={12}>
      <CurrencyInput label={"Max cost per appointment?"} id={"max-spend"} />
    </Cell>
  </Grid>
);
