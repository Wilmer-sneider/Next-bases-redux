"use client";

import { useAppSelector } from "@/src/store/hooks/hook";

export default function PokemonCard() {
  const pokemon = useAppSelector((state) => state.pokemons.id);

  return (
    <div>
      <h1 className="text-4xl">Hello desde pokemon card</h1>
      <h2>{pokemon}</h2>
      <div className="mt-4"></div>
    </div>
  );
}
