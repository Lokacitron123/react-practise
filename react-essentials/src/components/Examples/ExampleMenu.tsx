import TabButton from "../Buttons/TabButton";
import "./Example.css";

const ExampleMenu = () => {
  return (
    <menu>
      <TabButton>Components</TabButton>
      <TabButton>JSX</TabButton>
      <TabButton>Props</TabButton>
      <TabButton>State</TabButton>
    </menu>
  );
};

export default ExampleMenu;
