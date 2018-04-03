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
      Now we just need to know a little more about you. All fields are required
      except for gender, and don't worry: this information will <b>only</b> be
      shared with therapists you explicitly select.
    </Title>
    <Cell size={4} sizes={{ desktop: 6 }}>
      <Input required label={"First Name"} id={"first"} />
    </Cell>
    <Cell size={4} sizes={{ desktop: 6 }}>
      <Input required label={"Last Name"} id={"last"} />
    </Cell>

    <Cell size={4} sizes={{ desktop: 6 }}>
      <Input required type={"email"} label={"E-Mail"} id={"email"} />
    </Cell>
    <Cell size={4} sizes={{ desktop: 6 }}>
      <PhoneInput label={"Phone Number"} id={"phone"} />
    </Cell>
    <Cell size={4} sizes={{ desktop: 6 }}>
      <Select
        label={"Gender"}
        id={"patient-gender"}
        options={["Prefer not to say", "Male", "Female", "Other"]}
        defaultValue={0}
      />
    </Cell>
    <Cell size={2} sizes={{ desktop: 3 }}>
      <NumberInput
        validationMessage={"Invalid phone number."}
        required
        min={1}
        max={110}
        label={"Age"}
        id={"age"}
      />
    </Cell>
    <Cell size={2} sizes={{ desktop: 3 }}>
      <NumberInput required max={99999} label={"ZIP"} id={"zip"} />
    </Cell>
    <Cell size={12}>
      <div className={"tos-container"}>
        <h3>Acknowledgment Of Terms of Use</h3>
        <span>
          By clicking the "Submit" button you agree to the Terms of Use hosted
          on this site and authorize Monday Health, Inc. to share and receive
          information related to scheduling appointments. Your privacy is
          extremely important to us and, as such, your information will not be
          shared with other parties without your consent.
        </span>
      </div>
    </Cell>
  </Grid>
);
