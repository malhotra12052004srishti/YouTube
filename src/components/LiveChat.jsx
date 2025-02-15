/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// import React from 'react'

import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  // Logic used is setInterval and you have to clear that interval
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20) + " :)",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <p className="h-8 border border-b-black text-center font-bold pt-0.5 text-2xl bg-slate-200 m-2 rounded-sm w-full">
        LiveChat
      </p>
      <div className="w-full h-[410px] m-2 p-2 border border-black bg-slate-100 rounded-sm overflow-y-scroll flex flex-col-reverse">
        {
          // DISCLAIMER : Don't use indexes as keys
          ChatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      {/* Here we are using form because we want that if we press the "Enter" keyword then the Comment will be submitted */}
      <form
        className="border border-b-black ml-2 w-full h-10"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("ON Form Submit", liveMessage);
          dispatch(
            addMessage({
              name: "Srishti Malhotra",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96 m-1.75"
          type="text"
          placeholder="Say something..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="m-1.75 text-white bg-black w-12 rounded-lg text-center border border-black cursor-pointer">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
