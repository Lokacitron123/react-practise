import { EXAMPLES } from "../../lib/data";

import "./Example.css";

type ExampleKey = keyof typeof EXAMPLES;

interface ExampleContentProps {
  topic?: ExampleKey;
}

const ExampleContent = ({ topic }: ExampleContentProps) => {
  const example = topic ? EXAMPLES[topic] : undefined;

  return (
    <div id="tab-content">
      {example ? (
        <>
          <h3>{example.title}</h3>
          <p>{example.description}</p>
          <pre>
            <code>{example.code}</code>
          </pre>
        </>
      ) : (
        <h3>Please select a topic</h3>
      )}
    </div>
  );
};

export default ExampleContent;
