import React from "react";

type Props = {
  children: React.ReactNode; // Allows JSX/content to be passed in
  buttons: React.ReactNode; // Allows JSX/content to be passed in
  buttonsContainer: React.ElementType; // Allows a component or HTML tag to be passed in
};

const Tabs = ({ children, buttons, buttonsContainer }: Props) => {
  // Setting Component types dynamically
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
