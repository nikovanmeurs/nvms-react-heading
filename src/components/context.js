import createContext from "./create-react-context";

const {
  Consumer: HeadingLevelConsumer,
  Provider: HeadingLevelProvider,
} = createContext(1);

export { HeadingLevelConsumer, HeadingLevelProvider };
