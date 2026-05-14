import "./Example.css";

type Props = {
  children: React.ReactNode; // Allows JSX/content to be passed in
  buttons: React.ReactNode; // Allows JSX/content to be passed in
  buttonsContainer: React.ElementType; // Allows a component or HTML tag to be passed in
};

const Tabs = ({ children, buttons, buttonsContainer }: Props) => {
  // Using the same useState as source of truth for CSS

  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
