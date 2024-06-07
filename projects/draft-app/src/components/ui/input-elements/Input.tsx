import React from "react";

const Input = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  name,
  error,
  onBlur,
  onFocus,
}) => {
  return (
    <div className="flex flex-col w-80 mt-5">
      <label className="text-lg" htmlFor={name}>
        {label}
      </label>
      <input
        className={`border ${
          error && "border border-red-400"
        } px-2 py-1 text-sm mt-1 rounded-sm`}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
      />

      {error && <p className="text-red-500 text-sm mt-[1px]">{error}</p>}
    </div>
  );
};

export default Input;
