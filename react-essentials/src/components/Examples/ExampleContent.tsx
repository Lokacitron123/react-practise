import { EXAMPLES } from "../../lib/data";

import "./Example.css";

type ExampleKey = keyof typeof EXAMPLES;

interface ExampleContentProps {
  topic: ExampleKey;
}

const ExampleContent = ({ topic }: ExampleContentProps) => {
  const example = EXAMPLES[topic];

  return (
    <div id="tab-content">
      <h3>{example.title}</h3>
      <p>{example.description}</p>
      <pre>
        <code>{example.code}</code>
      </pre>
    </div>
  );
};

export default ExampleContent;
