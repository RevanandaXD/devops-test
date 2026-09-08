"use client"

const handleRefresh = () => {
  window.location.reload();
};

export default function Home() {
  return (
    <div className="flex flex-col gap-5 flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-5xl font-bold">HELLO FROM SERVER</h1>
      <button onClick={handleRefresh} className="text-md px-4 py-1 cursor-pointer border border-2-white bg-black text-white hover:bg-white hover:text-black ease-in transition duration-200">
        Refresh
      </button>
    </div>
  );
}
