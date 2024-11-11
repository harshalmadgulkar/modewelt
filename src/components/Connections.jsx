import { BiLink } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import ConnectionsCard from "./ConnectionsCard";

const Connections = () => {
  const cardData = [
    { title: "today", count: 10 },
    { title: "last week", count: 10 },
    { title: "last month", count: 10 },
  ];
  return (
    <div className="flex flex-col gap-2 w-3/4">
      <div className="flex items-center uppercase text-[#A45286] font-bold gap-2 p-3 text-xl ">
        <BiLink size={20} />
        Connections
      </div>
      <div className="flex flex-col h-full">
        <div className="flex justify-between mb-2">
          {cardData.map((card) => (
            <SquareCard card={card} />
          ))}
        </div>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-8 uppercase text-xs text-gray-700 font-bold">
            Recent connections
          </span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className="flex flex-wrap gap-4">
          <ConnectionsCard />
          <ConnectionsCard />
          <ConnectionsCard />
          <ConnectionsCard />
        </div>
      </div>
    </div>
  );
};

const SquareCard = ({ card }) => {
  return (
    <div className="flex flex-col bg-white rounded gap-2">
      <div className="flex justify-between px-5 pt-3">
        <div className="uppercase text-sm font-medium">{card.title}</div>
        <BsThreeDotsVertical size={20} />
      </div>
      <div className="flex px-5 gap-1">
        <div className="flex w-8 h-8 bg-[#A45286] text-white rounded-md justify-center items-center">
          {card.count}+
        </div>
        <div className="uppercase text-xs text-[#A45286] pb-3 font-semibold">
          new <br />
          connection
        </div>
      </div>
      <div className="flex justify-between border-t-2 border-[#d6d6d6] text-sm">
        <button className="px-9 py-2 text-gray-500 hover:text-[#A45286] hover:bg-[#f5f6f1]">
          See stats
        </button>
        <button className="px-9 py-2 text-gray-500 hover:text-[#A45286] hover:bg-[#f5f6f1] ">
          see all
        </button>
      </div>
    </div>
  );
};

export default Connections;
