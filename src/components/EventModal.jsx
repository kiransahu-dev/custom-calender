import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MdDragHandle } from "react-icons/md";

const EventModal = () => {
  return (
    <div className="h-screen w-full left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            <MdDragHandle />
          </span>
          <button>
            <span className="material-icons-outlined text-gray-400">
              <IoCloseOutline />
            </span>
          </button>
        </header>
      </form>
    </div>
  );
};

export default EventModal;
