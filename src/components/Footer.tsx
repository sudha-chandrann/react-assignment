import { Plus } from "lucide-react";

interface FooterProps {
  selectedOption: string;
  setselectedOption: (option: string) => void;
}

function Footer({ selectedOption, setselectedOption }: FooterProps) {
  const FooterOption = [
    {
      id: 1,
      option: "All Orders",
    },
    {
      id: 2,
      option: "Pending",
    },
    {
      id: 3,
      option: "Reviwed",
    },
    {
      id: 4,
      option: "Arrived",
    },
  ];

  return (
    <div className="h-12 bg-white flex-1 flex items-center ">
      <div className="w-7 h-12 "></div>
      <div className="flex items-center justify-start ">
        {FooterOption.map((option) => (
          <button
            key={option.id}
            className={`flex h-12 items-center justify-center text-gray-600 text-xs sm:text-sm md:text-md lg:text-lg  px-2 md:px-5  ${
              selectedOption === option.option &&
              "bg-lime-700/20 border-t-2  border-lime-900 hover:bg-lime-700/20 font-bold text-lime-900"
            } hover:bg-gray-100`}
            onClick={() => {
              setselectedOption(option.option);
            }}
          >
            {option.option}
          </button>
        ))}
        <button className="flex h-12 items-center justify-center text-gray-600 text-xs sm:text-sm md:text-md lg:text-lg  px-2 md:px-5  hover:bg-gray-100">
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default Footer;
