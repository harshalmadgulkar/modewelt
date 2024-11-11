import { BiLink } from "react-icons/bi";
import { TbPlaystationCircle } from "react-icons/tb";
import { BiBox } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { RiStackLine } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa6";
import Footer from "./Footer";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const navLinks = [
    {
      name: "connections",
      icon: <BiLink size={16} />,
      count: "1038",
      path: "/",
    },
    {
      name: "invitations",
      icon: <TbPlaystationCircle size={16} />,
      count: "2",
      path: "/invitations",
    },
    {
      name: "teammates",
      icon: <BiBox size={16} />,
      count: "",
      path: "/teammates",
    },
    {
      name: "groups",
      icon: <GoPeople size={16} />,
      count: "6",
      path: "/groups",
    },
    {
      name: "pages",
      icon: <RiStackLine size={16} />,
      count: "28",
      path: "/pages",
    },
    {
      name: "hashtags",
      icon: <FaHashtag size={16} />,
      count: "8",
      path: "/hashtags",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="flex flex-row container mx-auto gap-10 mt-10 h-auto">
        <div className="flex flex-col relative">
          {/* Slider */}
          <div
            className="absolute left-0 top-0 w-1 bg-[#A45286] transition-transform duration-300 ease-in-out rounded-r-full"
            style={{
              height: "52px",
              transform: `translateY(${activeIndex * 60 + 2}px)`,
            }}
          />
          {/* NavLink */}
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) => {
                // Set active index based on isActive
                if (isActive) {
                  setActiveIndex(index);
                }
                return `flex uppercase justify-between h-14 w-72 pl-4 pr-5 mb-1 ${
                  isActive ? "text-gray-500" : ""
                }  bg-white items-center text-xs font-bold hover:bg-transparent`;
              }}
            >
              <div
                className={`flex gap-3 transition-transform duration-300 ease-in-out ${
                  // Use isActive from the NavLink's className function
                  activeIndex == index ? "translate-x-4" : ""
                }`}
              >
                {link.icon}
                <p>{link.name}</p>
              </div>
              <div>{link.count} </div>
            </NavLink>
          ))}
        </div>

        {/* components of content comes here */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
