// import React from 'react'
import IconDisplay from "./IconDisplay";
import { HOME, SHORTS, SUBSCRIBE } from "./icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early return
  // if(!isMenuOpen) return false;

  return isMenuOpen ? (
    <div className="p-5 w-48">
      <ul className="p-2 text-gray-700 cursor-pointer">
        <Link to="/">
          <li className="flex py-1">
            <span className="mr-2">{HOME}</span> Home
          </li>
        </Link>
        <li className="flex py-1">
          <span className="mr-2">{SHORTS}</span> Shorts
        </li>
        <li className="flex py-1">
          <span className="mr-2">{SUBSCRIBE}</span> Subscriptions
        </li>
      </ul>
      <hr />
      <h1 className="font-bold text-lg pt-2">You &gt; </h1>
      <ul className="p-2 text-gray-700 cursor-pointer">
        <li className="flex py-1">History</li>
        <li className="flex py-1">Playlists</li>
        <li className="flex py-1">Your Videos</li>
        <li className="flex py-1">Your Courses</li>
        <li className="flex py-1">Watch Later</li>
        <li className="flex py-1">Liked Videos</li>
        <li className="flex py-1">Downloads</li>
      </ul>
      <hr />
      <h1 className="font-bold text-lg pt-2">Subscriptions</h1>
      <ul className="p-2 text-gray-700 cursor-pointer">
        <li className="flex py-1">Trending</li>
        <li className="flex py-1">Sports</li>
        <li className="flex py-1">Gaming</li>
        <li className="flex py-1">Movies</li>
        <li className="flex py-1">Shopping</li>
        <li className="flex py-1">Music</li>
        <li className="flex py-1">News</li>
        <li className="flex py-1">Podcasts</li>
      </ul>
    </div>
  ) : (
    <IconDisplay />
  );
};

export default SideBar;
