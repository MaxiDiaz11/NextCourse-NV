"use client";
import { useState } from "react";

interface Props {
  value?: number;
}

export const CardCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex row">
        <div className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          <button onClick={() => setCounter(counter + 1)}>+1</button>
        </div>
        <div className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          <button onClick={() => setCounter(counter - 1)}>-1</button>
        </div>
      </div>
    </>
  );
};
