/* import EnsayoRedux from "@/components/EnsayoRedux";
import PokemonCard from "@/components/PokemonCard";
import WilmerEnsayo from "@/components/WilmerEnsayo";
import Link from "next/link"; */

import DataPage from "@/components/ResivirData";

/* import AuthUserPage from "@/components/AuthUser"; */

/* import ContadorRedux from "@/components/Contador"; */
/* import TodoPage from "@/components/Todo"; */

export default function HomePage() {
  return (
    <>
      {/*  <div className="m-4 flex gap-2">
        <Link
          className="bg-gray-300 px-2 rounded font-semibold"
          href={"/auth/login"}
        >
          Iniciar sesion
        </Link>
        <Link
          className="bg-gray-300 px-2 rounded font-semibold"
          href={"/auth/register"}
        >
          Registrarme
        </Link>
      </div>

      <div className="m-4">
        <EnsayoRedux />
      </div>

      <div>
        <h2>segundo ejemplo de redux toolking</h2>
        <WilmerEnsayo />
      </div>

      <div className="m-5">
        <h2 className="text-3xl">ejemplo con redux desde slice</h2>
        <PokemonCard />
      </div> */}

      {/*   <ContadorRedux /> */}
      {/*   <TodoPage /> */}
      {/* <AuthUserPage /> */}
      <DataPage />
    </>
  );
}
