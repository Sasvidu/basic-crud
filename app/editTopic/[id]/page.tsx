export default function Home() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2 focus:border-orange-400"
      ></input>
      <input
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2 focus:border-orange-400"
      ></input>
      <button
        type="submit"
        className="w-fit bg-cyan-500 px-8 py-2 text-white transition-all hover:rounded-lg hover:bg-blue-500"
      >
        Edit Topic
      </button>
    </form>
  );
}
