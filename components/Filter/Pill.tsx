import React from 'react';

interface PillProps {
  label: string;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-full mx-2 my-1"
    >
      {label}
    </button>
  );
};

export default Pill;

