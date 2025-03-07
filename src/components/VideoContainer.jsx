/* eslint-disable react/jsx-key */
// import React from 'react'

import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      <AdVideoCard info={videos[12]} />
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v="+video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
