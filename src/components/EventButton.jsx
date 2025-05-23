import React from "react";
import { FiPlus } from "react-icons/fi";

const EventButton = () => {
  return (
    <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl cursor-pointer">
      <FiPlus className="w-7 h-7" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
};

export default EventButton;
