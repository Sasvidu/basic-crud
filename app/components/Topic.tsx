import React from "react";
import RemoveBtn from "./RemoveBtn";
import EditBtn from "./EditBtn";

interface TopicProps {
  id: string;
  title: string;
  description: string;
}

const Topic = ({ id, title, description }: TopicProps) => {
  return (
    <>
      <div className="my-4 flex items-start justify-between gap-5 rounded border border-slate-300 p-3">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <EditBtn href={`editTopic/${id}`} />
        </div>
      </div>
    </>
  );
};

export default Topic;
