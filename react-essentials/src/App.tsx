import CoreConceptList from "./components/Concept/CoreConceptList";
import ExampleMenu from "./components/Examples/ExampleMenu";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <CoreConceptList />
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <ExampleMenu />
        </section>
      </main>
    </>
  );
}

export default App;
