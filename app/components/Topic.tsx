import React from "react";
import RemoveBtn from "./RemoveBtn";
import EditBtn from "./EditBtn";

const Topic = () => {
  return (
    <>
      <div className="my-2 flex items-start justify-between gap-5 border border-slate-300 p-3">
        <div>
          <h2 className="text-2xl font-bold">Topic Title</h2>
          <p>Topic Description</p>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <EditBtn href="editTopic/123" />
        </div>
      </div>
    </>
  );
};

export default Topic;
