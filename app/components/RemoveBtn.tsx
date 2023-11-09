import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = () => {
  return (
    <button>
      <HiOutlineTrash size={24} className="text-red-500" />
    </button>
  );
};

export default RemoveBtn;
