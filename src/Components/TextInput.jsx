import React, { useState } from 'react';

function TextInput({ 
  label = "Label",
  placeholder = "Enter text that need to be translated...",
  type = "text",
  required = false,
  disabled = false,
  onChange = () => {},
}) {
  const [focused, setFocused] = useState(false);

  return (
    // <div className="w-full">
    //   {label && (
    //     <label className="block text-lg font-medium text-cyan-400 mb-1">
    //       {label}
    //       {required && <span className="text-red-500 ml-1">*</span>}
    //     </label>
    //   )}
    //   <div className="relative">
    //     <input
    //       type={type}
    //       className={`
    //         w-full
    //         px-4
    //         py-2
    //         rounded-md
    //         border
    //         outline-none
    //         transition-colors
    //         duration-200
    //         placeholder-gray-600
    //         ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
    //         ${focused ? 'ring-2 ring-blue-100' : ''}
    //       `}
    //       placeholder={placeholder}
    //       disabled={disabled}
    //       onFocus={() => setFocused(true)}
    //       onBlur={() => setFocused(false)}
    //       onChange={(e) => onChange(e.target.value)}
    //     />
    //   </div>
    // </div>

    <div className="w-full">
  {label && (
    <label className="block text-lg font-medium text-green-400 mb-1">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )}
  <div className="relative">
    <input
      type={type}
      className={`
        w-full
        px-4
        py-2
        rounded-md
        border
        outline-none
        transition-colors
        duration-200
        placeholder-gray-600
        border-emerald-400/30
        ${disabled ? 'bg-green-100 cursor-not-allowed' : 'bg-green-50'}
        ${focused ? 'ring-2 ring-emerald-200' : ''}
      `}
      placeholder={placeholder}
      disabled={disabled}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
</div>
  );
}

export default TextInput;