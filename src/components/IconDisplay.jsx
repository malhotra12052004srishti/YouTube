// import React from 'react';
import { HOME, SHORTS, SUBSCRIBE, USER, CLOCK } from "./icons";

const IconDisplay = () => {
  console.log("Rendering IconDisplay");
  console.log("Icons:", { HOME, SHORTS, SUBSCRIBE, USER, CLOCK });

  return (
    <div className="flex justify-center items-center flex-col">
      <ul className="p-2 text-gray-700">
        <li className="py-1 flex items-center cursor-pointer">
          <span className="mr-2 py-2">{HOME}</span> Home
        </li>
        <li className="py-2 flex items-center cursor-pointer">
          <span className="mr-2">{SHORTS}</span> Shorts
        </li>
        <li className="py-2 flex items-center cursor-pointer">
          <span className="mr-2">{SUBSCRIBE}</span> Subscriptions
        </li>
        <li className="py-2 flex items-center cursor-pointer">
          <span className="mr-2">{USER}</span> You
        </li>
        <li className="py-2 flex items-center cursor-pointer">
          <span className="mr-2">{CLOCK}</span> Watch Later
        </li>
      </ul>
    </div>
  );
};

export default IconDisplay;