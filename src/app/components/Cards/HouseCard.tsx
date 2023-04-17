// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// export default function HouseCard({house} : {house:any}) {
export default function HouseCard() {
    return (
        // <Link href={`/houses/${}`} className="relative w-80 p-2 flex flex-col">
        <Link href={""} className="relative w-80 p-2 flex flex-col">
            <div className='rounded-lg bg-slate-100 h-48 w-full mb-2'>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <span className='text-slate-800 font-semibold text-2xl'>WhiteSpace House</span>
                    <div className="flex text-slate-600 font-semibold">
                        <span>🌏</span>
                        <span>Estado de México</span>
                    </div>
                    <div className="flex gap-2 text-slate-500 font-semibold">
                        <span>1 habitación</span>
                        <span>1 baño</span>
                        <span>45 m2</span>
                    </div>
                    <div className="flex justify-end ">
                        <span>➡️</span>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 left-0'>
                <span className='bg-slate-200 w-max p-1 rounded-md text-slate-800 font-semibold'>$420,000</span>
            </div>
        </Link>
    )
}
