import dynamic from "next/dynamic";

const Gallery = dynamic(() => import('../Gallery/Gallery'), { ssr: false })

export default Gallery;