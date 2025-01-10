type Props = {
  name?: string;
  apellido?: string;
  edad: number;
};

export default function MuestraPage({ name, apellido, edad }: Props) {
  return (
    <div>
      <form className="bg-blue-500 w-[30%] p-2 rounded m-5">
        <h2 className="text-center text-white text-3xl">
          Formulario de Inscripcion
        </h2>
        <div>
          <label className="uppercase font-bold" htmlFor="">
            nombre
          </label>
          <input
            className="w-full focus:outline-none rounded"
            placeholder={name}
            type="text"
          />
        </div>

        <div>
          <label className="uppercase font-bold" htmlFor="">
            apellido
          </label>
          <input
            className="w-full focus:outline-none rounded"
            placeholder={apellido}
            type="text"
          />
        </div>

        <div>
          <label className="uppercase font-bold" htmlFor="">
            edad
          </label>
          <input
            className="w-full focus:outline-none rounded"
            placeholder={`${edad}`}
            type="number"
          />
        </div>
        <div className="mt-4">
          <input
            className="bg-green-600 p-2 hover:bg-green-700 cursor-pointer rounded text-white"
            type="submit"
            placeholder="enviar"
          />
        </div>
      </form>
    </div>
  );
}
