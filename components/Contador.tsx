"use client";

import { useAppDispatch, useAppSelector } from "@/src/store/hooks/hook";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "@/src/store/storeSlices/counterSlice";

export default function ContadorRedux() {
  const patch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.countR);

  return (
    <div className="">
      <h1 className="text-center p-4 text-4xl font-semibold">
        Contador con Redux
      </h1>

      <div className="">
        <h3 className="text-center font-semibold">
          Incrementar, decrementar, reset, payload
        </h3>

        <p className="text-center text-3xl">{counter}</p>

        <div className="flex flex-col items-center gap-3 mt-4">
          <button
            onClick={() => patch(increment())}
            className="bg-blue-400 rounded-full text-white p-2 cursor-pointer "
          >
            +1
          </button>
          <button
            onClick={() => patch(decrement())}
            className="bg-green-400 rounded-full text-white p-2 cursor-pointer"
          >
            -1
          </button>
          <button
            onClick={() => patch(reset())}
            className="bg-red-400 rounded-full text-white p-2 cursor-pointer"
          >
            Reset
          </button>

          <button
            onClick={() => patch(incrementByAmount(2))}
            className="bg-yellow-400 rounded-full text-white p-2 cursor-pointer"
          >
            Por numero x
          </button>
        </div>
      </div>
    </div>
  );
}
