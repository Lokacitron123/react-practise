import "./Example.css";
import { useState } from "react";
import TabButton from "../Buttons/TabButton";
import ExampleContent from "./ExampleContent";

const ExampleMenu = () => {
  // Using the same useState as source of truth for CSS
  const [selectedTopic, setSelectedTopic] = useState<
    "components" | "jsx" | "props" | "state"
  >();

  return (
    <>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => setSelectedTopic("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => setSelectedTopic("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => setSelectedTopic("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => setSelectedTopic("state")}
        >
          State
        </TabButton>
      </menu>
      <ExampleContent topic={selectedTopic} />
    </>
  );
};

export default ExampleMenu;
