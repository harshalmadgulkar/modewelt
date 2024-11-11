import { BiBox } from "react-icons/bi";

const Teammates = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-96">
      <div className="flex items-center uppercase text-[#A45286] font-bold gap-2 p-3 ">
        <BiBox size={20} />
        Teammates
      </div>
      <div className="bg-white h-full w-full flex items-center justify-center text-sm font-bold rounded-lg">
        No teammates
      </div>
    </div>
  );
};

export default Teammates;
