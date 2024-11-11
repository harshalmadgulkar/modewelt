import React from "react";

const PagesCard = () => {
  return (
    <div className="flex w-full bg-white p-5 justify-around items-center rounded hover:shadow-lg">
      <div className="flex flex-col">
        <p className="font-semibold">Go with the Flow</p>
        <p className="text-sm">Senior graphic designer</p>
      </div>
      <div className="border border-[#A45286] h-full"></div>
      <p className="w-80 text-gray-500 text-xs pl-4">
        Hey, I saw your works. I like it! Can we do something together? Or maybe
        you have project for UX at the moment?
      </p>
      <button className="py-2 px-4 text-xs uppercase border border-gray-300 rounded text-gray-300 font-semibold">
        Pending
      </button>
    </div>
  );
};

export default PagesCard;
