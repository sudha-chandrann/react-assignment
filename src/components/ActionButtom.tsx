import { Ellipsis, GitFork, Link2, Plus, RefreshCcw } from "lucide-react";

function ActionButton() {
  return (
    <div className="bg-white border-y border-gray-200 h-12 flex overflow-hidden">
      <div className="bg-white w-7 h-12"></div>
      <div className="grid grid-cols-11 flex-1 h-12">
        <div className="bg-gray-200 col-span-5 py-1.5 px-3 h-12 flex items-center gap-x-2">
          <div className="rounded-md h-full px-2 bg-gray-50 w-60 flex items-center text-black/60 truncate">
            <Link2 className="text-blue-400 md:size-6 mr-2" />
            <span>Q3 Financial Overview</span>
          </div>
          <RefreshCcw className="text-red-400 md:size-6" />
        </div>

        <div className="bg-white h-12"></div>

        <div className="h-12 bg-lime-700/30 flex items-center justify-center gap-x-1 text-gray-600/80 border-gray-300 border truncate ">
          <GitFork className="rotate-180 " />
          <span className="text-gray-900/60 text-md font-bold">ABC</span>
          <Ellipsis />
        </div>
        <div className="h-12 bg-purple-700/20 col-span-2 flex items-center justify-center gap-x-1 text-gray-600/80 border-gray-300 border truncate ">
          <GitFork className="rotate-180 text-white" />
          <span className="text-gray-900/60 text-md font-bold">
            Answer a question
          </span>
          <Ellipsis />
        </div>
        <div className="h-12 bg-orange-700/40  flex items-center justify-center gap-x-1 text-gray-600/80 border-gray-300 border truncate ">
          <GitFork className="rotate-180 text-white" />
          <span className="text-gray-900/60 text-md font-bold">Extract</span>
          <Ellipsis />
        </div>
        <div className="h-12 bg-gray-200 flex items-center justify-center border-gray-300 border">
          <Plus className="size-7 text-black" />
        </div>
      </div>
      <div className="bg-white w-4 h-12"></div>
    </div>
  );
}

export default ActionButton;
