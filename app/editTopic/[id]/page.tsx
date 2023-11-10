import { error } from "console";
import EditTopicForm from "../../components/EditTopicForm";
import connectMongoDB from "@/libs/mongodb";
import TopicSchema from "@/models/topic";

interface EditTopicFormParams {
  params: { id: string };
  searchParams: {};
}

const getTopicById = async (id: string) => {
  // try {
  //   const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
  //     cache: "no-store",
  //   });
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch topic");
  //   }
  //   return res.json();
  // } catch (error) {
  //   console.log(error);
  // }

  await connectMongoDB();
  const topic = await TopicSchema.findOne({ _id: id });
  return topic;
};

export default async function Home(params: EditTopicFormParams) {
  const id = params.params.id;
  const topic = await getTopicById(id);
  const { title, description } = topic;
  return (
    <>
      <EditTopicForm id={id} title={title} description={description} />
    </>
  );
}
