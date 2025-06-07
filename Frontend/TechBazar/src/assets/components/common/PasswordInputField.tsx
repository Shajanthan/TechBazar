import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputFieldProps {
  label: string;
  placeholder?: string;
}

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({
  label,
  placeholder = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="py-2 relative w-full">
      <label htmlFor={inputId} className="block ">
        {label}
      </label>
      <input
        id={inputId}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="border rounded border-gray-300 bg-opacity-30 focus:outline-0 w-full p-2 text-black"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute top-11 right-3 text-gray-500 hover:text-gray-900 focus:outline-none"
      >
        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
      </button>
    </div>
  );
};

export default PasswordInputField;
