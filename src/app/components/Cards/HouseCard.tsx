// import Image from 'next/image'
import { BathIcon, ParkingCircle, LocateIcon, PersonStandingIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function HouseCard({ house }: { house: any }) {

    const { ID, title, price, location, status, photo_url, HouseDetails } = house;
    const { rooms, bathrooms, parking_lot, sq_mt } = HouseDetails;

    return (
        <Link href={`/houses/${ID}`} className="relative w-auto p-2 flex flex-col">
            <Image src={photo_url} height={100} width={100} alt='' className='rounded-lg bg-slate-100 h-48 w-full mb-2' />             
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <span className='text-slate-800 font-semibold text-2xl'>{title}</span>
                    <div className="flex items-center justify-start text-slate-600 font-semibold">
                        <LocateIcon size={18}/> 
                        <span>{location}</span>
                    </div>
                    <div className="flex gap-1 justify-between text-slate-500 font-semibold">
                        <div className="flex items-center">
                            <span>{rooms}</span>
                            <PersonStandingIcon size={18}/>
                        </div>
                        <div className="flex items-center">
                            <span>{bathrooms}</span>
                            <BathIcon size={18}/>
                        </div>
                        <div className="flex items-center">
                            <span>{parking_lot}</span>
                            <ParkingCircle size={18}/>

                        </div>
                        <div className="flex items-center">
                            <span>{sq_mt}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 left-0'>
                <span className='bg-slate-200 w-max p-1 rounded-md text-slate-800 font-semibold'>{price}</span>
            </div>
        </Link>
    )
}
