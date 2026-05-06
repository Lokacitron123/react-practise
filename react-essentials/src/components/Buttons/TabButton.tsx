import React from "react";

interface TabButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TabButton = ({ children, onClick }: TabButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default TabButton;
