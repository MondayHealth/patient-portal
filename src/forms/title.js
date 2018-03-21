import React from "react";

import Cell from "../components/cell";

export const Title = ({ text, children }) => (
  <Cell size={12}>
    <h1 className={"mdc-typography--display5"}>{text}</h1>
    <p>{children}</p>
  </Cell>
);
