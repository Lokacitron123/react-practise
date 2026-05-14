import Header from "./components/Header/Header";
import Section from "./components/Section";
import CoreConceptList from "./components/Concept/CoreConceptList";
import Tabs from "./components/Tabs/Tabs";
import TabButton from "./components/Buttons/TabButton";
import { useState } from "react";
import TabContent from "./components/Tabs/TabContent";

function App() {
  const [selectedTopic, setSelectedTopic] = useState<
    "components" | "jsx" | "props" | "state"
  >();

  return (
    <>
      <Header />
      <main>
        <Section id="core-concepts" title={"React Examples"}>
          <CoreConceptList />
        </Section>
        <Section id="examples" title={"React Core Concepts"}>
          <Tabs
            buttonsContainer={"menu"}
            buttons={
              <>
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
              </>
            }
          >
            <TabContent topic={selectedTopic} />
          </Tabs>
        </Section>
      </main>
    </>
  );
}

export default App;
