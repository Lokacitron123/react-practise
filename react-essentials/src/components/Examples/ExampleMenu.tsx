import { useState } from "react";
import TabButton from "../Buttons/TabButton";
import "./Example.css";
import ExampleContent from "./ExampleContent";

const ExampleMenu = () => {
  const [selectedTopic, setActiveTopic] = useState<
    "components" | "jsx" | "props" | "state"
  >("components");

  return (
    <>
      <menu>
        <TabButton onClick={() => setActiveTopic("components")}>
          Components
        </TabButton>
        <TabButton onClick={() => setActiveTopic("jsx")}>JSX</TabButton>
        <TabButton onClick={() => setActiveTopic("props")}>Props</TabButton>
        <TabButton onClick={() => setActiveTopic("state")}>State</TabButton>
      </menu>
      <ExampleContent topic={selectedTopic} />
    </>
  );
};

export default ExampleMenu;
