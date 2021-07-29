// first dumb component (React Component that only aware of props that passed to them otherwise, ignorant of state and how it is managed)
import React from "react";

const Output = props => (
  <>
    <h3>Current Number: {props.amount}</h3>
  </>
);

export default Output;