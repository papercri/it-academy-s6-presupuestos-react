// src/components/SortButton.tsx
import React from "react";

interface SortButtonProps {
  onClick: () => void;
  label: string;
  isAsc: boolean;
}

function SortButton({ onClick, label, isAsc }: SortButtonProps) {
  return (
    <button
      onClick={onClick}
      className="btn-outline !w-full"
    >
      {label} {isAsc ? "↑" : "↓"}
    </button>
  );
}

export default SortButton;
