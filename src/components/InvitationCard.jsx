import React from "react";

const InvitationCard = () => {
  return (
    <div className="flex w-full bg-white p-5 justify-evenly items-center">
      <div className="flex flex-col">
        <p className="font-semibold">Brandon Wilson</p>
        <p className="text-sm">Senior graphic designer</p>
        <p className="text-sm font-extralight text-[#A45286]">
          623 connections
        </p>
      </div>
      <p className="w-80 text-gray-500 text-xs border-l-2 pl-4 border-[#A45286]">
        Hey, I saw your works. I like it! Can we do something together? Or maybe
        you have project for UX at the moment?
      </p>
      <div className="flex gap-2">
        <button className="py-2 px-5 uppercase bg-[#A45286] rounded text-white font-medium">
          Accept
        </button>
        <button className="py-2 px-5 uppercase border-2 rounded text-gray-500">
          Decline
        </button>
      </div>
    </div>
  );
};

export default InvitationCard;
