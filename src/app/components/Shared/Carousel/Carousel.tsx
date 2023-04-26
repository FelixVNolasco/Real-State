"use client"


import React from 'react'

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

const images = ["https://ssl.cdn-redfin.com/system_files/media/807925_JPG/genLdpUgcFull/item_2.webp", "https://ssl.cdn-redfin.com/system_files/media/807925_JPG/genLdpUgcFull/item_21.webp", "https://ssl.cdn-redfin.com/system_files/media/807925_JPG/genLdpUgcFull/item_18.webp", "https://ssl.cdn-redfin.com/system_files/media/807925_JPG/genLdpUgcFull/item_19.webp", "https://ssl.cdn-redfin.com/system_files/media/807925_JPG/genLdpUgcMediaBrowserUrlComp/item_26.webp"];

export default function Carousel() {

    useEffect(() => {
        setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth)
    }, [])

    const [width, setWidth] = useState(0);
    const carousel = useRef<any>();
    return (
        <motion.div className='cursor-grab overflow-hidden' whileTap={"grabbing"}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='flex bg-slate-400 overflow-hidden'>
                {
                    images.map((img) => {
                        return (
                            <motion.div key={img} className='w-1/3 p-10'>
                                <Image className='w-full h-full rounded-3xl pointer-events-none' width={100} height={100} src={img} alt={img}></Image>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </motion.div>
    )
}
