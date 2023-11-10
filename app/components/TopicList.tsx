import React from "react";
import Topic from "./Topic";
import { error } from "console";
import axios from "axios";
import connectMongoDB from "@/libs/mongodb";
import TopicSchema from "@/models/topic";

interface TopicInterface {
  _id: string;
  title: string;
  description: string;
}

const getTopics = async () => {
  // try {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/topics`, {
  //     cache: "no-store",
  //   });
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch Topics");
  //   }
  //   return res.json();
  // } catch (error) {
  //   console.log(error);
  // }

  await connectMongoDB();
  const topics = await TopicSchema.find();
  return topics;
};

const TopicList = async () => {
  const topics = await getTopics();
  //console.log(topics);

  return (
    <div>
      {topics.map((topic: TopicInterface) => (
        <Topic
          key={topic._id}
          id={topic._id}
          title={topic.title}
          description={topic.description}
        ></Topic>
      ))}
      {/* <Topic title="Hi" description="Thing"></Topic> */}
    </div>
  );
};

export default TopicList;
