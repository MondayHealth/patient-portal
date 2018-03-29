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
        <Title text={"Describe your ideal therapist"} />
        <Cell size={12}>
          <span>
            We always try to match you with a provider that takes your
            insurance, so please include the <b>full</b> name of your plan if
            you have one.
          </span>
          <Input
            required
            label={"The full name of your insurance plan"}
            id={"insurance"}
          />
        </Cell>
        <Cell size={12}>
          <span>
            What's the most you can afford to pay per therapy appointment?
          </span>
          <CurrencyInput
            required
            label={"Max cost per appointment"}
            id={"max-spend"}
          />
        </Cell>
        <Cell size={12}>
          <span>Would you prefer to see a therapist of a specific gender?</span>
          <Select
            label={"Gender"}
            options={["No Preference", "Male", "Female", "Other"]}
            defaultValue={0}
            id={"provider-gender"}
          />
        </Cell>
        <Cell size={12}>
          <span>
            Would it help if your provider spoke a language other than English?
          </span>
          <Input label={"Preferred provider language"} id={"lang"} />
        </Cell>
      </Grid>
    );
  }
}
