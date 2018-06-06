import React from "react";
import { HeadingLevelConsumer, HeadingLevelProvider } from "./context";

const HeadingScope = ({ children }) => (
  <HeadingLevelConsumer>
    {level => (
      <HeadingLevelProvider value={level + 1}>{children}</HeadingLevelProvider>
    )}
  </HeadingLevelConsumer>
);

export default HeadingScope;
