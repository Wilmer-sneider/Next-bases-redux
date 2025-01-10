import Favorite from "@/components/FavoritePokemon";
import MuestraPage from "@/components/MuestraDatos";
import { data } from "@/data/db";

export default function EnsayoFirstPage() {
  const { name, edad } = data;

  return (
    <div>
      <h1>Hello EnsayoFirstPage</h1>
      <MuestraPage name={name} edad={edad} />

      <div>
        <h2>desde favorito</h2>
        <Favorite />
      </div>
    </div>
  );
}
