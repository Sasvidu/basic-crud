import TopicList from "./components/TopicList";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  return (
    <>
      <TopicList />
    </>
  );
}
