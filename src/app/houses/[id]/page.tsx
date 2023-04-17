
import Image from 'next/image';
import Link from 'next/link';


export default function page({ params }: any) {

    const { id } = params;
    // const product = await getProduct(id);
    // const { img, title, categories, desc, price, } = product;

    return (
        <div className="grid grid-cols-1 gap-4 justify-between w-full p-4 md:p-12">
            <div className="flex flex-col gap-2 w-full">
                <div className="bg-green-400 p-2 rounded-md h-64">IMAGES SCROLL</div>
                <div className="bg-gray-400 p-2 rounded-md h-20">SUB SCROLL</div>
                <div className="bg-white rounded-md">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl text-slate-600 font-bold">Grand 2000</h1>
                            <span className="text-base text-slate-500 font-semibold">Residencial Iztac</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl text-slate-600 font-bold">$425,000 MXN</span>
                            <span className="text-blue-600 text-base font-semibold cursor-pointer">Tipos de financiamiento/credito</span>
                        </div>
                        <div className="grid grid-cols-2 items-center md:grid-cols-4 text-slate-600 font-semibold gap-2">
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
                                <span className="text-sm">82.36 m2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-400 p-2 rounded-md h-64">UBICACIÓN</div>
                <hr />
                <div className="flex flex-col gap-4 bg-white-2 rounded-md">
                    <div className="flex flex-col text-slate-800 font-bold">
                        <span>Descripción</span>
                        <article className="font-medium">Casa de 2 recámaras con posibilidad de crecimiento, ven y conoce el modelo más solicitado en Chalco, Estado de México. <br /> Con una gran ubicación a solo 8 min del centro de chalco. ¡Agenda tu cita! Tengo casas disponibles al mejor 🏆 precio. Tenemos casa con terrenos excedentes hasta de 31 mts2. No sabes lo increíbles que están!!</article>
                    </div>
                    <div className="flex gap-2 justify-around text-slate-800 font-bold">
                        <div className="rounded-full w-12 h-12 bg-rose-200">
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">Ana Erika Vega Nolasco</span>
                            <span>Asesor Inmobiliario</span>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="bg-rose-200 p-2 rounded-md text-base text-slate-800 font-semibold cursor-pointer">Agendar Cita</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
