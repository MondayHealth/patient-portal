import React from "react";

import Grid from "../grid";
import Cell from "../cell";

import "./footer.css";

const EMAIL = "hello@mondayhealth.com";

const NSH = () => (
  <Cell size={12}>
    <div className={"nsh-warn"}>
      <p className={"mdc-typography-body1"}>
        If you are in a life-threatening situation, please call the National
        Suicide Prevention Lifeline at 1-800-273-8255. Trained crisis workers
        are available to talk for free, 24 hours a day.
      </p>
    </div>
  </Cell>
);

const SOCIAL = [
  ["Instagram", "https://www.instagram.com/mondayhealth/", "insta"],
  ["Twitter", "https://twitter.com/MondayHealth", "twitter"],
  ["Facebook", "https://www.facebook.com/mondayinc/", "fb"]
];

const SocialIcons = () => {
  const icons = SOCIAL.map(([name, url, icon], idx) => (
    <a key={idx} href={url}>
      <img src={"/" + icon + ".png"} alt={"Follow us on " + name} />
    </a>
  ));
  return <Cell id={"social-icon-container"} size={12}>{icons}</Cell>;
};

export default () => (
  <Grid className={"page-bottom"}>
    <Cell size={12}>
      <img id={"footer-logo"} src={"/logo.png"} alt={"logo"} />
    </Cell>
    <SocialIcons />
    <Cell id={"email-container"} size={12}>
      <span>Drop us a line at </span>
      <a href={"mailto:" + EMAIL}>{EMAIL}</a>
      <span> !</span>
    </Cell>
    <NSH />
    <Cell id={"bottom-link-container"} size={12}>
      <a href="https://www.monday.health/terms/">Terms Of Use</a>
      <span>|</span>
      <a href="https://www.monday.health/privacypolicy/">Privacy Policy</a>
      <span>|</span>
      <a href="https://www.monday.health/baa/">BAA</a>
    </Cell>
    <Cell size={12}>
      <span className={"copyright"}>© 2018 Monday Health, Inc.</span>
    </Cell>
  </Grid>
);
