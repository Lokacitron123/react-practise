import "./Example.css";

type Props = {
  children: React.ReactNode; // Allows JSX/content to be passed in
  buttons: React.ReactNode; // Allows JSX/content to be passed in
  buttonsContainer?: React.ElementType; // Allows a component or HTML tag to be passed in
};

// Default prop values are added with = value. E.g buttonsContainer = "menu"
const Tabs = ({ children, buttons, buttonsContainer = "menu" }: Props) => {
  // This will tell React to look for an existing html element if a string value is passed like "menu"
  //  Or render a custom component if passed as a value, will invoke that component function. Must be passed as a function name. E.g Section, Container etc, not <Container />
  // Must be renamed to a UpperCased variable to render inside the return
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
