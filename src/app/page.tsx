
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 justify-between w-full p-12">
      <div className="flex flex-col gap-2 w-full">
        <div className="bg-green-400 p-2 rounded-md h-64">IMAGES SCROLL</div>
        <div className="bg-gray-400 p-2 rounded-md h-32">SUB SCROLL</div>
        <div className="bg-white p-2 rounded-md">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl text-slate-600 font-bold">Grand 2000</h1>
              <span className="text-base text-slate-500 font-semibold">Residencial Iztac</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl text-slate-600 font-bold">$425,000 MXN</span>
              <span className="text-blue-600 text-base font-semibold cursor-pointer">Tipos de financiamiento/credito</span>
            </div>
            <div className="flex text-slate-600 font-semibold gap-2">
              <div className="flex gap-1">
                <span>2</span>
                <span>Recamaras</span>
              </div>

              <div className="flex gap-1">
                <span>1</span>
                <span>baño y medio</span>
              </div>

              <div className="flex gap-1">
                <span>1</span>
                <span>estacionamiento</span>
              </div>

              <div className="flex gap-1">
                <span>Extensión:</span>
                <span>82.36 m2</span>
              </div>
            </div>
            <div className="flex">
              <div className="bg-green-400 p-2 rounded-md text-base text-slate-800 font-semibold cursor-pointer">Agendar Cita</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-400 p-2 rounded-md h-24">UBICACIÓN</div>
        <hr />

        <div className="flex flex-col gap-4 bg-white-2 rounded-md">
          <div className="flex flex-col text-slate-800 font-bold">
            <span>Sobre esta casa</span>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos reprehenderit magnam iure qui libero obcaecati fuga tempora accusamus exercitationem veritatis aspernatur quod, laborum mollitia cumque repellendus maxime, ducimus eius suscipit.</span>
            <span>Continuar Leyendo</span>
          </div>

          <div className="flex flex-col text-slate-800 font-bold">
            <div className="flex gap-1">
              <span>Creado por:</span>
              <span className="text-blue-600 cursor-pointer">Ana Erika Vega Nolasco</span>
            </div>          
            <span className="">Agente Inmobiliario</span>
          </div>
        </div>

      </div>
    </div>
  )
}
