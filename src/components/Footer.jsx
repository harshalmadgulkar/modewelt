import { IoIosHelpCircleOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex bg-[#F7F9FB] h-56 justify-around mt-20 ">
      <div className="flex flex-col justify-center items-center px-auto font-normal text-xl px-2 py-6 text-[#A45286] uppercase bungee-font">
        FashionInsta
      </div>
      <div className="flex flex-col py-9 justify-between ">
        <div className="font-semibold">Navigation</div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <a href="">About</a>
            <a href="">Careers</a>
            <a href="">Advertising</a>
            <a href="">Small Business</a>
          </div>
          <div className="flex flex-col">
            <a href="">Talent Solutions</a>
            <a href="">Marketing Solutions</a>
            <a href="">Sales Solutions</a>
            <a href="">Safery Center</a>
          </div>
          <div className="flex flex-col">
            <a href="">Community Guidelines</a>
            <a href="">Privacy & Terms</a>
            <a href="">Mobile App</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-9 justify-between gap-6 ">
        <div className="font-semibold">Fast access</div>
        <div className="flex flex-col gap-3">
          <a className="flex justify-between items-center w-60 uppercase bg-[#A45286] text-white px-3 py-4 rounded-lg ">
            <div className="text-sm">questions?</div>
            <div className="">
              <IoIosHelpCircleOutline size={24} />
            </div>
          </a>
          <a className="flex justify-between items-center border-2 border-[#A45286] w-60 uppercase text-[#A45286] px-3 py-4 rounded-lg ">
            <div className="text-base">Settings</div>
            <div className="">
              <FiSettings size={24} />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col py-9 justify-start gap-6">
        <div className="font-semibold">Language</div>
        <select className="w-64 p-4 rounded-lg text-lg">
          <option className="uppercase" value="English">
            ENGLISH
          </option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
