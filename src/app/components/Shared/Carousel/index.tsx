import dynamic from "next/dynamic";

const Carousel = dynamic(() => import('./Carousel'), { ssr: false })

export default Carousel;