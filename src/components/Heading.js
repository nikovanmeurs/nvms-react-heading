import React from "react";
import WithHeading from "./WithHeading";

const Heading = props => (
  <WithHeading>{tagName => React.createElement(tagName, props)}</WithHeading>
);

export default Heading;
