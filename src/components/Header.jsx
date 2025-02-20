/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// import React from "react";
import { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import {
  MENU_BAR,
  BELL,
  MICROPHONE,
  VIDEO,
  SEARCH_BUTTON,
  USER,
} from "./icons";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant.js";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // API call

    // make an API call after every key press
    // getSearchSuggestions();

    // but if the difference between 2 API calls is < 200ms then decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API Call for - " + searchQuery);
    console.log(YOUTUBE_SEARCH_API + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    console.log(data);

    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    // update the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
      <div className="flex items-center">
        <div className="flex items-center">
          <input
            className="w-140 border-2 border-gray-400 rounded-l-full p-2 h-10"
            type="text"
            placeholder="Search you want..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border-2 border-solid border-gray-400 rounded-r-full px-5 h-10 bg-gray-300">
            {SEARCH_BUTTON}
          </button>
          <button className="w-auto mx-2 h-10 bg-gray-200 rounded-full p-1 text-black cursor-pointer">
            {MICROPHONE}
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 mt-88 px-5 w-[37rem] shadow-2xl rounded-lg border border-gray-300">
            <ul className="my-1">
              {suggestions.map((s) => (
                <li key={s} className="flex my-1 shadow-sm hover:bg-gray-200">
                  <span className="px-2">{SEARCH_BUTTON}</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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

/**
 *
 * key - i
 * - renders the component
 * - useEffect();
 * - starts the timer => makes an api call after 200ms
 *
 * key - ip(before 200ms)
 * - destroy the component and call the return method of the useEffect()
 * - re-rendered the component
 * - useEffect();
 * - starts the timer => makes an api call after 200ms(new timer)
 *
 * every time a new timer is called
 * we know when we do a setTimeout we also have to clear that
 *
 */
