import React from "react";
import { HeadingLevelConsumer } from "./context";
import HeadingScope from "./HeadingScope";

const WithHeading = ({ children }) => (
  <HeadingLevelConsumer>
    {level => (
      <HeadingScope>{children({ level, tagName: `h${level}` })}</HeadingScope>
    )}
  </HeadingLevelConsumer>
);

export default WithHeading;
