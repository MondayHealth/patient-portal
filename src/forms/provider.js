import React, { Component } from "react";
import Input from "../components/input";
import Cell from "../components/cell";
import Select from "../components/select";
import Grid from "../components/grid";
import CurrencyInput from "../components/currency-input";
import { Title } from "./title";

export default class Provider extends Component {
  render() {
    return (
      <Grid>
        <Title text={"Describe your ideal therapist"}>
          Are there any other qualifications you're looking for? Everything here
          is optional, but it may help us find you a better match!
        </Title>
        <Cell size={12}>
          <Input
            label={"Language other than English?"}
            onChange={this.props.update}
            id={"lang"}
          />
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
  }
}
