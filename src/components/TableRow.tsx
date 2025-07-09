import { EditableCell } from "./EditableCell";

export interface TableRowProps {
  id: number;
  jobRequest?: string;
  dateSubmitted?: string;
  submitter?: string;
  status?: "In-process" | "Need to start" | "Complete" | "Blocked";
  url?: string;
  assigned?: string;
  priority?: "Medium" | "High" | "Low";
  dueDate?: string;
  estValue?: string;
}

interface CellProps {
  row: TableRowProps;
  selectedCell: {rowId: number, field: string} | null;
  onCellClick: (rowId: number, field: string) => void;
  onCellEdit: (rowId: number, field: string, value: string) => void;
  onCellBlur: () => void;
}


const getStatusColor = (status: string) => {
  switch (status) {
    case "In-process":
      return "bg-orange-100 text-orange-800";
    case "Need to start":
      return "bg-gray-200 text-gray-600";
    case "Complete":
      return "bg-green-100 text-green-800";
    case "Blocked":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "text-red-800";
    case "Medium":
      return "text-yellow-800";
    case "Low":
      return "text-blue-800";
    default:
      return "text-gray-800";
  }
};


function TableRow({ row, selectedCell, onCellClick, onCellEdit ,onCellBlur}: CellProps) {
  return (
    <div className="bg-white h-12 flex items-center">

      <div className="bg-gray-100 w-7 h-12 flex items-center justify-center">
        <span className="text-gray-500 text-lg">{row.id}</span>
      </div>
      
      <div className="grid grid-cols-11 flex-1 h-12">

        <EditableCell
          field="jobRequest"
          row={row}
          selectedCell={selectedCell}
          onCellClick={onCellClick}
          onCellEdit={onCellEdit}
          onCellBlur={onCellBlur}
          className="col-span-2"
          contentClassName="text-sm lg:text-md  text-gray-600 truncate max-w-[300px]"
        >
            {row.jobRequest}
        </EditableCell>

        <EditableCell
          field="dateSubmitted"
          row={row}
          selectedCell={selectedCell}
          onCellClick={onCellClick}
          onCellEdit={onCellEdit}
          onCellBlur={onCellBlur}
          textAlign="right"
          contentClassName="text-sm lg:text-md text-gray-600 truncate max-w-[150px]"
        >
          <span>
            {row.dateSubmitted}
          </span>
        </EditableCell>

        <EditableCell
          field="status"
          row={row}
          selectedCell={selectedCell}
          onCellClick={onCellClick}
          onCellEdit={onCellEdit}
          onCellBlur={onCellBlur}
          isStatus={true}
          textAlign="center"
          contentClassName={`font-semibold text-sm lg:text-md truncate rounded-full ${row.status && getStatusColor(row.status)} px-3 py-1`}
        >
            {row.status}
        </EditableCell>

        <EditableCell
          field="submitter"
          row={row}
          selectedCell={selectedCell}
          onCellClick={onCellClick}
          onCellEdit={onCellEdit}
          onCellBlur={onCellBlur}
          contentClassName="text-sm lg:text-md text-gray-600 truncate max-w-[150px]"
        >
            {row.submitter}
        </EditableCell>

        <EditableCell
          field="url"
          row={row}
          selectedCell={selectedCell}
          onCellClick={onCellClick}
          onCellEdit={onCellEdit}
          onCellBlur={onCellBlur}
          contentClassName="text-sm lg:text-md text-gray-600 truncate max-w-[150px]"
        >
            {row.url}
        </EditableCell>

        <EditableCell
          field="assigned"
          row={row}
          selectedCell={selectedCell}
          onCellClick={onCellClick}
          onCellEdit={onCellEdit}
          onCellBlur={onCellBlur}
          contentClassName="text-sm lg:text-md text-gray-600 truncate max-w-[150px]"
        >
            {row.assigned}
        </EditableCell>

        <EditableCell
          field="priority"
          row={row}
          selectedCell={selectedCell}
          onCellClick={onCellClick}
          onCellEdit={onCellEdit}
          onCellBlur={onCellBlur}
          isPriority={true}
          textAlign="center"
          contentClassName={`text-sm lg:text-md ${row.priority && getPriorityColor(row.priority)} px-2 py-1`}
        >
            {row.priority}
        </EditableCell>

        <EditableCell
          field="dueDate"
          row={row}
          selectedCell={selectedCell}
          onCellClick={onCellClick}
          onCellEdit={onCellEdit}
          onCellBlur={onCellBlur}
          textAlign="right"
          contentClassName="text-sm lg:text-md text-gray-600 truncate max-w-[150px]"
        >
            {row.dueDate}
        </EditableCell>
        
        <EditableCell
          field="estValue"
          row={row}
          selectedCell={selectedCell}
          onCellClick={onCellClick}
          onCellEdit={onCellEdit}
          onCellBlur={onCellBlur}
          textAlign="right"
          contentClassName="text-sm lg:text-md text-gray-600 truncate max-w-[150px]"
        >
            {row.estValue}
        </EditableCell>

        <div className="bg-white py-1.5 px-2 h-12 flex items-center border border-dashed border-gray-300 cursor-pointer hover:border-lime-900 shadow-sm hover:shadow-lime-700 overflow-x-hidden">
        </div>

      </div>
      <div className="bg-gray-100 w-4 h-12 "></div>
    </div>
  );
}

export default TableRow;