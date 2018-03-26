import React from "react";
import Input from "../components/input";
import PhoneInput from "../components/phone-input";
import NumberInput from "../components/number-input";
import Cell from "../components/cell";
import Select from "../components/select";
import Grid from "../components/grid";
import { Title } from "./title";

export default () => (
  <Grid>
    <Title text={"Tell us about yourself"}>
      We'll try to match you with providers near the zip code you provide. This
      information will <b>only ever</b> be shared with therapists you explicitly
      select.
    </Title>
    <Cell size={4}>
      <Input required label={"First Name"} id={"first"} />
    </Cell>
    <Cell size={4}>
      <Input required label={"Last Name"} id={"last"} />
    </Cell>

    <Cell size={3}>
      <Input required type={"email"} label={"E-Mail"} id={"email"} />
    </Cell>
    <Cell size={3}>
      <PhoneInput required label={"Phone Number"} id={"phone"} />
    </Cell>
    <Cell size={2}>
      <NumberInput required min={1} max={100} label={"Age"} id={"age"} />
    </Cell>

    <Cell size={3}>
      <Select
        label={"Gender"}
        id={"patient-gender"}
        options={["Male", "Female", "Other"]}
      />
    </Cell>
    <Cell size={2}>
      <NumberInput max={99999} label={"Zip Code"} id={"zip"} />
    </Cell>

    <Cell size={10}>
      <Input
        required
        label={"The full name of your insurance plan"}
        id={"insurance"}
      />
    </Cell>
  </Grid>
);
