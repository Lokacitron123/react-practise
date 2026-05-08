import React from "react";

interface TabButtonProps {
  children: React.ReactNode;
  isSelected?: boolean;
  onSelect?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TabButton = ({ children, isSelected, onSelect }: TabButtonProps) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
