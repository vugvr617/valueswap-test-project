import React from "react";

const TextInput = (props) => {
  return (
    <input
      {...props}
      type="text"
      className="text-2xl border-none bg-transparent h-full outline-none max-w-[180px]"
    />
  );
};

export default TextInput;
