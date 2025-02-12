// import React from "react";
import { toggleMenu } from "../utils/appSlice";
import {
  MENU_BAR,
  BELL,
  MICROPHONE,
  VIDEO,
  SEARCH_BUTTON,
  USER,
} from "./icons";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="bg-white flex justify-between py-2 items-center px-6 shadow-xl">
      {/* The logo and the collapser */}
      <div className="w-[12%] flex justify-start gap-6 items-center">
        <button
          className="text-gray-600 hover:bg-gray-300 rounded-full p-2 bg-gray-200 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        >
          {MENU_BAR}
        </button>

        <a href="/">
          <img
            className="h-7 mx-4 cursor-pointer"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>

      {/* Search functionality */}
      <div className="flex">
        <input
          className="w-140 border-2 border-gray-400 rounded-l-full p-2 ml-5 my-5"
          type="text"
          placeholder="Search you want..."
        />
        <button className="border-2 border-solid border-gray-400 rounded-r-full px-5 py-2 my-5 bg-gray-300">
          {SEARCH_BUTTON}
        </button>
        <button className="w-auto mx-2 my-5 h-10 bg-gray-200 rounded-full p-1 text-black cursor-pointer">
          {MICROPHONE}
        </button>
      </div>
      {/* The user icon */}
      <div>
        <button className="text-gray-600 hover:bg-gray-300 rounded-full p-3 h-11 cursor-pointer">
          {VIDEO}
        </button>
        <button className="text-gray-600 hover:bg-gray-300 rounded-full p-3 h-11 cursor-pointer">
          {BELL}
        </button>
        <button className="text-black bg-gray-400 p-3 rounded-full cursor-pointer">
          {USER}
        </button>
      </div>
    </div>
  );
};

export default Header;
