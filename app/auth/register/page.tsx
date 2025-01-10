import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-2 my-5 mx-5 p-3 gap-2">
      <div className="bg-blue-500 flex justify-center items-center">
        <p className="">logo</p>
      </div>
      <div>
        <form className="bg-slate-400 rounded shadow p-3">
          <h2 className="text-center text-4xl py-5 text-white">
            Formulario de <span>Inscripcion</span>
          </h2>
          <div className="py-3">
            <div className="w-full">
              <label className="text-white font-bold uppercase" htmlFor=" ">
                nombre
              </label>
              <input
                className="w-full rounded py-2 mt-2 p-2 focus:outline-none"
                placeholder="nombre"
                type="text"
              />
            </div>

            <div className="w-full mt-2">
              <label className="text-white font-bold uppercase" htmlFor=" ">
                email
              </label>
              <input
                className="w-full rounded py-2 mt-2 p-2 focus:outline-none"
                placeholder="email"
                type="email"
              />
            </div>

            <div className="w-full mt-2">
              <label className="text-white font-bold uppercase" htmlFor=" ">
                password
              </label>
              <input
                className="w-full rounded py-2 mt-2 p-2 focus:outline-none"
                placeholder="password"
                type="password"
              />
            </div>

            <div className="mt-3  ">
              <input
                className="text-white w-full bg-blue-600 py-2 hover:bg-blue-500 transition-all cursor-pointer rounded"
                type="submit"
                value="Registro"
              />
            </div>

            <div className="mt-3 flex justify-between px-2 text-white font-bold">
              <Link href={"/auth/login"}>
                Si ya tienes cuenta Inicia sesion
              </Link>
              <Link href={"/"}>Home</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
