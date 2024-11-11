import feedsvg from "../assets/feed.svg";
import networksvg from "../assets/network.svg";
import jobsvg from "../assets/jobs.svg";
import chatsvg from "../assets/chats.svg";
import noticesvg from "../assets/notices.svg";
import shopsvg from "../assets/shop.svg";
import searchsvg from "../assets/search.svg";
import arrowupright from "../assets/arrow-up-right.svg";
import moresvg from "../assets/more-options.svg";

const Navbar = () => {
  return (
    <div className="w-full flex justify-stretch items-center h-20 bg-white">
      <div className="flex flex-col justify-center items-center px-auto font-normal text-xl px-2 py-6 text-[#A45286] uppercase bungee-font border-r-2 border-[#DDDDDD] ">
        FashionInsta
      </div>
      <div className="flex">
        <div className="flex flex-col w-24 gap-2 items-center justify-center px-6 py-4">
          <div>
            <img src={feedsvg} alt="" />
          </div>
          <div className="uppercase font-normal">feed</div>
        </div>
        <div className="flex flex-col w-24 gap-2 items-center justify-center px-6 py-4">
          <div>
            <img src={networksvg} alt="" />
          </div>
          <div className="uppercase font-normal">network</div>
        </div>
        <div className="flex flex-col w-24 gap-2 items-center justify-center px-6 py-4">
          <div>
            <img src={jobsvg} alt="" />
          </div>
          <div className="uppercase font-normal">jobs</div>
        </div>
        <div className="flex flex-col w-24 gap-2 items-center justify-center px-6 py-4">
          <div>
            <img src={chatsvg} alt="" />
          </div>
          <div className="uppercase font-normal">chats</div>
        </div>
        <div className="flex flex-col w-24 gap-2 items-center justify-center px-6 py-4">
          <div>
            <img src={noticesvg} alt="" />
          </div>
          <div className="uppercase font-normal">notices</div>
        </div>
        <div className="flex flex-col w-24 gap-2 items-center justify-center px-6 py-4">
          <div>
            <img src={shopsvg} alt="" />
          </div>
          <div className="uppercase font-normal">shop</div>
        </div>
      </div>
      <div className="flex w-auto border-x-2 h-20 p-2 border-[#DDDDDD] gap-4 items-center">
        <div>
          <img src={searchsvg} alt="" className="h-6 w-6" />
        </div>
        <input className="h-10 p-2" type="search" placeholder="Search" />
      </div>
      <div className="flex flex-col items-center w-96">
        <div className="flex uppercase text-sm gap-2">
          <p className="font-medium">Aditya Kumar</p>
          <span className="text-gray-400">You</span>
        </div>
        <div className="flex text-sm text-gray-500 gap-1 items-center">
          367 views today<span className="text-green-600">32</span>
          <img src={arrowupright} alt="" className="h-3 w-3" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-8 border-x-2 h-20 border-[#DDDDDD]">
        <div>
          <img src={moresvg} alt="" />
        </div>
        <div>Other</div>
      </div>
    </div>
  );
};

export default Navbar;
