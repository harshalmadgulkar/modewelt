import React from "react";

const ConnectionsCard = () => {
  return (
    <div className="flex h-24 bg-white flex-wrap py-3 px-4 gap-24">
      <div className="pl-24 gap-1">
        <p className="font-semibold">Audrey Alexander</p>
        <p className="text-xs font-normal">Team lead at company name</p>
      </div>
      <div className="flex items-end text-xs text-gray-400">
        Yesterday, 14:30
      </div>
    </div>
  );
};

export default ConnectionsCard;
