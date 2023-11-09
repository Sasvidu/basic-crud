import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";

interface EditBtnProps {
  href: string;
}

const RemoveBtn = ({ href }: EditBtnProps) => {
  return (
    <button>
      <Link href={href}>
        <HiPencilAlt size={24} />
      </Link>
    </button>
  );
};

export default RemoveBtn;
