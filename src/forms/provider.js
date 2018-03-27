import React, { Component } from "react";
import Input from "../components/input";
import Select from "../components/select";
import Grid from "../components/grid";
import Cell from "../components/cell";
import CurrencyInput from "../components/currency-input";
import { Title } from "./title";

export default class Provider extends Component {
  render() {
    return (
      <Grid>
        <Title text={"Describe your ideal therapist"}>
          Are there any other qualifications you're looking for? Everything here
          is optional, but they may help us find you a better match!
        </Title>
        <Cell size={12}>
          <Input label={"Language other than English?"} id={"lang"} />
        </Cell>
        <Cell size={12}>
          <Select
            label={"Gender"}
            options={["No Preference", "Male", "Female", "Other"]}
            defaultValue={0}
            id={"provider-gender"}
          />
        </Cell>
        <Cell size={12}>
          <CurrencyInput label={"Max cost per appointment?"} id={"max-spend"} />
        </Cell>
      </Grid>
    );
  }
}
