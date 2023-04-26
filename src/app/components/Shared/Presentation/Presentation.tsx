import Image from 'next/image'
import React from 'react'

export default function Presentation() {
    return (
        <div className="flex justify-center w-full">
            <div className="flex justify-around items-center text-slate-800 font-bold gap-2 w-full">
                <Image src={"https://res.cloudinary.com/dhyxqmnua/image/upload/v1682486551/322445533_179903481619930_4186166722528149700_n_qyloxb.jpg"} className='rounded-md' width={246} height={256} alt=''></Image>
                <div className="flex w-5/12 flex-col">
                    <span className="font-semibold text-5xl">Ana Erika Vega Nolasco</span>
                    <span className='font-medium text-2xl'>Asesor Inmobiliario</span>
                    <span className='font-medium text-justify'>Asesoría Profesional en bienes raíces, con mucho gusto te ayudo a cumplir tu sueño y hacerlo realidad. Tengo las mejores ubicaciones de la mejor zona de Chalco Estado de México, aquí encontrarán una excelente  opción y lugar seguro para tu familia.❤️</span>
                    <div className="flex justify-center m-4">
                        <button className='p-2 rounded-md bg-rose-200 w-max font-semibold'>Agendar una Cita</button>    
                    </div>                    
                </div>
            </div>
        </div>
    )
}
