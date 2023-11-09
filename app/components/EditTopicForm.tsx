"use client";

import React, { useState } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

interface EditTopicFormProps {
  id: string;
  title: string;
  description: string;
}

const EditTopicForm = ({ id, title, description }: EditTopicFormProps) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Both Title and Description are required!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to update the topic");
      }
    } catch (error) {
      console.log(error);
    }
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
          placeholder={title}
          className="border border-slate-500 px-8 py-2 focus:border-orange-400"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
        ></input>
        <input
          type="text"
          placeholder={description}
          className="border border-slate-500 px-8 py-2 focus:border-orange-400"
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
        ></input>
        <button
          type="submit"
          className="mt-3 w-fit bg-cyan-500 px-8 py-2 text-white transition-all hover:rounded-lg hover:bg-blue-500"
        >
          Edit Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
