import { useState } from "react";
import { GoPeople } from "react-icons/go";
import PagesCard from "./PagesCard";
import GroupCard from "./GroupCard";

const Groups = () => {
  const [isRequest, setIsRequest] = useState(true);
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center uppercase text-[#A45286] font-bold gap-2 p-3 text-xl">
        <GoPeople size={20} />
        Groups
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-end h-12">
          <button
            className={`w-60 uppercase text-xs font-semibold transition-all duration-300 rounded-t ${
              !isRequest ? "text-white bg-[#A45286] h-12" : "bg-white h-10"
            }`}
            onClick={() => setIsRequest(false)}
          >
            your group
          </button>
          <button
            className={`w-60 uppercase text-xs font-semibold transition-all duration-300 rounded-t ${
              isRequest ? "text-white bg-[#A45286] h-12" : "bg-white h-10"
            }`}
            onClick={() => setIsRequest(true)}
          >
            request
          </button>
        </div>
        <button className="flex uppercase text-xs bg-[#A45286] text-white rounded p-3 h-8 items-center">
          create a group
        </button>
      </div>
      {isRequest ? (
        <>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-8 uppercase text-xs text-gray-700 font-bold">
              you have 2 new connections requests
            </span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <PagesCard />
          <PagesCard />
          <PagesCard />
        </>
      ) : (
        <div className="rounded-md mt-7">
          <GroupCard />
          <GroupCard />
        </div>
      )}
    </div>
  );
};

export default Groups;
