"use client";

import { redirect } from "next/navigation";

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirect("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-slate-500  w-[40%] mt-20 mx-auto rounded"
    >
      <h2 className="text-center py-4 text-3xl text-white">
        Inicia sesion con Nosotros!
      </h2>
      <div className=" p-3">
        <div className=" mb-2">
          <label className=" font-bold uppercase text-white" htmlFor=" ">
            correo
          </label>
          <input
            className=" rounded py-2 mt-2 p-2 focus:outline-none w-full"
            placeholder="correo"
            type="email"
          />
        </div>

        <div className="">
          <label className=" font-bold uppercase text-white" htmlFor=" ">
            password
          </label>
          <input
            className=" rounded py-2 mt-2 p-2 focus:outline-none w-full"
            placeholder="contraseña"
            type="password"
          />
        </div>
        <div className="mt-4">
          <input
            className="bg-blue-600 px-2 text-white rounded hover:bg-blue-500 cursor-pointer"
            type="submit"
            value={"Iniciar sesion"}
          />
        </div>
      </div>
    </form>
  );
}
