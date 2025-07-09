import { useState } from "react";
import ActionButton from "./components/ActionButtom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import ToolBar from "./components/ToolBar";

interface TableRowProps {
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

function App() {
  const [selectedOption, setselectedOption] = useState("All Orders");

  const [selectedCell, setSelectedCell] = useState<{
    rowId: number;
    field: string;
  } | null>(null);

  const [data, setData] = useState<TableRowProps[]>([
    {
      id: 1,
      jobRequest: "Launch social media campaign for product X",
      submitter: "Aisha Patel",
      status: "In-process",
      url: "www.aishapatel.com",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      dueDate: "20-11-2024",
      estValue: "6,200,000",
      dateSubmitted: "05-10-2024",
    },
    {
      id: 2,
      jobRequest: "Update press kit for company redesign",
      submitter: "Irfan Khan",
      status: "Need to start",
      url: "www.irfankhan.com",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      estValue: "3,500,000",
      dateSubmitted: "15-09-2024",
    },
    {
      id: 3,
      jobRequest: "Finalize user testing feedback for application Y",
      submitter: "Mark Johnson",
      status: "In-process",
      url: "www.markjohnson.com",
      assigned: "Rachel Lee",
      priority: "Medium",
      dueDate: "10-12-2024",
      estValue: "4,750,000",
      dateSubmitted: "20-08-2024",
    },
    {
      id: 4,
      jobRequest: "Design financial report for Q4",
      submitter: "Emily Green",
      status: "Complete",
      url: "www.emilygreen.com",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "15-01-2025",
      estValue: "5,900,000",
      dateSubmitted: "12-07-2024",
    },
    {
      id: 5,
      jobRequest: "Prepare financial report for Q4",
      submitter: "Jessica Brown",
      status: "Blocked",
      url: "www.jessicabrown.com",
      assigned: "Kevin Smith",
      priority: "Low",
      dueDate: "30-01-2025",
      estValue: "2,800,000",
      dateSubmitted: "10-06-2024",
    },
    {
      id: 6,
      jobRequest: "Create marketing strategy for launch of new product",
      submitter: "Samuel Adams",
      status: "In-process",
      url: "www.samueladams.com",
      assigned: "Emily Clark",
      priority: "High",
      dueDate: "05-02-2025",
      estValue: "7,500,000",
      dateSubmitted: "01-09-2024",
    },
    {
      id: 7,
      jobRequest: "Develop website for service Z",
      submitter: "Olivia Williams",
      status: "Need to start",
      url: "www.oliviawilliams.com",
      assigned: "James Brown",
      priority: "Medium",
      dueDate: "20-03-2025",
      estValue: "4,000,000",
      dateSubmitted: "25-09-2024",
    },
    {
      id: 8,
      jobRequest: "Revamp brand identity and packaging",
      submitter: "Liam Smith",
      status: "Complete",
      url: "www.liamsmith.com",
      assigned: "Sarah Johnson",
      priority: "High",
      dueDate: "15-12-2024",
      estValue: "6,200,000",
      dateSubmitted: "15-10-2024",
    },
  ]);

  const data2: TableRowProps[] = Array.from(
    { length: 50 - data.length },
    (_, i) => ({
      id: data.length + i + 1,
    })
  );

  const handleCellClick = (rowId: number, field: string) => {
    setSelectedCell({ rowId, field });
  };

  const handleCellEdit = (rowId: number, field: string, value: string) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === rowId ? { ...row, [field]: value } : row
      )
    );
  };

  const handleCellBlur = () => {
    setSelectedCell(null);
  };

  return (
    <div className="h-screen bg-white flex flex-col gap-y-0 overflow-hidden">
      <nav>
        <Header />
        <ToolBar />
      </nav>
      <ActionButton />
      <TableHeader />

      <main className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {data.map((row) => (
          <TableRow
            key={row.id}
            row={row}
            selectedCell={selectedCell}
            onCellClick={handleCellClick}
            onCellEdit={handleCellEdit}
            onCellBlur={handleCellBlur}
          />
        ))}
        {data2.map((row) => (
          <TableRow
            key={row.id}
            row={row}
            selectedCell={selectedCell}
            onCellClick={handleCellClick}
            onCellEdit={handleCellEdit}
            onCellBlur={handleCellBlur}
          />
        ))}
      </main>

      <footer className="h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
        <Footer
          selectedOption={selectedOption}
          setselectedOption={setselectedOption}
        />
      </footer>
    </div>
  );
}

export default App;
