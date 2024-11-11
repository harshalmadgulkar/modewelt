import { useState } from "react";
import { TbPlaystationCircle } from "react-icons/tb";
import InvitationCard from "./InvitationCard";
import InvitedCard from "./InvitedCard";
import ConnectionsCard from "./ConnectionsCard";

const Invitaions = () => {
  const [isReceived, setIsReceived] = useState(true);
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center uppercase text-[#A45286] font-bold gap-2 p-3 text-xl ">
        <TbPlaystationCircle size={20} />
        Invitations
      </div>
      <div className="flex items-end h-12">
        <button
          className={`w-60 uppercase text-xs font-normal transition-all duration-300 rounded-t ${
            isReceived ? "text-white bg-[#A45286] h-12" : "bg-white h-10"
          }`}
          onClick={() => setIsReceived(true)}
        >
          Received
        </button>
        <button
          className={`w-60 uppercase text-xs font-normal transition-all duration-300 rounded-t ${
            !isReceived ? "text-white bg-[#A45286] h-12" : "bg-white h-10"
          }`}
          onClick={() => setIsReceived(false)}
        >
          Sent
        </button>
      </div>
      {isReceived ? (
        <>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-8 uppercase text-xs text-gray-700 font-bold">
              you have 2 new connections requests
            </span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex flex-col gap-4">
            <InvitationCard />
            <InvitationCard />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-8 uppercase text-xs text-gray-700 font-bold">
              you have invited 2 new connections
            </span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex flex-col gap-4">
            <InvitedCard />
            <InvitedCard />
          </div>
          <div className="flex flex-col h-full">
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
        </>
      )}
    </div>
  );
};

export default Invitaions;
