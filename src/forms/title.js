import React from "react";

import Cell from "../components/cell";

export const Title = ({ children }) => (
  <Cell size={12}>
    <h1 className={"mdc-typography--display5"}>{children}</h1>
  </Cell>
);
