"use client";

import React, { useState } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddTopicForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Both Title and Description are required!");
      return;
    }

    await axios.post("../api/topics", JSON.stringify({ title, description }));
    router.push("/");

    // try {
    //   const res = await fetch("http://localhost:3000/api/topics", {
    //     method: "POST",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify({ title, description }),
    //   });
    //   if (res.ok) {
    //     router.push("/");
    //   } else {
    //     throw new Error("Failed to create the topic");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Topic Title"
          className="border border-slate-500 px-8 py-2 focus:border-orange-400"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
        <input
          type="text"
          placeholder="Topic Description"
          className="border border-slate-500 px-8 py-2 focus:border-orange-400"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></input>
        <button
          type="submit"
          className="mt-3 w-fit bg-green-500 px-8 py-2 text-white transition-all hover:rounded-lg hover:bg-green-700"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default AddTopicForm;
