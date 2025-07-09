import {
  BriefcaseBusinessIcon,
  Calendar1,
  ChevronDown,
  Clock10,
  EarthIcon,
  User,
} from "lucide-react";
import { MdAssignmentAdd } from "react-icons/md";

function TableHeader() {
  return (
    <div className="bg-white border-y border-gray-200 h-12 flex items-center ">
      <div className="bg-gray-100 w-7 h-12 flex items-center justify-center">
        <span className="text-gray-500 text-lg">#</span>
      </div>
      <div className="grid grid-cols-11 flex-1 h-12">
        <div className="bg-gray-100 col-span-2 py-1.5 px-2 h-12 flex items-center justify-between border border-gray-300 cursor-pointer overflow-hidden" title="Job Request">
          <div className="flex items-center gap-x-2 px-2 ">
            <BriefcaseBusinessIcon className="text-gray-500 " />
            <span className="font-semibold text-md lg:text-lg text-gray-600">Job Request</span>
          </div>
          <ChevronDown className="text-gray-500" />
        </div>

        <div className="bg-gray-100 py-1.5 px-2 h-12 flex items-center justify-between border border-gray-300 cursor-pointer overflow-hidden" title="Submitted">
          <div className="flex items-center gap-x-2 px-2 ">
            <Calendar1 className="text-gray-500" />
            <span className="font-semibold text-md lg:text-lg text-gray-600">Submitted</span>
          </div>
          <ChevronDown className="text-gray-500" />
        </div>

        <div className="bg-gray-100 py-1.5 px-2 h-12 flex items-center justify-between border border-gray-300 cursor-pointer overflow-hidden" title="Status">
          <div className="flex items-center gap-x-2 px-2 ">
            <Clock10 className="text-gray-500" />
            <span className="font-semibold text-md lg:text-lg text-gray-600">Status</span>
          </div>
          <ChevronDown className="text-gray-500" />
        </div>

        <div className="bg-gray-100 py-1.5 px-2 h-12 flex items-center justify-between border border-gray-300 cursor-pointer overflow-hidden" title="Submitter">
          <div className="flex items-center gap-x-2 px-2 ">
            <User className="text-gray-500" />
            <span className="font-semibold text-md lg:text-lg text-gray-600">Submitter</span>
          </div>
          <ChevronDown className="text-gray-500" />
        </div>

        <div className="bg-gray-100 py-1.5 px-2 h-12 flex items-center justify-between border border-gray-300 cursor-pointer overflow-hidden" title="URL">
          <div className="flex items-center gap-x-2 px-2 ">
            <EarthIcon className="text-gray-500" />
            <span className="font-semibold text-md lg:text-lg text-gray-600">URL</span>
          </div>
          <ChevronDown className="text-gray-500" />
        </div>

        <div className="bg-lime-700/20 py-1.5 px-2 h-12 flex items-center gap-x-2 border border-gray-300 cursor-pointer overflow-hidden" title="Assigned">
          <MdAssignmentAdd className="text-gray-500 text-2xl" />
          <span className="font-semibold text-md lg:text-lg text-gray-600">Assigned</span>
        </div>

        <div className="bg-purple-700/10 py-1.5 px-2 h-12 flex items-center gap-x-2 border border-gray-300 cursor-pointer overflow-hidden" title="Priority">
          <span className="font-semibold text-md lg:text-lg text-gray-600">Priority</span>
        </div>

        <div className="bg-purple-700/10 py-1.5 px-2 h-12 flex items-center gap-x-2 border border-gray-300 cursor-pointer overflow-hidden" title="Due Date">
          <span className="font-semibold text-md lg:text-lg text-gray-600">Due Date</span>
        </div>

        <div className="bg-orange-700/20 py-1.5 px-2 h-12 flex items-center gap-x-2 border border-gray-300 cursor-pointer overflow-hidden" title="Est. Value">
          <span className="font-semibold text-md lg:text-lg text-gray-600">Est. Value</span>
        </div>
      </div>
        <div className="bg-gray-100 border border-gray-200 w-4 h-12 "></div>
    </div>
  );
}

export default TableHeader;
