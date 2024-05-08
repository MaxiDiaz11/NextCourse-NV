"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  decrement,
  increment,
  initCounterState,
} from "@/store/counter/counterSlice";

interface Props {
  value?: number;
}

interface CounterResponse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  return data;
};

export const CardCounter = ({ value = 0 }: Props) => {
  // const [counter, setCounter] = useState(value);

  const counter = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then((data) => {
      dispatch(initCounterState(data.count));
    });
  }, [dispatch]);

  console.log(getApiCounter);

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex row">
        <div className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          <button onClick={() => dispatch(increment())}>+1</button>
        </div>
        <div className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          <button onClick={() => dispatch(decrement())}>-1</button>
        </div>
      </div>
    </>
  );
};
