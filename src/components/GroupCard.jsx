import { BsThreeDots } from "react-icons/bs";

const GroupCard = () => {
  return (
    <div className="flex bg-white px-12 py-7 items-center justify-between">
      <div className="flex flex-col">
        <p className="uppercase font-semibold text-sm">Group Name</p>
        <p className="text-sm text-gray-500">15,522 members</p>
      </div>
      <div className="text-gray-500">
        <BsThreeDots size={40} />
      </div>
    </div>
  );
};

export default GroupCard;
