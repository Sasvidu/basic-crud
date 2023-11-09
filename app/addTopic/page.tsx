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
        className="mt-3 w-fit bg-green-500 px-8 py-2 text-white transition-all hover:rounded-lg hover:bg-green-700"
      >
        Add Topic
      </button>
    </form>
  );
}
