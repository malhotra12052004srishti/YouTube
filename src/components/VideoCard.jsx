/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';
import { getValidNum } from "../utils/functions";

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>Error: Video information is not available.</div>;
  }

  const { snippet, statistics } = info;

  const likeString = getValidNum(Number(statistics?.likeCount));
  const viewString = getValidNum(Number(statistics?.viewCount));

  return (
    <div className="bg-white w-62 flex flex-col rounded-md justify-between p-3 gap-2 shadow-lg my-1 mx-1">
      <img
        src={snippet?.thumbnails?.medium?.url || "default-thumbnail-url.jpg"}
        alt="thumbnail"
        className="w-full block overflow-hidden rounded-md h-3/4 cursor-pointer"
      />
      <div className="px-2 pt-2">
        {" "}
        <p className="h-12 overflow-hidden text-md font-semibold">
          {snippet?.title || "No Title Available"}{" "}
        </p>
        <p className="text-sm font-bold">{snippet?.channelTitle}</p>
        <div className="text-[12px] text-gray-500 flex gap-1">
          <p className="">{likeString} likes</p>
          <p className="">|</p>
          <p>{viewString} views</p>
        </div>
      </div>
    </div>
  );
};

// Higher Order Components(HOD) : The concept is to take up the component and modifies it a little and then return it.

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-800 rounded-xl">
      <VideoCard info={info} />
      <p className="text-sm font-bold text-center">Video Unavailable</p>
    </div>
  );
};

export default VideoCard;
