import { RiStackLine } from "react-icons/ri";
import PagesCard from "./PagesCard";

const Pages = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center uppercase text-[#A45286] font-bold gap-2 p-3 text-xl">
        <RiStackLine size={20} />
        Pages
      </div>
      <div className="flex flex-col gap-2">
        <PagesCard />
        <PagesCard />
        <PagesCard />
        <PagesCard />
        <PagesCard />
        <PagesCard />
      </div>
    </div>
  );
};

export default Pages;
