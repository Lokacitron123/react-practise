import { CORE_CONCEPTS } from "../../lib/data.ts";
import ConceptCard from "./ConceptCard.tsx";

const CoreConceptList = () => {
  return (
    <ul>
      {CORE_CONCEPTS.map((concept, i) => (
        <ConceptCard
          key={i}
          img={concept.img}
          imgAlt={concept.imgAlt}
          title={concept.title}
          description={concept.description}
        />
      ))}
    </ul>
  );
};

export default CoreConceptList;
