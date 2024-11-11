import { FaHashtag } from "react-icons/fa6";

const Hashtags = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-96">
      <div className="flex items-center uppercase text-[#A45286] font-bold gap-2 p-3 ">
        <FaHashtag size={20} />
        Hashtags
      </div>
      <div className="bg-white h-full w-full flex items-center justify-center text-sm font-bold rounded-lg">
        No Hashtags
      </div>
    </div>
  );
};

export default Hashtags;
