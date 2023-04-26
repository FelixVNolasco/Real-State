"use client"

import React, { useState } from 'react'

import Gallery from '../Shared/Gallery'

export default function GalleryContainer() {


  const [showGallery, setshowGallery] = useState(false)
  const handleClick = () => {
    setshowGallery(!showGallery);
  }
  return (
    <div className='flex flex-col gap-2'>
      <div className="grid grid-rows-2 items-center grid-flow-col gap-4 w-full">
        <div className="row-span-2 col-span-2 bg-yellow-200 rounded-md p-2 h-full">01</div>
        <div className="col-span-1 bg-green-200 rounded-md p-2 h-64">02</div>
        <div className="row-span-1 bg-purple-200 rounded-md p-2 h-64">03</div>
      </div>
      <hr />  
      <div className="grid grid-cols-4 gap-4 rounded-md">
        <button onClick={handleClick} className="col-span-1 bg-green-200 rounded-md p-2 h-32">32 Fotos</button>
        <div className="col-span-1 bg-yellow-200 rounded-md p-2 h-32">Recorrido Virtual</div>
        <div className="col-span-1 bg-purple-200 rounded-md p-2 h-32">Street View</div>
        <div className="col-span-1 bg-blue-200 rounded-md p-2 h-32">Planos</div>
      </div>
      <hr />
      {
        showGallery ?
          (
            <Gallery showGallery={showGallery} />
          )
          :
          (
            <Gallery showGallery={showGallery} />
          )
      }    
    </div>
  )
}
