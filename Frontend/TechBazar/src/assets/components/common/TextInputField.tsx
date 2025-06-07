import React from "react";

interface TextInputFieldProps {
  label: string;
  placeholder?: string;
  type: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  placeholder,
  type,
}) => {
  return (
    <div>
      <label htmlFor={label} className="w-full block py-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border rounded border-gray-300 bg-opacity-30 focus:outline-0 w-full p-2 text-black"
      />
    </div>
  );
};

export default TextInputField;
