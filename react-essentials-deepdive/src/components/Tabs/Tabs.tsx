import "./Example.css";

type Props = {
  children: React.ReactNode; // Allows JSX/content to be passed in
  buttons: React.ReactNode; // Allows JSX/content to be passed in
  buttonsContainer: React.ElementType; // Allows a component or HTML tag to be passed in
};

const Tabs = ({ children, buttons, buttonsContainer }: Props) => {
  // This will tell React to look for an existing html element if a string value is passed like menu
  //  Or render a custom component if passed as a value, will invoke that component function

  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
