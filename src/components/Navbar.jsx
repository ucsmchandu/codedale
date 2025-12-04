import React, { useState } from "react";
import mainImage from "../assests/mainImage.png";
import { Link } from "react-router-dom";
import { CircleArrowOutUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      {/* Desktop */}
      <div className="hidden md:flex bg-gray-50 flex-row justify-between items-center p-7 m-6 -mt-2">
        <Link to="/">
          <img className="h-5" src={mainImage} alt="codedale" />
        </Link>

        <div className="flex flex-row gap-3 text-sm px-2 font-medium bg-white shadow-md rounded-4xl py-2">
          <p className="hover:bg-gray-100 cursor-pointer rounded-4xl py-2 px-2">
            Services
          </p>
          <p className="hover:bg-gray-100 cursor-pointer rounded-4xl py-2 px-2">
            Our Work
          </p>
          <p className="hover:bg-gray-100 cursor-pointer rounded-4xl py-2 px-2">
            Achievements
          </p>
          <p className="hover:bg-gray-100 cursor-pointer rounded-4xl py-2 px-2">
            FAQs
          </p>
          <p className="hover:bg-gray-100 cursor-pointer rounded-4xl py-2 px-2">
            Contact
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-1 bg-black text-white p-3 rounded-4xl px-2 text-sm">
          <button className="cursor-pointer">Book a Call</button>
          <CircleArrowOutUpRight size={16} color="white" />
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden bg-white m-3 shadow-lg px-1 rounded-4xl transition-shadow ${
          menuOpen ? "shadow-lg" : ""
        }`}
      >
        {/* Top section */}
        <div className="flex justify-between items-center px-2 pt-1 pb-2">
          <img src={mainImage} alt="codedale" className="h-5" />

          <button
            className="bg-gray-100 p-2 rounded-4xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Dropdown menu */}
        <div
          className={`flex flex-col gap-3 overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100 p-3" : "max-h-0 opacity-0"
          }`}
        >
          <p className="cursor-pointer text-gray-800">Services</p>
          <p className="cursor-pointer text-gray-800">Our Work</p>
          <p className="cursor-pointer text-gray-800">Achievements</p>
          <p className="cursor-pointer text-gray-800">FAQs</p>
          <p className="cursor-pointer text-gray-800">Contact</p>

          <button className="cursor-pointer border text-gray-700 font-medium text-sm border-gray-300 rounded-4xl p-2 bg-gray-50">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
