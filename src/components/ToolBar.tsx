import {
  ArrowUpDown,
  ChevronsRight,
  Download,
  EyeOff,
  GitFork,
  Grid,
  Upload,
} from "lucide-react";
import { FaShareFromSquare } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";

function ToolBar() {
  return (
    <div className="bg-white border-b-2 border-gray-200 px-2 md:px-6 py-2 overflow-hidden">
      <div className="flex items-center justify-between flex-wrap">

        <div className="flex items-center">
          <div className="border-r-2  border-gray-300 flex items-center md:mr-2 pr-1 md:pr-3 ">
            <span className="text-sm md:text-lg">
               Tool bar
            </span>
            <ChevronsRight className="ml-0.2 md:ml-1 text-gray-700"/>
          </div>

          <div className="flex items-center space-x-1">
            <button className="flex items-center lg:space-x-2 px-2 py-2   text-gray-900  text-sm">
              <EyeOff className="size-7 lg:size-5"  />
              <span className="text-sm sm:text-lg">Hide fields </span>
            </button>
            <button className="flex items-center space-x-2 px-2 py-2   text-gray-900  text-sm">
              <ArrowUpDown className="size-7 lg:size-5" />
              <span className="text-sm sm:text-lg">Sort </span>
            </button>

            <button className="flex items-center space-x-2 px-2 py-2   text-gray-900  text-sm">
              <IoFilterOutline className="size-7 lg:size-5"/>
              <span className="text-sm sm:text-lg">Filter </span>
            </button>

            <button className="flex items-center space-x-2 px-2 py-2   text-gray-900  text-sm">
              <Grid className="size-7 lg:size-5" />
              <span className="text-sm sm:text-lg">Cell view </span>
            </button>

          </div>

        </div>

        <div className="flex items-center space-x-3 ml-auto">
          <button className="flex items-center space-x-2 px-2 py-2 border  border-gray-300  text-gray-600 hover:text-white rounded-lg text-sm hover:bg-lime-800">
            <Upload className="h-4 w-4" />
            <span>Import </span>
          </button>
          <button className="flex items-center space-x-2 px-2 py-2 border  border-gray-300  text-gray-600 hover:text-white rounded-lg text-sm hover:bg-lime-800">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>

          <button className="flex items-center space-x-2 px-2 py-2 border  border-gray-300  text-gray-600 hover:text-white rounded-lg text-sm hover:bg-lime-800">
            <FaShareFromSquare className="h-4 w-4" />
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-lime-800 text-white rounded-lg text-sm hover:bg-lime-900">
            <GitFork className=" rotate-180" />
            <span>New Action</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default ToolBar;
