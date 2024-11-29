import React from "react";

const Button = ({ title, className, onClick }) => {
  return (
    <div>
      <button
        className={`px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full ${className || ''}`}
        onClick={onClick} // Added the onClick handler
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
