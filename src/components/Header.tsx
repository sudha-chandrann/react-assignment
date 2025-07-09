import {  BellIcon, ChevronRight, Ellipsis, Search } from "lucide-react";

function Header() {
  return (
    <div className="bg-white border-b border-gray-300 px-6 py-3 overflow-hidden">
      <div className="flex items-center justify-between">

        <div className="flex items-center   text-gray-600">
          <div className="bg-lime-900/80 h-6 w-8 py-1 pl-1 rounded-sm">
            <div className="bg-white h-full w-4 rounded-l-sm"></div>
          </div>

          <div className="flex items-center gap-x-1 ml-3 flex-wrap">
            <span className="text-sm sm:text-lg text-black/50 cursor-pointer hover:underline font-semibold">
              Workspace
            </span>
            <ChevronRight className="text-black/50 font-extrabold size-4" />
            <span className="text-sm sm:text-lg text-black/50 cursor-pointer hover:underline font-semibold">
              Folder 2
            </span>
            <ChevronRight className="text-black/70 size-4" />
            <span className="text-sm sm:text-lg text-black font-semibold cursor-pointer hover:underline">
              Spreadsheet 3
            </span>
            <Ellipsis className="text-black/70 size-4 ml-3" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="px-4 py-2  rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-lime-600 hidden md:flex items-center bg-slate-100 gap-2">
            <Search className="size-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="focus:outline-0"
            />
          </div>

          <BellIcon className="size-7 text-black/70 hidden md:block" />

          <div className="w-8 h-8 bg-lime-700 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">JD</span>
          </div>
          <div className="hidden md:flex flex-col">
            <div className="text-xs text-gray-600">John Doe</div>
            <div className="text-xs text-gray-400">John.doe..</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
