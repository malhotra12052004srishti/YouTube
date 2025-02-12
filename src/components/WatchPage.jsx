/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-5 bg-white flex w-full">
      <iframe
        width="100%"
        height="450" 
        src={`https://www.youtube.com/embed/${params.get("v")}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="shrink-0 max-w-[800px] w-full" 
      />
    </div>
  );
};

export default WatchPage;
