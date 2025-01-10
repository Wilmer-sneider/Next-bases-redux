"use client";

import { useAppSelector } from "@/src/store/hooks/hook";

export default function Favorite() {
  /*   const dispatch = useAppDispatch(); */
  const pokemon = useAppSelector((state) => state.pokemons.nombre);

  return (
    <div>
      <h1>Hello Favorite</h1>
      <p className="text-4xl">{pokemon}</p>
    </div>
  );
}
