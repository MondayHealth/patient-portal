import React, { Component } from "react";
import Input from "../components/input";
import Select from "../components/select";
import Grid from "../components/grid";
import Cell from "../components/cell";
import CurrencyInput from "../components/currency-input";
import { Title } from "./title";
import TextArea from "../components/textarea";

export default class Provider extends Component {
  render() {
    return (
      <Grid>
        <Title text={"Describe your ideal therapist"} />
        <Cell size={12}>
          <span>
            We always try to match you with a provider that takes your
            insurance, so please include the <b>full</b> name of your plan if
            you have one.{" "}
            <span className={"de-emphasized"}>
              (E.g.: Oxford Freedom, Cigna Open Access Plus, or Oscar Market
              Silver)
            </span>
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
        <Cell size={4} sizes={{ desktop: 6 }}>
          <span>
            Would you prefer to see a someone who identifies as a specific
            gender?
          </span>
          <Select
            label={"Gender"}
            options={["No Preference", "Male", "Female", "Other"]}
            defaultValue={0}
            id={"provider-gender"}
          />
        </Cell>
        <Cell size={4} sizes={{ desktop: 6 }}>
          <span>
            Would you like your therapist to have a certain amount of
            experience?
          </span>
          <Select
            label={"Experience"}
            options={[
              "No Preference",
              "Less than 5 years",
              "6-10 years",
              "10-15 years",
              "16-24 years",
              "25+ years"
            ]}
            defaultValue={0}
            id={"experience"}
          />
        </Cell>
        <Cell size={12}>
          <span>
            Would it help if your provider spoke a language other than English?
          </span>
          <Input label={"Preferred provider language"} id={"lang"} />
        </Cell>

        <Cell size={12}>
          <span>
            Let us know here, in your own words, if there's any other qualities
            you'd like to see in a therapist.
          </span>
          <TextArea id={"tell-us"} label={"Anything else?"} />
        </Cell>
      </Grid>
    );
  }
}
