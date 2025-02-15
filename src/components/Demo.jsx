/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("Rendering...");

  // So basically memoize it and only changes it when my text changes
  // heavy operation are being memoized.

  // const prime = findPrime(text);
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200 cursor-pointer"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;


/**
 * 
 * 
 * In the useMemo we were caching the value or the results of the calculation after every render
 * But in useCallback we are caching the function defination after every render
 * useCallback is very much similar to the useMemo
 * 
 * 
 */