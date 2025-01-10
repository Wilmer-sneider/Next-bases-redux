import { configureStore } from "@reduxjs/toolkit";
import someSlices from "./store/storeSlices/someSlices";
import OtherSlice from "./store/storeSlices/otherSlice";
import PokemonReducer from "./store/pokemons/pokemonSlice";
import counterSlice from "./store/storeSlices/counterSlice";
import todoSlice from "./store/storeSlices/todoSlice";
import authSlice from "./store/storeSlices/authSlice";
import dataSlice from "./store/storeSlices/dataSlice";

export const store = configureStore({
  reducer: {
    SomeSlice: someSlices,
    otherSlice: OtherSlice,
    pokemons: PokemonReducer,
    counter: counterSlice,
    todo: todoSlice,
    auth: authSlice,
    data: dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
