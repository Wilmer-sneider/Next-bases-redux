"use client";

import { useAppDispatch, useAppSelector } from "@/src/store/hooks/hook";
import {
  incrementOther,
  decrementOther,
} from "@/src/store/storeSlices/otherSlice";

export default function WilmerEnsayo() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.otherSlice.count);

  return (
    <div>
      <h1>Hello WilmerEnsayo</h1>
      <div className="bg-cyan-500 max-w-[50%] m-4 rounded p-2">
        <p className="text-4xl">
          {" "}
          Tu Contador <span className="text-blue-500">{counter}</span>{" "}
        </p>
        <div className="mt-5">
          <button
            onClick={() => dispatch(incrementOther())}
            className="block bg-green-500 mb-2 rounded px-2 text-white"
          >
            incrementar en +1{" "}
          </button>
          <button
            onClick={() => dispatch(decrementOther())}
            className=" bg-red-600 text-white rounded px-2"
          >
            decrementar en -1{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
