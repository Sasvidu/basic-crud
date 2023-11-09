import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="mx-5 my-5 flex h-20 items-center justify-between bg-slate-800 px-8 py-3">
      <Link href="/" className="text-xl font-bold text-white">
        <h1>GTCoding.</h1>
      </Link>
      <Link
        href="/addTopic"
        className="w-30 text-md flex h-12 items-center justify-center bg-white px-3 font-bold text-black transition-all hover:rounded-lg hover:bg-gray-200 lg:text-lg"
      >
        Add Topic
      </Link>
    </div>
  );
};

export default NavBar;
