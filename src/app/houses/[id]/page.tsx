
import { getHouse } from '@/app/lib/api/houses';
import Map from '../../components/Shared/Map';
import GalleryContainer from '../../components/GalleryContainer/GalleryContainer';

export default async function page({ params }: any) {

    const { id } = params;
    const house = await getHouse(id);

    const { title, price, location, description, status, HouseDetails } = house;

    const { rooms, bathrooms, parking_lot, sq_mt } = HouseDetails;

    return (
        <div className="grid grid-cols-1 gap-4 justify-between w-fit md:w-3/4 m-auto p-2 md:p-4">
            <div className="flex flex-col gap-2 w-full">
                <GalleryContainer />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl text-slate-600 font-bold">{title}</h1>
                        <span className="text-base text-slate-500 font-semibold">{location}</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex flex-col">
                            <span className="text-xl text-slate-600 font-bold">{price}</span>
                            <span className="text-blue-600 text-base font-semibold cursor-pointer">Tipos de financiamiento/credito</span>
                        </div>
                        <div className="grid items-center grid-cols-2 lg:grid-cols-4 text-slate-600 font-semibold gap-2">
                            <div className="flex gap-1">
                                <span>{rooms}</span>
                                <span>Recamara(s)</span>
                            </div>
                            <div className="flex gap-1">
                                <span>{bathrooms}</span>
                                <span>baño(s)</span>
                            </div>

                            <div className="flex gap-1">
                                <span>{parking_lot}</span>
                                <span>estacionamiento(s)</span>
                            </div>

                            <div className="flex items-center">
                                <span>Extensión:</span>
                                <span className="text-sm">{sq_mt}</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <Map />
                <span className='text-sm text-right'>63QQ+MX, Manzana 023, San Mateo Huitzilzingo, 56625 Mixquic, Méx.</span>
                <hr />
                <div className="flex flex-col gap-4 bg-white-2 rounded-md">
                    <div className="flex flex-col text-slate-800 font-bold">
                        <span>Descripción</span>
                        <article className="font-medium">{description}</article>
                    </div>
                    <div className="flex justify-end w-full">
                        <div className="flex gap-2  text-slate-800 font-bold">
                            <div className="rounded-full w-12 h-12 bg-rose-200">
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">Ana Erika Vega Nolasco</span>
                                <span className='font-semibold'>Asesor Inmobiliario</span>
                            </div>
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
