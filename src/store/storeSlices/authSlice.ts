import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null; // Puede ser un objeto User o null si no hay sesión activa
  isAuth: boolean;
}

const initialState: AuthState = {
  user: null, // Inicialmente no hay usuario
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; //guardamos los datos
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    },
    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }; // Actualizamos los datos
      }
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
