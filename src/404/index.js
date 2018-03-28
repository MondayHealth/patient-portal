import React from "react";

import { Bar } from "../components/toolbar";
import { Icon } from "../components/icon";

import "./404.css";

export default () => (
  <div className={"app no-match"}>
    <Bar />
    <main>
      <Icon name={"search"} />
      <h3>We couldn't find what you're looking for.</h3>
      <p>
        Maybe you're a{" "}
        <a href={"https://patient.monday.health/"}>
          patient looking to sign up
        </a>{" "}
        or perhaps you're a{" "}
        <a href={"https://www.monday.health/for-providers/"}>
          therapist looking to join
        </a>? Either way we're sorry for the inconvenience, and you can always
        drop us a line at the email below.
      </p>
    </main>
  </div>
);
