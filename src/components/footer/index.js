import React from "react";

import Grid from "../grid";
import Cell from "../cell";
import { Icon } from "../icon";

import "./footer.css";

const EMAIL = "hello@mondayhealth.com";

const NSH = () => (
  <Cell size={12}>
    <div className={"nsh-warn"}>
      <p>
        If you are in a life-threatening situation, please call the National
        Suicide Prevention Lifeline at 1-800-273-8255. Trained crisis workers
        are available to talk for free, 24 hours a day.
      </p>
    </div>
  </Cell>
);

export default () => (
  <Grid className={"page-bottom"}>
    <Cell size={2}>
      <img id={"footer-logo"} src={"/logo.png"} alt={"logo"} />
    </Cell>
    <Cell size={3}>
      <Icon name={"camera"} />
      <Icon name={"camera"} />
      <Icon name={"camera"} />
      <Icon name={"camera"} />
    </Cell>
    <Cell size={12}>
      <Icon name={"email"} />
      <a href={"mailto:" + EMAIL}>{EMAIL}</a>
    </Cell>
    <NSH />
    <Cell size={2}>
      <a href="https://www.monday.health/terms/">TERMS OF USE</a>
    </Cell>
    <Cell size={2}>
      <a href="https://www.monday.health/privacypolicy/">PRIVACY POLICY</a>
    </Cell>
    <Cell size={2}>
      <a href="https://www.monday.health/baa/">BAA</a>
    </Cell>
    <Cell size={12}> © 2018 MONDAY HEALTH INC. </Cell>
  </Grid>
);
