import React from "react";
import Input from "../components/input";
import PhoneInput from "../components/phone-input";
import NumberInput from "../components/number-input";
import Cell from "../components/cell";
import Select from "../components/select";
import Grid from "../components/grid";

export default () => (
  <div>
    <h1 className={"mdc-typography--display3"}>Getting to know you</h1>
    <Grid>
      <Cell size={4}>
        <Input label={"First Name"} id={"first"} />
      </Cell>
      <Cell size={4}>
        <Input label={"Last Name"} id={"last"} />
      </Cell>
    </Grid>
    <Grid>
      <Cell size={4}>
        <Input type={"email"} label={"E-Mail"} id={"email"} />
      </Cell>
      <Cell size={3}>
        <PhoneInput label={"Phone Number"} id={"phone"} />
      </Cell>
      <Cell size={3}>
        <Select label={"Gender"} options={["Male", "Female", "Other"]} />
      </Cell>
      <Cell size={2}>
        <NumberInput min={1} max={100} label={"Age"} id={"age"} />
      </Cell>
    </Grid>
    <Grid>
      <Cell size={2}>
        <Input label={"Zip Code"} id={"zip"} />
      </Cell>
      <Cell size={10}>
        <Input
          label={"The full name of your insurance plan"}
          id={"insurance"}
        />
      </Cell>
    </Grid>
  </div>
);
