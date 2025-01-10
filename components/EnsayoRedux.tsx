"use client";

import { decrement, increment } from "@/src/store/storeSlices/someSlices";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks/hook";
/* import EnsayoSecond from "./EnsayoSecond"; */

export default function EnsayoRedux() {
  const count = useAppSelector((state) => state.SomeSlice.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{count}</p>
      {/*  <EnsayoSecond count={count} /> */}
      <button
        className="bg-blue-600 px-2 text-white rounded"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>

      <button
        className="bg-blue-400 px-2 ml-2 text-white rounded"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
    </div>
  );
}
