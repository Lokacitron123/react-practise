import "./Concept.css";
import { CORE_CONCEPTS } from "../../lib/data.ts";
import ConceptCard from "./ConceptCard.tsx";

const CoreConceptList = () => {
  return (
    <ul>
      {CORE_CONCEPTS.map((concept, i) => (
        <ConceptCard
          key={i}
          // Spread in the single concept item or pass it individually
          {...concept}
          // img={concept.img}
          // imgAlt={concept.imgAlt}
          // title={concept.title}
          // description={concept.description}
        />
      ))}
    </ul>
  );
};

export default CoreConceptList;
