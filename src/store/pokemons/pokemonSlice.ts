import { createSlice } from "@reduxjs/toolkit";

export const PokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    id: 1,
    nombre: "wilmer",
  },
  reducers: {
    toggleFavorite(state, action) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!id) {
        return;
      }
    },
  },
});

export const { toggleFavorite } = PokemonSlice.actions;
export default PokemonSlice.reducer;
