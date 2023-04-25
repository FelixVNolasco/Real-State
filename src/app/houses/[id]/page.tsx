
// import { getHouse } from '@/app/lib/api/houses';
// import Image from 'next/image';
// import Link from 'next/link';


 const getHouse = (id: string) => {
    return fetch(`http://localhost:3000/houses/${id}`, { cache: "no-store" })
        .then((res) => res.json())
}


export default async function page({ params }: any) {

    const { id } = params;
    const house = await getHouse(id);
    
    const {title, price, location, description, photo_url, status, agent_id, HouseDetails} = house;

    const {rooms, bathrooms, parking_lot, sq_mt} = HouseDetails;

    return (
        <div className="grid grid-cols-1 gap-4 justify-between w-full p-4 md:p-12">
            <div className="flex flex-col gap-2 w-full">
                <div className="bg-green-400 p-2 rounded-md h-64">IMAGES SCROLL</div>
                <div className="bg-gray-400 p-2 rounded-md h-20">SUB SCROLL</div>
                <div className="bg-white rounded-md">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl text-slate-600 font-bold">{title}</h1>
                            <span className="text-base text-slate-500 font-semibold">{location}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl text-slate-600 font-bold">{price}</span>
                            <span className="text-blue-600 text-base font-semibold cursor-pointer">Tipos de financiamiento/credito</span>
                        </div>
                        <div className="grid grid-cols-2 items-center md:grid-cols-4 text-slate-600 font-semibold gap-2">
                            <div className="flex gap-1">
                                <span>{rooms}</span>
                                <span>Recamaras</span>
                            </div>
                        <div className="flex gap-1">
                                <span>{bathrooms}</span>
                                <span>baño(s)</span>
                            </div>

                            <div className="flex gap-1">
                                <span>{parking_lot}</span>
                                <span>estacionamiento</span>
                            </div>

                            <div className="flex gap-1">
                                <span>Extensión:</span>
                                <span className="text-sm">{sq_mt}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-400 p-2 rounded-md h-64">{location}</div>
                <hr />
                <div className="flex flex-col gap-4 bg-white-2 rounded-md">
                    <div className="flex flex-col text-slate-800 font-bold">
                        <span>Descripción</span>
                        <article className="font-medium">{description}</article>
                    </div>
                    <div className="flex gap-2 justify-around text-slate-800 font-bold">
                        <div className="rounded-full w-12 h-12 bg-rose-200">
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">Ana Erika Vega Nolasco</span>
                            <span>Asesor Inmobiliario</span>
                            <span>{agent_id}</span>
                            <span>{status}</span>
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
