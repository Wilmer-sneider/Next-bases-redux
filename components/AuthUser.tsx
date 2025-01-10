"use client";

import { useAppDispatch, useAppSelector } from "@/src/store/hooks/hook";
import { login, logout, updateUser } from "@/src/store/storeSlices/authSlice";

export default function AuthUserPage() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.user);

  const handleLogin = () => {
    const mockUser = { id: 1, name: "Juan Pérez", email: "juan@example.com" };
    dispatch(login(mockUser));
  };

  return (
    <>
      <div>
        <h1>Hello AuthUserPage</h1>

        {!auth ? (
          <button onClick={handleLogin}>iniciar sesion</button>
        ) : (
          <div>
            <h2>Bienvenido, {auth.name}</h2>
            <p>Email: {auth.email}</p>
          </div>
        )}
      </div>

      <div>
        <button onClick={() => dispatch(logout())}>cerrar sesion</button>
        <button
          className="ml-4"
          onClick={() => dispatch(updateUser({ name: "wilmer" }))}
        >
          actualizar sesion
        </button>
      </div>
    </>
  );
}

//4. Carrito de compras
/* Crea un carrito que pueda:

Agregar productos.
Eliminar productos.
Actualizar cantidades.
Calcular el total.
Ejercicio:

Crea un slice llamado cartSlice.
Usa acciones como addToCart, removeFromCart, updateQuantity.
javascript
Copiar código
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});
Despachos:

javascript
Copiar código
dispatch(addToCart({ id: 1, name: "Producto A", quantity: 1, price: 100 }));
dispatch(updateQuantity({ id: 1, quantity: 2 }));
dispatch(removeFromCart(1));
5. Jugando con estados anidados
Crea un slice que maneje un perfil de usuario con varias propiedades:

Nombre.
Preferencias.
Estado de notificaciones.
Ejercicio: Define el estado inicial como un objeto anidado y usa acciones para actualizar partes específicas.

javascript
Copiar código
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: { name: "Juan", email: "juan@example.com" },
    preferences: { theme: "light", language: "es" },
  },
  reducers: {
    updateName: (state, action) => {
      state.user.name = action.payload; // Actualiza el nombre del usuario
    },
    toggleTheme: (state) => {
      state.preferences.theme = state.preferences.theme === "light" ? "dark" : "light";
    },
  },
});
Despachos:

javascript
Copiar código
dispatch(updateName("Juan Updated")); // Cambia el nombre del usuario
dispatch(toggleTheme()); // Cambia el tema entre claro y oscuro
Ideas extra:
Crea un tablero de notas estilo Google Keep con Redux.
Agrega persistencia de estado en el localStorage o sessionStorage.
Usa middlewares para realizar tareas asíncronas como consultar una API.
¿Te interesa que te guíe en alguno de estos proyectos o necesitas ayuda con la configuración del store? 😊 */
