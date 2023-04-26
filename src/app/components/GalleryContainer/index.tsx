import dynamic from "next/dynamic";

const GalleryContainer = dynamic(() => import('../GalleryContainer/GalleryContainer'), { ssr: false })

export default GalleryContainer;