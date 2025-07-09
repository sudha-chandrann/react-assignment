import { useEffect, useRef, useState } from "react";
import type { TableRowProps } from "./TableRow";

interface EditableCellProps {
  children: React.ReactNode;
  field: string;
  row: TableRowProps;
  selectedCell: { rowId: number; field: string } | null;
  onCellClick: (rowId: number, field: string) => void;
  onCellEdit: (rowId: number, field: string, value: string) => void;
  onCellBlur: () => void;
  className?: string;
  contentClassName?: string;
  isStatus?: boolean;
  isPriority?: boolean;
  textAlign?: "left" | "center" | "right";
}

export const EditableCell = ({
  children,
  field,
  row,
  selectedCell,
  onCellClick,
  onCellEdit,
  onCellBlur,
  className = "",
  contentClassName = "",
  isStatus = false,
  isPriority = false,
  textAlign = "left",
}: EditableCellProps) => {
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const cellRef = useRef<HTMLDivElement>(null);
  const isSelected =
    selectedCell?.rowId === row.id && selectedCell?.field === field;

  useEffect(() => {
    if (isSelected) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const currentValue = (row as any)[field] || "";
      setEditValue(currentValue);
      if (isStatus || isPriority) {
        selectRef.current?.focus();
      } else {
        inputRef.current?.focus();
      }
    }
  }, [isSelected, field, row, isStatus, isPriority]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isSelected) {
      onCellClick(row.id, field);
    }
  };


  const handleBlur = (e: React.FocusEvent) => {
    const cellElement = cellRef.current;
    if (cellElement && cellElement.contains(e.relatedTarget as Node)) {
      return; 
    }

    if (isSelected) {
      onCellEdit(row.id, field, editValue);
      onCellBlur();
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditValue(e.target.value);
    onCellEdit(row.id, field, e.target.value);
    onCellBlur();
  };

  const justifyClass = textAlign === "center" ? "justify-center": textAlign === "right"? "justify-end": "";
  const borderClass = isSelected ? "border-4 border-lime-800": "border border-gray-100 hover:border-2 hover:border-lime-900";

  return (
    <div
      ref={cellRef}
      className={`bg-white py-1.5 px-2 h-12 flex items-center ${justifyClass} ${borderClass} cursor-pointer hover:shadow-md hover:shadow-lime-700 overflow-hidden transition-all ${className}`}
      onClick={handleClick}
    >
      {isSelected ? (
        isStatus ? (
          <select
            ref={selectRef}
            value={editValue}
            onChange={handleSelectChange}
            onBlur={handleBlur}
            className="w-full bg-transparent border-none outline-none text-md cursor-pointer"
          >
            <option value="In-process">In-process</option>
            <option value="Need to start">Need to start</option>
            <option value="Complete">Complete</option>
            <option value="Blocked">Blocked</option>
          </select>
        ) : isPriority ? (
          <select
            ref={selectRef}
            value={editValue}
            onChange={handleSelectChange}
            onBlur={handleBlur}
            className="w-full bg-transparent border-none outline-none text-md cursor-pointer"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleBlur}
            className="w-full bg-transparent border-none outline-none text-md"
          />
        )
      ) : (
        <div className={contentClassName}>{children}</div>
      )}
    </div>
  );
};
