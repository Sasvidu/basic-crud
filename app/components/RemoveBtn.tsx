"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface RemoveBtnProps {
  id: string;
  title: string;
}

const RemoveBtn = ({ id, title }: RemoveBtnProps) => {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm(`Do you want to delete ${title}?`);
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button>
      <HiOutlineTrash
        size={24}
        className="text-red-500 transition-colors hover:text-red-700"
        onClick={removeTopic}
      />
    </button>
  );
};

export default RemoveBtn;
