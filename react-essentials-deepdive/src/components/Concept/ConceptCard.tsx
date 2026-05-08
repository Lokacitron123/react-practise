interface ConceptProps {
  img: string;
  imgAlt: string;
  title: string;
  description: string;
}

const ConceptCard = ({ img, imgAlt, title, description }: ConceptProps) => {
  return (
    <li>
      <img src={img} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default ConceptCard;
