import Header from "./components/Header/Header";
import Section from "./components/Section";
import CoreConceptList from "./components/Concept/CoreConceptList";
import ExampleMenu from "./components/Examples/ExampleMenu";

function App() {
  return (
    <>
      <Header />
      <main>
        <Section id="core-concepts" title={"React Examples"}>
          <CoreConceptList />
        </Section>
        <Section id="examples" title={"React Core Concepts"}>
          <ExampleMenu />
        </Section>
      </main>
    </>
  );
}

export default App;
